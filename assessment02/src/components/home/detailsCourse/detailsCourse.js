import React, { useState } from 'react'
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
  },
  {
    value: 'howToPay',
    text: 'วิธีชำระเงิน',
    showOnMobile: false,
  },
  {
    value: 'chatRoom',
    text: 'ห้องสนทนา',
    showOnMobile: false,
  },
  {
    value: 'instructor',
    text: 'ผู้สอน',
    showOnMobile: true,
  },
  {
    value: 'review',
    text: 'รีวิว',
    showOnMobile: true,
  },
]

const DetailsCourse = (props) => {
  const { className } = props
  const cx = classNames(styles['root'], className)
  const isDesktop = useMediaQuery({ minWidth: screenXlMin })

  const tabs = isDesktop
    ? defaultTabs
    : defaultTabs.filter((tab) => tab.showOnMobile)

  const defaultTabValue = tabs.find(
    (tab) => tab?.isDefault,
  )?.value
  const [selectedTabValue, setSelectedTabValue] =
    useState(defaultTabValue)

  return (
    <div className={cx}>
      <div className="container">
        <div className={styles['container']}>
          <Tabs
            tabs={tabs}
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
