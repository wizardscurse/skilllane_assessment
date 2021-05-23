import React from 'react'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'

import Button from '../../button'
import ContentSidebar from '../contentSidebar'

import styles from './contentCourse.module.scss'

import variables from '../../../styles/variables.module.scss'

const { screenXlMin } = variables

const checkIcon = (
  <div className={styles['check']}>
    <svg
      width="16"
      height="16"
      class="svg-inline--fa fa-check fa-w-16"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="check"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg="">
      <path
        fill="currentColor"
        d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
    </svg>
  </div>
)

const xIcon = (
  <div className={styles['x']}>
    <svg
      width="16"
      height="16"
      class="svg-inline--fa fa-times fa-w-10"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      data-fa-i2svg="">
      <path
        fill="currentColor"
        d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
    </svg>
  </div>
)

const normalCourseDetailsData = [
  {
    text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ',
    isChecked: true,
  },
  {
    text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที',
    isChecked: true,
  },
  {
    text: 'เอกสารประกอบ',
    isChecked: true,
  },
  {
    text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ',
    isChecked: false,
  },
  {
    text: 'ข้อสอบทั้งหมด 1 ข้อสอบ',
    isChecked: false,
  },
  {
    text: 'เก็บหน่วยกิตเรียนปริญญาโท',
    isChecked: false,
  },
  {
    text: 'ประกาศนียบัตร',
    isChecked: false,
  },
]

const fullCourseDetailsData = [
  {
    text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ',
    isChecked: true,
  },
  {
    text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที',
    isChecked: true,
  },
  {
    text: 'เอกสารประกอบ',
    isChecked: true,
  },
  {
    text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ',
    isChecked: true,
  },
  {
    text: 'ข้อสอบทั้งหมด 1 ข้อสอบ',
    isChecked: true,
  },
  {
    text: 'เก็บหน่วยกิตเรียนปริญญาโท',
    isChecked: true,
  },
  {
    text: 'ประกาศนียบัตร',
    isChecked: true,
  },
]

const normalCourseDetails = (
  <div className={styles['details']}>
    <div className={styles['detail']}>
      <div className={styles['check']}>{checkIcon}</div>
      <span>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</span>
    </div>
    {normalCourseDetailsData.map((data, key) => (
      <div key={key} className={styles['detail']}>
        {data.isChecked ? checkIcon : xIcon}
        <span>{data.text}</span>
      </div>
    ))}
  </div>
)

const fullCourseDetails = (
  <div className={styles['details']}>
    <div className={styles['detail']}>
      <div className={styles['check']}>{checkIcon}</div>
      <span>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</span>
    </div>
    {fullCourseDetailsData.map((data, key) => (
      <div key={key} className={styles['detail']}>
        {data.isChecked ? checkIcon : xIcon}
        <span>{data.text}</span>
      </div>
    ))}
  </div>
)

const normalCoursePrice = (
  <div className={styles['price']}>
    <span>1,500 บาท</span>
    <div>
      <Button text="ชำระเงินเรียนไม่เก็บหน่วยกิต" />
    </div>
  </div>
)

const fullCoursePrice = (
  <div className={styles['price']}>
    <span>4,500 บาท</span>
    <div>
      <Button
        text="ชำระเงินเรียนเก็บหน่วยกิต"
        isFill={true}
      />
    </div>
  </div>
)

const ContentCourse = (props) => {
  const { className } = props
  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <div className="container">
        <div className={styles['content']}>
          <div
            className={classNames(
              styles['video-container'],
              styles['card'],
            )}>
            <img src="https://wallpaperaccess.com/full/1356106.jpg" />
          </div>
          <div
            className={classNames(
              styles['course-container'],
              styles['course-no-credit'],
              styles['card'],
            )}>
            <div className={styles['space']} />
            <div className={styles['price-container']}>
              {normalCoursePrice}
              {normalCourseDetails}
            </div>
          </div>
          <div
            className={classNames(
              styles['course-container'],
              styles['course-credit'],
              styles['card'],
            )}>
            <div className={styles['border-green']} />
            <div className={styles['price-container']}>
              {fullCoursePrice}
              {fullCourseDetails}
            </div>
          </div>
          <MediaQuery minWidth={screenXlMin}>
            <div className={styles['sidebar-container']}>
              <ContentSidebar />
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  )
}

export default ContentCourse
