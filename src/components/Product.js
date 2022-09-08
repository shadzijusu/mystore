import classes from './Product.module.css'
import {Link} from "react-router-dom"
function Product(props) {
    return(
        <div className={classes.card}>
            <img src={props.img} alt="" className={classes.img}></img>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.price}>$ {props.price} USD</p>
            {props.hide ? <></> :
            <p className={classes.description}>{props.description}</p>
            }
            <p className={classes.rating}>{props.rate}  ⭐ {props.count} ratings</p>
            {
            props.hide ?
            <Link to="/product"  state={{ from: props.id }} className={classes.h3}>See details</Link> : <></>
            }
        </div>
    )
}
export default Product