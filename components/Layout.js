import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core'
import NextLink from 'next/link'
import useStyles from '../utils/styles'
import { mergeClasses } from '@material-ui/styles'

export default function Layout({title, description, children }) {
  const styles = useStyles()

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Candy Next` : `Candy Next`}</title> {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link> 
            <Typography className={styles.brand}>Candy Next</Typography>
            </Link>
          </NextLink>
          <div className={styles.grow}></div>
          <NextLink href="/cart" passHref>
            <Link>Carrinho</Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Link>Login</Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>{children}</Container>
      <footer className={styles.footer}>
        <Typography>
          Todos os direitos reservados. Candy Next &copy; 2022
        </Typography>
      </footer>
    </div>
  )
}
