import React from 'react'
import classNames from 'classnames'

import Banner from './banner'
import ContentCourse from './contentCourse'
import DetailsCourse from './detailsCourse'

import styles from './home.module.scss'

const Home = (props) => {
  const { className } = props
  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <Banner />
      <ContentCourse />
      <DetailsCourse />
    </div>
  )
}

export default Home
