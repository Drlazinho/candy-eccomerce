import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'


//Customização da pagina no Servidor
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'/>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

//Personalização para renderização da Page
MyDocument.getInitialProps = async (context) => {

  const sheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage;

  //Executa a lógica de renderização React async neste caso.
  context.renderPage = () => {
    return originalRenderPage({

      //juntar toda React tree
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });
  };

  //O pai 'getInitProps', agora inclui o 'renderPage' personalizado
  const initialProps = await Document.getInitialProps(context);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
