import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ImageBox from './components/ImageBox/ImageBox';
import Board from './components/Board/Board';
import ScoreRow from './components/ScoreRow/ScoreRow';


import imageArray from './imageArray'

class App extends React.Component {

	state = {
		imageArray: imageArray,
		currentScore: 0,
		highScore: 0,
		gameOver: false
	}

	resetGame = () => {
		if(this.state.currentScore > this.state.highScore){
			this.setState({highScore: this.state.currentScore, currentScore: 0});
		}
		else{
			this.setState({currentScore: 0});
		}
		this.state.imageArray.forEach((element) => {
			element.clicked = false;
		})
		this.state.imageArray.sort(()=> Math.random() -0.5);
	}
	handleImageClick = (id) => {
		
		const result = this.state.imageArray.find(element => element.id === id);
		// console.log(result);
		if(result.clicked == false){
			// console.log("clicking on new element " + result.id);
			result.clicked = true;
			// console.log(result);
			this.setState({currentScore: this.state.currentScore + 1});
			this.state.imageArray.sort(()=> Math.random() -0.5);
		}
		else {
			// console.log("element " + result.id + " already clicked!"); 
			this.resetGame();
		}
		

		
		
		
		
	}

	render() {
		return (
			<div className="App" >
				<ScoreRow currentScore = {this.state.currentScore} highScore = {this.state.highScore}/>
				<Board imageArray={this.state.imageArray} handleImageClick = {this.handleImageClick}/>
			</div>
		);
	}

}

export default App;
