import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GqlRequestQuery from "./graphqlQuery";

const Home: NextPage = () => {
  return (
    <>
      <div className="table_header">
        <div className="col">Id</div>
        <div className="col">Name</div>
        <div className="col">Username</div>
        <div className="col">Email</div>
        <div className="col">Phone</div>
        <div className="col">Address</div>
        <div className="col">Website</div>
      </div>
      <div className="table_body">
        <div className="col">1</div>
        <div className="col">Sagar karki</div>
        <div className="col">bytesagar</div>

        <div className="col">sagar@gmail.com</div>
        <div className="col">+977 829828283</div>
        <div className="col">+977 829828283</div>

        <div className="col">sagarkarki.com</div>
      </div>
    </>
  );
};

export default Home;
