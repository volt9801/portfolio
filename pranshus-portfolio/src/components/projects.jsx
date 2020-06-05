import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return(
			<div className="container mt-5 pt-5 pb-5" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="750">
				<h2 className="text-center font-weight-bold pb-3" style={{ textDecoration: 'underline', textUnderlinePosition: 'under', letterSpacing: '2px' }}>Projects</h2>
				<div className="container row row-col-1">
					<div className="card m-2 shadow" style={{ minWidth: '15rem', borderRadius: '10px' }} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="750">
						<div className="p-3">
						  <h5 className="card-title p-1"><i class="fab fa-github fa-lg"></i> N/A</h5>
						  <p className="pt-3 card-text lead gray-text">
						  	N/A
						  </p>
						</div>
					</div>
				</div>
				<p className="pt-5 card-text lead gray-text pb-5 text-center">
					See more of my projects on <a className="links p-1" style={{ color: '#696969' }} href="https://github.com/volt9801"><i class="fab fa-github fa-lg"></i> GitHub</a>
				</p>
			</div>
		)
	}
}