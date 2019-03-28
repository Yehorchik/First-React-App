// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a React Component

const App = ( ) =>{
    const buttonText = 'CLick Me!';
    return( 
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor :'blue' , color : 'white'}} >
             {buttonText}
            </button>

        </div>
    );
}

// Take the react component and show on the screen
ReactDOM.render(<App />, document.querySelector('#root'))