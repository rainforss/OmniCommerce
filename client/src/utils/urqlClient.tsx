import { dedupExchange, fetchExchange } from "urql";
import {
  LogoutMutation,
  MeQuery,
  MeDocument,
  LoginMutation,
  RegisterMutation,
  DeleteVendorMutationVariables,
  UpdateVendorMutationVariables,
} from "../generated/graphql";
import { cacheExchange, Cache } from "@urql/exchange-graphcache";
import { betterUpdateQuery } from "./betterUpdateQuery";

// const invalidateAllVendors = (cache: Cache) => {
//   const allFields = cache.inspectFields("Query");
//   console.log(allFields);
//   const fieldInfos = allFields.filter((info) => info.fieldName === "vendors");
//   fieldInfos.forEach((fi) => {
//     cache.invalidate("Query", "vendors");
//     console.log(cache.inspectFields("Query"));
//   });
// };

export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:5000/graphql",
  fetchOptions: { credentials: "include" as const },
  exchanges: [
    dedupExchange,
    cacheExchange({
      keys: {
        User: () => null,
      },
      updates: {
        Mutation: {
          logout: (_result, args, cache, info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => {
                return { me: null };
              }
            );
          },
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },
          register: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              }
            );
          },

          deleteVendor: async (_result, args, cache, info) => {
            cache.invalidate({
              __typename: "Vendor",
              id: (args as DeleteVendorMutationVariables).id,
            });
          },

          createVendor: async (_result, args, cache, info) => {
            cache.invalidate("Query", "vendors");
          },

          updateVendor: async (_result, args, cache, info) => {
            cache.invalidate({
              __typename: "Vendor",
              id: (args as UpdateVendorMutationVariables).id,
            });
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
