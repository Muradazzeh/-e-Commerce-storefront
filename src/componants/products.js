import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {add,reset,select} from './store/cartAction'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Products = props => {
 const navigate= useNavigate()

    return (
        <section>
            {!props.active &&
            <div className="product">
                <br></br>
             <h1> Welcome to our web site please select catagories </h1>
             <img src="https://i.pinimg.com/564x/a5/2e/3e/a52e3ead549f0fef288d9d074b979df2--computer.jpg"alt='hello'></img>
             </div>
             }
            <Grid container   >
                {props.products.filter(product => product.category.name === props.active).map((product,idx) => {
                    console.log(product.category,"11111111111111111111")
                    console.log(props.active,"22222222222222222222")
                    return (
                        <>
                        
                        <Grid item xs={2} sm={4} md={4}  >
                            <Card variant="outlined" key={idx} sx={{
                        maxWidth: 345 }}>
                            <CardMedia
                            component="img"
                            height="200"
                            width="150"
                            image={product.images}
                            alt="product image"/>
                                <CardContent>
                                    <Typography variant="h5">{product.title}</Typography>
                                    <Typography variant="body2">{product.description}</Typography>
                                    <Typography variant="body1">${product.price}</Typography>
                                    <Typography variant="body1">{product.inventory}</Typography>
                                </CardContent>
                                <Button onClick={() => props.add(product)}> Add to cart </Button> 
                                <> ................... </>
                                <Button onClick={() => {props.select(product);navigate('./details')}} > View details</Button>

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
    products: state.products,
    catagories : state.catagories.catagories,
    active : state.catagories.active,
    itemCount: state.cartReducer.itemCount
    
});
const mapDispatchToProps = {add,reset,select}
export default connect(mapStateToProps,mapDispatchToProps)(Products);