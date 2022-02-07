import React from 'react'
import Head from 'next/head'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core'
import NextLink from 'next/link'
import useStyles from '../utils/styles'
import { mergeClasses } from '@material-ui/styles'

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0'
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0'
      },
      body1: {
        fontWeight: 'normal'
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000'
      },
    },
    secondary: {
      main: '#208080'
    }
  })
  const styles = useStyles()

  return (
    <div className={styles.layoutColor}>
      <Head>
        <title>{title ? `${title} - Candy Next` : `Candy Next`}</title>{' '}
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
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
      </ThemeProvider>
    </div>
  )
}
