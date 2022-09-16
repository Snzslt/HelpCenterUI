import React from "react";
import { useSelector } from "react-redux";
import notActive from "../../../../assets/images/not-active.svg";
export default function NotActiveUser() {
  const { userInof} =
    useSelector((state) => state.dashboard);
  if(userInof.activated === "not_active"){
    return (
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3 className="text-center">
                  Welcome to Your Help Compass Center Dashboard !
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="complet-profile-icon">
                    <img className="img-fluid" src={notActive} alt="" />
                  </div>
                </div>
              </div>
              <div className="card-description">
                <h5 className="text-center my-5">
                Your account is not currently active. Please wait for the site administrator to activate it
                </h5>
                <div className="row justify-content-center">
                  <div className="col-10 col-md-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return <></>
  }
}
