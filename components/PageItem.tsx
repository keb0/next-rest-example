import * as React from 'react'
import { Pages } from '../interfaces'

interface Props {
  page: Pages
}

const PageItem: React.SFC<Props> = ({ page }: Props) => (
  <div>
    <h2>{page.title}</h2>
    <p>{page.description}</p>
    <p>{page.url}</p>
    <a href={page.img}>
      <img src={page.img} alt="" />
    </a>
  </div>
)

export default PageItem
