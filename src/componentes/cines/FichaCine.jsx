import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import InfoElement from './InfoElement';

export default class FichaCine extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      vista: undefined,
    };
    this.clickPostComentario = this.clickPostComentario.bind(this);
    this.verHorarios = this.verHorarios.bind(this);
    this.comentariosClick = this.comentariosClick.bind(this);
    this.promocionesClick = this.promocionesClick.bind(this);
  }
  clickPostComentario(email, tipo, nombre, valoracion, cuerpo){
      this.props.clickPostComentario(email, tipo, nombre, valoracion, cuerpo);
  }
  comentariosClick(){
    this.setState({
        vista: "comentarios",
    });
    this.props.fichaCineClickComentario(this.props.cineSeleccionado.email, "cine");
  }
  promocionesClick(){
    this.setState({
        vista: "promociones",
    });
    this.props.fichaCineClickPromociones(this.props.cineSeleccionado.email);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  verHorarios(){
      this.setState({
        vista: "horarios",
      }); 
    }
  componentDidMount(){
            window.scrollTo(0,0);
      }
  render() {
        let cine = this.props.cineSeleccionado;
        let cineLogeado = this.props.cineLogeado;
        let espectadorLogeado = this.props.espectadorLogeado;
        let listaComentarios = this.props.listaComentarios;
        let listaPromociones = this.props.listaPromociones;
          let nombre = cine.nombreCine;
          let direccion = cine.direccion;
          let email = cine.email;
      if(this.state.vista === undefined){
        return (
              <Container>
                    <Row>
                      <Col className="fuente-ficha">
                        <p>{nombre}</p>
                      </Col>
                    </Row>
                    <div> <hr className="my-2" /></div>
                    <Row>
                      <Col xs="6">
                        <ListGroup >
                          <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Dirección</Badge> {direccion}</ListGroupItem>
                          <ListGroupItem id = "listGroupItem" className="fuente-web"><Badge color="secondary">Email</Badge>     {email}</ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col xs="6">
                         <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle color="secondary">
                        Información
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.comentariosClick}>Ver Comentarios</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.promocionesClick}>Ver Promociones</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                      </Col>
                    </Row>
                    <div> <hr className="my-2" /></div>
            </Container>

            );
        }else{
          return(
            <Container>
                    <Row>
                      <Col className="fuente-ficha">
                        <p>{nombre}</p>
                      </Col>
                    </Row>
                    <div> <hr className="my-2" /></div>
                    <Row>
                      <Col xs="6">
                      <ListGroup >
                          <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Dirección</Badge> {direccion}</ListGroupItem>
                          <ListGroupItem id = "listGroupItem" className="fuente-web" ><Badge color="secondary">Email</Badge>     {email}</ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col xs="6">
                         <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle color="secondary">
                        Información
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={this.comentariosClick}>Ver Comentarios</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.promocionesClick}>Ver Promociones</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                      </Col>
                    </Row>
                    <div> <hr className="my-2" /></div>
                    <Row>
                      <InfoElement listaPromociones={listaPromociones} listaComentarios={listaComentarios} clickPostComentario={this.clickPostComentario} vista={this.state.vista} email={email} espectadorLogeado={espectadorLogeado} cineLogeado={cineLogeado} />
                    </Row>
                </Container>

            );
        }
      }
}
