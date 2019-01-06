import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export default class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>Hello Rigo!</h1>
                <h2>This is the Home Page </h2>
                <h2>To see the contact list click <a href="/contacts">here</a> </h2>
            </div>
        );
    }
}
