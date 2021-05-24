import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const FourthPage = () => (
  <Layout>
    <Seo title="Página dos" />
    <h1>Hola, esta es la págia dentro de categoría</h1>
    <p>Bienvenido a la página 4</p>
    <Link to="/">Volver a la página de inicio</Link>
  </Layout>
)

export default FourthPage