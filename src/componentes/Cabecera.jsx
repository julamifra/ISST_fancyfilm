import React from 'react';
import Identidad from './Identidad';

export default class Cabecera extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>La cabecera inlcuye la identificacion</ul>
		);
	}
}