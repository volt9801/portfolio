import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Timeline from './components/timeline';

function App() {
  return (
    <div className="row no-gutters">
      <div className="sidebar col-md-2">
        <Sidebar />
      </div>
      <div className="main col-md-10">
        <section id="introduction">
          <div className="introduction" style={{ backgroundImage: 'url(/introbg.jpg)' }}>
            <Introduction />
          </div>
        </section>
        <section id="about">
          <div className="about">
            <About />
          </div>
        </section>
        <section id="projects">
          <div className="projects">
            <Projects />
          </div>
        </section>
        <section id="timeline">
          <div className="timeline">
            <Timeline />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;