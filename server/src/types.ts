import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Redis } from "ioredis";
import { Request, Response } from "express";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  res: Response;
  req: Request;
  redisClient: Redis;
};
