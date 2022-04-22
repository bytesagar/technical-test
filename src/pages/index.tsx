import type { NextPage } from "next";

import { GetAllUsersQuery, useGetAllUsersQuery } from "../generated/graphql";
import gqlRequestClient from "../clients/gqlRequestClient";
import Table from "@/components/Table";

const Home: NextPage = () => {
  const { isLoading, error, data } = useGetAllUsersQuery<
    GetAllUsersQuery,
    Error
  >(gqlRequestClient, {});

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <Table data={data?.users?.data} />;
};

export default Home;
