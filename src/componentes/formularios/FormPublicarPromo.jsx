import React from 'react';
import { InputGroup, Input, Label, FormGroup, Col,Row} from 'reactstrap';

export default class FormPublicarPromo extends React.Component {
	constructor(props){
		super(props);
		this.clickPostPromo = this.clickPostPromo.bind(this);
    }
	clickPostPromo(){
		let cine = document.getElementsByName("cine")[0].value;
		let titulo = document.getElementsByName("titulo")[0].value;
		let descripcion = document.getElementsByName("descripcion")[0].value;
		this.props.clickPostPromo(cine, titulo, descripcion);
	}
	render() {
			if(this.props.cineLogeado === null || this.props.cineLogeado === undefined){
					return <div>Por favor, inicie sesión como CINE para poder publicar promociones</div>
		    	}else{
				return (
				<Row>
					<Col xs="3"></Col>
					<Col xs="6" className="centrar">
				<div>
				<Row>
					<div> <hr className="my-2" /></div>	
				</Row>
				<FormGroup>
					<input type="hidden" name="cine" value={this.props.cineLogeado} />
					<InputGroup>
						<Input type="text" name="titulo" placeholder= "Nombre Promoción" id = "input1" required />
					</InputGroup>
				</FormGroup>
				<FormGroup>	
						<Label className="fuente-contacta" for="exampleText">Descripción</Label>
						<Input type="textarea" name="descripcion"  id = "input1" rows="8" />
				</FormGroup>
					<p></p>
					<button className="estiloSeleccion" onClick={this.clickPostPromo}  value="publicar">Publicar Promoción </button>
					<p></p>
				</div>
				</Col>
				</Row>
				);
			}
	}
}
