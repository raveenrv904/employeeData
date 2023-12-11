import React, { useContext } from "react";
import "./Body.css";

import { User } from "../../components";
import { Home } from "../../Pages";

import { MyContext } from "../../MyContext";

const Body = () => {
  const { displayCreateUser, setDisplayCreateUser, data } =
    useContext(MyContext);

  return (
    <>
      <div className="body">
        <div className="body__container">
          <div className="body__container-1">
            <h3 className="container-1-title">Actions</h3>
          </div>
          <div className="body__container-2">
            <h3 className="container-2-title">Name</h3>
          </div>
          <div className="body__container-3">
            <h3 className="container-3-title">EmpID</h3>
          </div>
          <div className="body__container-4">
            <h3 className="container-4-title">Department</h3>
          </div>
          <div className="body__container-5">
            <h3 className="container-5-title">Salary</h3>
          </div>
        </div>
        <div className="body__content">
          {data?.map((data) => {
            return (
              <User
                eid={data.empid}
                name={data.name}
                dob={data.dob}
                experience={data.experience}
                dept={data.dept}
                salary={data.salary}
                address={data.address}
              />
            );
          })}
        </div>
        {displayCreateUser && (
          <div className="">
            <Home />
            <div
              className="cover_img scale-up-center"
              onClick={() => {
                setDisplayCreateUser(false);
              }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
