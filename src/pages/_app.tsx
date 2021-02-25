import React, { FC, ReactElement } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

import theme from 'themes'

const GlobalStyle = (): ReactElement => {
  return (
    <Global
      styles={css`
        .content-images {
          margin: 12px;
        }

        @font-face {
          font-family: 'Montserrat';
          src: url('/fonts/Montserrat/Montserrat-Regular.ttf');
        }

        @font-face {
          font-family: 'Montserrat Medium';
          src: url('/fonts/Montserrat/Montserrat-Medium.ttf');
        }

        @font-face {
          font-family: 'Montserrat Bold';
          src: url('/fonts/Montserrat/Montserrat-Bold.ttf');
        }

        @font-face {
          font-family: 'Intel Clear';
          src: url('/fonts/Intel_Clear/IntelClear_Rg.ttf');
        }
      `}
    />
  )
}

const MyApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
