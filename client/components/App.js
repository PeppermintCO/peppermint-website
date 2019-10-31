import React, { Component } from "react";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="app">
				<FirstPanel></FirstPanel>
				<SecondPanel></SecondPanel>
				<ThirdPanel></ThirdPanel>
				<FourthPanel></FourthPanel>
			</div>
		)
	}
}
function FirstPanel() {
	return (
		<div className="firstPanel">
			<div className="titleAndLogo">
				<div className="titleName">
					Peppermint
				</div>
				<div className="logo"><img className="imageLogo" src="../../assets/mint-leaves-two-color-512.png"></img></div>
			</div>
			<div className="titleDes"><p className="textForTitle">create tests for Vue applications</p></div>
			<form className="firstPanelButtons" target="_blank"><button className="button Download">Download</button><button className="button Download" formaction="https://github.com/PeppermintCO/Peppermint" >Github</button></form>
		</div>
	)
}
function SecondPanel() {
	return (
		<div className="secondPanel"><div className="firstHalf Description">
			<div className="features"><div className="feature">Code Generator</div> <div className="featureDescription">Generates test code based on User Input</div></div>
			<div className="features"><div className="feature">Browser Visualization</div> <div className="featureDescription">Renders a viewport of a given website inside an embedded browser window</div></div>
			<div className="features"><div className="feature">Code Editor</div> <div className="featureDescription">Allows test and project code preview using codemirror</div></div>
			<div className="features"><div className="feature">Project Directory</div > <div className="featureDescription">Navigate through an imported projected for optimal test and code editing</div></div>

		</div>
			<div className="secondHalf Img">
				<img src="../../assets/Gif.gif" className="gif"></img>
			</div></div>
	)
}
function ThirdPanel() {
	return (
		<div className="thirdPanel">
			<div className="firstHalfOf3rd">
				<div className="DesTitle">Create Tests For Your Vue App With No Coding Required!</div>
				<div className="pDes">Our graphical user interface lets you create and import tests for your Vue based Applications.</div>
				<div className="pDes">Generated test code is built on the Vue-Testing-Library and Vue CLI.</div>
				<div className="pDes">Takes care of asynchonous calls and lets you update props.</div></div>
			<div className="secondHalfOf3rd">
				<img className="codeSnap" src="../../assets/Screen Shot 2019-10-27 at 6.26.57 PM.png"></img>
			</div></div>
	)
}
function FourthPanel() {
	return (
		<div className="fourthPanel"><div className="TitleForFourth">Organization</div><div className="Team">
			<div className="member">
				<div className="images">
					<a href="https://github.com/saberrr" className="anchorLinks" target="_blank">
						<img src="../../assets/github.png" className="image github"></img></a>
					<a href="https://linkedin.com/in/jan-catalan-90906b167" className="anchorLinks" target="_blank">
						<img src="../../assets/Linkedin.png" className="image"></img></a></div>
				<p className="memberName">Jan Catalan</p></div>
			<div className="member"><div className="images">
				<a href="https://github.com/marzily" className="anchorLinks" target="_blank">
					<img src="../../assets/github.png" className="image github"></img>
				</a>
				<a href="https://www.linkedin.com/in/margarett-l" className="anchorLinks" target="_blank">
					<img src="../../assets/Linkedin.png" className="image"></img></a></div>
				<p className="memberName">Margarett Ly</p></div>
			<div className="member"><div className="images">
				<a href="https://github.com/kevinjnam/" className="anchorLinks" target="_blank">
					<img src="../../assets/github.png" className="image github"></img></a>
				<a href="https://www.linkedin.com/in/kevinjnam/" className="anchorLinks" target="_blank">
					<img src="../../assets/Linkedin.png" className="image"></img></a></div>
				<p className="memberName">Kevin Nam</p></div>
			<div className="member"><div className="images">
				<a href="https://github.com/kbsjsn" className="anchorLinks" target="_blank">
					<img src="../../assets/github.png" className="image github" ></img></a>
				<a href="https://www.linkedin.com/in/kirkshin/" className="anchorLinks" target="_blank">
					<img src="../../assets/Linkedin.png" className="image" ></img></a></div>
				<p className="memberName">Kirk Shin</p></div></div>
		</div >
	)
}


export default App;
