import React from "react";

const MyPararagraph = (props) =>{
    console.log('MyParagraph RUNNING');
    return <p>{props.children}</p>
}

export default MyPararagraph;