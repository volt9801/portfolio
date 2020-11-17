import React from 'react';

export default class About extends React.Component {
	render() {
		const cardClass = "flex-grow max-w-md mx-4 my-2 p-6 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out text-center rounded-md";
		return (
		<div className="text-center container">
			<div className="flex flex-wrap justify-center align-top mt-2">
				<div className={cardClass}>
					<h3 className="text-2xl mb-2">ABOUT ME</h3>
					<p className="text-gray-800">I am a highschooler currently pursuing my higher secondary education with Physics, Chemistry and Maths as my major subjects. 
					As an aspiring full-stack developer, I love to use programming as a means of problem solving and implementing ideas. 
					Apart from programming, I like to spend my time reading books and learning new things.</p>
				</div>
				<div className={cardClass}>
					<h3 className="text-2xl mb-2">SKILLS</h3>
					<h5 className="text-xl">Web Development</h5>
					<p className="text-gray-800 mb-2">I have experience building websites using HTML, CSS, Sass, JavaScript, React and, the python-framework Django.</p>
					<h5 className="text-xl">Known Languages</h5>
					<ul className="text-gray-800">
						<li>Python [Intermediate]</li>
					</ul>
				</div>
			</div>
		</div>
		)
	}
}