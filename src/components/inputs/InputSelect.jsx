import React from 'react'

const InputSelect = ({
  name,
  id,
  children,
  className = 'inputSelect',
  onChange,
  value,
}) => {
  return (
    <select
      name={name}
      id={id}
      className={className}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  )
}

export default InputSelect
