import React from 'react'

export default function ContactUs() {
  return (
    <div>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {/* <!----------------------- Login Container --------------------------> */}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* <!--------------------------- Left Box -----------------------------> */}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{background: "#21D192"}}
          >
            <div className="featured-image mb-3">
              <img
                src="/images/login_image.png" alt="img"
                className="img-fluid"
                style={{width: "250px"}}
              />
            </div>
            <p
              className="text-white fs-2"
              style={{fontFamily: "Courier New",   fontWeight: "600"}}
            >
              Be Verified
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{width: "17rem",fontFamily: "Courier New" }}
            >
              Join experienced Designers on this platform.
            </small>
          </div>
          {/* <!-------------------- ------ Right Box ----------------------------> */}

          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello,Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Send me a copy</small>
                  </label>
                </div>
                {/* </div> */}
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6" style={{background: "#21D192"}}>
                    Send
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
