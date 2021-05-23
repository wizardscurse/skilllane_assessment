import React from 'react'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'

import Button from '../../button'

import styles from './banner.module.scss'

import variables from '../../../styles/variables.module.scss'

import SocialShareIcon from '../../../assets/svg/social-share.svg'
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
const socialShareIcon = <SocialShareIcon />

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
