// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// Importez le composant Stencil
import 'infomaniak-components/dist/infomaniak-components/infomaniak-components.esm';

// Le composant est maintenant disponible pour être utilisé
const IndexPage = () => {
  return (
    <Layout pageTitle="Juste un petit bouton">
      <i4-my_account button-text="Mon compte" link="/connection"></i4-my_account>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Page bouton</title>
    <meta name="description" content="Juste un petit bouton" />
  </>
)

// Step 3: Export your component
export default IndexPage
