import CategoryItem from './CategoryItem'
import { Pages } from '../interfaces'

interface Props {
  pagesList: Pages[]
}

const CategoryList: React.FunctionComponent<Props> = ({ pagesList }) => (
  <ul>
    {pagesList.map(page => (
      <li key={page.id.toString()}>
        <CategoryItem category={page.category} />
      </li>
    ))}
  </ul>
)

export default CategoryList
