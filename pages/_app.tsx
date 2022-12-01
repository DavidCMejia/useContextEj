import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import AppContext from './AppContext';

export default function App({ Component, pageProps }: AppProps) {
  const [nameContext, setNameContext] = useState<string>('nameDefault');
  const [apellidoContext, setApellidoContext] = useState<string>('apellidoDefault');

  return (
    <AppContext.Provider 
    value={{ 
      nameContext, 
      setNameContext,
      apellidoContext,
      setApellidoContext
      }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
