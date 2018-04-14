import React from 'react';
import RightArrow from './sliderComponents/RightArrow';
import LeftArrow from './sliderComponents/LeftArrow';

export default class PortfolioSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: this.props.menuCount ? this.props.menuCount : 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    nextSlide() {

        if (this.state.slideCount === 4) {
            this.setState({ slideCount: 1});
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 });
        }
    }

    previousSlide() {

        if (this.state.slideCount === 1) {
            this.setState({ slideCount: 4});
        } else {
            this.setState({ slideCount: this.state.slideCount -1 });
        }
    }

    render() {

        return (
            
            <div className="slide__container">
                <div className="slide__text">
                    { this.state.slideCount === 1 ? 
                    <div>
                        <span>Event Poster</span>

                        <div className="slide__paragraph">
                            <p>This project gives a user the ability 
                                to create an event, which is then added 
                                to the Event Feed, from there the user 
                                can click ‘interested’ or ‘going’ and 
                                that event will be added to the user’s 
                                ‘Interested’ or “Going’ event feed. Also
                                demonstrates a login system using JQuery
                                and MySQL.</p>

                            <p>Incorporates: HTML, CSS, Javascript, JQuery, PHP, MySQL</p>
                        </div>

                        <div className="button"><a href="http://zacmoss-com.stackstaging.com/16-events/" style={{ textDecoration: 'none' }}>View Project</a></div>
                    </div> : null }

                    { this.state.slideCount === 2 ? 
                    <div>
                        <span>Expensify App</span>

                        <div className="slide__paragraph">
                            <p>This project is built on React and Redux. 
                                It uses the Redux Store to store expenses 
                                which are inputed, can be filtered, and are 
                                added up to show a total. New expenses can 
                                be added, deleted, and filtered depending 
                                on name or date. Also utilizes a login system 
                                with Firebase, and is a good example of React 
                                Router.</p>

                            <p>Incorporates: React JS, Redux, React-Router,
                                Firebase, Webpack, and Sass</p>
                        </div>

                        <div className="button"><a href="https://zacs-expensify-app.herokuapp.com/dashboard" style={{ textDecoration: 'none' }}>View Project</a></div>
                    </div> : null }

                    { this.state.slideCount === 3 ? 
                    <div>
                        <span>FoodPicker App</span>

                        <div className="slide__paragraph">
                            <p>This is a React Js project which 
                                utilizes Webpack and Sass. It 
                                lets the user enter options which 
                                are added to a list. The user can 
                                then press a button to randomly pick 
                                an option. Comes in handy when you’re having 
                                a tough time deciding what to eat.</p>

                            <p>Incorporates: React JS, Webpack, and Sass</p>
                        </div>

                        <div className="button"><a href="https://foodpicker-app.herokuapp.com/" style={{ textDecoration: 'none' }}>View Project</a></div>
                    </div> : null }

                    { this.state.slideCount === 4 ? 
                    <div>
                        <span>Louisiana Jones Blog</span>
                        <div className="slide__paragraph">
                            <p>A travel blog work-in-progress. This 
                                was just a fun project which I used 
                                to help me work on my React Js skills. 
                                Much of it is under construction, but 
                                it provides another sample of utilizing 
                                React.</p>

                            <p>Incorporates: HTML, CSS, Javascript, React JS, 
                                React-Router, Webpack, and Sass</p>
                        </div>

                        <div className="button"><a href="https://louisianajones.herokuapp.com/" style={{ textDecoration: 'none' }}>View Project</a></div>
                    </div> : null }

                </div>
                <div className="slide__content">
                    <div className="slider__menu">
                        <p onClick={ () => {this.setState({ slideCount: 1});} } style={this.state.slideCount === 1 ? {border: '1px black solid'} : null}>Event Poster</p>
                        <p onClick={ () => {this.setState({ slideCount: 2});} } style={this.state.slideCount === 2 ? {border: '1px black solid'} : null}>Expensify App</p>
                        <p onClick={ () => {this.setState({ slideCount: 3});} } style={this.state.slideCount === 3 ? {border: '1px black solid'} : null}>FoodPicker App</p>
                        <p onClick={ () => {this.setState({ slideCount: 4});} } style={this.state.slideCount === 4 ? {border: '1px black solid'} : null}>Lousiana Jones Blog</p>
                    </div>

                    <div className="slide__imgContainer">
                        <div className="slide__img">
                            { this.state.slideCount === 1 ? <a href="http://zacmoss-com.stackstaging.com/16-events/"><img src="/images/eventposter.png" /></a> : null }
                            { this.state.slideCount === 2 ? <a href="https://zacs-expensify-app.herokuapp.com/dashboard"><img src="/images/expensify.png" /></a>  : null }
                            { this.state.slideCount === 3 ? <a href="https://foodpicker-app.herokuapp.com/"><img src="/images/foodpicker.png" /></a>  : null }
                            { this.state.slideCount === 4 ? <a href="https://louisianajones.herokuapp.com/"><img src="/images/louisianajones.png" /></a> : null }
                            
                        </div>

                        <RightArrow nextSlide={this.nextSlide} />                        
                        <LeftArrow previousSlide={this.previousSlide} />
                    
                    </div>

                    <div className="portfolio__widgets">
                        <div className="center">
                            <a href="https://www.freecodecamp.org/zacmoss"><img src="/images/freeCodeCamp.png" height='30px' width='30px' /></a>
                            <a href="https://codepen.io/zacmoss/"><img src="/images/codePen.png" height='30px' width='30px' /></a>
                            <a href="https://github.com/zacmoss"><img src="/images/github.png" height='30px' width='30px' /></a>
                            <a href="https://linkedin.com/in/zac-moss-40330351"><img src="/images/linkedin.png" height='30px' width='30px' /></a>
                        </div>
                    </div>

                </div>

                {/*<RightArrow nextSlide={this.nextSlide} />
                <LeftArrow previousSlide={this.previousSlide} />*/}
            </div>
        );
    }
}

/* 
    <RightArrow nextSlide={this.nextSlide} />
    <LeftArrow previousSlide={this.previousSlide} /> 
*/

/*
    <div className="slide">
            <div className="slide__container">
                <div className="slide__text">
                    <h1>Event Poster</h1>
                    <p>This project incorporates HTML CSS 
                    Javascript / JQuery / PHP and MySQL</p>
                </div>
                <div className="slide__img">
                    <img src="/images/eventposter.png" />

                    <RightArrow nextSlide={props.nextSlide} />
                    <LeftArrow previousSlide={props.previousSlide} />

                </div>
            </div>
        </div> 
    */