import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from '@material-ui/core';
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'
import Nextlink from 'next/link'; 
import Image from 'next/image'
import dynamic from 'next/dynamic';
import axios from 'axios';

function CartSrcreen() {
  const { state, dispatch } = useContext(Store)
  const { cart: {cartItems},  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock <= 0) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  }

  const removeItemHandler = (item) => {
    dispatch({type:'CART_REMOVE_ITEM', payload: item})
  }

  return (
    <Layout title="Carrinho de Compra">
      <Typography component="h1" variant="h1">
        Comprar
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Carro está vazio. <Nextlink href="/" passHref>
              <Link>Continuar Comprando</Link>
            </Nextlink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableCell>Imagem</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell align='right'>Quantidade</TableCell>
                  <TableCell align='right'>Preço</TableCell>
                  <TableCell align='right'>Ação</TableCell>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <Nextlink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image src={item.image} alt={item.name} width={50} height={50}></Image>
                          </Link>
                        </Nextlink>
                      </TableCell>

                      
                      <TableCell>
                        <Nextlink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </Nextlink>
                      </TableCell>
                      
                      <TableCell align="right">
                        <Select value={item.quantity} onChange={(e)=>updateCartHandler(item, e.target.value)}>
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>

                      <TableCell align="right">
                        ${item.price}
                      </TableCell>

                      <TableCell align="right">
                        <Button variant="contained" color="secondary" onClick={() => removeItemHandler(item)}>
                          x
                        </Button>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : R$ 
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Fechar Pedido
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>

        </Grid>
      )}
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(CartSrcreen), {ssr: false});