import React, { Component, Fragment } from 'react'
import Product from './Product'
import Grid from '@material-ui/core/Grid'
import Title from './Title'
import { ProductConsumer } from '../context'


class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <Title name="our" title="products" />
                <Grid container spacing={0} style={{ width: '80%', margin: 'auto' }}>
                    <ProductConsumer>
                        { value => {
                            return value.products.map( product => {
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </Grid>
            </Fragment>
        )
    }
}

export default ProductList