import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { connect } from 'react-redux';

const Products = props => {

    return (
        <section>
            <Grid container >
                {props.products.filter(product => product.category === props.active).map(product => {
                    console.log(product.category,"11111111111111111111")
                    console.log(props.active,"22222222222222222222")
                    return (
                        <Grid item >
                            <Card variant="outlined" >
                                <img src='https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Free-Download-Creative-Idea-Logo-Design-scaled.jpg' width="250x" height="150px"></img>
                                <CardContent>
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="body2">{product.description}</Typography>
                                    <Typography variant="body1">${product.price}</Typography>
                                    <Typography variant="body1">{product.inventory}</Typography>
                                </CardContent>

                            </Card>
                            
                        </Grid>
                    )
                })}
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    catagories : state.catagories.catagories,
    active : state.catagories.active
    
});

export default connect(mapStateToProps)(Products);