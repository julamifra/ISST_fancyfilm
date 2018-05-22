import React from 'react';
import { InputGroup, Input, Col,Row} from 'reactstrap';

export default class FormRegistroCine extends React.Component {

	constructor(props){
		super(props);
		this.clickRegistroCine = this.clickRegistroCine.bind(this);
    }
	clickRegistroCine(){
		let email = document.getElementsByName("email")[0].value;
		let password = document.getElementsByName("password")[0].value;
		let direccion = document.getElementsByName("direccion")[0].value;
    	let nombreCine = document.getElementsByName("nombreCine")[0].value;
    	this.props.clickRegistroCine(email, direccion, nombreCine, password);
	}
	

	render() {
		return(
			<div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="email" name="email"  id ="input1" placeholder="Email del cine"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="text" name="nombreCine" id ="input1" placeholder="Nombre del Cine"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="text" name="direccion" id ="input1" placeholder="Direccion del cine"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="password" name="password" id ="input1" placeholder="Elija una contraseña"/>
					</InputGroup>
					</Col>
				</Row>
				<p></p>
				<button className="estiloSeleccion" onClick={this.clickRegistroCine}>Registrar</button> 
				<p></p>
			</div>
		);
	}
		
}

