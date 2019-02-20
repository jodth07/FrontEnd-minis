import React, {Component} from 'react';

// Local imports
import Todos from '../Todos';

// Home Component, landing page
export default class Home extends Component{
    
    render(){
        return (
            <div className="bg-light" id="main">
                <div className="container">
                    <Todos />
                </div>
            </div>
        );
    }
}
