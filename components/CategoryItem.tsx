import { useState } from 'react'

interface Props {
  category: string
  handleCheckboxChange: (e: string) => void
}

const CategoryItem: React.FC<Props> = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false)

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked)
    props.handleCheckboxChange(e.target.value)
  }

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        value={props.category}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {props.category}
    </div>
  )
}

export default CategoryItem
