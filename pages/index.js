import Layout from '../components/Layout'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';
import NextLink from 'next/link'
import db from '../utils/db';
import Product from '../models/Products';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

export default function Home(props) {
  const router = useRouter();
  const {dispatch, state} = useContext(Store)
  const {products} = props;

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert('Produto sem Estoque');
      return;
    }
    const existItem = state.cart.cartItems.find(x=>x.id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart')
  };

  return (
    <Layout>
      <div>
        <h1>Produtos</h1>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
               <CardActionArea>
               <CardMedia
                 component="img"
                 image={product.image}
                 title={product.name}
               ></CardMedia>
               <CardContent>
                 <Typography>{product.name}</Typography>
               </CardContent>
             </CardActionArea>
                </NextLink>
 
                <CardActions>
                  <Typography>R$ {product.price}</Typography>
                  <Button size="large" color="primary" variant="contained" disableElevation onClick={()=>addToCartHandler(product)}>
                    Adicionar ao carrinho
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}