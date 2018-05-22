import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import FormComentario from '../formularios/FormComentario';
import Comentarios from '../Comentarios';
import SelectorHorarios from './SelectorHorarios';

export default class FichaPelicula extends React.Component {
      constructor(props){
            super(props);
            this.comentariosClick=this.comentariosClick.bind(this);
            this.clickPostComentario=this.clickPostComentario.bind(this);
      }
      clickPostComentario(email, tipo, nombre, valoracion, cuerpo){
            this.props.clickPostComentario(email, tipo, nombre, valoracion, cuerpo);
      }
      comentariosClick(){
            this.props.fichaPeliculaClickComentario(this.props.peliculaSeleccionada.nombre, "pelicula");
      }
      componentDidMount(){
            window.scrollTo(0,0);
      }
      render() {
            
                        let peli = this.props.peliculaSeleccionada;
                        let nombre = peli.nombre;
                        let genero = peli.genero;
                        let año = peli.año;
                        let pais = peli.pais;
                        let directorNombre = peli.directorNombre;
                        let idioma = peli.idioma;
                        let cartel = this.props.imgPeliSelec;
                        let trailer = peli.trailerURL;
                        //let urlImg = "http://localhost:8080/ISST/ImgPeliculaServlet?name="+ nombre;
                        let listaComentarios = this.props.listaComentarios;
                  
                        let espectadorLogeado = this.props.espectadorLogeado;
                        let cineLogeado = this.props.cineLogeado;
                        let sinopsis = peli.sinopsis;

                        if(espectadorLogeado === undefined){
                              if(cineLogeado === undefined){
                                    return (
                              <Container>
                                          
                                          <Row>
                                          <Col className="fuente-ficha">
                                                <div> <hr className="my-2" /></div>
                                                <p>{nombre}</p>
                                          </Col>
                                          </Row>
                                          <Row>
                                                <Col>
                                                      <img className="img-fichaPelicula" src={cartel} alt="Cartel película"/>
                                                </Col>
                                                <Col>
                                                <ListGroup className="info-peli">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Género</Badge> {genero}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Año</Badge> {año}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">País</Badge> {pais} </ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Director</Badge> {directorNombre}</ListGroupItem>
                                                  <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Idioma</Badge> {idioma}</ListGroupItem>
                                                </ListGroup>

                                                <iframe src={trailer} title={nombre} className="trailer" allowFullScreen></iframe>
                                                </Col>
                                          </Row>
                                          <div> <hr className="my-2" /></div>
                                          <Row><Col>
                                                <ListGroup className="info-peli-sinopsis">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Sinopsis</Badge> {sinopsis}</ListGroupItem>       
                                                </ListGroup>
                                          </Col></Row>
                                          <div> <hr className="my-2" /></div>
                                          <div className="centrar">
                                                <button onClick={this.comentariosClick} className="estiloSeleccion">Ver comentarios</button>
                                          </div>
                                          <div> <hr className="my-2" /></div>
                                          <Row>
                                                <Comentarios listaComentarios={listaComentarios}/>
                                          </Row>
                              </Container>
                              );
                              }else{
                                    return (
                              <Container> 
                                          <Row>
                                          <Col className="fuente-ficha">
                                                <div> <hr className="my-2" /></div>
                                                <p>{nombre}</p>
                                          </Col>
                                          </Row>
                                          <Row>
                                                <Col>
                                                      <img className="img-fichaPelicula" src={cartel} alt="Cartel película"/>
                                                </Col>
                                                <Col>
                                                <ListGroup className="info-peli">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Género</Badge> {genero}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Año</Badge> {año}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">País</Badge> {pais} </ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Director</Badge> {directorNombre}</ListGroupItem>
                                                  <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Idioma</Badge> {idioma}</ListGroupItem>
                                                </ListGroup>

                                                <iframe src={trailer} title={nombre} className="trailer" allowFullScreen></iframe>
                                                </Col>
                                          </Row>
                                          <div> <hr className="my-2" /></div>
                                          <Row><Col>
                                                <ListGroup className="info-peli-sinopsis">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Sinopsis</Badge> {sinopsis}</ListGroupItem>       
                                                </ListGroup>
                                          </Col></Row>
                                          <div> <hr className="my-2" /></div>

                                          <div className="centrar">
                                             <button onClick={this.comentariosClick} className="estiloSeleccion">Ver comentarios</button>
                                             <div> <hr className="my-2" /></div>
                                             <SelectorHorarios/>
                                          
                                          </div>
                                          <div> <hr className="my-2" /></div>
                                          <Row>
                                                <Comentarios listaComentarios={listaComentarios}/>
                                          </Row>
                                      </Container>
                              );
                              }
                                      
                  } else{
                        return (
                              <Container>
                                          <Row>
                                          <Col className="fuente-ficha">
                                                <div> <hr className="my-2" /></div>
                                                <p>{nombre}</p>
                                          </Col>
                                          </Row>
                                          <Row>
                                                <Col>
                                                      <img className="img-fichaPelicula" src={cartel} alt="Cartel película"/>
                                                </Col>
                                                <Col>
                                                <ListGroup className="info-peli">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Género</Badge> {genero}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Año</Badge> {año}</ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">País</Badge> {pais} </ListGroupItem>
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Director</Badge> {directorNombre}</ListGroupItem>
                                                  <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Idioma</Badge> {idioma}</ListGroupItem>
                                                </ListGroup>

                                                <iframe src={trailer} title={nombre} className="trailer" allowFullScreen></iframe>
                                                </Col>
                                          </Row>
                                          <div> <hr className="my-2" /></div>
                                          <Row><Col>
                                                <ListGroup className="info-peli-sinopsis">
                                                <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Sinopsis</Badge> {sinopsis}</ListGroupItem>       
                                                </ListGroup>
                                          </Col></Row>
                                          <div> <hr className="my-2" /></div>

                                          <Row>
                                                <Col className ="centrar">
                                                      <FormComentario clickPostComentario= {this.clickPostComentario} tipo="pelicula" nombre={nombre} espectadorLogeado={this.props.espectadorLogeado} />
                                                      <p></p>
                                                </Col>
                                          </Row>
                                          <div className="centrar">
                                                <button onClick={this.comentariosClick} className="estiloSeleccion">Ver comentarios</button>
                                          </div>
                                          <div> <hr className="my-2" /></div>
                                          <Row>
                                                <Comentarios listaComentarios={listaComentarios}/>
                                          </Row>

                                      </Container>    
                              );
            }
      }
}

