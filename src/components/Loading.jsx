import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loading = ({ color = '#000', height = 40, width = 40 }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          minHeight: '100vh',
        }}
      >
        <BallTriangle color={color} height={height} width={width} />
        <span variant="body2">Cargando...</span>
      </div>
    </>
  )
}

export default Loading
