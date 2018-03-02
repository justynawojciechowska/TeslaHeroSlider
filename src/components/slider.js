import React, {Component} from 'react';
import Slide from './slide';

class Slider extends Component {

	state = {
		activeSlide: 0,
		slides: [{
			id: 1,
			name: 'Roadster',
			desc: '...',
			color: '#F90000',
			img: '...',
			topSpeed: 250,
			mph: 1.9,
			mileRange: 620
		},
			{
				id: 2,
				name: 'Semi truck',
				desc: '...',
				color: '#0137FE',
				img: '...',
				topSpeed: 65,
				mph: 5,
				mileRange: 500
			}
		]
	}

	componentDidMount() {
		this.setState({
			activeSlide: 0
		})
	}

	render() {
		return (
			<div>
				<Slide activeSlide={this.state.slides[this.state.activeSlide]}>

				</Slide>
			</div>
		);
	}
}

export default Slider;
