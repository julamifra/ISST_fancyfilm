import React from 'react';

export default class ListaElement extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>pelis o cines</ul>
		);
	}
}