import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import AppContext from './AppContext'
import PrimerComponente from './primerComponente'

export default function Home() {
  const context = useContext (AppContext);
  return (
    <div className='cont'>
      
        <h1>Parent Page</h1>
        <h1>El valor del name es: {context.nameContext}</h1>
        <h1>El valor del apellido es: {context.apellidoContext}</h1>
      
      <br />
      <br />
      <PrimerComponente/>
      <style jsx>{`
                .cont {
                    background-color: rgba(37, 150, 190, 1);
                }
                `}</style>
    </div>

  )
}
