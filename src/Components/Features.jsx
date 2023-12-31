import React from "react";
import FeaturesBg from "../Assets/Desktop - 7.png";

export default function Features() {
  return (
    <section>
      <div>
        {/* Section Heading Part */}
        <div>
          <h1 className="feature-h1">Explore the Solutions</h1>
          <p className="features-pr">
          With NFTs, ticket authenticity can be easily verified, preventing counterfeiting and ensuring that only valid tickets are bought and sold.


          </p>
        </div>

        {/* Section Content Part */}
        <div className="features-content">
          {/* Left Part */}
          <div className="features-left">
            {/* Left Part Heading */}
            <div className="features-left-head">
              <h3 className="features-h3">Powerful suite of tools</h3>
              <p className="features-p">
              I Know Spots desires to lead the ticketing industry, both operationally and in digital ticketing.
              </p>
            </div>

            {/* Left Part Buttons */}
            <div>
              {/* Button No. 1 */}
              <a href="#0" className="features-a">
                <div>
                  <div className="features-a-head">
                  Custom Subdomains
                  </div>
                  <div className="features-a-text">
                   This feature would allow event organizers to have their dedicated web address associated with their event, enhancing their branding and providing a distinct online presence.
                  </div>
                </div>

                <div className="features-a-img">
                  <svg
                    className="w-3 h-3 fill-current features-a-svg"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>

              {/* Button No. 2 */}
              <a href="#0" className="features-a">
                <div>
                  <div className="features-a-head">
                  Event-specific Landing Pages
                  </div>
                  <div className="features-a-text">
                  The landing page can be customized by the event organizer to reflect the event's theme, design, and promotional material.

                  </div>
                </div>

                <div className="features-a-img">
                  <svg
                    className="w-3 h-3 fill-current features-a-svg"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </a>

              {/* Button No. 3 */}
              <a href="#0" className="features-a">
                <div>
                  <div className="features-a-head">
                    I Know Spots DAO
                  </div>
                  <div className="features-a-text">
                  Focuses on organizing and managing events within a community. 
                  </div>
                </div>

                <div className="features-a-img">
                  <svg
                    className="w-3 h-3 fill-current features-a-svg"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Part */}
          <div>
            <img src={FeaturesBg} alt="Features section" className="features-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
