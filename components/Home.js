import React, { useState } from "react";
import "../styles/Home.css";
import loadable from "@loadable/component";
import testImg from "../public/test.svg";

const LoadableComponent = loadable(() => import("./Loadable"));

const Home = () => {
  const [visible, setVisible] = useState(false);
  const onButtonHandler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="homeContainer">
      Hello world!
      <hr />
      {visible && <LoadableComponent />}
      <button onClick={onButtonHandler}>Please Click Here~</button>
      <img src={testImg} alt="sex" width="200px" height="200px" />
    </div>
  );
};

export default Home;
