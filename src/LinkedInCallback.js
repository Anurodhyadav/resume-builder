import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import NormalFLow from "./NormalFlow";

export default function LinkedInCallback() {
  const is_loaded = useRef(false);
  const [linkedinInfo, setlinkedinInfo] = useState({});

  const getAccessTokenandInfo = async () => {
    try {
      const token = window.location.href.split("?")[1].split("=")[1];
      localStorage.setItem("auth-token", token);
      const response = await axios.get(
        `http://localhost:8000/getAccessToken?token=${token}`
      );

      setlinkedinInfo(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const token_value = localStorage.getItem("token");
    if (is_loaded.current || token_value) {
      return;
    }

    getAccessTokenandInfo();
    is_loaded.current = true;
  }, []);

  return (
    <div>
      {Object.keys(linkedinInfo).length ? (
        <NormalFLow linkedinInfo={linkedinInfo} />
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          Fetching your info from linkedin...
        </div>
      )}
    </div>
  );
}
