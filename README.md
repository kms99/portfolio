# 개인 포트폴리오
![image](https://github.com/kms99/portfolio/assets/29966870/06166300-e502-44aa-bc3f-6c38ab8698ea)

프로젝트 명: 개인 포트폴리오   
개발 기간: 2023.12 ~ 지속   
사용 기술: TypeScript, Next.js, recoil, react-query, tailwind, supabase, swiper, framer   
site: [홈페이지 바로가기](https://www.kimmyungsub-portfolio.com/)   
blog: [블로그 정리 글](https://audtjqxx.tistory.com/entry/%EA%B0%9C%EC%9D%B8-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91-%ED%9A%8C%EA%B3%A0)

## DB 테이블 구조
![image](https://github.com/kms99/portfolio/assets/29966870/c40f3011-ee38-4dea-8757-9744c86dac04)

## 구현 사항

**framer-motion을 통한 스크롤 이벤트 추가**
- framer-motion 라이브러리의 motion.div를 이용하여 현재 viewport에 위치했는지 여부를 판단
- intro section의 검색창이 작성되는 이벤트를 viewport에 도달할 때 마다 애니메이션 재 실행
  * 지속 개발 중이기 때문에 스크롤 이벤트 외 다양한 이벤트 추가 예정.

**swiper를 이용한 프로젝트 모달 구성**
- swiper 라이브러리를 통해 프로젝트 모달의 프리뷰 이미지 캐러쉘 구성
- swiper 라이브러리의 navigation element 지정을 통한 '나의 기여도 보기', '돌아가기' 버튼 구현

**supabase의 database를 이용한 프로젝트 세부사항 구성**
- 프로젝트에 대한 세부내용이 많고 확장성을 고려하여 프로젝트 정보를 supabase database에 저장
- project 테이블을 기준으로 foreign key로 연결하여 테이블 구성

**seo 최적화 및 opengraph 설정**
- Next.js의 metadata를 통해서 seo 설정 
- 단일페이지로 구성되어 있기 때문에 layout.tsx에서 통합 설정
- openGraph 및 twitter 설정을 통해 url 공유시 보여줄 이미지 및 데이터 설정


## 트러블 슈팅

**전역상태관리 마이그레이션 (contextAPI to Recoil)**
- 최초 about section에 있는 book의 페이지 관리를 위한 부분적인 상태관리가 필요했기 때문에 간단히 contextAPI로 구성
- 이후 modal에 대한 전역적인 상태관리가 필요해졌기 때문에 contextAPI보다는 다른 상태관리 라이브러리의 필요성을 판단
- 리액티브하게 상태를 관리하며 보일러 플레이트가 적은 recoil 라이브러리 채택
- action의 개념이 없기 때문에 custom hook과 함께 사용하여 내부에 action의 역할을 하는 함수 구성
- 적은 보일러플레이트를 통한 코드가독성과 사용성 개선

**인덱스가 주소창에 노출되는 문제**
- id를 통한 인덱싱으로 스크롤 구현하면서 주소창에 id가 그대로 노출됨
- 주소창에 #about이 유지된 상태에서 다른 section을 확인하는 문제 발생
- a 태그에 onClick 이벤트를 지정하고 e.preventDefault를 통해 기존 이벤트를 차단 
- document.getElementById를 통해 타켓 DOM 요소에 접근하여 scrollIntoView 메서드를 통해 스크롤 구현
- 주소창에 id가 노출되지 않고 기존 url 유지

**next/head를 통한 seo 최적화가 작동하지 않는 문제**
- next/head의 Head 태그를 통해 seo 최적화를 시도하였으며, 적용이 안되는 문제 발생
- Next.js의 app router에서 Head 태그 지원을 하지 않고 metadata 방식 사용을 확인
- metadata를 통한 seo 및 openGraph 설정으로 해결
