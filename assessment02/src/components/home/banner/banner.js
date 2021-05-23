import React from 'react'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'

import Button from '../../button'

import styles from './banner.module.scss'

import variables from '../../../styles/variables.module.scss'

const { screenSmMax, screenMdMin } = variables

const TuxsaIcon = (props) => (
  <img
    src="https://resource.skilllane.com/tu/icon-tuxsa.png"
    {...props}
  />
)
const StarIcon = (props) => (
  <img
    src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
    {...props}
  />
)
const socialShareIcon = (
  <svg
    class="svg-inline--fa fa-share-alt fa-w-14"
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="share-alt"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path>
  </svg>
)

const Banner = (props) => {
  const { className } = props
  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <div className={'container'}>
        <div className={styles['sub-header']}>
          <TuxsaIcon />
          <span>หลักสูตรปริญญาโทออนไลน์</span>
        </div>
        <div className={styles['header']}>
          <span>
            Design Thinking กระบวนการคิดเชิงออกแบบ
          </span>
        </div>
        <div className={styles['degree']}>
          <a className="btn-circle">
            ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
          </a>
        </div>
        <div className={styles['review']}>
          <MediaQuery maxWidth={screenSmMax}>
            <div className={styles['share']}>
              <Button
                icon={socialShareIcon}
                text="แชร์คอร์สนี้"
                color="green"
              />
            </div>
            <div className={styles['stars']}>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon
                  className={classNames(
                    styles['start'],
                    styles['start-great'],
                  )}
                />
              </div>
            </div>
            <div className={styles['details']}>
              <span>4.7 (624 รีวิว)</span>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={screenMdMin}>
            <div className={styles['stars']}>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon className={styles['start']} />
              </div>
              <div className={styles['star-container']}>
                <StarIcon
                  className={classNames(
                    styles['start'],
                    styles['start-great'],
                  )}
                />
              </div>
            </div>
            <div className={styles['details']}>
              <span>4.7 (624 รีวิว)</span>
            </div>
            <div className={styles['share']}>
              <Button
                icon={socialShareIcon}
                text="แชร์คอร์สนี้"
                color="green"
              />
            </div>
          </MediaQuery>
        </div>
      </div>
    </div>
  )
}

export default Banner
