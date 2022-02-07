import {
  Grid,
  Link,
  ListItem,
  List,
  Typography,
  Card,
} from '@material-ui/core'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import NextLink from 'next/link'
import Image from 'next/image'
import useStyles from '../../utils/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductScreen() {
  const styles = useStyles()

  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find(a => a.slug === slug)
  if (!product) {
    return <div>Produto Não Encontrado</div>
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={styles.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Voltar para a Loja</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={4} sm={7} xs={10}>
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Categoria: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Classificação: {product.rating} estrelas ({product.numReviews}{' '}
                comentários)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Descrição: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Preço</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0
                        ? `Em estoque (${product.countInStock})`
                        : 'Sem estoque'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button variant="contained" color="success" endIcon={<AddShoppingCartIcon/>}>
                  Adicionar ao Carrinho
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
