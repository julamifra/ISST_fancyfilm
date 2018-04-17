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
			<div className = "App-menu">
				<MenuElement className="App-menu-boton1"> Cines </MenuElement>
				<MenuElement className="App-menu-boton2"> Cartelera </MenuElement>
			</div>
		);
	}
}