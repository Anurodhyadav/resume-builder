import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { Link } from "react-router-dom";

function LinkedInPage() {
  const [autherization_code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const { linkedInLogin } = useLinkedIn({
    clientId: "86inopqec1xfly",
    redirectUri: `${
      typeof window === "object" && window.location.origin
    }/callback`,
    onSuccess: (code) => {
      setCode(code);
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setErrorMessage(error.errorMessage);
    },
  });

  return (
    <div className="flex flex-col  justify-center items-center w-full h-[100vh]">
      <div className="p-3 bg-[#f8a100] cursor-pointer rounded-md w-[100px]">
        <Link to="/normal-flow">Normal →</Link>
      </div>

      <Wrapper>
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Log in with Linked In"
          style={{ maxWidth: "180px", cursor: "pointer" }}
        />
        {errorMessage && <div>{errorMessage}</div>}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default LinkedInPage;
