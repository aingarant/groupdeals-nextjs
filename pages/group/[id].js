import Link from "next/link"

const Group = (props) => {


  return (
    <div>
    <h2>{props.group.name}</h2>
    
    <ul>
      {props.members.map(member => (
        <li key={member.id}><Link href={`/user/${member.userid}`}>{member.profile}</Link></li>
      ))}

  
      
      </ul>
      </div>
  )
}

export default Group

export async function getServerSideProps(context) {
  const {getGroupById} = require("../../services/group")
  const {getMembersByGroupId} = require("../../services/member")
  const { id } = context.query

  const group = await getGroupById(id)
  const members = await getMembersByGroupId(id)


  return {
    props: {
      group,
      members
    }
  }
}