import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, Button, CardBody, CardText } from 'reactstrap';

export default class CarteleraElement extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      urlImg: "http://localhost:8080/ISST/ImgPeliculaServlet?name="+this.props.peli.nombre,
    };
    this.clickPeli = this.clickPeli.bind(this);
    }
  clickPeli(){
        this.props.detallePelisClick(this.props.peli, this.state.urlImg);
  }

  render() {
      let nombrePeli = this.props.peli.nombre;
      let genero = this.props.peli.genero;
      let fecha = this.props.peli.año;
      let dir = this.props.peli.directorNombre;
      //let urlImg = "http://localhost:8080/ISST/ImgPeliculaServlet?name="+ nombrePeli;

          return (  
              <Card>
                <CardImg  width="560px"  height="400px" src={this.state.urlImg} alt="Cartel película"/>
                <CardBody id="cardColumns">
                  <CardTitle>{nombrePeli}</CardTitle>
                  <CardSubtitle>{genero}</CardSubtitle>
                  <CardText>{fecha} , {dir}</CardText>
                  <Button outline color="secondary" onClick={this.clickPeli}>Ver Ficha </Button>
                </CardBody>
              </Card>
          );
    }
}


