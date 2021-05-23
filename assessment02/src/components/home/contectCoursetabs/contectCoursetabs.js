import React from 'react'
import classNames from 'classnames'

import styles from './contectCoursetabs.module.scss'

const ContectCoursetabs = (props) => {
  const { className, tabs } = props

  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <div className="container">www</div>
    </div>
  )
}

export default ContectCoursetabs
