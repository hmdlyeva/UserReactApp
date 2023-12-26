import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getUsersData, login } from "./../../redux/slice/slice";
import type { RootState } from "./../../redux/store/store";
import axios from "axios";

type Props = {};

const Homepage = (props: Props) => {
  const [UsersData, setUsersData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://userapideployda.onrender.com/users",{
      headers:{
        Authorization:`barear ${token}`
      }
    }).then((res) => {
      setUsersData(res.data);
    });
  }, []);

  return (
    <section id="home_section">
      <div className="home_children">
        <h1 style={{color:"black"}}>Home</h1>
      </div>
    </section>
  );
};

export default Homepage;
