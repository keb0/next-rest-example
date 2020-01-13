import PageItem from './PageItem'
import { Pages } from '../interfaces'

interface Props {
  pagesList: Pages[]
}

const PagesList: React.SFC<Props> = ({ pagesList }: Props) => (
  <ul>
    {pagesList.map(page => (
      <li key={page.id.toString()}>
        <PageItem page={page} />
      </li>
    ))}
  </ul>
)

export default PagesList
