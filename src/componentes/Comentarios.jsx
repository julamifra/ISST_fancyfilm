import React from 'react';
import ComentarioElement from './ComentarioElement';
import { ListGroup} from 'reactstrap';

export default class Comentarios extends React.Component { 

    render() {
          let listaComentarios = this.props.listaComentarios;
                  
            if(listaComentarios === undefined){
                return (
                        <div></div>
                );
            }else{
                let lista = listaComentarios.map((coment, numeroComent) => {
                    let mykey = "" + numeroComent;
                    
                    return (
                      <ComentarioElement key={mykey} coment={coment}/>
                    );
                });      
                return( <div className ="tamaño-promo">
                          <ListGroup>
                              {lista}
                          </ListGroup>
                           <div><hr className="my-2" /></div>
                        </div>);
            }
    }
}

