import React from 'react';
import Tabla from './Tabla';


export default class Cartelera extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<div>
			<Tabla /*pelis={this.props.pelis}*//>
			</div>
		);
	}
}