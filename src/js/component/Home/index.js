import React from 'react';
import PropTypes from 'prop-types';
import SimpleCounter from '../SimpleCounter';

//create your first component
export default class Home extends React.Component{
    
    constructor(){
        super();
        this.state={
            thous : 0, 
            huns : 0, 
            tens : 0, 
            ones : 0
        };
    }

    componentDidMount(){
        let counter = 0;
        setInterval(() => {
            this.setState({
                thous : Math.floor(counter/1000 %10),
                huns : Math.floor(counter/100 %10),
                tens : Math.floor(counter/10 %10),
                ones : Math.floor(counter/1 %10)
            });
            counter++;
        }, 1000);
    }
    
    render() {
        return (
            <div className="container">
                <SimpleCounter thousandth={this.state.ones} hundredth={this.state.tens} tenth={this.state.huns} seconds={this.state.thous} />
            </div>
        );
    }
}
