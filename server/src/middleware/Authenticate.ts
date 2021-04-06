import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const Authenticate: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("Not authenticated");
  }

  return next();
};
