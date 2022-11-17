import { Link } from "react-router-dom";

export const Product = ({product}) => {
    const { id, name, price, image} = product;

    return ( product && (
        <div>
            <Link to={`/product/${id}`}></Link>
            <div>{name}</div>
            <div>{price}</div>
            

        </div>
    ));
};