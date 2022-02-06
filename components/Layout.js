import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({children}) {
  const styles = useStyles()

  return (
    <div>
      <Head>
        <title>Candy Next</title>
      </Head>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <Typography variant="h5">Candy Next</Typography>
        </Toolbar>
      </AppBar>
      <Container className={styles.main}>
        {children}
      </Container>
      <footer className={styles.footer}>
        <Typography>Todos os direitos reservados. Candy Next &copy; 2022</Typography>
      </footer>
    </div>
  );
}
