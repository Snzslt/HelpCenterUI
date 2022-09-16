import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Content from "./Content";
import Sidebar from "./Sidebar"
export default function ContentWrapper() {
  let history = useHistory();

  const {  userIsForgotPassword } = useSelector(
    (state) => state.forgotPassword
  );
  let classMessage = userIsForgotPassword.success
    ? "alert-success"
    : "alert-danger";
  const redirectPage = () => {
    if (userIsForgotPassword.show) {
      if (userIsForgotPassword.success) {
        setTimeout(() => {
          history.push("/change-password");
        }, 2000);
      }
    }
  };
  return (
    <div className="container-fluid page-body-wrapper">
      <Sidebar/>
      <Content/>
    </div>
  );
}
