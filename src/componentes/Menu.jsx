import React from 'react';
import MenuElement from './MenuElement';

export default class Menu extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>El menu tiene elementos</ul>
		);
	}
}