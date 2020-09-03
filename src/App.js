import React from 'react';
import Resume from './res/Resume.pdf';
import './App.css';
import './Intro.css';
import './Kitchenmate.css';
import km from './res/km.png';
import Particles from 'react-particles-js';
import { BookOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="app">
      <div className="section intro">
        <Particles params={{
          particles: {
            number: {
              value: window.innerWidth < 600 ? 10 : 30 
            },
            size: {
              value: window.innerWidth < 600 ? 1 : 2
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}/>
        <div className="heading"> Bill Zeng </div>
        <div className="subheading"> Designer - Engineer - Innovator </div>
        <div className="icon-container">
          <a href={Resume} target="_blank"><BookOutlined className="icon"/></a>
          <a href="https://github.com/billzeng2k" target="_blank"><GithubOutlined className="icon"/></a>
          <a href="mailto:billzeng2k@gmail.com"><MailOutlined className="icon"/></a>
          <a href="https://www.linkedin.com/in/billzeng2k/" target="_blank"><LinkedinOutlined className="icon"/></a>
        </div>
      </div>
      {/* <div className="section kitchenmate">
        <div className="center">
          <img src={km} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
