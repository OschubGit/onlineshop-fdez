import React from 'react'

const Input = ({className, type, id, name, placeholder, onChange, value}) => {
  return (
    <input
    className={className}
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    />
  )
}

export default Input
