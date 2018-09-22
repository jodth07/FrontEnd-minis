import React from 'react';

//create your first component
export default class Home extends React.Component{
    
    render(){
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="text-center">
                        <h1>todos</h1>
                    </div>
                
                    <h1>Hello Rigo!</h1>
                    <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                    <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                </div>
            </div>
        );
    }
}
