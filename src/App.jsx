import React from 'react';
import './App.css';
import $ from 'jquery';
import {Row,Col, Alert} from 'reactstrap';
import trello from './componentes/imagenes/trello.png';
import github from './componentes/imagenes/github.png';


import Cabecera from "./componentes/Cabecera";
import Detalle from "./componentes/Detalle";
import Publi from "./componentes/Publi";
import FormRegistro from "./componentes/formularios/FormRegistro";
import FormLogin from "./componentes/formularios/FormLogin";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      	botonSeleccionado: "inicio",
		pelis: undefined,
        peliculaSeleccionada: undefined,
        imgPeliSelec: undefined,
        cineSeleccionado: undefined,
		cines: undefined,
		cineLogeado: undefined,
		espectadorLogeado: undefined,
		listaComentarios: undefined,
		listaPromociones: undefined,
		visibleLogin: false,
		visibleRegistro: false,
		visiblePromo: false,
		visibleComent: false,
		visibleError: false,
		dropdownOpen: false,
		tipo: undefined
		
    };
    this.appClick=this.appClick.bind(this);
    this.appPelisClick=this.appPelisClick.bind(this);
    this.appCineClick=this.appCineClick.bind(this);
    this.clickLogin=this.clickLogin.bind(this);
    this.clickRegistroCine=this.clickRegistroCine.bind(this);
    this.clickRegistroEspectador=this.clickRegistroEspectador.bind(this);
    this.appSalirClick=this.appSalirClick.bind(this);
    this.appClickComentario=this.appClickComentario.bind(this);
    this.clickPostComentario=this.clickPostComentario.bind(this);
    this.clickPostPromo = this.clickPostPromo.bind(this);
    this.appClickPromociones = this.appClickPromociones.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.appClickToggle = this.appClickToggle.bind(this);
  }

  onDismiss(){
  	this.setState({
  		visibleLogin: false,
		visibleRegistro: false,
		visiblePromo: false,
		visibleComent: false,
		visibleHorario: false,
		visibleError: false,})
  }

  appClickToggle(){
  	  this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  clickPostComentario(email, tipo, nombre, valoracion, cuerpo){
  	$.ajax({
  			url: "http://localhost:8080/ISST/NuevoComentarioServlet?email="+email+"&tipo="+tipo+"&nombre="+nombre+"&valoracion="+valoracion+ "&cuerpo="+cuerpo,
  	}).done(function(data){
  			if((data==="200OK")&&(tipo === "pelicula")){
		  				this.setState({
		  				botonSeleccionado: "cartelera",
		  				visibleComent: true,
		  				});
			}else if((data==="200OK")&&(tipo === "cine")){
		  				this.setState({
		  				botonSeleccionado: "listaCines",
		  				visibleComent: true,
		  				});
			}else{
		  				
	  				
	  				}
  	}.bind(this));
  }
  clickPostPromo(cine, titulo, descripcion){
  	$.ajax({
  			url: "http://localhost:8080/ISST/NuevaPromoServlet?cine="+cine+"&titulo="+titulo+"&descripcion="+descripcion,
  	}).done(function(data){
  			if(data==="200OK"){
		  				this.setState({
		  				botonSeleccionado: "inicio",
		  				visiblePromo: true,
		  				});
			}
  	}.bind(this));
  }
  appClick(boton, tipo){
    	this.setState({
    		listaComentarios: undefined,
      		botonSeleccionado: boton,
      		tipo: tipo

    	});
	switch(boton){
			case "listaCines":
				$.ajax({
  					url: "http://localhost:8080/ISST/CinesServlet",
  				})
  				.done(function(data){
	  				this.setState({
	  					listaComentarios: undefined,
	  					cines: data,
	  				});
  				}.bind(this));
				break;
			case "cartelera":
				$.ajax({
  					url: "http://localhost:8080/ISST/CarteleraServlet",
  				})
  				.done(function(data){
  					//console.log(data);
	  				this.setState({
	  					listaComentarios: undefined,
	  					pelis: data,
	  				});
  				}.bind(this));
				break;
			default:
				break;
		}
  }

  appPelisClick(peli, urlImg){
    this.setState({
          botonSeleccionado: "pelicula",
          peliculaSeleccionada: peli,
          imgPeliSelec: urlImg,
    });
  }

  appCineClick(cine){
    this.setState({
          botonSeleccionado: "cine",
          cineSeleccionado: cine
    });
    console.log("Se ha seleccionado el cine: "+cine.nombreCine);
  }
  appSalirClick(){
  	this.setState({
  		listaComentarios: undefined,
  		espectadorLogeado: undefined,
  		cineLogeado: undefined,
  	})

  }
  clickLogin(email, tipo, password){
  	switch(tipo){
  		case "cine":
  			$.ajax({
  					url: "http://localhost:8080/ISST/LoginServlet?email="+email+"&tipo="+tipo+"&password="+password,
  			}).done(function(data){
  					if(data===email){
		  				this.setState({
		  					botonSeleccionado: "inicio",
		          				cineLogeado: data,
		          				visibleLogin: true,
		  				});
	  				console.log("El email del cine logeado es: "+data);
	  				}else{
		  				console.log("No se ha podido logear");
	  					this.setState({
	  						botonSeleccionado: "login",
	  						visibleError: true,
	  					});
	  				}
  			}.bind(this));
  			break;
  		case "espectador":
  			$.ajax({
  					url: "http://localhost:8080/ISST/LoginServlet?email="+email+"&tipo="+tipo+"&password="+password,
  			}).done(function(data){
  					if(data===email){
		  				this.setState({
		  					botonSeleccionado: "inicio",
		          				espectadorLogeado: data,
		          				visibleLogin: true,
						});
		  			console.log("El email del espectador logeado es: "+data);
		  			}else{
		  				console.log("No se ha podido logear");
	  					this.setState({
	  						botonSeleccionado: "login",
	  						visibleError: true,
	  					});
	  				}
  			}.bind(this));
	    		break;
  		default:
  			console.log("Errooooooor");
  			break;

  	}
  }
  clickRegistroEspectador(usuario, nombreEspectador, email, password){
    $.ajax({
  	url: "http://localhost:8080/ISST/NuevoEspectadorServlet?nombreEspectador="+nombreEspectador+"&email="+email+"&usuario="+usuario+"&password="+password,
    }).done(function(data){
    	this.setState({
    		visibleRegistro: true,
    	});
  	}.bind(this));
  }
  clickRegistroCine(email, direccion, nombreCine, password){
    $.ajax({
  	url: "http://localhost:8080/ISST/NuevoCineServlet?email="+email+"&direccion="+direccion+"&nombreCine="+nombreCine+"&password="+password,
    }).done(function(data){
    	this.setState({
    		visibleRegistro: true,
    	});
  	}.bind(this));
  }
  appClickComentario(nombre, tipo){
  	$.ajax({
  			url: "http://localhost:8080/ISST/ComentariosServlet?name="+nombre+"&tipo="+tipo,
  	}).done(function(data){
	  		this.setState({
	  			listaComentarios: data,
	  		});
  	}.bind(this));
  }
  appClickPromociones(emailCine){
  	$.ajax({
  			url: "http://localhost:8080/ISST/PromocionesServlet?emailCine="+emailCine,
  	}).done(function(data){
	  		this.setState({
	  			listaPromociones: data,
	  		});
  	}.bind(this));
  }
  componentDidMount(){
            window.scrollTo(0,0);
      }
      
  render() {
if(this.state.botonSeleccionado === "login"){
			return (
				 <div className="fondo">
					 <Alert color="danger" isOpen={this.state.visibleError} toggle={this.onDismiss}>
				      	No existe ese usuario! comprueba el email y la contraseña...
				      </Alert>
						<header>
				  			<Cabecera appClick={this.appClick} dropdownOpen={this.state.dropdownOpen}  appClickToggle={this.appClickToggle} />
						</header>
					<div>
				  	 	 <div className="fondo-central">
							<FormLogin clickLogin={this.clickLogin} tipo={this.state.tipo} />
					  	 </div>
				    </div>

				    <div>
						<Row>
							<Publi/>
						</Row>
					</div>

		      	   <footer className="estiloFooter">
					<Row xs = "3" >
						<p className="fuente-inicio-footer">FANCYFILM </p>
					</Row>
					<Row>
						<Col className="col-footer">
							<a> © 2018 Copyright: The FancyFilm Team </a>
						</Col>
						<Col className="col-footer" xs="3">
							<a href="https://trello.com/b/z7GpfQQM/fancyfilm">
								<i> <img src={trello} alt="Link tablero trello" /> </i>
							</a>
							<a href="https://github.com/julamifra/ISST_fancyfilm">
								<i> <img src={github} alt="Link repositorio de GitHub" /> </i>
							</a>
						</Col>
					</Row>
				</footer>
		      	   </div>
		    );
	}else if(this.state.botonSeleccionado === "registro"){
			return (
			      <div className="fondo">
			      	<Alert color="warning" isOpen={this.state.visibleRegistro} toggle={this.onDismiss}>
        				Se ha registrado correctmente
      				</Alert>
						<header>
				  			<Cabecera appClick={this.appClick} dropdownOpen={this.state.dropdownOpen}  appClickToggle={this.appClickToggle} />
						</header>
					<div>
				  	 	 <div className="fondo-central">
							<FormRegistro clickRegistroCine={this.clickRegistroCine} clickRegistroEspectador={this.clickRegistroEspectador}/>
					  	 </div>
				    </div>

				    <div>
						<Row>
							<Publi/>
						</Row>
					</div>

		      	   <footer className="estiloFooter">
					<Row>
						<p className="fuente-inicio-footer">FANCYFILM </p>
					</Row>
					<Row>
						<Col className="col-footer">
							<a> © 2018 Copyright: The FancyFilm Team </a>
						</Col>
						<Col className="col-footer" xs="3">
							<a href="https://trello.com/b/z7GpfQQM/fancyfilm">
								<i> <img src={trello} alt="Link tablero trello"/> </i>
							</a>
							<a href="https://github.com/julamifra/ISST_fancyfilm">
								<i> <img src={github} alt="Link repositorio de GitHub"/> </i>
							</a>
						</Col>
					</Row>
				</footer>
		      	   </div>
		    );

	}else if((this.state.espectadorLogeado !== undefined)||(this.state.cineLogeado !== undefined)){
			return (
		      <div className="fondo">
		      	<Alert color="success" isOpen={this.state.visibleLogin} toggle={this.onDismiss}>
        			Se ha identificado correctmente
      			</Alert>
      			<Alert color="info" isOpen={this.state.visiblePromo} toggle={this.onDismiss}>
        			Se ha añadido la promoción correctamente
      			</Alert>
      			<Alert color="dark" isOpen={this.state.visibleComent} toggle={this.onDismiss}>
        			Se ha publicado el comentario correctamente
      			</Alert>
      			
				<header>
			  		<Cabecera dropdownOpen={this.state.dropdownOpen}  appClickToggle={this.appClickToggle} appClick={this.appClick} appSalirClick={this.appSalirClick} espectadorLogeado={this.state.espectadorLogeado} cineLogeado={this.state.cineLogeado} />
				</header>


				<div className="fondo-central">
					<Row>
			  			<Col>
			  				<div>
			  					<Detalle appClickPromociones={this.appClickPromociones} listaPromociones={this.state.listaPromociones} clickPostPromo={this.clickPostPromo} clickPostComentario={this.clickPostComentario} listaComentarios={this.state.listaComentarios} appClickComentario={this.appClickComentario} espectadorLogeado={this.state.espectadorLogeado} cineLogeado={this.state.cineLogeado} appPelisClick={this.appPelisClick} appCineClick={this.appCineClick} botonSeleccionado={this.state.botonSeleccionado} pelis={this.state.pelis} cines={this.state.cines} peliculaSeleccionada={this.state.peliculaSeleccionada} imgPeliSelec={this.state.imgPeliSelec} cineSeleccionado={this.state.cineSeleccionado} />
			  				</div>
			  			</Col>
			  			
			  		</Row>
				</div>

				<div>
					<Row>
						<Publi/>
					</Row>
				</div>


				<footer className="estiloFooter">
					<Row>
						<p className="fuente-inicio-footer">FANCYFILM </p>
					</Row>
					<Row>
						<Col className="col-footer">
							<a> © 2018 Copyright: The FancyFilm Team </a>
						</Col>
						<Col className="col-footer" xs="3">
							<a href="https://trello.com/b/z7GpfQQM/fancyfilm">
								<i> <img src={trello} alt="Link tablero trello"/> </i>
							</a>
							<a href="https://github.com/julamifra/ISST_fancyfilm">
								<i> <img src={github} alt="Link repositorio de GitHub"/> </i>
							</a>
						</Col>
					</Row>
				</footer>
		      </div>
		    );

	}else{
		    return (
		      <div className="fondo">
				<header>
			  		<Cabecera appClick={this.appClick} dropdownOpen={this.state.dropdownOpen}  appClickToggle={this.appClickToggle} />
				</header>


				<div className="fondo-central">
					<Row>
			  			<Col>
			  				<div>
			  					<Detalle appClickPromociones={this.appClickPromociones} listaPromociones={this.state.listaPromociones} listaComentarios={this.state.listaComentarios} appClickComentario={this.appClickComentario} appPelisClick={this.appPelisClick} appCineClick={this.appCineClick} botonSeleccionado={this.state.botonSeleccionado} pelis={this.state.pelis} cines={this.state.cines} peliculaSeleccionada={this.state.peliculaSeleccionada} imgPeliSelec={this.state.imgPeliSelec} espectadorLogeado={this.state.espectadorLogeado} cineSeleccionado={this.state.cineSeleccionado} cineLogeado={this.state.cineLogeado}/>
			  				</div>
			  			</Col>
			  			
			  		</Row>
				</div>

				<div>
					<Row>
						<Publi/>
					</Row>
				</div>


				<footer className="estiloFooter">
					<Row>
						<p className="fuente-inicio-footer">FANCYFILM </p>
					</Row>
					<Row>
						<Col className="col-footer">
							<a> © 2018 Copyright: The FancyFilm Team </a>
						</Col>
						<Col className="col-footer" xs="3">
							<a href="https://trello.com/b/z7GpfQQM/fancyfilm">
								<i> <img src={trello} alt="Link tablero trello"/> </i>
							</a>
							<a href="https://github.com/julamifra/ISST_fancyfilm">
								<i> <img src={github} alt="Link repositorio de GitHub"/> </i>
							</a>
						</Col>
					</Row>
				</footer>
		      </div>
		    );
	}
  }
}

export default App;
