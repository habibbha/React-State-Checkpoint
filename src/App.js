// src/App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Habib ben hadj ali',
        bio: 'A Student  with a passion for learning .',
        imgSrc: 'https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536950.jpg?t=st=1717453251~exp=1717456851~hmac=a97c8b301051d9a17f3238709e32559644c8f364486032354c620e7d88158200&w=740',
        profession: 'Web Developer'
      },
      shows: false,
      mountedTime: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button className="showhide" onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1 className="habib">{person.fullName}</h1>
            <p className="bio">{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <h2 className="pro">{person.profession}</h2>
          </div>
        )}
        <div>
          <h3 className="count">Time since component mounted: {mountedTime} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;
