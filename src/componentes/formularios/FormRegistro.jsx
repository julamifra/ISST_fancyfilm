import React from 'react';
import { Col,Row, Container} from 'reactstrap';
import FormRegistroEspectador from './FormRegistroEspectador';
import FormRegistroCine from './FormRegistroCine';

export default class FormRegistro extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      		tipoRegistro: undefined,
   		};
   		this.clickRegistroEspectador = this.clickRegistroEspectador.bind(this);
		this.clickRegistroCine = this.clickRegistroCine.bind(this);
		this.clickTipoEspectador = this.clickTipoEspectador.bind(this);
		this.clickTipoCine = this.clickTipoCine.bind(this);
    	}

    clickTipoEspectador(){
	  	this.setState({
	      tipoRegistro: "espectador",
	    });
  	}
  	clickTipoCine(){
	  	this.setState({
	      tipoRegistro: "cine",
	    });
  	}
  	clickRegistroEspectador(usuario, nombreEspectador, email, password){
    	this.props.clickRegistroEspectador(usuario, nombreEspectador, email, password);
    	this.setState({
	  		tipoRegistro: undefined,
		});
	}
	clickRegistroCine(email, direccion, nombreCine, password){
    	this.props.clickRegistroCine(email, direccion, nombreCine, password);
    	this.setState({
	  		tipoRegistro: undefined,
		});
    }
	

	render() {
		if(this.state.tipoRegistro === undefined){
			return(	
					<Row>
						<Col xs="2"></Col>
						<Col className="centrar"> 
						<div> <hr className="my-2" /></div>
							<button onClick={this.clickTipoEspectador} className="estiloSeleccion">Registro Espectador</button> {' '}
          					<button onClick={this.clickTipoCine} className="estiloSeleccion" >Registro Cine</button>
          					<div> <hr className="my-2" /></div>
          				</Col>
          				<Col xs="2"></Col>
					</Row>
					
				);
		} else if(this.state.tipoRegistro === "espectador"){
			return(
					<Container>
					<Row>
						<Col xs="2"></Col>
						<Col className="centrar"> 
						<div> <hr className="my-2" /></div>
							<button onClick={this.clickTipoEspectador} className="estiloSeleccion">Registro Espectador</button> {' '}
          					<button onClick={this.clickTipoCine} className="estiloSeleccion" >Registro Cine</button>
          					<div> <hr className="my-2" /></div>
          				</Col>
          				<Col xs="2"></Col>
					</Row>
					<Row>
						<Col xs="2"></Col>
						<Col className="centrar">
						<FormRegistroEspectador clickRegistroEspectador={this.clickRegistroEspectador} />
						</Col>
						<Col xs="2"></Col>
					</Row>
					</Container>
				);
		} else if(this.state.tipoRegistro === "cine"){
			return (
			<Container>
			<Row>
				<Col xs="2"></Col>
				<Col className="centrar"> 
				<div> <hr className="my-2" /></div>
					<button onClick={this.clickTipoEspectador} className="estiloSeleccion">Registro Espectador</button> {' '}
  					<button onClick={this.clickTipoCine} className="estiloSeleccion" >Registro Cine</button>
  					<div> <hr className="my-2" /></div>
  				</Col>
  				<Col xs="2"></Col>
			</Row>
			<Row>
				<Col xs="2"></Col>
				<Col className="centrar">
					<FormRegistroCine clickRegistroCine={this.clickRegistroCine} />
				</Col>
				<Col xs="2"></Col>
			</Row>
			</Container>
			
		);

		}
		
	}
}

