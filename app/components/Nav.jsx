var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = ()=>{
  return(
    <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li><IndexLink to="/" activeClassName="active">Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active">CountDown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
         <ul className="menu">
           <li className="menu-text">Created By<Link to="/">Eli Fridman</Link></li>
         </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
