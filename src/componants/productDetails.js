import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {add} from './store/cartAction'
const Details = props => {
const navigate=useNavigate()

    return (
        <section>
            <Button onClick={()=>{navigate("/cart")}}  style={{ float: "right" }} color="warning" size="lg" >
                <FontAwesomeIcon icon={faCartArrowDown} />

                <span className="icon-button-text-right">{props.count}</span>
                {console.log(props.count, "000000000000000")}
            </Button> 
            <Grid container   >
                {props.selected.map((product, idx) => {
                    console.log(product, "000000000000000")
                    

                    return (
                        <>

                            <Grid item  align="center" >
                                <Card variant="outlined" key={idx} sx={{
                                    maxWidth: 345
                                }}>
                                    <CardMedia 
                                        component="img"
                                        height="500"
                                        width="300"
                                        image={product.images}
                                        alt="product image" />
                                    <CardContent>
                                        <Typography variant="h5">{product.title}</Typography>
                                        <Typography variant="body2">{product.description}</Typography>
                                        <Typography variant="body1">${product.price}</Typography>
                                        <Typography variant="body1">{product.inventory} IN Stock</Typography>
                                        <Typography variant="body1">THis is the full details for the item you select if you liked it you can add it to your cart</Typography>

                                    </CardContent>
                                    <Button onClick={() => props.add(product)}> Add to cart </Button>

                                </Card>

                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({

    selected: state.cartReducer.selected,
    count: state.cartReducer.itemCount

});
const mapDispatchToProps = {add}
export default connect(mapStateToProps,mapDispatchToProps)(Details);