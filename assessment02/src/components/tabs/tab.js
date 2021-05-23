import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './tab.module.scss'

const Tabs = (props) => {
  const { className, tabs = [], onChange } = props
  const defaultValue = tabs.find(
    (tab) => tab?.isDefault,
  )?.value
  const [selectedValue, setSelectedValue] =
    useState(defaultValue)

  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <div className={styles['tab']}>
        {tabs.map((tab, key) => (
          <button
            key={key}
            className={
              selectedValue === tab.value
                ? styles['active']
                : ''
            }
            onClick={() => {
              setSelectedValue(tab.value)
              onChange(tab.value)
            }}>
            {tab.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
