import GroupItem from "../components/groups/GroupItem"
import Link from "next/link"
const Groups = (groups) => {
  console.log(groups)
  return (
    <div>
      <h1>Groups</h1>
      <div className="flex flex-wrap">
        {groups.groups.map(group => (
          <div className="w-1/4">
            <Link href={`/group/${group.id}`}>
     <GroupItem key={group.id} name={group.name} />
            </Link>
          </div>
  
        ))}
      </div>
    </div>
  )
}

export default Groups

export async function getServerSideProps(){
  const {getGroups} = require("../services/group")
  const groups = await getGroups()
  return {
    props: {
      groups
    }
  }

}