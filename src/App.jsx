import React from 'react';
import './App.css';
import $ from 'jquery';

import Cabecera from "./componentes/Cabecera";
import Menu from "./componentes/Menu";
import Detalle from "./componentes/Detalle";
import Publi from "./componentes/Publi";
import FormLogin from "./componentes/FormLogin";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      	botonSeleccionado: "inicio",
	pelis: undefined,
        peliculaSeleccionada: undefined,
        cineSeleccionado: undefined,
	cines: undefined,
	cineLogeado: undefined,
    };
    this.appClick=this.appClick.bind(this);
    this.appPelisClick=this.appPelisClick.bind(this);
    this.appCineClick=this.appCineClick.bind(this);
    this.clickLogin=this.clickLogin.bind(this);
  }

  appClick(boton){
    	this.setState({
      		botonSeleccionado: boton
    	});
	switch(boton){
			case "listaCines":
				$.ajax({
  					url: "http://localhost:8080/ISST/CinesServlet",
  				})
  				.done(function(data){
	  				this.setState({
	  					cines: data,
	  				});
  				}.bind(this));
				break;
			case "cartelera":
				$.ajax({
  					url: "http://localhost:8080/ISST/CarteleraServlet",
  				})
  				.done(function(data){
	  				this.setState({
	  					pelis: data,
	  				});
  				}.bind(this));
				break;
			default:
				break;
		}
  }

  appPelisClick(peli){
    this.setState({
          botonSeleccionado: "pelicula",
          peliculaSeleccionada: peli
    });
  }

  appCineClick(cine){
    this.setState({
          botonSeleccionado: "cine",
          cineSeleccionado: cine
    });
  }
  clickLogin(nombreCineLogeado, direccion){
    this.setState({
          botonSeleccionado: "inicio",
          cineLogeado: nombreCineLogeado,
    });
    $.ajax({
  	url: "http://localhost:8080/ISST/NuevoCineServlet?nombreCine="+nombreCineLogeado+"&direccion="+direccion,
    });
  }

  render() {
if(this.state.botonSeleccionado === "login"){
			return (
			      <div>
				<header>
				  <Cabecera appClick={this.appClick}/>
				</header>

				<h1>
				  <Menu appClick={this.appClick}/>
				</h1>
				<div>
				  	  <div className="mover-centro">
						<FormLogin clickLogin={this.clickLogin} />
					  </div>
				</div>
		      	      </div>
		    );
		
	}else{
		    return (
		      <div>
			<header>
			  <Cabecera appClick={this.appClick}/>
			</header>

			<h1>
			  <Menu appClick={this.appClick}/>
			</h1>
			<div>
			  <div className ="mover-izq">
			    <Publi/>
			  </div>
			  <div className ="mover-der">
			    <Publi/>
			  </div>
			  <div className="mover-centro">
			  <Detalle appPelisClick={this.appPelisClick} appCineClick={this.appCineClick} botonSeleccionado={this.state.botonSeleccionado} pelis={this.state.pelis} cines={this.state.cines} peliculaSeleccionada={this.state.peliculaSeleccionada} cineSeleccionado={this.state.cineSeleccionado} cineLogeado={this.state.cineLogeado}/>
			  </div>
			</div>
		      </div>
		    );
	}
  }
}

export default App;
