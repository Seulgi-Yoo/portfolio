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
    image: "/images/ivma-thumbnail.svg",
    tech: ["Next.js", "TypeScript", "Antd", "MUI", "React Query"],
    fullDesc:
      "인천수의사회 공식 홈페이지로, 협회 소개, 공지사항, 자료실, 회원 관리 등 다양한 기능을 제공하며, 회원 간 소통을 위한 게시판과 댓글 기능을 포함했습니다. 또한 연회비 납부 프로세스를 설계 단계부터 백엔드 개발자와 협업하여 구현, 회원 구분별 자동 연회비 계산 및 미납 내역 반영 등 실무 중심의 기능을 제공했습니다.",
    features: [
      {
        title: "메인 페이지",
        desc: "캐러셀을 통해 주요 안내를 시각적으로 표시하고, 최근 공지사항과 자료실 일부 정보를 노출합니다. 각 항목 클릭 시 상세 페이지로 이동하도록 구현했습니다.",
        image: [],
      },
      {
        title: "협회 소개",
        desc: "인사말, 연혁, 오시는 길 등 협회 관련 정보를 제공하는 정적 페이지로, 사용자가 협회의 전반적인 내용을 쉽게 이해할 수 있도록 구성했습니다.",
        image: [],
      },
      {
        title: "회원가입",
        desc: "회원 가입과 정보 수정 기능을 제공하며, 사용자가 안전하고 직관적으로 계정을 관리할 수 있도록 UI/UX를 구현했습니다.",
        image: [],
      },
      {
        title: "자료실/공지사항",
        desc: "회원용 자료 다운로드 기능과 공지사항 게시판을 구현하여, 회원이 필요한 정보를 쉽게 확인하고 다운로드할 수 있도록 구성했습니다.",
        image: [],
      },
      {
        title: "게시판 및 댓글 기능",
        desc: "회원 전용 게시판과 댓글 기능을 추가하여, 회원들 간 자유로운 소통과 정보 공유가 가능하도록 구현했습니다.",
        image: [],
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
];
