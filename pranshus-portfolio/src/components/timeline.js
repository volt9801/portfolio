import React from 'react';

export default class Timeline extends React.Component {
	render() {
		return (
			<div className="text-center container mt-6">
				<h3 className="text-2xl pt-6 mb-4">TIMELINE</h3>
				<TimelineCard color="blue-500" title="Primary & Higher Education" time="2008-2021" desc="I am currently pursuing my higher secondary studies with Physics, Chemistry & Maths as my major subjects. I am interested in solving problems of physics and maths which often prove insightful when it comes to problem-solving even in programming." />
			</div>
		);
	}
}


function TimelineCard(props) {
	return(
		<div className={"w-100 mx-4 my-2 p-6 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out text-center rounded border-"+ props.color +" border-l-8"}>
			<h5 className="text-2xl mb-2">{props.title}<span className="text-xl text-gray-800 ml-1">{props.time}</span></h5>
			<p className="text-gray-800">{props.desc}</p>
		</div>
	)
}