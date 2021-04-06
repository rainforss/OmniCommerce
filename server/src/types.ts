import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Redis } from "ioredis";
import { Request, Response } from "express";
import { AbstractSqlDriver } from "@mikro-orm/knex";

export type MyContext = {
  em: EntityManager<any> &
    EntityManager<IDatabaseDriver<Connection>> &
    EntityManager<AbstractSqlDriver>;
  res: Response;
  req: Request;
  redisClient: Redis;
};
