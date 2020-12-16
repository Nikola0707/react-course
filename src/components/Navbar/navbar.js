import React from "react";
import './navbar.css'
class NavBar extends React.Component {
  alertForClick(){
    alert('Helllow')
  }
  render() {
    return (
      <nav>
        <a href="#" onClick={this.alertForClick}>Home</a>
        <a href="#" onClick={this.alertForClick}>About</a>
        <a href="#" onClick={this.alertForClick}>Contact</a>
      </nav>
    );
  }
}

export { NavBar };
