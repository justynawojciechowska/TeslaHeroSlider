import React, {Component} from 'react';
import Slide from './slide';
import SliderNavigation from './slider-navigation';
import roadsterImg from './../assets/images/roadster.png';
import truckImg from './../assets/images/truck.png';
import mouseImg from './../assets/images/mouse.svg';
import './../styles/scss/components/slider.css';
import {Transition, CSSTransition} from 'react-transition-group/Transition'

class Slider extends Component {

	state = {
		activeSlide: 0,
		slides: [
			{
				id: 1,
				name: 'Roadster',
				desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
				color: '#ee0101',
				imgUrl: roadsterImg,
				bckgHeight: 250,
				shadowOpacity: 0.5,
				topSpeed: 250,
				mph: 1.9,
				mileRange: 620
			},
			{
				id: 2,
				name: 'Semi truck',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
				color: '#0047fd',
				imgUrl: truckImg,
				bckgHeight: 300,
				shadowOpacity: 0.2,
				topSpeed: 65,
				mph: 5,
				mileRange: 500
			}
		]
	};

	componentDidMount() {
		this.setState({
			activeSlide: 0
		})
	}

	setActiveSlide(slideId) {

		console.log(slideId);

		this.setState({
			activeSlide: slideId
		})
	}

	render() {
		return (
			<div className="tesla-slider">

				<SliderNavigation activeSlide={this.state.activeSlide}
				                  setActiveSlide={this.setActiveSlide.bind(this)}
				                  carsNames={this.state.slides.map(slide => {
					                  return {
						                  id: slide.id,
						                  name: slide.name,
						                  color: slide.color
					                  }
				                  })}/>

				<Slide activeSlide={this.state.slides[this.state.activeSlide]}></Slide>

				<div className="tesla-slider__scroll">
					<img src={mouseImg} alt=""/>
				</div>
			</div>
		);
	}
}

export default Slider;
