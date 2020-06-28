import React, { useState } from 'react'
import axios from 'axios'
import CustomButton from './CustomButton'
import Error from './Error'
import logo from '../assets/images/logo.png'


import './MessageForm.scss'

const MessageForm = ({ setDatabaseUpdated }) => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const submit = async event => {
    event.preventDefault()

    if (!message) {
      setError('You have to write something!')

      setTimeout(() => {
        setError('')
      }, 3000)

      return
    }

    await axios.post('/api/messages', {
      text: message
    })

    setDatabaseUpdated(prevCount => prevCount + 1)
    setMessage('')
  }

  return (
    <div className="message-form-container">

      <h2>Create a message</h2>

      <form onSubmit={submit}>
        <input
          className="message-form-input"
          placeholder="Write something..."
          name="message" value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <CustomButton onClick={submit}>Submit</CustomButton>
        <Error style={{ color: 'white', paddingTop: '10px' }}>{error}</Error>
      </form>
      <img src={logo} />
    </div>
  )
}
export default MessageForm