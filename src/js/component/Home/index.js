import React, {Component} from 'react';

// Local imports
import Todos from '../Todos';

// Home Component, landing page
export default class Home extends Component{
    
    render(){
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="text-center">
                        <h1>todos</h1>
                    </div>
                
                    <Todos />
                </div>
            </div>
        );
    }
}
