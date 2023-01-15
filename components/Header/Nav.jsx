import Link from "next/link"
const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between">
      <li className="px-2">Users</li>
        <li className="px-2">Groups</li>
        <li className="px-2">Members</li>
      </ul>
    </nav>
  )
}

export default Nav