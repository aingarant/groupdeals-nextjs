import { useRouter } from 'next/router'

const Group = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>Group {id}</div>
  )
}

export default Group