import React, { useState } from "react";

export default function About() {
  const [style, setStyle] = useState({
    color: "white",
    width: 25 + "rem",
    backgroundColor: "green",
    border: "2px solid black"
  });

  const [btnText, setbtnText] = useState("I ❤️ Green");
  const toggleStyle = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
        width: 25 + "rem",
        border: "2px solid black"
      });
      setbtnText("I ❤️ Green");
    } else {
      setStyle({
        color: "white",
        width: 25 + "rem",
        backgroundColor: "green",
        border: "2px solid green"
      });
      setbtnText("I ❤️ White");
    }
  };

  let style2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center my-5">About us <button className="btn btn-warning" onClick={toggleStyle}>
                {btnText}
              </button></h1>
        <div className="cardAboutMe" style={style2}>
          <div className="card" style={style}>
            <img
              src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title">Pritham Baswani giryalkar</h2>
              <p className="card-text">
              Programming has always been an interest in my life. I am technology enthusiast pursuing a bachelor in computer science and Engineering. I believe in the thought that the things that challenge you are the ones that improves you. I am looking forward to learning new skills that will both enrich and help me grow. I have good problem solving skills, good at coding and likes exploring the new things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
