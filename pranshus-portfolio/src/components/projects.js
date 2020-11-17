import React from 'react';

export default class Projects extends React.Component {
	render() {
		return (
			<div className="text-center container mt-6">
				<h3 className="text-2xl pt-6">MY PROJECTS</h3>
				<div className="flex flex-wrap justify-center align-top">
					<ProjectCard name="Portfolio" link="https://github.com/volt9801/portfolio" desc="Code for the site you're currently viewing. Made with ReactJS and tailwindcss." />
					<ProjectCard name="ChitChat" link="https://github.com/volt9801/chitchat" desc="Chat app made with ReactJS, tailwindcss and firebase." />
				</div>
				<h6 className="text-gray-800 mt-4">View more of my projects on
					<a className="inline-flex items-center mb-2" href="https://github.com/volt9801/portfolio" target="_blank">
						<svg class="w-4 h-4 mx-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
						<span>Github</span>
					</a>
				</h6>
			</div>
		);
	}
}


function ProjectCard(props) {
	return (
		<div className="flex-grow max-w-md mx-4 my-2 p-6 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out text-center rounded-md">
			<a className="inline-flex items-center mb-2" href={props.link} target="_blank">
				<svg class="w-6 h-6 mr-1" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
				<h5 className="text-2xl">{props.name}</h5>
			</a>
			<p className="text-gray-800">
				{props.desc}
			</p>
		</div>
	)
}