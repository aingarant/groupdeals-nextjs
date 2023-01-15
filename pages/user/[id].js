const User = (user) => {
  return (
    <div><h1>User: {user.user.email} ({user.user.id})</h1></div>
  )
}

export default User

export async function getServerSideProps(context) {
  const {getUserById} = require("../../services/user")
  const { id } = context.query

  const user = await getUserById(id);

  if (!user) return {
    notFound: true,
    props: {
      user: {id: "User not found"}
    }
  }

  return {
    props: {user}
  
  }

}