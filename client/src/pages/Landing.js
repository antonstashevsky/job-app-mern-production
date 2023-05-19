import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis ratione laboriosam nam reprehenderit excepturi
              veritatis? Quos perferendis labore expedita laborum asperiores
              sunt provident commodi numquam beatae. Recusandae quia quisquam
              praesentium.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
