import React, { Component } from 'react'

export default class Timeline extends Component {
	render() {
		return(
			<div className="container pt-5 pb-5" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="750">
				<h2 className="text-center font-weight-bold pb-3" style={{ textDecoration: 'underline', textUnderlinePosition: 'under', letterSpacing: '2px' }}>Timeline</h2>
				<div class="container">
					<div className="card shadow border-info" style={{ border: 0, borderLeft: '7px solid' }} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="750">
					    <div className="card-body">
					      <h5 className="card-title pb-3">Primary & Higher Education <span className="small text-muted">2008-2021</span></h5>
					      <p className="card-text lead gray-text">I am currently pursuing my higher secondary studies with Physics, Chemistry & Maths as my major subjects. I am interested in solving problems of physics and maths which often prove insightful when it comes to problem-solving even in programming.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}