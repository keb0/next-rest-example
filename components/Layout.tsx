import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
