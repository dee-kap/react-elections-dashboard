import React, {PropTypes} from "react";
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/members" activeClassName="active">Members</Link>
            </li>
            <li>
              <Link to="/electorates" activeClassName="active">Electorates</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Header;