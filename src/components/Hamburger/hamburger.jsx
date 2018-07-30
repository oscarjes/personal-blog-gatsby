import React, { Component } from "react";
import Link from 'gatsby-link'
import Links from "../Links";
import Menu from '../Menu/index'
import "./hamburger.scss";

export default class Hamburger extends Component {
  toggle() {
    this.setState({
      open: !(this.state && this.state.open)
    });
  }

  render() {
    const classes = ["burger-menu"];
    if (this.state && this.state.open) classes.push("open");

    return (
      <div className={classes.join(" ")}>
        <Link to="/">
          <img
            src={this.props.profilePic}
            className="hamburger__author-photo"
            width="30"
            height="30"
            alt={this.props.authorData.name}
          />
        </Link>
        <div className="hamburger" onClick={() => this.toggle()} />
        <div className="burger-content">
          <Menu data={this.props.menuData} />
          <Links data={this.props.authorData} />
        </div>
      </div>
    );
  }
}
