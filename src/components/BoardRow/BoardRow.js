import React from 'react';
import './style.css';
import ImageBox from '../ImageBox/ImageBox';
import { Row } from 'reactstrap';
// =======================================================
// BoardRow - A row which holds 3-4 ImageBoxes, and passes
// 			  them images from an array which it recieves as props
// =======================================================

class BoardRow extends React.Component {
	
	
	render() {
		return (
			<Row>
				
					{this.props.imageArray.map(element => (
						<ImageBox imageLink = {element} key={element.toString()}/>
					))}
				
			</Row>
		)
	}
}

export default BoardRow;