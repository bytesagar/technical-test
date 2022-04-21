import { GraphQLClient } from "graphql-request";
const url = "https://graphqlzero.almansi.me/api";

const gqlRequestClient = new GraphQLClient(url as string, {
  headers: {
    authorization: "Bearer test",
    "Content-Type": "application/json",
  },
});

export default gqlRequestClient;
