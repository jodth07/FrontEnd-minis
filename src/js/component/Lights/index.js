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

    resetState(){
        let lights = this.state;
        lights.lights["green"] = false;
        lights.lights["red"] = false;
        lights.lights["yellow"] = false;
        this.setState(lights);
    }

    updateState(color){
        this.resetState();
        let colorSet = this.state;

        colorSet.lights[color] = !colorSet.lights[color];

        this.setState(colorSet);
    }
    
    render(){

        let isGreen = "", isYellow = "", isRed = "";

        if (this.state.lights.green){
            isGreen = "chosen";
        } 

        if (this.state.lights.yellow){
            isYellow = "chosen";
        } 

        if (this.state.lights.red){
            isRed = "chosen";
        }
        
        return (
            <div className="container mt-5">
                <div className="bar"></div>
                <ul>
                    <li onClick ={() => this.updateState("red")} id= {isRed} className="circle red-light" ></li>
                    <li onClick ={() => this.updateState("yellow")} id= {isYellow} className="circle yellow-light"> </li>
                    <li onClick ={() => this.updateState("green")} id={isGreen} className="circle green-light " ></li>
                </ul>
            </div>
        );
    }
}
