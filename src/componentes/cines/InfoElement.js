import React from 'react';
import { Col,Row,Container } from 'reactstrap';
import FormComentario from '../formularios/FormComentario';
import Comentarios from '../Comentarios';
import Promociones from '../Promociones';

export default class InfoElement extends React.Component {
	constructor(props){
		super(props);
		this.clickPostComentario = this.clickPostComentario.bind(this);
    }
	clickPostComentario(email, tipo, nombre, valoracion, cuerpo){
    	this.props.clickPostComentario(email, tipo, nombre, valoracion, cuerpo);
	}

	render(){
		let espectadorLogeado = this.props.espectadorLogeado;
		let vista = this.props.vista;
		let email = this.props.email;
		let listaComentarios = this.props.listaComentarios;
		let listaPromociones = this.props.listaPromociones;
		if(espectadorLogeado !== undefined){
		if(vista === "comentarios"){
		return(
			<Container>
				<Row>
					<Col xs="2"></Col>
					<Col className="centrar">
						<FormComentario clickPostComentario={this.clickPostComentario} tipo="cine" nombre={email} espectadorLogeado={this.props.espectadorLogeado} />
					<p></p>
					</Col>
					<Col xs="2"></Col>
				</Row>
				<div> <hr className="my-2" /></div>
				<Row>
					<Comentarios listaComentarios={listaComentarios}/>
				</Row>

			</Container>
		);
	   }
	   if(vista === "promociones"){
		return(
			<Container>
				<Row>
					<Promociones listaPromociones={listaPromociones}/>
				</Row>

			</Container>

		);
	   }
	   if(vista === "horarios"){
		return(
			<div>
				AQUI VA LISTA HORARIOS
			</div>

		);
	   }
	}else {
		if(vista === "comentarios"){
		return(
			<div>
				<Row>
	            	<Comentarios listaComentarios={listaComentarios}/>
				</Row>
			</div>

		);
	   }
	   if(vista === "promociones"){
		return(
			<Container>
				<Row>
					<Promociones listaPromociones={listaPromociones}/>
				</Row>

			</Container>

		);
	   }
	   if(vista === "horarios"){
		return(
			<div>
				AQUI VA LISTA HORARIOS
			</div>

		);
	   }

	}
	}
}
