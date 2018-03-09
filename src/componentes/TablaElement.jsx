import React from 'react';

export default class TablaElement extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>opciones tabla</ul>
		);
	}
}