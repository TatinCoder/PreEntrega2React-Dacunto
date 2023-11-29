import { useParams,Link } from "react-router-dom";
import listaProductos from "./data";
import "./Productos.css";

function Producto(){

    console.log(useParams());

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId)

    const {image,title,price,description} = producto;

    return(
        <div className="ProdCont">
            <img src={image} alt={title}/>
            <h2>Producto: {title}</h2>
            <h2>Precio: ${price}</h2>
            <h3>Descripcion: {description}</h3>
            <Link className="VolverProds" to="/productos">Volver</Link>
        </div>
    )
}

export default Producto;