import React, { Component } from 'react'
import './componentsStyle.css';
import SlideProject1 from './SlideProject1.js';
import SlideProject2 from './SlideProject2.js';
import myProjectsSpa from '../images/myProjectsEsp.png';


class MyProjectsSpanish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [
                <SlideProject1/>,
                <SlideProject2/>
              ],
              currentIndex: 0,
              translateValue: 0
            }
      }
      
      goToPrevSlide = () => {
        console.log("prev side");
        
      }
      
      goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
        }
        // This will not run if we met the if condition above
        this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    
        slideWidth = () => {
        return document.querySelector('.item').clientWidth;
        }

    render() {
        return (
            <section className="myProjectsContainer">
                <img src={myProjectsSpa} alt="My Projects" className="projectsImage"></img>
                <section className="sliderContainer">
                    <div className="sliderItems">
                    { this.state.images.map((image, i) => (
                        <div style={{transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.80s'}} key={i}> {image} </div>))
                    }

                    </div>
                    <div  className="leftSlide" onClick={this.goToPrevSlide}>❮</div>
                    <div  className="rightSlide" onClick={this.goToNextSlide}>❯</div>
                </section>
            </section>
         );
    }; 
}
  
export default MyProjectsSpanish;
