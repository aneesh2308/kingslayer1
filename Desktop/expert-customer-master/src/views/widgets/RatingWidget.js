import React from "react";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  value: 2.5,
  edit: true,
  a11y: true,
  isHalf: true,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};


export default function ReactWidget() {
  return (
    <div className="App">
      <ReactStars {...firstExample} />
    </div>
  );
}
