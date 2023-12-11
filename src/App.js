import "./App.css";

import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./Pages";

import { MyContext } from "./MyContext";
import { useState } from "react";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const [displayCreateUser, setDisplayCreateUser] = useState(false);
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    empid: "",
    name: "",
    dob: "",
    experience: "",
    dept: "",
    salary: "",
    address: "",
  });

  useEffect(() => {
    const call = async () => {
      await axios
        .post("http://localhost:5000/api/v1/data", newUser)
        .then(async (res) => {
          await axios
            .get("http://localhost:5000/api/v1/data")
            .then((response) => {
              setData(response.data.rows);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    call();
  }, [newUser]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/data").then((response) => {
      setData(response.data.rows);
    });
  }, []);

  return (
    <MyContext.Provider
      value={{
        displayCreateUser,
        setDisplayCreateUser,
        newUser,
        setNewUser,
        data,
        setData,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
