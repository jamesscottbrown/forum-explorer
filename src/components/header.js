import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header" >
        <a href="https://news.ycombinator.com">
          <img src="" className="logo"/>
        </a>
        <a
          href="https://news.ycombinator.com/news"
          className="header-link site-title">Hacker News</a>
        {['new', 'comments', 'show', 'ask', 'job', 'submit'].map(link => {
          return <a className="header-link" href={link} key={link}>{link}</a>;
        })}
        <a
          onClick={this.props.toggleGraphLayout}
          className="header-link">change graph</a>
        <a> login</a>
      </div>
    );
  }
}

export default Header;
