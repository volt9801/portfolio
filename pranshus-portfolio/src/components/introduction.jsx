import React, { Component } from 'react'

export default class Introduction extends Component {
	render() {
		return (
			<div class="overlay d-flex align-items-center justify-content-around flex-wrap">
					<div className="order-md-2 px-5">
						<img src="pj.svg" alt="Pranshu Jha" style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'cover' }}/>
					</div>
					<div className="order-md-1 px-5">
						<span style={{ fontSize: 25, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px' }}>Hi! I am</span>
						<br />
						<span className="links" style={{ fontSize: 45, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px', borderBottom: '5px solid #fff' }}>Pranshu Jha</span>
					</div>
			</div>
		)
	}
}