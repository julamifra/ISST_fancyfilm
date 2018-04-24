import React from 'react';
import FormComentario from './FormComentario';
import imagenCartel from './gorrion-rojo-cartel.jpg';

export default class FichaPelicula extends React.Component {

	render() {
		
			      let peli = this.props.peliculaSeleccionada;
			      //console.log(peli);
			      let nombre = peli.nombre;
			      let genero = peli.genero;
			      let año = peli.año;
			      let pais = peli.pais;
			      let directorNombre = peli.directorNombre;
			      let idioma = peli.idioma;
			      //let cartel = peli.cartel;
			      let trailer = peli.trailerURL;
			      let urlImg = "http://localhost:8080/ISST/ImgPeliculaServlet?name="+ nombre;
			
				return (
      			<div>
      			<img src={urlImg} alt='logo' className = "cartel"/>
	      			<div className = "info-peli">
			              	<ul className="estiloLista">
				                <li> nombre:{nombre} </li>
				                <p> </p>
				                <li> genero:{genero} </li>
				                <p> </p>
				                <li> año:{año}</li>
				                <p> </p>
				                <li> pais:{pais} </li>
				                <p> </p>
				                <li> director:{directorNombre} </li>
				                <p> </p>
				                <li> idioma:{idioma} </li>
			              	</ul>
					<p className="trampa"></p>
	           		 </div>
				
				 <iframe src={trailer} title={nombre} className="trailer" allowFullScreen></iframe>
	           		 <FormComentario nombrePeli={nombre}/>
	           		 
           		</div>
      		);
  		     
  	}
}
