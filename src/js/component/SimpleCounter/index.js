//import react into the bundle
import React from 'react';
import PropTypes from 'prop-types';


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

export default SimpleCounter;