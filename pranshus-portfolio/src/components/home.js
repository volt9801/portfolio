import React from 'react';

export default class Home extends React.Component {
	render() {
		var img_link = "https://lh3.googleusercontent.com/VNjQroxZHaCmxbg6tILHqUCbqIXmTEWVVTi0m8ItXhRz6-A1oA1asPmHgeuXPftZIZPo9LHxwQIPCODV9JOFaLrfTGns_F0IrDIuJFrj2ZoV5ZF77T_tg6vjH0YZO1yVhHDwxjD4yS0POCNx4ig_MRHJjbPBJZovoZq13TW2bKNjEFAPdbKwSQzpan9aahULAVz_Rr9-NE4UpPCih6cXF6oUAOk94wJsuGWGwJcILl1QA9IY8lhsJpORRfLgTbnPPIFeWlqanvI4CKGbYDo8P1r1V_aBHsfSOubToK0gXB_aqDyXnkK76O9-G7ReXgi0HE9Hrb8M1EROEnVIR0iV5ksAyvwHISbe4lUFvKExjMnDxBXURSR4jtPubYDSIoTwhd_uIi0_gKpfUiDC9ZmF9wPtDg2x6zui5e36rIdo43lMsjD1pqndLaHJw3lgzU5m5pK9_5qBLBRXkENu3vaMvLiE5v1LEv85O49yvx4xHZtuM3Cf8A7BXXeLkOEGHXdcK2e1l5H1GEyFSWGoDnylPKHiOx3eub0nDXGKy_h8PUFxFRiE8IEIdABZ4IQrc20yBWirBEUTDTixX-VQCGhu_MncX9L77ps_O9zcKvGrnbCzu_weuWK-7uvFRKhp45qB6j4wKpnYzeOkfFJrakEhL-WfJTuBKlgdfWwBAU-WGtKm-Qy9t8L16W_rphbs=s328-no?authuser=0";
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