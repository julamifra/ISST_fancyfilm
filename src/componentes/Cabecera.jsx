import React from 'react';
import logo from './imagenes/LOGO.png';
import './App.css'
import Menu from "./Menu";
import {Jumbotron,Row,Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';


export default class Cabecera extends React.Component {

	constructor(props){
		super(props);
		this.irPrincipal = this.irPrincipal.bind(this);
		this.loginClickCine = this.loginClickCine.bind(this);
		this.loginClickEspectador = this.loginClickEspectador.bind(this);
		this.registroClick = this.registroClick.bind(this);
		this.appClick = this.appClick.bind(this);
		this.salirClick = this.salirClick.bind(this);
		this.toggle = this.toggle.bind(this);
		
		   
    	}

  	irPrincipal(){
  		this.props.appClick("inicio", "");
  	}
	
    loginClickCine(){
		this.props.appClick("login", "cine");
	}
	loginClickEspectador(){
		this.props.appClick("login", "espectador");
	}
  	registroClick(){
  		this.props.appClick("registro", "");
  	}
  	appClick(boton){
  		this.props.appClick(boton, "");
  	}
  	salirClick(){
  		this.props.appSalirClick();
  	}
  	toggle() {
  		this.props.appClickToggle();
  	}


	render() {
		let cineLogeado=this.props.cineLogeado;
		let espectadorLogeado=this.props.espectadorLogeado;
		let dropdownOpen = this.props.dropdownOpen;

		if(cineLogeado !== undefined){
			return(
      			<Jumbotron>
      				<Row>
      				<Col xs="3">
      					<img onClick={this.irPrincipal} className = "App-foto" src={logo} alt="Imagen de cabecera"/>
      				</Col>
			        <Col xs="6" className="fuente-inicio-titulo">
			        	<p>FANCYFILM </p>
			        </Col>
			        <Col xs="3">
          				<button onClick={this.salirClick} className="estiloSeleccion">Salir</button>
			        </Col>
			        </Row>
			        <hr className="my-2" />
			    	<div className="separacion-menu-cine">
			    	<Row>
				    	<Col xs = "4"></Col>
				    	<Col xs="6" className="centrar">
				    		<Menu appClick={this.appClick} espectadorLogeado={espectadorLogeado} cineLogeado={cineLogeado}/>
				    	</Col>
				    	<Col xs ="2"></Col>
			        </Row>
			        </div>
			    </Jumbotron>
		);
		} else if(espectadorLogeado !== undefined){
			return(
      			<Jumbotron>
      				<Row>
      				<Col xs="3">
      					<img onClick={this.irPrincipal} className = "App-foto" src={logo} alt="Imagen de cabecera"/>
      				</Col>
			        <Col xs="6" className="fuente-inicio-titulo">
			        	<p>FANCYFILM </p>
			        </Col>
			        <Col xs="3">
          				<button onClick={this.salirClick} className="estiloSeleccion">Salir</button>
			        </Col>
			        </Row>
			        <hr className="my-2" />
			    	<div className="separacion-menu">
			    	<Row>
				    	<Col ></Col>
				    	<Col className="centrar">
				    		<Menu appClick={this.appClick} espectadorLogeado={espectadorLogeado} cineLogeado={cineLogeado}/>
				    	</Col>
				    	<Col></Col>
			        </Row>
			        </div>
			    </Jumbotron>
		);

		}else{

		return(
      			<Jumbotron>
      				<Row>
      				<Col xs="3">
      					<img onClick={this.irPrincipal} className = "App-foto" src={logo} alt="Imagen de cabecera"/>
      				</Col>
			        <Col xs="6" className="fuente-inicio-titulo">
			        	<p>FANCYFILM </p>
			        </Col>
			        <Col xs="3">
			        	<ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle} className="estiloSeleccion" id="login-ButtonDropDown" >
						        <DropdownToggle caret id="login-DropDownToggle">
						          Login
						        </DropdownToggle>
						        <DropdownMenu id="login-DropDownMenu">
						          	<DropdownItem onClick={this.loginClickCine} id="login-DropDownItem">Cine</DropdownItem>
						          	<DropdownItem divider id="login-DropDownMenu"/>
						          	<DropdownItem  onClick={this.loginClickEspectador} id="login-DropDownItem">Espectador</DropdownItem>
						        </DropdownMenu>
						</ButtonDropdown>
          				<button onClick={this.registroClick} className="estiloSeleccion" >Registro</button>
			        </Col>
			        </Row>
			        <hr className="my-2" />
			        <div className="separacion-menu">
			    	<Row>
				    	<Col ></Col>
				    	<Col className="centrar">
				    		<Menu appClick={this.appClick} espectadorLogeado={espectadorLogeado} cineLogeado={cineLogeado}/>
				    	</Col>
				    	<Col></Col>
			        </Row>
			        </div>
			    </Jumbotron>
		);
	    }
	}
}
