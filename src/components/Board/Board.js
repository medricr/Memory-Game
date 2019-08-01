import React from 'react';
// import './style.css';
// import BoardRow from '../BoardRow/BoardRow';
import ImageCard from '../ImageBox/ImageBox';
import { Container, Row, Col } from 'reactstrap';


class Board extends React.Component {

	render() {
		return (
			<Container>
				<Col sm={{size: 8, offset: 2}}>
					<Row>
						{this.props.imageArray.map(element => (
							<ImageCard imageLink={element} key={element.id} handleClick = {this.props.handleImageClick}/>
						))}
					</Row>
				</Col>
			</Container>
		)
	}
}

export default Board;