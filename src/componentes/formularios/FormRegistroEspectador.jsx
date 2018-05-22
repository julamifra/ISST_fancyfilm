import React from 'react';
import { InputGroup, Input, Col,Row} from 'reactstrap';

export default class FormRegistroEspectador extends React.Component {

	constructor(props){
		super(props);
		this.clickRegistroEspectador = this.clickRegistroEspectador.bind(this);
    }
	clickRegistroEspectador(){
		let email = document.getElementsByName("email")[0].value;
		let password = document.getElementsByName("password")[0].value;
		let usuario = document.getElementsByName("usuario")[0].value;
    	let nombreEspectador = document.getElementsByName("nombreEspectador")[0].value;
    	this.props.clickRegistroEspectador(usuario, nombreEspectador, email, password);
	}
	

	render() {
		return (
			<div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="email" name="email" id ="input1" placeholder="Email del espectador"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="text" name="nombreEspectador" id ="input1" placeholder="Nombre del Espectador"/>
					</InputGroup>
					</Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Col>
					<InputGroup>
						
						<Input type="text" name="usuario" id ="input1" placeholder="Nick del usuario"/>
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
				<button className="estiloSeleccion" onClick={this.clickRegistroEspectador}>Registrar</button> 
				<p></p>
			</div>
		);
	}
}

