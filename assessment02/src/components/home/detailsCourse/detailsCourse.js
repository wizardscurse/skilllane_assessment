import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import ContentSidebar from '../contentSidebar'
import Tabs from '../../tabs'
import Details from './details'

import styles from './detailsCourse.module.scss'

import variables from '../../../styles/variables.module.scss'

const { screenXlMin } = variables

const defaultTabs = [
  {
    value: 'details',
    text: 'รายละเอียด',
    isDefault: true,
    showOnMobile: true,
    showOnDesktop: true,
  },
  {
    value: 'howToPay',
    text: 'วิธีชำระเงิน',
    showOnMobile: false,
    showOnDesktop: true,
  },
  {
    value: 'chatRoom',
    text: 'ห้องสนทนา',
    showOnMobile: false,
    showOnDesktop: true,
  },
  {
    value: 'instructor',
    text: 'ผู้สอน',
    showOnMobile: true,
    showOnDesktop: false,
  },
  {
    value: 'review',
    text: 'รีวิว',
    showOnMobile: true,
    showOnDesktop: true,
  },
]

const DetailsCourse = (props) => {
  const { className } = props
  const cx = classNames(styles['root'], className)
  const isDesktop = useMediaQuery({ minWidth: screenXlMin })

  const tabs = isDesktop
    ? defaultTabs.filter((tab) => tab.showOnDesktop)
    : defaultTabs.filter((tab) => tab.showOnMobile)

  const defaultTabValue = tabs.find(
    (tab) => tab?.isDefault,
  )?.value
  const [selectedTabValue, setSelectedTabValue] =
    useState(defaultTabValue)

  useEffect(() => {
    if (isDesktop && selectedTabValue === 'instructor') {
      setSelectedTabValue('details')
    }
  }, [isDesktop, selectedTabValue])
  return (
    <div className={cx}>
      <div className="container">
        <div className={styles['container']}>
          <Tabs
            tabs={tabs}
            value={selectedTabValue}
            onChange={(value) => setSelectedTabValue(value)}
          />
          <div>
            {selectedTabValue === 'details' && <Details />}
            {selectedTabValue === 'instructor' && (
              <ContentSidebar />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsCourse
