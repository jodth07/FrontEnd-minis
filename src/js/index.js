//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//render your react application

function SimpleCounter (props){
    return (
        <div className="outerDiv">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>

            <div className="seconds">
                {props.seconds}
            </div>
            <div className="tenth">
                {props.tenth}
            </div>
            <div className="hundredth">
                {props.hundredth}
            </div>
            <div className="thousandth">
                {props.thousandth}
            </div>
        </div>
    );
}

SimpleCounter.propTypes = {
    seconds: PropTypes.number,
    tenth: PropTypes.number,
    hundredth: PropTypes.number,
    thousandth: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const thous = Math.floor(counter/1000 %10);
    const huns = Math.floor(counter/100 %10);
    const tens = Math.floor(counter/10 %10);
    const ones = Math.floor(counter/1 %10);
    counter++;

    ReactDOM.render(
        <SimpleCounter thousandth={ones} hundredth={tens} tenth={huns} seconds={thous} />,
        document.querySelector('#app')
    );
}, 1000);