import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Form from '../components/Form'
import CategoryList from '../components/CategoryList'

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

interface Product {
  name: string
  category: string
  tags: string
  title: string
  url: string
  description: string
  img: string
}

interface Props {
  data: Product[]
}

export default function Index(props: Props) {
  async function handleSubmit() {
    // TODO: CORS対応
    const res = await fetch('http://localhost:8080')
    const json = await res.json()
  }

  return (
    <Layout>
      <h1>RestApi</h1>

      <Form handleSubmit={handleSubmit} />
      <Section>
        <Nav>
          <CategoryList
            categoryList={props.data.map(row => {
              console.log(row)
              return row.category
            })}
          />
        </Nav>

        <Article>
          <h1>London</h1>
          <div>Main</div>
          <ul>
            {props.data.map(row => (
              <li key={row.name}>
                <span>{row.name}</span>
                <br></br>
                <span>{row.title}</span>
                <br></br>
                <span>{row.description}</span>
              </li>
            ))}
          </ul>
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
