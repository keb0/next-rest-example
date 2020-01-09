import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FormContainer = styled.div`
  display: flex;
  margin: 0 0 30px 0;
`

const Search = styled.input`
  border: none;
  border-radius: 5px 0px 0px 5px;
  background: #e9e9e9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.35em 0.75em;
  border: none;
  font-size: 1.1em;
  text-decoration: none;
  line-height: normal;
  max-height: 3em;
  flex: 10 0 250px;
`

const SearchButton = styled.button`
  flex: 1 0 90px;
  max-height: 3em;
  font-size: 1.1em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 0px 5px 5px 0px;
  background: silver;
  color: white;
  border: none;
  padding: 0.35em 0.75em;
  cursor: pointer;
`

interface Props {
  handleSubmit: (e: string) => void
}

export default function Form(props: Props) {
  const [inputBase, setInputBase] = useState('')

  function onFormSubmit(e: FormEvent) {
    e.preventDefault()
    props.handleSubmit(inputBase)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <FormContainer>
        <Search
          type="text"
          name="search"
          value={inputBase}
          placeholder="Search.."
          onChange={e => setInputBase(e.target.value)}
        ></Search>
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </FormContainer>
    </form>
  )
}
