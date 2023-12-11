import React, { useContext, useState } from "react";
import "./Home.css";

import { MyContext } from "../../MyContext";

const Home = () => {
  const { setNewUser, setDisplayCreateUser } = useContext(MyContext);

  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [expreience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [dept, setDept] = useState("");
  const [address, setAddress] = useState("");

  const resetAll = () => {
    setEmpid("");
    setName("");
    setAddress("");
    setExperience("");
    setSalary("");
    setDept("");
  };

  const submitForm = async () => {
    setNewUser({
      empid: empid,
      name: name,
      dob: dob,
      experience: expreience,
      dept: dept,
      salary: salary,
      address: address,
    });
    setDisplayCreateUser(false);
  };

  return (
    <div className="home ">
      <div className="home__container scale-up-center">
        <div className="home__container-top">
          <h1 className="home__container-top--title">Employee Registration</h1>
        </div>
        <div className="home__container-bottom">
          <form action="" className="home__container-bottom-form">
            <div className="home__container-bottom-form--eid">
              <label
                htmlFor="eid"
                className="home__container-bottom-form--eid-title"
              >
                Employee ID
              </label>
              <input
                placeholder="E.g. EUFJ2438MK"
                type="text"
                id="eid"
                value={empid}
                className="home__container-bottom-form--eid-inputBox"
                onChange={(e) => {
                  setEmpid(e.target.value);
                }}
              />
            </div>
            <div className="home__container-bottom-form--name">
              <label
                htmlFor="name"
                className="home__container-bottom-form--name-title"
              >
                Name
              </label>
              <input
                placeholder="E.g. Stephen King"
                type="text"
                id="name"
                value={name}
                className="home__container-bottom-form--name-inputBox"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="home__container-bottom-form--de">
              <div className="home__container-bottom-form--de--dob">
                <label
                  htmlFor="dob"
                  className="home__container-bottom-form--de--dob-title"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="home__container-bottom-form--de--dob-inputBox"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </div>
              <div className="home__container-bottom-form--de--experience">
                <label
                  htmlFor="experience"
                  className="home__container-bottom-form--de--experience-title"
                >
                  Year of Experience
                </label>
                <input
                  placeholder="E.g. 1"
                  type="number"
                  id="experience"
                  value={expreience}
                  className="home__container-bottom-form--de--experience-inputBox"
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="home__container-bottom-form--sd">
              <div className="home__container-bottom-form--sd-department">
                <label
                  htmlFor="department"
                  className="home__container-bottom-form--sd-department-title"
                >
                  Working Department
                </label>
                <input
                  placeholder="E.g. Manufacturing"
                  type="text"
                  id="department"
                  value={dept}
                  className="home__container-bottom-form--sd-department-inputBox"
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}
                />
              </div>
              <div className="home__container-bottom-form--sd-salary">
                <label
                  htmlFor="salary"
                  className="home__container-bottom-form--sd-salary-title"
                >
                  Salary
                </label>
                <input
                  placeholder="E.g. 30000"
                  type="number"
                  id="salary"
                  value={salary}
                  className="home__container-bottom-form--sd-salary-inputBox"
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="home__container-bottom-form--address">
              <label
                htmlFor="address"
                id="address"
                className="home__container-bottom-form--address-title"
              >
                Address
              </label>
              <input
                placeholder="E.g. 123, State, Country"
                type="text"
                value={address}
                className="home__container-bottom-form--address-inputBox"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="home__container-bottom-button">
            <div
              className="home__container-bottom-button-reset"
              onClick={resetAll}
            >
              <h3 className="home__container-bottom-button-resetBtn">Reset</h3>
            </div>
            <div
              className="home__container-bottom-button-submit"
              onClick={submitForm}
            >
              <h3 className="home__container-bottom-button-submitBtn">
                Submit
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
