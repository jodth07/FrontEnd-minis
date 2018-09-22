import React from 'react';

//create your first component
export default class Lights extends React.Component{

    constructor(){
        super();
        this.state = {
            lights : {
                green : false,
                yellow : false,
                red : false
            }
        };
    }

    updateState(color){
        let colorSet = this.state;

        colorSet.lights[color] = true;

        this.setState(colorSet);
    }
    
    render(){

        let lighter = this.state.lights;
        let isGreen = "", isYellow = "", isRed = "";

        if (lighter.green){
            isGreen = "selected";
        } if (lighter.yellow){
            isYellow = "selected";
        } if (lighter.red){
            isRed = "selected";
        }
        
        return (
            <div className="container bg-light text-center mt-5">
                <ul>
                    <li className= {isGreen}>Green</li>
                    <li className= {isYellow}>Yellow</li>
                    <li className= {isRed}>Red</li>
                </ul>
            </div>
        );
    }
}
