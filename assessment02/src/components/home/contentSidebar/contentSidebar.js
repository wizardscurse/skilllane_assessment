import React from 'react'
import classNames from 'classnames'

import styles from './contentSidebar.module.scss'

const startIcon = (
  <svg
    width="15.75"
    height="14"
    class="svg-inline--fa fa-star fa-w-18"
    aria-hidden="true"
    focusable="false"
    data-prefix="fa"
    data-icon="star"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
  </svg>
)

const commentIcon = (
  <svg
    width="15.75"
    height="14"
    class="svg-inline--fa fa-comment fa-w-16"
    aria-hidden="true"
    focusable="false"
    data-prefix="fa"
    data-icon="comment"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
  </svg>
)

const playIcon = (
  <svg
    width="15.75"
    height="14"
    class="svg-inline--fa fa-play-circle fa-w-16"
    aria-hidden="true"
    focusable="false"
    data-prefix="fa"
    data-icon="play-circle"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
  </svg>
)

const contents = [
  {
    title: 'เมษ์ ศรีพัฒนาสกุล',
    imgSrc:
      'https://resource.skilllane.com/users/images/001/162/361/ms/Untitled.png?1566569677',
    avgScore: 4.7,
    comment: 626,
    course: 1,
    details: [
      'กรรมการผู้จัดการและผู้ร่วมก่อตั้ง Asian Leadership Academy / LUKKID',
      'ที่ปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking) ให้กับบริษัทชั้นนำของประเทศไทย',
      'หัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่ Stanford (d.school)',
      'จบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of Business',
      'จบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of Pennsylvania',
    ],
  },
  {
    title: 'มหาวิทยาลัยธรรมศาสตร์',
    imgSrc:
      'https://resource.skilllane.com/users/images/001/149/067/ms/1200px-Emblem_of_Thammasat_University.svg.png?1565079967',
    avgScore: 4.7,
    comment: 3637,
    course: 38,
    details: [
      'สถาบันวิชาการชั้นนำของเอเชีย ที่ได้มาตรฐานสากลในการผลิตบัณฑิต การสร้างองค์ความรู้ และการแก้ปัญหาต่าง ๆ',
      'ยึดมั่นในคุณธรรมและการรับใช้ประชาชน ดังคำขวัญของมหาวิทยาลัยที่กล่าวว่า เป็นเลิศ เป็นธรรม ร่วมนำสังคม',
    ],
  },
]

const ContentSidebar = (props) => {
  const { className } = props

  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      <div className={'container'}>
        <div className={styles['title']}>
          <span>ผู้สอน</span>
        </div>
        {contents.map((content, key) => (
          <div key={key} className={styles['card']}>
            <div className={styles['header']}>
              <div className={styles['instructor-image']}>
                <img src={content.imgSrc} />
              </div>
              <div className={styles['instructor-title']}>
                <a className={styles['instructor-name']}>
                  {content.title}
                </a>
                <div
                  className={styles['instructor-rating']}>
                  <p>
                    {startIcon} {content.avgScore}{' '}
                    คะแนนเฉลี่ย
                  </p>
                  <p>
                    {commentIcon} {content.comment} รีวิว
                  </p>
                  <p>
                    {playIcon} {content.course} คอร์ส
                  </p>
                </div>
              </div>
            </div>
            <div className={styles['content']}>
              <ul className={styles['details']}>
                {content.details.map((detail, key) => (
                  <li
                    key={key}
                    className={styles['detail']}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentSidebar
