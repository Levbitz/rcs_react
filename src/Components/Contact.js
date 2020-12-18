import React from "react";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col l7">
            <form action="">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="name"
                    className="validate"
                    required
                  />
                  <div className="input-field col s6">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="mobile number"
                      className="validate"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="email"
                    className="validate"
                  />
                  <div className="input-field col s6">
                    <input
                      type="text"
                      name="subject"
                      id=""
                      placeholder="mobile number"
                      className="validate"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="email"
                    className="validate"
                  />
                  <div className="input-field col s6">
                    <input
                      type="text"
                      name="subject"
                      id=""
                      placeholder="mobile number"
                      className="validate"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col l5"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
