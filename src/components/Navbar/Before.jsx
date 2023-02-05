import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "../shared/Login";
import { baseURL, CLIENT_ID } from "../../utils/environement";
import axios from "axios";

export default function Before() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);

  const connect = (email) => {
    axios
      .post(`${baseURL}/login`, { email })
      .then((res) => {
        const { nom, prenom, telephone, id } = res.data.data;
        localStorage.setItem("user", id);

        if (nom === "" || prenom === "" || telephone === "")
          localStorage.setItem("confirmed", 0);
        window.location.reload(false);
      })
      .catch(() => {});
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clienId: CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <nav className="bg-white-blue shadow-md py-4 md:py-3 px-4 md:px-8 lg:px-16 xl:px-20 flex items-center flex-col lg:flex-row ">
      <div className="flex justify-between items-center w-full lg:w-auto lg:mx-16 xl:mx-20">
        <a href="/">
          <img className="h-16 w-auto" src="https://static.thenounproject.com/png/921432-200.png" alt="Logo" />
        </a>
        <button className="space-y-2 w-12 lg:hidden" onClick={toggleVisible}>
          <div className="w-full h-1 rounded-full bg-dark-blue" />
          <div className="w-full h-1 rounded-full bg-dark-blue" />
          <div className="w-full h-1 rounded-full bg-dark-blue" />
        </button>
      </div>
      <div
        className={`lg:flex items-center justify-between w-full flex-col lg:flex-row ${
          visible ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 my-4 font-semibold text-sm md:text-base lg:text-lg lg:space-x-8">
          <a href="#About" className="hover:text-hover duration-300">
            About us
          </a>
          <a href="#Team" className="hover:text-hover duration-300">
            Our team
          </a>
        </div>
        <div className="space-x-4">
          <Login connect={connect} />
        </div>
      </div>
    </nav>
  );
}
