import React from 'react';
import './App.css' 
import {
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Menu extends React.Component {

	constructor(props){
		super(props);
		this.irAlgoCi = this.irAlgoCi.bind(this);
		this.irAlgoCa = this.irAlgoCa.bind(this);
		this.irAlgoCo = this.irAlgoCo.bind(this);
		this.irAlgoPro = this.irAlgoPro.bind(this);
    	}

  	irAlgoCi(){
  		this.props.appClick("listaCines");
  	}
	irAlgoCa(){
  		this.props.appClick("cartelera");
  	}
	irAlgoCo(){
  		this.props.appClick("contacto");
  	}
	irAlgoPro(){
  		this.props.appClick("promo");
  	}
  	

	render() {
    let cineLogeado=this.props.cineLogeado;
    let espectadorLogeado=this.props.espectadorLogeado;
    if((cineLogeado !== undefined)&&(espectadorLogeado === undefined)){
		return (
			<Nav tabs>
          <NavItem>
            <NavLink id="IrCartelera" onClick={this.irAlgoCa} >Cartelera</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrCine" onClick={this.irAlgoCi} >Cine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrContacto" onClick={this.irAlgoCo} >Contactar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrPromo" onClick={this.irAlgoPro} >Publicar Promoción</NavLink>
          </NavItem>
        </Nav>
      
		);
	  }else if((espectadorLogeado !== undefined)&&(cineLogeado === undefined)){
        return (
      <Nav tabs>
          <NavItem>
            <NavLink id="IrCartelera" onClick={this.irAlgoCa} >Cartelera</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrCine" onClick={this.irAlgoCi} >Cine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrContacto" onClick={this.irAlgoCo} >Contactar</NavLink>
          </NavItem>
        </Nav>
        );

    }else{
       return (
       <Nav tabs>
          <NavItem>
            <NavLink id="IrCartelera" onClick={this.irAlgoCa} >Cartelera</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrCine" onClick={this.irAlgoCi} >Cine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="IrContacto" onClick={this.irAlgoCo} >Contactar</NavLink>
          </NavItem>
        </Nav>
        );
    }

  }
}



