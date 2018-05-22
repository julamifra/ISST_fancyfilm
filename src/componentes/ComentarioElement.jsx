import React from 'react';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

export default class ComentarioElement extends React.Component {

  render() {
      let nombreComent = this.props.coment.espectadorNombre;
      let valoracion = this.props.coment.valoracion;
      let cuerpo = this.props.coment.cuerpo;

          return (  
            <ListGroup>
            <ListGroupItem id = "listGroupItem" color="dark"><h2>{nombreComent} <Badge pill>{valoracion}</Badge></h2></ListGroupItem>
            <ListGroupItem id = "listGroupItem" className="fuente-web">{cuerpo}</ListGroupItem> 
            <div><hr className="my-2" /></div>  
            </ListGroup>    
          );
    }
}


