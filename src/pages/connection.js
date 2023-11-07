// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const Connection = () => {
  return (
    <Layout pageTitle="Connexion">
        <p>Se connecter</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Connexion</title>
    <meta name="description" content="La page connexion" />
  </>
)

// Step 3: Export your component
export default Connection