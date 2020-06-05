import React, { Component } from 'react'

export default class Introduction extends Component {
	render() {
		return (
			<div class="overlay d-flex align-items-center justify-content-center flex-wrap">
					<div className="order-md-2 px-5">
						<img src="pj.svg" alt="Pranshu Jha" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', border: '5px solid #fff' }}/>
					</div>
					<div className="order-md-1 px-5">
						<span style={{ fontSize: 25, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px' }}>Hi! I am</span>
						<br />
						<span className="links" style={{ fontSize: 50, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px', borderBottom: '5px solid #fff' }}>Pranshu Jha</span>
					</div>
			</div>
		)
	}
}