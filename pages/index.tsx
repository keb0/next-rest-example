import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Section = styled.section`
  display: flex;
`

const Nav = styled.nav`
  flex: 1;
  background: #ccc;
  padding: 20px;
`

const Article = styled.article`
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
`

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

      <Section>
        <Nav>
          <ul>
            {props.data.map((row: Prefecture) => (
              <li key={row.name}>
                <Link href="/p/[id]" as={`/p/${row.name}`}>
                  <a>{row.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Nav>

        <Article>
          <h1>London</h1>
          <div>Main</div>
        </Article>
      </Section>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080')
  const json = await res.json()

  return { data: json }
}

export default Index
