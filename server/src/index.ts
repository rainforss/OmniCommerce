import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import "reflect-metadata";
import { UserResolver } from "./resolvers/user";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { MyContext } from "./types";
import cors from "cors";
import { VendorResolver } from "./resolvers/vendor";
import { EntityManager } from "@mikro-orm/postgresql";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  orm.em as EntityManager;
  const RedisStore = connectRedis(session);
  const redisClient = new Redis();

  await orm.getMigrator().up();

  // await orm.em.nativeDelete(Vendor, {});

  // const post = orm.em.create(Post, { title: "my first post" });
  // await orm.em.persistAndFlush(post);
  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

  const app = express();

  app.use(cors({ origin: "http://localhost:3000", credentials: true }));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        disableTTL: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "lax", //Prevent CSRF
        secure: __prod__, //In production environment, cookies only work in HTTPS
      },
      saveUninitialized: false,
      secret: "csy930614",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver, VendorResolver],
      validate: true,
    }),
    context: ({ req, res }): MyContext => ({
      em: orm.em,
      req,
      res,
      redisClient,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(5000, () => {
    console.log("Server started at port 5000");
  });
};

main().catch((error) => console.log(error));
