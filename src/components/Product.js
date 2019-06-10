import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types'


export default class Product extends Component {
    
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductConsumer>
                    {(value) => (
                    
                        <Paper style={{ display: 'flex', flexDirection: 'column', paddingTop: 16, margin: 16 }}>
                            <Link to="/details" style={{ margin: '0 auto', maxHeight: 200 }}>
                                <img src={img} alt="product" style={{ maxWidth: 200 }}/>
                            </Link>
                            <Typography style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                                {title}
                                <span>
                                    &euro;{price}
                                </span>
                            </Typography>
                            <Button variant="contained" color="secondary" disabled={inCart ? true : false} onClick={() => {value.addToCart(id)}}>
                                {inCart ? (<span disabled>in cart</span>): (<span style={{ display: 'flex' }}><AddShoppingCartIcon /> add to cart</span>)}
                            </Button>
                        </Paper>

                    )}
                    
                </ProductConsumer>
            </Grid>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
} //Checks for mistakes in the data file