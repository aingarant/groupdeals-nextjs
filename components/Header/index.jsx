import Logo from "./Logo"
import Nav from "./Nav"
const Header = () => {
  return (
    <div className="flex justify-between p-2">
      <Logo />
      <Nav />
    </div>
  )
}

export default Header