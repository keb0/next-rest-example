interface Props {
  categoryList: string[]
}

export default function CategoryList(props: Props) {
  return (
    <ul>
      {props.categoryList.map((row: string) => (
        <li key={row}>
          <span>{row}</span>
        </li>
      ))}
    </ul>
  )
}
