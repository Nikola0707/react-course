import React from "react";
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <h1>Title</h1>
          <p>We create possibilities for the connected world</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twiter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export { Footer };
