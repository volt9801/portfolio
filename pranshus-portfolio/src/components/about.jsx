import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return(
			<div className="container pt-5" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="750">
				<h2 className="text-center font-weight-bold pb-3" style={{ textDecoration: 'underline', textUnderlinePosition: 'under', letterSpacing: '2px' }}>About Me</h2>
				<div class="container">
					<p className="lead gray-text">I am a highschooler currently pursuing my higher secondary education with Physics, Chemistry and Maths as my major subjects. As an aspiring full-stack developer, I love to use programming as a means of problem solving and to implement any ideas I get.</p>

					<h5 className="font-weight-bold mt-2 mb-1" style={{ textDecoration: 'underline', textUnderlinePosition: 'under', }}>Skills</h5>

					<div className="row">
					  <div className="col-md m-2 card shadow-lg border-info" style={{ border: 0, borderBottom: '7px solid' }} data-aos="zoom-in-right" data-aos-easing="ease-in-out" data-aos-duration="750">
					    <div className="p-2 pt-3">
					      <h5 className="card-title">Web Dev</h5>
					      <p className="card-text lead gray-text">I have experience building websites using HTML, CSS, Sass, JavaScript, React and, the python-framework Django.</p>
					    </div>
					  </div>
					  <div className="col-md m-2 card shadow-lg border-warning" style={{ border: 0, borderBottom: '7px solid' }} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="750">
					    <div className="p-2 pt-3">
					      <h5 className="card-title">Languages Known</h5>
					      <p className="card-text lead gray-text">
					      	<ul>
					      		<li>Python <br className="d-block d-lg-none" />[Intermediate]</li>
					      		<li>Java [Beginner]</li>
					      		<li>HTML, CSS, Sass, JavaScript</li>
					      		<li>C++ [Beginner]</li>
					      	</ul>
					      </p>
					    </div>
					  </div>
					  <div className="col-md m-2 card shadow-lg border-success" style={{ border: 0, borderBottom: '7px solid' }} data-aos="zoom-in-left" data-aos-easing="ease-in-out" data-aos-duration="750">
					    <div className="p-2 pt-3">
					      <h5 className="card-title">Software</h5>
					      <p className="card-text lead gray-text">
					      	<ul>
					      		<li>Linux</li>
					      		<li>Windows</li>
					      		<li>Photoshop</li>
					      		<li>Chrome Dev Tools</li>
					      		<li>Sublime Text/VS Code</li>
					      	</ul>
					      </p>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}