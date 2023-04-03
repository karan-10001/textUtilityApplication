import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  const togglestyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable light mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                About Me
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                I am <strong>Karan Pratap Singh</strong>. I am from Rewa and I
                am pursuing my B.Tech from Jaypee University of Engineering and
                Technology with Computer Science stream. Currently I am in 7th
                semester.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                My Career
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                A Full Stack Developer who specializes in JavaScript
                Technologies across the whole stack{" "}
                <strong>
                  {" "}
                  ( Node.js , Express.js , Angular.js , React.js ){" "}
                </strong>{" "}
                . Experience of building 5+ project in full-stack development
                with team. I always loved creating things, right from school.
                Everything I've learned along the way is helping me in adding
                greater values on my work. So I have done my specialization on
                Data Analytics in the college duration. I have experience of
                working on JupyterNoteBook , Google Colab and Tableau in Python
                and R languages. I love to solve coding problems over many
                online coding platforms such Codechef , GeekForGeek , HackerRank
                and LeetCode . I have taken part in many coding contests and
                solved lots of problems over there. C++ and Python are my most
                favorite programming languages. I enjoy challenges that enable
                me to grow. I always look to learn new technologies and I am
                able to adopt any environment and circumstance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                My Interest
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                My interest lies in{" "}
                <strong>
                  {" "}
                  web development , coding/programming , data analytics.{" "}
                </strong>
                I also spend some time in Gym . I play handball and I am good
                Karate player and I also used to play Tabla in my school days.
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <div className="text-center my-4">
        <button
          onClick={togglestyle}
          type="button"
          className="btn btn-outline-success"
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
