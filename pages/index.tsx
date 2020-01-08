import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

interface Prefecture {
  name: string
  capital: string
  population: number
}

interface Props {
  data: Prefecture[]
}

const Index = (props: Props) => {
  return (
    <Layout>
      <h1>RestApi</h1>
      <ul>
        {props.data.map((row: Prefecture) => (
          <li key={row.name}>
            <Link href="/p/[id]" as={`/p/${row.name}`}>
              <a>{row.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080')
  const json = await res.json()

  return { data: json }
}

export default Index
