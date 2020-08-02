import React from 'react';

export default class About extends React.Component {
	render() {
		return (
		<div className="text-center container">
			<h3 className="uppercase text-2xl mb-2 pt-6">About Me</h3>
			<p className="text-gray-800">I am a highschooler currently pursuing my higher secondary education with Physics, Chemistry and Maths as my major subjects. 
			As an aspiring full-stack developer, I love to use programming as a means of problem solving and implementing ideas. 
			Apart from programming, I like to spend my time reading books and learning new things.</p>
			<h3 className="uppercase text-2xl mb-2 mt-8">Skills</h3>
			<div className="flex flex-wrap justify-around align-top">
				<div className="flex-grow max-w-md mx-4 my-2 p-6 shadow-md hover:shadow-xl text-center rounded-md">
					<h5 className="text-2xl mb-2">Web Development</h5>
					<p className="text-gray-800">I have experience building websites using HTML, CSS, Sass, JavaScript, React and, the python-framework Django.</p>
				</div>
				<div className="flex-grow max-w-md mx-4 my-2 p-6 shadow-md hover:shadow-xl text-center rounded-md">
					<h5 className="text-2xl mb-2">Known Languages</h5>
					<ul className="text-gray-800">
						<li>Python [Intermediate]</li>
						<li>Java [Beginner]</li>
						<li>HTML, CSS, Sass, JavaScript</li>
						<li>C & C++ [Beginner]</li>
					</ul>
				</div>
				<div className="flex-grow max-w-md mx-4 my-2 p-6 shadow-md hover:shadow-xl text-center rounded-md">
					<h5 className="text-2xl mb-2">Software</h5>
					<ul className="text-gray-800">
						<li>Linux</li>
						<li>Windows</li>
						<li>Photoshop</li>
						<li>Chrome Dev Tools</li>
						<li>Sublime Text/VS Code</li>
					</ul>
				</div>
			</div>
		</div>
		)
	}
}