import React from 'react'
import classNames from 'classnames'

import styles from './playlist.module.scss'

const playIcon = (
  <svg
    width="18"
    height="18"
    class="svg-inline--fa fa-play-circle fa-w-16"
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="play-circle"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
  </svg>
)

const checkboxCheckedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-check-square">
    <polyline points="9 11 12 14 22 4"></polyline>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
)

const documentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-file-text">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
)

const downloadIcon = (
  <svg
    width="18"
    height="18"
    class="svg-inline--fa fa-file-download fa-w-12"
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="file-download"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    data-fa-i2svg="">
    <path
      fill="currentColor"
      d="M216 236.07c0-6.63-5.37-12-12-12h-24c-6.63 0-12 5.37-12 12v84.01h-48.88c-10.71 0-16.05 12.97-8.45 20.52l72.31 71.77c4.99 4.95 13.04 4.95 18.03 0l72.31-71.77c7.6-7.54 2.26-20.52-8.45-20.52H216v-84.01zM369.83 97.98L285.94 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h287.94c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zM255.95 51.99l76.09 76.08h-76.09V51.99zM336 464.01H47.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H336v287.95z"></path>
  </svg>
)

const playlist = [
  {
    title: 'บทนำ',
    chapters: [
      {
        text: 'แนะนำคอร์สออนไลน์',
        duration: '01:07',
        icons: [playIcon],
        isFree: true,
      },
    ],
  },
  {
    title: 'ความสำคัญของ Design Thinking',
    chapters: [
      {
        text: '01. อะไรคือ Design Thinking?',
        duration: '22:40',
        icons: [downloadIcon, playIcon],
        isFree: true,
      },
      {
        text: '02. ความแตกต่างของ Design Thinking กับกระบวนการคิดรูปแบบอื่น',
        duration: '11:13',
        icons: [playIcon],
        isFree: true,
      },
      {
        text: '03. ความเป็นมาของ Design Thinking',
        duration: '07:31',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'องค์ประกอบของ Design Thinking',
    chapters: [
      {
        text: '04. ขั้นตอนของกระบวนการคิดเชิงออกแบบ: (Design Thinking Process) - Heart / Head / Hand',
        duration: '10:10',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'วิธีการตั้งโจทย์ Design Thinking',
    chapters: [
      {
        text: '05. การกำหนดและหาโจทย์ Design Thinking',
        duration: '09:37',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'แบบทดสอบที่ 1',
    chapters: [
      {
        text: 'แบบทดสอบที่ 1 (5 คะแนน)',
        duration: 'แบบสอบถาม',
        icons: [checkboxCheckedIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'HEART ทำความเข้าใจกลุ่มเป้าหมาย (Empathy)',
    chapters: [
      {
        text: '06. แนวคิดของการเข้าใจกลุ่มเป้าหมาย (Empathy)',
        duration: '11:51',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '07. ความแตกต่างของ Design Research กับ Market Research',
        duration: '09:23',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '08. วิธีการ Empathize',
        duration: '24:03',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '09. เครื่องมือในการ Empathize',
        duration: '11:47',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '10. ตัวอย่างของการ Empathize (ทั้งในการออกแบบผลิตภัณฑ์และบริการ)',
        duration: '22:36',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '11. Reflection: Empathy',
        duration: '05:48',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'ระบุประเด็นปัญหา (Define Challenge)',
    chapters: [
      {
        text: '12. แนวคิดของการระบุประเด็นปัญหา (Define)',
        duration: '08:13',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '13. วิธีการวิเคราะห์และสังเคราะห์ข้อมูลจากขั้นตอน Empathy',
        duration: '12:54',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '14. เชื่อมโยงประเด็นปัญหากับผู้มีส่วนได้ส่วนเสีย (Systems Thinking / Stakeholder Analysis)',
        duration: '08:16',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '15. Reflection: Define',
        duration: '05:28',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'แบบทดสอบที่ 2',
    chapters: [
      {
        text: 'แบบทดสอบที่ 2 (5 คะแนน)',
        duration: 'แบบสอบถาม',
        icons: [checkboxCheckedIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'HEAD การระดมความคิด (Ideate)',
    chapters: [
      {
        text: '16. แนวคิดของการระดมความคิด (Ideate)',
        duration: '21:51',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '17. วิธีการต่างๆ ในการระดมความคิด',
        duration: '16:45',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '18. ปัจจัยสำคัญที่ทำให้การระดมความคิดเกิดประสิทธิภาพ',
        duration: '12:09',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '19. Ideation Exercise',
        duration: '06:58',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '20. อุปสรรคที่จะทำให้การระดมความคิดล้มเหลว',
        duration: '05:58',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '21. วิธีการคัดเลือกความคิด (Idea Selection)',
        duration: '10:14',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '22. Reflection: Ideate',
        duration: '05:33',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'HAND การสร้างต้นแบบ (Prototype)',
    chapters: [
      {
        text: '23. แนวคิดของการสร้างต้นแบบ (Prototype)',
        duration: '11:11',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '24. รูปแบบการการสร้างต้นแบบ',
        duration: '05:50',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '25. ตัวอย่างของการสร้างต้นแบบ (ทั้งในการออกแบบผลิตภัณฑ์และบริการ)',
        duration: '18:45',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '26. Storyboard Exercise',
        duration: '12:52',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '27. Reflection: Prototype',
        duration: '05:30',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'แบบทดสอบที่ 3',
    chapters: [
      {
        text: 'แบบทดสอบที่ 3 (5 คะแนน)',
        duration: 'แบบสอบถาม',
        icons: [checkboxCheckedIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'การทดสอบ (Test)',
    chapters: [
      {
        text: '28. แนวคิดของการทดสอบ (Test) – Ideal vs. Actual การเก็บ feedback และ การรับฟัง feedback',
        duration: '11:44',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'การเล่าเรื่อง (Storytelling)',
    chapters: [
      {
        text: '29. แนวคิดของ Storytelling และความเชื่อมโยงกับ Design Thinking',
        duration: '09:35',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '30. หลักการในการเล่าเรื่องเพื่อสื่อสารไอเดียนวัตกรรม',
        duration: '06:13',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '31. Reflection: Storytelling',
        duration: '05:30',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title:
      'การนำ Design Thinking ไปต่อยอด (Application of Design Thinking)',
    chapters: [
      {
        text: '32. คุณค่าที่เราเสนอให้ลูกค้า (Value Proposition)',
        duration: '09:37',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '33. Business Model Canvas',
        duration: '08:57',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '34. ตัวอย่างของการใช้ Design Thinking ในภาคธุรกิจและภาคสังคม',
        duration: '49:23',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '35. การประยุกต์ใช้ Design Thinking ในองค์กร (ทั้งในเรื่องทัศนคติและทางกายภาพ)',
        duration: '06:11',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '36. การใช้ Design Thinking กับชีวิต (Designing Your Life)',
        duration: '15:30',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '37. Odyssey Exercise',
        duration: '16:26',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '38. กรอบความคิด (Mindset) ที่จำเป็นสำหรับผู้มีส่วนร่วมในกระบวนการคิดเชิงออกแบบ (Growth Mindset)',
        duration: '03:36',
        icons: [playIcon],
        isFree: false,
      },
      {
        text: '39. Reflection เราจะเอา Design Thinking ไปใช้อย่างไร',
        duration: '07:39',
        icons: [playIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'แบบทดสอบที่ 4',
    chapters: [
      {
        text: 'แบบทดสอบที่ 4 (5 คะแนน)',
        duration: 'แบบทดสอบ',
        icons: [checkboxCheckedIcon],
        isFree: false,
      },
    ],
  },
  {
    title: 'ข้อสอบ',
    chapters: [
      {
        text: 'ข้อสอบ (60 คะแนน)',
        duration: '11:44',
        icons: [documentIcon],
        isFree: false,
      },
    ],
  },
]

const watchFreeBatch = (
  <span className={styles['free-batch']}>
    ดูตัวอย่างฟรี
  </span>
)

const Playlist = (props) => {
  const { className, playlis = [] } = props
  const cx = classNames(styles['root'], className)

  return (
    <div className={cx}>
      {playlist.map((section, key) => (
        <div
          key={key}
          className={styles['section-container']}>
          <div className={styles['title']}>
            {section.title}
          </div>
          {section.chapters.map((chapter, key) => (
            <div
              key={key}
              className={classNames(
                styles['chapter'],
                chapter.isFree ? styles['free'] : '',
              )}>
              {chapter.text}
              <div className={styles['chapter-detail']}>
                <div>
                  {chapter.isFree && watchFreeBatch}
                </div>
                <div className={styles['icons']}>
                  {chapter.icons.map((icon) => icon)}
                </div>
                <div className={styles['duration']}>
                  {chapter.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Playlist
