import React from 'react';
import {
  InputGroup,
  Input,
  Col,
  Row
 } from 'reactstrap';




export default class FormLoginCine extends React.Component {

	constructor(props){
		super(props);
		this.clickLogin = this.clickLogin.bind(this);
		this.validarC = this.validarC.bind(this);
		this.validarE = this.validarE.bind(this);
		
    	}
	clickLogin(){
		let email = document.getElementsByName("email")[0].value;
		let password = document.getElementsByName("password")[0].value;
		let tipo = this.props.tipo;
		/*var tipo = null; 
		let tipoElements = document.getElementsByName('tipo');
		for(var i=0; tipoElements[i]; ++i){
     		if(tipoElements[i].checked){
           		tipo = tipoElements[i].value;
           		break;
      		}
		}
		*/
		console.log("El tipo validado es: " + tipo);
		console.log("El email validado es: " + email);
    	this.props.clickLogin(email,tipo, password);
	} 

	

	validarC(){
		let check = document.getElementsByName('tipo');
		check.checked=true;
	}
	validarE(){
		let check = document.getElementsByName('tipo');
		check.checked=true;
	}
	/*
				<Row>
					<Col>
					<InputGroup>
						<Input type="radio" name="tipo" value="cine" onClick={this.validarC} required/>{' '}
						Cine
						<br/>
						<Input type="radio" name="tipo" value="espectador" onClick={this.validarE} required/>{' '}
						Espectador
					</InputGroup>
					</Col>
				</Row>
*/

	render() {
		return (
			<Row>
			<Col xs="3"></Col>
			<Col xs="7" className="centrar">
				<Row>
					<div> <hr className="my-2" /></div>	
				</Row>
				<Row>
					<Col>
					<InputGroup>
						<Input type="email" name="email" id = "input1" placeholder="Escriba su email"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>	
				<Row>
					<Col>
					<InputGroup>
						<Input type="password" name="password" id = "input1" placeholder="Introduzca Contraseña"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>				
				<Row>
					<Col className="centrar">
						<div> <hr className="my-2" /></div>
						<p></p>
							<button className="estiloSeleccion" onClick={this.clickLogin}>Login</button> 
						<p></p>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
			
			</Col>
			</Row>
		);
	}
}
