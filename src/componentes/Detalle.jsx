import React from 'react';
import Cartelera from './peliculas/Cartelera';
import Cines from './cines/Cines';
import FormContacto from './formularios/FormContacto';
import FormPublicarPromo from './formularios/FormPublicarPromo';
import FichaPelicula from './peliculas/FichaPelicula';
import FichaCine from './cines/FichaCine';
import Inicio from './Inicio';

export default class Detalle extends React.Component {
	constructor(props){
		super(props);
		this.detallePelisClick = this.detallePelisClick.bind(this);
		this.detalleCineClick = this.detalleCineClick.bind(this);
		this.fichaPeliculaClickComentario = this.fichaPeliculaClickComentario.bind(this);
		this.fichaCineClickComentario = this.fichaCineClickComentario.bind(this);
		this.clickPostComentario = this.clickPostComentario.bind(this);
		this.clickPostPromo = this.clickPostPromo.bind(this);
		this.fichaCineClickPromociones = this.fichaCineClickPromociones.bind(this);
    	}
    clickPostComentario(email, tipo, nombre, valoracion, cuerpo){
		this.props.clickPostComentario(email, tipo, nombre, valoracion, cuerpo);
	}
	clickPostPromo(cine, titulo, descripcion){
		this.props.clickPostPromo(cine, titulo, descripcion);
	}
	detallePelisClick(peli, urlImg){
        	this.props.appPelisClick(peli, urlImg);
   	}

    detalleCineClick(cine){
       		this.props.appCineClick(cine);
    }
    fichaPeliculaClickComentario(nombre, tipo){
    	this.props.appClickComentario(nombre, tipo);
    }
    fichaCineClickComentario(emailCine, tipo){
    	this.props.appClickComentario(emailCine, tipo);
    }
    fichaCineClickPromociones(emailCine){
    	this.props.appClickPromociones(emailCine);
    }
	render() {
		let boton = this.props.botonSeleccionado;
		let cineLogeado = this.props.cineLogeado;
		let espectadorLogeado = this.props.espectadorLogeado;
		switch(boton){
			case "listaCines":
				return (<div><Cines detalleCineClick={this.detalleCineClick} cines={this.props.cines}/></div>
				);
			case "cartelera":
				return (<div><Cartelera detallePelisClick={this.detallePelisClick} pelis={this.props.pelis}/></div>
				);
			case "promo":
				return (<div><FormPublicarPromo clickPostPromo={this.clickPostPromo} cineLogeado={this.props.cineLogeado}/></div> );
			case "contacto":
				return (<div><FormContacto/></div> );
			case "inicio":
				return (<div><Inicio/></div> );
			case "pelicula":
				return(<FichaPelicula clickPostComentario= {this.clickPostComentario} fichaPeliculaClickComentario={this.fichaPeliculaClickComentario} listaComentarios={this.props.listaComentarios} cineLogeado={cineLogeado} espectadorLogeado={espectadorLogeado} peliculaSeleccionada={this.props.peliculaSeleccionada} imgPeliSelec={this.props.imgPeliSelec} />);
			case "cine":
				return(<FichaCine fichaCineClickPromociones={this.fichaCineClickPromociones} clickPostComentario= {this.clickPostComentario} fichaCineClickComentario={this.fichaCineClickComentario} listaComentarios={this.props.listaComentarios} listaPromociones={this.props.listaPromociones} cineLogeado={cineLogeado} espectadorLogeado={espectadorLogeado} cineSeleccionado={this.props.cineSeleccionado} />);
			default:
				return (<div><Inicio/></div> );
		}
	}
}
