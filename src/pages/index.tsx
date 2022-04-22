import type { NextPage } from "next";

import { GetAllUsersQuery, useGetAllUsersQuery } from "../generated/graphql";
import gqlRequestClient from "../clients/gqlRequestClient";
import Table from "@/components/Table";
import Loader from "@/components/Loader";

const Home: NextPage = () => {
  const { isLoading, error, data } = useGetAllUsersQuery<
    GetAllUsersQuery,
    Error
  >(gqlRequestClient, {});

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <Table data={data?.users?.data} />;
};

export default Home;
