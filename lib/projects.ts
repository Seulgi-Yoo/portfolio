export type Feature = {
  title: string;
  desc?: string;
  image?: string[]; // 해당 기능 관련 스크린샷
};

export type Project = {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  fullDesc: string;
  features: Feature[];
  githubLink: string;
  liveLink: string;
  image?: string;
  period?: string;
  role?: string;
  contributions?: string[];
};

export const projectsData: Project[] = [
  {
    id: "0",
    title: "Vetell 사용자 웹",
    desc: "반려동물 보호자용 병원 접수·예약·챗봇 상담 서비스",
    tech: ["React", "TypeScript", "Redux", "MUI"],
    fullDesc:
      "반려동물 병원과 카카오톡 채널을 통해 연결되어 진료 접수 및 예약을 진행할 수 있는 사용자 플랫폼입니다. 모바일 사용자를 우선으로 한 반응형 UI를 구축했고, 보호자 입장에서 직관적인 UX를 설계하는 데 집중했습니다.",
    features: [
      {
        title: "모바일 최적화 UI",
        desc: "모바일 사용자를 우선으로 UI/UX를 설계하고 구현하여, 작은 화면에서도 직관적이고 편리한 사용자 경험을 제공합니다.",
        image: [],
      },
      {
        title: "진료 접수/예약 기능",
        desc: "예약 및 접수 시 API로 실시간 진료 시간표를 받아와 가능한 시간대를 제공하고, 수의사 부재 시 진료 불가 문구를 표시하는 등 예약 프로세스를 고도화했습니다.",
        image: [
          "/images/vetell-chatbot/5.jpeg",
          "/images/vetell-chatbot/6.jpeg",
          "/images/vetell-chatbot/7.jpeg",
          "/images/vetell-chatbot/8.jpeg",
          "/images/vetell-chatbot/11.jpeg",
          "/images/vetell-chatbot/12.jpeg",
          "/images/vetell-chatbot/23.jpeg",
          "/images/vetell-chatbot/confirm.jpeg",
        ],
      },
      {
        title: "반려동물 관리 기능",
        desc: "반려동물 등록 기능을 리팩토링하고, 수정 및 삭제 기능을 신규 추가하여 사용자가 쉽고 편리하게 반려동물 정보를 관리할 수 있도록 구현했습니다.",
        image: [
          "/images/vetell-chatbot/pet-res.jpeg",
          "/images/vetell-chatbot/pet2.jpeg",
          "/images/vetell-chatbot/pet3.jpeg",
          "/images/vetell-chatbot/pet4.jpeg",
          "/images/vetell-chatbot/pet-edit.jpeg",
          "/images/vetell-chatbot/petlist.jpeg",
        ],
      },
      {
        title: "문진표 답변 기능",
        desc: "여러 형태(날짜/달력, 여러 선택, 하나 선택, 주관식, 사진 업로드 등)의 문진표를 고도화하여, 사용자가 다양한 방식으로 정보를 입력하고 제출할 수 있도록 구현했습니다.",
        image: [
          "/images/vetell-chatbot/4.jpeg",
          "/images/vetell-chatbot/photo.jpeg",
        ],
      },
      {
        title: "병원 메시지 확인",
        desc: "진료 확인, 예약 확인, 진료 후 안내 문자 등 병원에서 발송한 메시지를 사용자가 확인할 수 있는 기능을 구현했습니다.",
        image: [
          "/images/vetell-chatbot/msg.jpeg",
          "/images/vetell-chatbot/msg2.jpeg",
        ],
      },
      {
        title: "상태 관리",
        desc: "React Redux를 활용하여 전체 애플리케이션 상태를 효율적으로 관리하고, 컴포넌트 간 데이터 흐름을 최적화했습니다.",
        image: [],
      },
    ],
    githubLink: "",
    liveLink: "",

    period: "2023.05 ~ 2024.12",
    role: "프론트엔드 개발",
    contributions: [
      "UI/UX 구조 설계 및 컴포넌트 개발",
      "예약 프로세스 UI 개발 및 API 연동",
      "진료 접수/예약 기능 고도화 및 리팩토링",
      "반려동물 등록/수정/삭제 기능 고도화",
      "문진표 답변 기능 고도화",
      "병원 발송 메시지 확인 기능 구현",
      "React Redux를 이용한 상태관리",
    ],
    image: "/images/vetell-chatbot/chat.png",
  },
  {
    id: "1",
    title: "KAHA (한국동물병원협회) 홈페이지",
    desc: "협회 정보 제공과 회원 관리 기능을 갖춘 반응형 웹사이트",
    image: "/images/kaha1.png",
    tech: ["Next.js", "TypeScript", "Antd", "React Query"],
    fullDesc:
      "한국동물병원협회 공식 홈페이지로, 협회 소개, 공지사항, 회원 관리, 행사 안내 등 다양한 기능을 제공합니다. 관리자와 회원 모두 직관적으로 이용할 수 있도록 UI/UX를 설계했으며, 결제 기능은 토스페이먼츠와 연동하여 안정적이고 편리한 프로세스를 구현했습니다.",
    features: [
      {
        title: "메인 페이지",
        desc: "캐러셀을 통해 주요 프로모션과 안내를 시각적으로 표시하고, 최근 공지사항과 컨퍼런스 정보를 일부 노출합니다. 각 항목 클릭 시 상세 페이지로 이동합니다.",
        image: ["/images/kaha-history.png"],
      },
      {
        title: "협회 소개",
        desc: "인사말, 연혁, 오시는 길 등 협회 관련 정보를 제공하는 정적 페이지로, 사용자가 협회의 전반적인 내용을 쉽게 이해할 수 있도록 구성했습니다.",
        image: ["/images/kaha-history.png"],
      },
      {
        title: "회원가입",
        desc: "회원 가입과 정보 수정 기능을 제공하며, 사용자가 안전하고 직관적으로 계정을 관리할 수 있도록 UI/UX를 구현했습니다.",
        image: ["/images/kaha-register.png", "/images/kaha-login.png"],
      },
      {
        title: "공지사항 및 행사 안내",
        desc: "관리자용 게시판과 회원 등급별 읽기/쓰기 기능을 구현하여, 공지사항과 행사를 효율적으로 관리하고 확인할 수 있도록 했습니다.",
        image: ["/images/kaha-noti.png"],
      },
      {
        title: "컨퍼런스/교육 안내",
        desc: "컨퍼런스 신청과 결제 기능을 구현하여, 사용자가 편리하게 참여할 수 있는 프로세스를 제공했습니다. 결제 페이지는 토스페이먼츠와 연동하여 안정성과 UI/UX를 고려했습니다.",
        image: ["/images/kaha-conf.png"],
      },
      {
        title: "관리자 어드민",
        desc: "게시판 관리, 회원가입 승인, 회원 권한 관리, 메인 캐러셀 등록 및 수정, 컨퍼런스 등록/수정, 신청 현황 조회 등 관리자 기능을 종합적으로 개발했습니다.",
        image: [],
      },
      {
        title: "반응형 웹",
        desc: "모바일과 데스크톱 환경 모두 최적화된 반응형 디자인을 구현하여 다양한 디바이스에서 일관된 사용자 경험을 제공합니다.",
        image: ["/images/kaha-m.png", "/images/kaha1.png"],
      },
    ],
    role: "Next.js와 Ant Design을 활용한 Frontend 개발, 관리자 페이지 직접 구현",
    contributions: [
      "Next.js와 Antd를 활용한 UI 개발",
      "React Query를 사용한 API 상태 관리",
      "관리자 페이지 기능 개발 및 UI/UX 구현",
      "토스페이먼츠 결제모듈 연동을 통한 결제 기능 개발 및 UI/UX 구현",
    ],
    period: "2023.05 ~ 2023.10",
    githubLink: "",
    liveLink: "https://kaha.or.kr/",
  },

  // ------------------- IVMA -------------------
  {
    id: "2",
    title: "IVMA (인천수의사회) 홈페이지",
    desc: "협회 정보 제공과 소통 기능을 갖춘 반응형 웹사이트",
    image: "/images/ivma1.png",
    tech: ["Next.js", "TypeScript", "Antd", "MUI", "React Query"],
    fullDesc:
      "인천수의사회 공식 홈페이지로, 협회 소개, 공지사항, 자료실, 회원 관리 등 다양한 기능을 제공하며, 회원 간 소통을 위한 게시판과 댓글 기능을 포함했습니다. 또한 연회비 납부 프로세스를 설계 단계부터 백엔드 개발자와 협업하여 구현, 회원 구분별 자동 연회비 계산 및 미납 내역 반영 등 실무 중심의 기능을 제공했습니다.",
    features: [
      {
        title: "메인 페이지",
        desc: "히어로 영역을 통해 주요 안내를 시각적으로 표시하고, 최근 공지사항과 자료실 일부 정보를 노출합니다. 각 항목 클릭 시 상세 페이지로 이동하도록 구현했습니다.",
        image: ["/images/ivma1.png"],
      },
      {
        title: "협회 소개",
        desc: "인사말, 연혁, 오시는 길 등 협회 관련 정보를 제공하는 정적 페이지로, 사용자가 협회의 전반적인 내용을 쉽게 이해할 수 있도록 구성했습니다.",
        image: ["/images/ivma-greeting.png"],
      },
      {
        title: "회원가입",
        desc: "회원 가입과 정보 수정 기능을 제공하며, 사용자가 안전하고 직관적으로 계정을 관리할 수 있도록 UI/UX를 구현했습니다.",
        image: ["/images/ivma-sign.png"],
      },
      {
        title: "자료실/공지사항",
        desc: "회원용 자료 다운로드 기능과 공지사항 게시판을 구현하여, 회원이 필요한 정보를 쉽게 확인하고 다운로드할 수 있도록 구성했습니다.",
        image: ["/images/ivma-noti.png", "/images/ivma-noti-d.png"],
      },
      {
        title: "게시판 및 댓글 기능",
        desc: "회원 전용 게시판과 댓글 기능을 추가하여, 회원들 간 자유로운 소통과 정보 공유가 가능하도록 구현했습니다.",
        image: [],
      },
      {
        title: "컨퍼런스/교육 안내",
        desc: "컨퍼런스 신청과 결제 기능을 구현하여, 사용자가 편리하게 참여할 수 있는 프로세스를 제공했습니다. 결제 페이지는 토스페이먼츠와 연동하여 안정성과 UI/UX를 고려했습니다.",
        image: ["/images/ivma-conf.png", "/images/ivma-conf-d.png"],
      },
      {
        title: "연회비 납부 기능",
        desc: "회원 구분별 연회비 자동 계산 및 미납 내역 반영, 납부 페이지에서 바로 결제 가능하도록 설계 및 구현했습니다. 설계 단계에서 백엔드 개발자와 협업하여 정확한 로직을 구현했습니다.",
        image: [],
      },
      {
        title: "관리자 페이지",
        desc: "게시판 관리, 회원 승인, 권한 설정, 메인 캐러셀 관리, 자료실 관리 등 관리자 기능을 종합적으로 개발했습니다.",
        image: [],
      },
      {
        title: "반응형 웹",
        desc: "모바일과 데스크톱 환경 모두 최적화된 UI를 제공하고, 다양한 화면에서도 일관된 사용자 경험을 보장했습니다.",
        image: [],
      },
    ],
    role: "Frontend 개발 및 UI/UX 구현",
    contributions: [
      "Next.js 기반 SPA 개발로 빠른 페이지 전환과 효율적인 상태 관리 구현",
      "반응형 디자인 및 레이아웃 구성",
      "회원 관리, 게시판 및 댓글 기능 구현",
      "연회비 납부 프로세스 설계 및 프론트엔드 구현, 미납 내역 및 자동 금액 계산 반영",
      "토스페이먼츠 결제모듈 연동을 통한 결제 기능 개발 및 UI/UX 구현",
    ],
    period: "2023.06 ~ 2023.11",
    githubLink: "",
    liveLink: "https://ivma.or.kr/",
  },
  {
    id: "3",
    title: "스카이동물의료센터 홈페이지",
    desc: "병원 정보와 진료 안내를 제공하는 React 기반 반응형 웹사이트",
    image: "/images/ic-sky.png",
    tech: [
      "React",
      "Redux",
      "React Router",
      "styled-components",
      "Axios",
      "react-helmet-async",
    ],
    fullDesc:
      "스카이동물의료센터 인천지점의 공식 홈페이지로, 병원 소개, 의료진 정보, 진료 과목, 공지사항, 리뷰 등을 제공하는 반응형 웹사이트입니다. React 기반 SPA 구조로 개발되었으며, styled-components로 UI를 구현하고 Redux로 전역 상태 관리를 구성했습니다. 사용자 경험을 고려한 페이지 전환, 스크롤 UX, 환경별 API 분기 등 실제 운영 환경을 반영한 구조로 개발되었습니다.",

    features: [
      {
        title: "메인 페이지",
        desc: "지점 소개, 의료진 소개, 진료 과목, 공지사항 등 주요 정보를 한눈에 볼 수 있도록 구성하고, 직관적인 섹션 구조로 사용자가 필요한 정보에 빠르게 접근할 수 있도록 설계했습니다.",
        image: [],
      },
      {
        title: "병원 및 의료진 소개",
        desc: "지점 정보, 병원 철학, 의료진 소개 등을 제공하여 방문자가 병원의 전문성과 신뢰도를 확인할 수 있도록 구성했습니다.",
        image: [],
      },
      {
        title: "진료 과목 안내",
        desc: "병원에서 제공하는 주요 진료 과목을 카드 형태의 UI로 직관적으로 구성하여, 사용자가 원하는 정보를 빠르게 탐색할 수 있도록 구현했습니다.",
        image: [],
      },
      {
        title: "공지사항",
        desc: "병원 공지사항을 보여주는 공지 페이지를 구현하고, 필요한 데이터는 내부 DB로 직접 관리했습니다. 공지 관리 기능은 별도 제공하지 않으며, 병원의 요청 사항에 맞춰 개발팀이 데이터를 반영하는 구조로 구성했습니다.",
        image: [],
      },
      {
        title: "리뷰 페이지",
        desc: "고객 리뷰를 확인할 수 있는 페이지를 제공하여, 병원 이용자를 위한 참고 정보를 제공합니다.",
        image: [],
      },
      {
        title: "유튜브 연동 섹션",
        desc: "병원 공식 유튜브 채널과 연동하여 최신 동영상을 메인 페이지에 노출했습니다. 사용자가 클릭하면 동영상 재생이 가능하며, 채널 구독 유도 및 병원 홍보 효과를 고려했습니다.",
        image: [],
      },
      {
        title: "팝업 기능",
        desc: "사이트 진입 시 공지용 팝업을 띄우고, '일주일 간 보지 않기' 옵션을 구현했습니다. 선택 시 로컬스토리지에 기록하여 지정 기간 동안 다시 표시되지 않도록 처리했습니다.",
        image: [],
      },
      {
        title: "페이지 이동 및 스크롤 UX",
        desc: "React Router 기반의 SPA 구조로 빠른 페이지 전환을 제공하며, 라우트 변경 시 자동 스크롤 처리와 스크롤 위치 기반 헤더 애니메이션 등 사용자 경험 향상 로직을 구현했습니다.",
        image: [],
      },
      {
        title: "반응형 웹",
        desc: "모바일, 태블릿, 데스크톱 환경에서 모두 최적화된 UI를 제공하여 다양한 기기에서 일관된 사용자 경험을 제공합니다.",
        image: [],
      },
    ],

    role: "Frontend 개발 및 반응형 UI/UX 구현",

    contributions: [
      "React 기반 SPA 구조 설계 및 컴포넌트 개발",
      "styled-components를 활용한 UI 개발 및 레이아웃 구성",
      "Redux로 상태 관리 구성 및 전역 데이터 흐름 설계",
      "Axios 환경 분기 및 API 연동 로직 구현",
      "react-helmet-async 사용해 페이지별 SEO 타이틀 설정",
      "스크롤 기반 헤더 애니메이션 및 라우트 이동 시 자동 스크롤 UX 구현",
      "병원 소개, 의료진, 진료 과목, 공지사항 등 주요 페이지 개발",
      "메인 페이지 유튜브 연동 섹션 개발",
      "공지를 위한 팝업 기능 및 '일주일 간 보지 않기' 로컬스토리지 처리 구현",
    ],

    period: "2023.09 ~ 2023.12",
    githubLink: "",
    liveLink: "https://ic.skyamg.com/",
  },
];
