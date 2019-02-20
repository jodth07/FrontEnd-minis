import React from 'react';

// Local Imports
import Lights from '../Lights';

//create your first component
export default class Home extends React.Component{
    
    render(){
        return (
            <div className="container mt-5"> 
                <Lights />
            </div>
        );
    }
}
