import React from 'react';

export default class Publi extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Anunciantesssss</ul>
		);
	}
}