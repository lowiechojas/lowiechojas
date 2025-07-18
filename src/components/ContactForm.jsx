import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='name' /><br/>
            <input type="email" placeholder='Email' /><br/>
            <textarea placeholder='message' /><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm