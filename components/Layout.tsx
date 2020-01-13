import Header from './Header'
import Footer from './Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
