/* eslint-disable */
import React from "react";

const Box = (props) => {
  let result;
  if (
    props.name === "Computer" &&
    props.result !== "비겼다!" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가?
    result = props.result === "이겼다!" ? "졌다.." : "이겼다!";
  } else {
    // 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }

  let resultClass;
  if (result == "비겼다!") {
    resultClass = "tie";
  } else if (result == "이겼다!") {
    resultClass = "win";
  } else if (result == "졌다..") {
    resultClass = "lose";
  }

  return (
    <div className={`box ${resultClass}`}>
      <h1 className="title">{props.name}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
