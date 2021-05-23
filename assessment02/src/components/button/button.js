import React from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

const Button = (props) => {
  const { className, icon, text, onClick, isFill } = props

  const cx = classNames(
    isFill ? styles['root-fill'] : styles['root'],
    className,
  )

  return (
    <div className={cx} onClick={onClick}>
      {icon && (
        <span className={styles['icon']}>{icon}</span>
      )}
      <span>{text}</span>
    </div>
  )
}

export default Button
