import React from 'react'
import CreateTicket from './CreateTicket'
import Heros from './Heros'
import SupportForm from './SupportForm'
import Maps from './Maps'
const SupportPage = () => {
  return (
    <div>
      <Heros/>
      <SupportForm/>
      <Maps/>
      <CreateTicket/>
    </div>
  )
}

export default SupportPage