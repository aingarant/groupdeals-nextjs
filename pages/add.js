import React, { useState } from 'react'

const Add = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('YouTube')
  const [group, setGroup] = useState('youtube04@udns.ca')
  const [message, setMessage] = useState('')

  const handleForm = async (e) => {
    setMessage("")
    e.preventDefault()
    const url = "/api/add";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, service, group }),
    })
    .then(res => setMessage("Completed Successfully."))
    .catch(err => console.log(err))

  }
  return (
    <div>
      <form onSubmit={handleForm}>
        {message}
        <div>
          <input type="text" onKeyDown={()=>setMessage("")} onChange={(e) => setName(e.target.value)} placeholder="name" />
        </div>

        <div>
          <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="email" />
        </div>


        <button>Add</button>

      </form>
    </div>
  )
}

export default Add