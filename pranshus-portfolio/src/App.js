import React from 'react';
import './App.css';

// components
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Timeline from './components/timeline';

function App() {
	return (
		<div className="App min-h-screen antialiased" style={{ backgroundImage: 'url('+process.env.PUBLIC_URL+'/background.svg)'}}>
			<div>
				<Navbar />
			</div>
			<div className="xl:ml-12 lg:ml-12 w-auto ml-auto min-h-full xl:mb-4 lg:mb-4 mb-12">
				<section id="home">
					<Home />
				</section>
				<div className="bg-white lg:p-10 xl:p-10 lg:pt-6 xl:pt-6 p-4">
					<section id="about"><About /></section>
					<section id="projects"><Projects /></section>
					<section id="timeline"><Timeline /></section>
				</div>
			</div>	
		</div>
	)
}

export default App;