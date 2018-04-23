import React from 'react';
import Cartelera from './Cartelera';
import Cines from './Cines';
import Contacto from './Contacto';
import Promociones from './Promociones';
import FichaPelicula from './FichaPelicula';
import FichaCine from './FichaCine';
import Inicio from './Inicio';

export default class Detalle extends React.Component {
	constructor(props){
		super(props);
		this.detallePelisClick = this.detallePelisClick.bind(this);
		this.detalleCineClick = this.detalleCineClick.bind(this);
    	}

	detallePelisClick(peli){
        	this.props.appPelisClick(peli);
   	}

    	detalleCineClick(cine){
       		this.props.appCineClick(cine);
    	}

	render() {
		let boton = this.props.botonSeleccionado;
		switch(boton){
			case "listaCines":
				return (<div><Cines detalleCineClick={this.detalleCineClick} cines={this.props.cines}/></div>
				);
			case "cartelera":
				return (<div><Cartelera detallePelisClick={this.detallePelisClick} pelis={this.props.pelis}/></div>
				);
			case "promo":
				return (<div><Promociones cineLogeado={this.props.cineLogeado}/></div> );
			case "contacto":
				return (<div><Contacto/></div> );
			case "inicio":
				return (<div><Inicio/></div> );
			case "pelicula":
				return(<div><FichaPelicula peliculaSeleccionada={this.props.peliculaSeleccionada}/></div>);
			case "cine":
				return(<div className="info-cine"><FichaCine cineSeleccionado={this.props.cineSeleccionado}/></div>);
			default:
				return (<div><Inicio/></div> );
		}
	}
}
