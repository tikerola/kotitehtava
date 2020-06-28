import React from 'react'

const Error = ({ children, ...otherProps }) => (
  <div {...otherProps}>
    {children}
  </div>
)

export default Error