import { Pages } from '../interfaces'

interface Props {
  page: Pages
}

const PageItem: React.SFC<Props> = ({ page }) => (
  <div>
    <p>{page.category}</p>
    <p>{page.name}</p>
    <p>{page.title}</p>
    <p>{page.img}</p>
    <p>{page.description}</p>
    <a href={page.img}>
      <img src={page.img} alt="" />
    </a>
  </div>
)

export default PageItem
