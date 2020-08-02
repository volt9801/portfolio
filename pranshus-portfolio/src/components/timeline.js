import React from 'react';

export default class Timeline extends React.Component {
	render() {
		return (
			<div className="text-center container mt-6">
				<h3 className="uppercase text-2xl pt-6 mb-4">Timeline</h3>
				<div className="w-100 mx-4 my-2 p-6 shadow-md hover:shadow-xl text-center rounded border-blue-500 border-l-8">
					<h5 className="text-2xl mb-2">Primary & Higher Education<span className="text-xl text-gray-800 ml-1">2008-2021</span></h5>
					<p className="text-gray-800">I am currently pursuing my higher secondary studies with Physics, Chemistry & Maths as my major subjects. 
					I am interested in solving problems of physics and maths which often prove insightful when it comes to problem-solving even in programming.</p>
				</div>
			</div>
		);
	}
}
