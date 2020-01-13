const Footer: React.SFC<{}> = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://nextjs.org/">NEXT.JS</a>
    </footer>
  )
}

export default Footer
