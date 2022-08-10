import React from 'react'

const Button = ({children, type, className, onClick, disabled}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>{children}</button>
  )
}

export default Button
