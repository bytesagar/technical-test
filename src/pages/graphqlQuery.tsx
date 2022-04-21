import { FC, useEffect, useMemo, useState } from "react";
import { GetAllUsersQuery, useGetAllUsersQuery } from "../generated/graphql";
import gqlRequestClient from "../clients/gqlRequestClient";
import { IUser } from "interfaces/IUser";
import Table from "components/Table";
import { useFilter } from "useFilter";

const GqlRequestQuery: FC = () => {
  const { isLoading, error, data } = useGetAllUsersQuery<
    GetAllUsersQuery,
    Error
  >(gqlRequestClient, {});

  // if (query !== "") {
  // }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div style={{ padding: "0 20px" }}>
      <Table data={data?.users?.data} />
    </div>
  );
};
export default GqlRequestQuery;
