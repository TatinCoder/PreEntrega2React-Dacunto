import listaProductos from "./data";
import {Link} from "react-router-dom";
import "./Productos.css";

function Productos(){
    console.log(listaProductos);
    return(
        <div className="contProd">
            <h1>Productos</h1>
            <div className="galeria">
                {listaProductos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h3>{producto.title}</h3>
                            <img src={producto.image} alt={producto.title}/>
                            <Link className="linkProd" to={`/productos/${producto.id}`}>Detalle</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;