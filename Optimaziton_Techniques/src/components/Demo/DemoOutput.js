import React from "react";
import MyPararagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyPararagraph>{props.show ? "This is new!" : ""}</MyPararagraph>;
};

export default React.memo(DemoOutput);
