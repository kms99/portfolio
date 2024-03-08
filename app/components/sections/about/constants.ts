import { Blog, Bootcamp, Cake, Email, Github, Location, Medal, Military, Name, School } from '@/public/assets/about';
import { AboutInfoItem, AboutCareerItem } from './about.type';

export const MY_INFO: AboutInfoItem[] = [
  {
    title: '이름',
    titleIcon: Name,
    contexts: '김명섭',
  },
  {
    title: '생년월일',
    titleIcon: Cake,
    contexts: '1999.02.23',
  },
  {
    title: '주소지',
    titleIcon: Location,
    contexts: '경기도 화성시',
  },
  {
    title: '이메일',
    titleIcon: Email,
    contexts: 'audtjq213@gmail.com',
  },
  {
    title: '깃허브',
    titleIcon: Github,
    contexts: 'https://github.com/kms99',
    link: 'https://github.com/kms99',
  },
  {
    title: '블로그',
    titleIcon: Blog,
    contexts: 'https://audtjqxx.tistory.com/',
    link: 'https://audtjqxx.tistory.com/',
  },
];

export const MY_CAREER: AboutCareerItem[] = [
  {
    title: '학력',
    titleIcon: School,
    contexts: [
      {
        duration: '2017.03 ~ 2021.02',
        details: '상명대학교(천안) 정보통신공학과',
      },
    ],
  },
  {
    title: '군경력',
    titleIcon: Military,
    contexts: [
      {
        duration: '2021.03 ~ 2023.06',
        details: '육군 정보통신병과 장교(중위) 전역',
      },
    ],
  },
  {
    title: '부트캠프',
    titleIcon: Bootcamp,
    contexts: [
      {
        duration: '2023.10 ~ 2024.02',
        details: '내일배움캠프 3기 (React)',
        link: 'https://boottent.sayun.studio/camps/sparta-nbcamp_20230809170910',
      },
    ],
  },
  {
    title: '수상',
    titleIcon: Medal,
    contexts: [
      {
        duration: '2024.02',
        details: '내일배움캠프 웹트랙 3기(React) 최종프로젝트 최우수상',
        link: 'https://drive.google.com/file/d/1zAPTuTxliH7Qp2BbovWl_3AZ5-dX--eR/view?usp=drive_link',
      },
      {
        duration: '2024.01',
        details: '2024 내일배움캠프 JavaScript 타임어택 해커톤 우수상',
        link: 'https://drive.google.com/file/d/1cILIug4in192ig797QpICcnvysqQMbvr/view?usp=drive_link',
      },
    ],
  },
];
