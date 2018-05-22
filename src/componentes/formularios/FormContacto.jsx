import React from 'react';
import mail from '../imagenes/email.svg';
import phone from '../imagenes/telefono.svg';
import {Col,Row} from 'reactstrap';


export default class FormContacto extends React.Component {

	sendMail(){
		var link ="mailto:fancyfilmmisst@gmail.com";

		window.location.href=link;
	}

	render() {
		return (
			<Row>
			<Col xs="2"></Col>
			<Col className="centrar fuente-contacta">
					<p> Puede contactar con nosotros en nuestras oficinas en las mesitas del hall del</p>
					<p> edificio A de la Escuela Técnica Superior de Ingenieros de Telecomunicación.</p>
					<p></p>
					<div> <hr className="my-2" /></div>
					<p>También puede contactar con nosotros vía telefónica a través del siguiente número:</p>
					<p className="estilo-telefono"> <img src={phone} alt="telefono" onClick={this.sendMail} className="phone"/> +34 91 336 72 43</p>
					<p> </p>
					<div> <hr className="my-2" /></div>
					<p> Finalmente puede contactar vía correo electrónico: </p>
					<img src={mail} alt="email" onClick={this.sendMail} className="mailTo"/>
					<p></p>
			</Col>
			<Col xs="2"></Col>
			</Row>
			
				
			
		);
	}
}
