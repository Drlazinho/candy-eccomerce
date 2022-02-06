import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
    <div>
      <h1>Produtos</h1>
      <ul>
        <li>Produtos 1</li>
        <li>Produtos 2</li>
        <li>Produtos 3</li>
      </ul>
    </div>

    </Layout>
  )
}
