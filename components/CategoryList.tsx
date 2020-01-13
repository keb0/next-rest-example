import CategoryItem from './CategoryItem'
import { Pages } from '../interfaces'

interface Props {
  pagesList: Pages[]
  handleCheckboxChange: (e: string) => void
}

const CategoryList: React.FC<Props> = (props: Props) => (
  <ul>
    {props.pagesList.map((page: Pages) => (
      <li key={page.id.toString()}>
        <CategoryItem
          category={page.category}
          handleCheckboxChange={props.handleCheckboxChange}
        />
      </li>
    ))}
  </ul>
)

export default CategoryList
