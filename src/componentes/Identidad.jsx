import React from 'react';

export default class Identidad extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<button className="App-boton"> HOLA </button> 

		);
	}
}