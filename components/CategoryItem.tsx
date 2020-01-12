interface Props {
  category: string
}

const CategoryItem: React.SFC<Props> = ({ category }) => (
  <div>
    <p>{category}</p>
  </div>
)

export default CategoryItem
