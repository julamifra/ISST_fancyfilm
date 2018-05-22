import React from 'react';
import { ListGroup } from 'reactstrap';
import PromocionElement from './PromocionElement'

export default class Promociones extends React.Component { 

    render() {
          let listaPromociones = this.props.listaPromociones;
                  
            if(listaPromociones === undefined){
                return (
                        <div></div>
                );
            }else{
                let lista = listaPromociones.map((promo, numeroPromo) => {
                    let mykey = "" + numeroPromo;
                   
                    return ( <PromocionElement key={mykey} promo={promo}/>
  
                    );
                });      
                return( <div className ="tamaño-promo">
                        <ListGroup>
                              {lista}
                        </ListGroup>
                         <div> <hr className="my-2" /></div>
                </div>);
            }
    }
}