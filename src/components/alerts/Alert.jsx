import React from 'react'

const Alert = ({ children, className }) => {
  return (
    <div className={className}>
      <span>{children}</span>
    </div>
  )
}

export default Alert
