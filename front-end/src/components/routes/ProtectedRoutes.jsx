import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getCurrentUser } from "../../redux/feature/authactions";
import { Navigate } from "react-router-dom";
import Api from "../../services/Api";
import { getCurrentUser } from "../../redux/feature/authaction";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  //get user current
  const getUser = async () => {
    try {
      const { data } = await Api.get("/auth/currentuser");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;