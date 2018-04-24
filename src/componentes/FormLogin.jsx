import React from 'react';

export default class FormLogin extends React.Component {

	constructor(props){
		super(props);
		this.clickLogin = this.clickLogin.bind(this);
    	}
	clickLogin(){
		let nombreCineLogeado = document.getElementsByName("nombreCine")[0].value;
		let direccion = document.getElementsByName("direccion")[0].value;
    		this.props.clickLogin(nombreCineLogeado, direccion);
	}
	

	render() {
		return (
			<form action="">
				<input type="text" name="nombreCine" placeholder="Nombre del cine"/>
				<input type="text" name="direccion" placeholder="Direccion"/>
	
				<button type="submit" onClick={this.clickLogin}>Registrar nuevo cine</button> 
			</form>
		);
	}
}
