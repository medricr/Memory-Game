import React from 'react';
import './style.css'
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

// =======================================================================
// ImageBox - A component which will contain one random image passed to it 
// 			  and keep track of whether or not it has been clicked
// =======================================================================

class ImageCard extends React.Component {

	// Set up the props for the ImageBox component, and set the clicked attribute to 'false'
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
	}

	// // Throw an alert if the image has already been clicked, else, switch the clicked attribute in 
	// // state to true
	// handleImageClick = () => {
	// 	if (this.state.clicked === true) {
	// 		alert("Already clicked me, chump!");
	// 	}
	// 	else {
	// 		this.setState({ clicked: true });
	// 	}
	// 	// this.state.clicked != true ? this.setState({clicked: true}) : 
	// }

	render() {
		return (
				<Col sm={4}>
					<Card>
						<CardImg src={this.props.imageLink.imageLink} alt="Placeholder" onClick = {() => {this.props.handleClick(this.props.imageLink.id)}} />
					</Card>
				</Col>

			
		)
	}
}

export default ImageCard;