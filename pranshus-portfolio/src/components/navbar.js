import React, { Component } from 'react'

export default class Navbar extends Component {
	render() {
		return (
			<nav className="xl:h-screen lg:h-screen xl:w-12 lg:w-12 xl:left-0 lg:left-0 w-full h-12 bottom-0 fixed bg-salt">
				<ul className="flex xl:flex-col lg:flex-col flex-row items-center w-full h-full">
					<li className="w-full xl:inline-flex lg:inline-flex hidden text-white w-full items-center">
			<span className="mx-2 whitespace-no-wrap tracking-wider text-xl font-semibold">QUICKLINKS</span>
						<svg xmlns="http://www.w3.org/2000/svg" className="animate-rotation w-10 h-10 fill-current text-white" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>
					</li>
		  <li className="w-full xl:my-4 lg:my-4 xl:mt-auto lg:mt-auto">
					<a href="#home" className="hover:bg-white hover:text-blue-800 active:bg-white active:text-blue-800 text-white flex xl:justify-start lg:justify-start justify-center items-center">
			<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-2 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/></svg>
						<span className="mx-2 whitespace-no-wrap">Introduction</span>
					</a>
		  </li>
		  <li className="w-full xl:my-4 lg:my-4">
					<a href="#about" className="hover:bg-white hover:text-blue-800 active:bg-white active:text-blue-800 text-white flex xl:justify-start lg:justify-start justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 m-2 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>
						<span className="mx-2 whitespace-no-wrap">About Me</span>
					</a>
		  </li>
		  <li className="w-full xl:my-4 lg:my-4">
					<a href="#projects" className="hover:bg-white hover:text-blue-800 active:bg-white active:text-blue-800 text-white flex xl:justify-start lg:justify-start justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-2 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 12H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z" /></svg>
						<span className="mx-2 whitespace-no-wrap">My Projects</span>
					</a>
		  </li>
		  <li className="w-full xl:my-4 lg:my-4 xl:mb-auto lg:mb-auto">
					<a href="#timeline" className="hover:bg-white hover:text-blue-800 active:bg-white active:text-blue-800 text-white flex xl:justify-start lg:justify-start justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-2 fill-current" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 10H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm3-7h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1zm-5-5H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
						<span className="mx-2 whitespace-no-wrap">Timeline</span>
					</a>
		  </li>
				</ul>
			</nav>
		)
	}
}
