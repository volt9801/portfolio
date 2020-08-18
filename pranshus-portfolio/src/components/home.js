import React from 'react';

export default class Home extends React.Component {
	render() {
		var img_link = "https://lh3.googleusercontent.com/pw/ACtC-3eSnLIbdqVOfeZePQDDjcbggKtS2dhEUKch7rVOX5miXTsLHEyFTh8CD8o7zqp-6liXT-DHTj23-_nFeRZ7AC3xTYqAQ3fLZkB5G8P9O_RbmRw7jHEYNW5huJUn3vGU_kDKCiw-vlnJsGzbxZ2AHF3E=s500-no";
		return (
	  <div className="min-h-screen p-2 bg-black bg-opacity-25 flex justify-center items-center">
		<div className="flex flex-wrap justify-center items-center text-white">
	  <img src={img_link} className="rounded-full profile-img block xl:m-12 lg:m-12 m-4 shadow-xl" alt="Pranshu Jha" />
		<div className="lg:text-left xl:text-left text-center">
		  <span className="text-2xl text-center">Hello! I'm</span>
		  <h1 className="xl:text-6l lg:text-6xl text-4xl whitespace-no-wrap">Pranshu Jha</h1>
		</div>
		</div>
	  </div>
		);
	}
}