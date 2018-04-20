import React from 'react';
import Tabla from './Tabla';


export default class Cines extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<div>
			<Tabla cinesseleccionado = {this.props.cinesseleccionado}/>
			</div>
		);
	}
}