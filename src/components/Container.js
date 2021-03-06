import React from "react";
import LanguagePicker from "./LanguagePicker";

function Container(props) {
  return (
    <>
      {/*Create a responsive white box in the middle of the page*/}

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p
                  style={{ color: "red", fontWeight: "bold" }}
                  className="card-text"
                >
                  {props.text}
                </p>

                <a
                  href="/sitebrokey"
                  className="btn btn-primary"
                  onClick={() =>
                    alert("THIS FEATURE DOES NOT WORK STOP TRYING")
                  }
                >
                  {props.submit}
                </a>
              </div>

              <LanguagePicker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
