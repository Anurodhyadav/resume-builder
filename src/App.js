import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkedInCallback from "./LinkedInCallback";

// import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedInPage";
import NormalFLow from "./NormalFlow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkedInPage />} />
        <Route exact path="/normal-flow" element={<NormalFLow />} />
        <Route exact path="/callback" element={<LinkedInCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
