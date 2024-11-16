import React from "react";

import { useSelector } from "react-redux";
import Layout from "../../components/reuse/Layout/Layout";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          By giving just a small amount of time, blood donors make a powerful impact, 
          helping save lives and improve health outcomes for patients in need. Regular donations ensure a steady supply,
           as blood has a limited shelf life and must be constantly replenished.
           Donating blood is safe, easy, and a meaningful way to contribute to your community.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;