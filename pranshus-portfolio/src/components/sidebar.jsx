import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'

export default class Sidebar extends Component {
	render() {
		return (
			<div className="overlay d-flex flex-column align-items-center justify-content-between p-2">
				<div className="top">
					<div className="sidebar-image d-flex justify-content-center mb-2">
						<img src="pj.svg" alt="Pranshu Jha" style={{ borderRadius: '50%', width: '75px', height: '75px', objectFit: 'cover' }}/>
					</div>
					<h3 className="title">Pranshu Jha</h3>
					{/*<p className="small d-flex align-items-center">
						<i class="fas fa-envelope-square fa-lg pr-1"></i>email<br className="d-block d-lg-none" />@gmail.com
					</p>*/}
				</div>
				<div className="sections text-center" style={{ wordBreak: "break-word" }}>
					<Scrollspy items={ ['introduction', 'about', 'projects', 'timeline'] } currentClassName="is-current">
					    <li className="mb-2"><a className="links p-1" href="#introduction">Introduction</a></li>
					    <li className="mb-2"><a className="links p-1" href="#about">About</a></li>
					    <li className="mb-2"><a className="links p-1" href="#projects">Projects</a></li>
					    <li className="mb-2"><a className="links p-1" href="#timeline">Timeline</a></li>
					</Scrollspy>
				</div>
				<div className="sm-links">
					<a className="links p-1" href="github link"><i class="fab fa-github fa-lg"></i> GitHub</a>
				</div>
				<div className="credits small">
					Made with <svg class="bi bi-bootstrap-fill" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
					</svg> and <i class="fab fa-font-awesome-alt fa-lg"></i>
				</div>
			</div>
		)
	}
}