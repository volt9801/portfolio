import React, { Component } from 'react'

export default class Introduction extends Component {
	render() {
		return (
			<div class="overlay d-flex align-items-center justify-content-around flex-wrap">
					<div className="order-md-2 px-5" style={{ borderRadius: '50%', width: '300px', height: '300px'}}>
						<img src="pj.svg" alt="Pranshu Jha" style={{ borderRadius: '50%', width: '300px', height: '300px', objectFit: 'cover' }}/>
					</div>
					<div className="order-md-1 px-5">
						<span style={{ fontSize: 30, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px' }} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="500">I am</span>
						<br />
						<span className="links" style={{ fontSize: 50, fontFamily: 'Raleway', fontWeight: 'bold', letterSpacing: '5px', borderBottom: '5px solid #fff' }} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000">Pranshu Jha</span>
					</div>
			</div>
		)
	}
}