import React from 'react'

const Button = ({
  children,
  type,
  className = 'cButton cButton-primary',
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button
