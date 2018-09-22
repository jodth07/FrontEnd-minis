import React from 'react';

// Local Imports
import Lights from '../Lights';

//create your first component
export default class Home extends React.Component{
    
    render(){
        return (
            <div className="container bg-light text-center mt-5">
                <h1>Hello Rigo!</h1>
                <Lights />
            </div>
        );
    }
}
