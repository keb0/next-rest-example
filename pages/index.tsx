import { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Form from '../components/Form'
import CategoryList from '../components/CategoryList'
import PagesList from '../components/PagesList'
import { Pages } from '../interfaces'
import { FetchWrapper } from '../utils/FetchWrapper'

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

interface Props {
  pages: Pages[]
}

const Index: NextPage<Props> = ({ pages }) => {
  const [pagesList, setPagesList] = useState<Pages[] | []>(pages || [])

  async function handleSubmit(query: string) {
    const pages: Pages[] = await FetchWrapper('http://localhost:8080/query')
    setPagesList(pages)
  }

  async function handleCheckboxChange(query: string) {
    const pages: Pages[] = await FetchWrapper('http://localhost:8080/category')
    setPagesList(pages)
  }

  return (
    <Layout>
      <h1>RestApi</h1>

      <Form handleSubmit={handleSubmit} />
      <Section>
        <Nav>
          <CategoryList
            pagesList={pagesList}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Nav>

        <Article>
          <h1>Result</h1>
          <PagesList pagesList={pagesList} />
        </Article>
      </Section>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const pages: Pages[] = await FetchWrapper('http://localhost:8080')
  return { pages }
}

export default Index
