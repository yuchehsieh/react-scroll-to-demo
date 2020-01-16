import React, { Component, useRef, useEffect } from "react";
import { render } from "react-dom";
import "./style.css";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const scrollToRef = ref =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop,
    behavior: "smooth"
  });
const useMountEffect = fun => useEffect(fun, []);

const ScrollDemo = () => {
  const myRef = useRef(null);

  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount

  return (
    <>
      {" "}
      {/* React.Fragment*/}
      <div style={{ height: 600 }} /> {/* just to demonstrate scroll*/}
      <div ref={myRef}>I wanna be seen</div>
      {/* Attach ref object to a dom element */}
      <div style={{ height: 1500 }} /> {/* just to demonstrate scroll*/}
      <button onClick={() => scrollToRef(myRef)}>Click to scroll </button>
      {/* Scroll on click */}
    </>
  );
};

class ReadyToScroll extends Component {
  myRef = null;
  // Optional

  render() {
    return (
      <>
        {/* React.Fragment*/}
        <div style={{ height: 600 }} /> {/* just to demonstrate scroll*/}
        <div ref={ref => (this.myRef = ref)}>I wanna be seen</div>
        {/* Attach ref object to a dom element */}
        <div style={{ height: 1500 }} /> {/* just to demonstrate scroll*/}
        <button onClick={() => this.scrollToMyRef(this.myRef)}>
          Click to scroll{" "}
        </button>
        {/* Scroll on click */}
      </>
    );
  }

  scrollToMyRef = (ref) =>
    window.scrollTo({
      left: 0,
      top: ref.offsetTop,
      behavior: "smooth"
    });
  // run this method to execute scrolling.
}

render(<ReadyToScroll />, document.getElementById("root"));
