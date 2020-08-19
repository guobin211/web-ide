import React from 'react'
import classNames from 'classnames'

export interface AppComponentProps {
  className?: string
}

const AppComponent: React.FC<AppComponentProps> = (props) => {
  const { className, children, ...restProps } = props
  const cls = classNames('AppComponent', className)
  return (
    <div className={cls} {...restProps}> AppComponent {children} </div>
  )
}

export default AppComponent
