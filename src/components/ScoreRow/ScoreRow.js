import React from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, T } from 'reactstrap';


class ScoreRow extends React.Component {

	

	render() {
		return (
			<div>
				<Navbar color="light">
					<NavbarBrand>Memory Game!</NavbarBrand>
					
					<t>
						TEST YOUR MEMORY, ASHEN ONE
					</t>
					<Nav>
						<NavItem>
							Score: {this.props.currentScore} || High Score: {this.props.highScore}
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		)
	}
}

export default ScoreRow;