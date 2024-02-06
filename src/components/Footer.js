import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container-fluid my-2" style={{paddingLeft: "0px", paddingRight: "0px"}}>
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor: "#ECEFF1"}}
        >
          {/* <!-- Section: Social media --> */}
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{backgroundColor: "#21D192"}}
          >
            {/* <!-- Left --> */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
              <a href="/" className="text-white me-4">
              <div className="d-inline-block">
                <img src="google.png" alt="Facebook Icon" className="img-fluid" style={{width: "30px"}}/>
              </div>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold">NetBuys</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    Netbuys is an online marketplace facilitating the buying and 
                    selling of a wide range of products, with a focus on used items. 
                   
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Categories</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="/" className="text-dark">
                      Automobile
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Electronics
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Furniture
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Fashion
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Hardware
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <a href="/" className="text-dark">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Help
                      {/* FAQ */}
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> SKIT Jaipur, Ramnagria
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> netbuys@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91 7462869907
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +91 7739474422
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            &copy;{new Date().getFullYear()}  Copyright: All Rights Reserved by NetBuys
            {/* <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a> */}
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
}
