import React from 'react';
import { ListGroup, ListGroupItem, Badge} from 'reactstrap';
export default class PromocionElement extends React.Component {

  render() {
      let nombrePromo = this.props.promo.titulo;
      let cuerpo = this.props.promo.descripcion;

          return (  
             <ListGroup >
            <ListGroupItem id = "listGroupItem" color="dark"><h2> {nombrePromo} <Badge color="warning" pill>NEW</Badge></h2></ListGroupItem>
            <ListGroupItem id = "listGroupItem"  className="fuente-web">{cuerpo}</ListGroupItem>
            <div><hr className="my-2" /></div>   
            </ListGroup>
          );
    }
}