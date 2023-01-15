const { getUsers } = require('../services/user')

export default function Home(props) {
  return (
    <ul>
      {props.name}
      {props.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}

    </ul>
  )
}

export function getServerSideProps(context) {

  return getUsers()
    .then(result => {
      return {
        props: {
          users: result
        }
      }
    })
    .catch(error => {
      return {
        props: {
          error: error
        }
      }
    })
}