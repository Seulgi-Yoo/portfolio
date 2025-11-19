export type Feature = {
  title: string;
  desc?: string;
  image?: string; // 해당 기능 관련 스크린샷
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
    desc: "반려동물 보호자용 병원 검색·예약·챗봇 상담 서비스",
    tech: ["React", "TypeScript", "Tailwind", "Zustand"],
    fullDesc:
      "반려동물 병원을 검색하고 예약하며, 병원 챗봇을 통해 상담받을 수 있는 사용자 플랫폼입니다. 모바일 사용자를 우선으로 한 반응형 UI를 구축했고, 보호자 입장에서 직관적인 UX를 설계하는 데 집중했습니다.",
    features: [
      {
        title: "반응형 디자인",
        desc: "모바일과 데스크톱 최적화 UI",
        image: "/images/project-0.svg",
      },
      {
        title: "챗봇 연동",
        desc: "실시간 상담 기능 제공",
      },
      {
        title: "사용자 계정 관리",
        desc: "회원가입, 로그인, 프로필 수정 기능",
      },
    ],
    githubLink: "",
    liveLink: "",

    period: "2023.05 ~ 2024.12",
    role: "프론트엔드 개발 100%",
    contributions: [
      "전체 UI/UX 구조 설계 및 컴포넌트 개발",
      "챗봇 모바일 웹 연동 및 상태관리 구현",
      "병원 검색 · 필터링 로직 개발",
      "예약 프로세스 UI 개발 및 API 연동",
      "반응형 및 접근성 개선",
    ],

    image: "/images/vetell-thumb.png",
  },
  {
    id: "1",
    title: "KAHA (한국동물병원협회) 홈페이지",
    desc: "협회 정보 제공과 회원 관리 기능을 갖춘 웹사이트",
    image: "/images/kaha-thumbnail.svg",
    tech: ["Next.js", "TypeScript", "Tailwind", "React Query"],
    fullDesc:
      "한국동물병원협회 공식 홈페이지로, 협회 소개, 공지사항, 회원 관리, 행사 안내 등 다양한 기능을 제공하며 관리자와 회원 모두 편리하게 이용할 수 있습니다.",
    features: [
      {
        title: "회원 관리 시스템",
        desc: "회원 가입, 정보 수정, 권한 관리 기능",
        image: "/images/kaha-feature-0.svg",
      },
      {
        title: "공지사항 및 행사 안내",
        desc: "관리자용 게시판과 회원 대상 알림 기능",
        image: "/images/kaha-feature-1.svg",
      },
      {
        title: "반응형 웹",
        desc: "모바일/데스크톱 최적화 디자인",
        image: "/images/kaha-feature-2.svg",
      },
    ],
    role: "Frontend 개발 및 CMS 연동",
    contributions: [
      "Next.js와 Tailwind를 활용한 UI 개발",
      "React Query를 사용한 API 상태 관리",
      "관리자 페이지 기능 구현",
    ],
    period: "2023.05 ~ 2023.10",
    githubLink: "",
    liveLink: "#",
  },

  // ------------------- IVMA -------------------
  {
    id: "2",
    title: "IVMA (인천수의사협회) 홈페이지",
    desc: "협회 정보 제공과 소통 기능을 갖춘 웹사이트",
    image: "/images/ivma-thumbnail.svg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    fullDesc:
      "인천수의사협회 공식 홈페이지로, 협회 소개, 공지사항, 자료실, 회원 관리 기능 등을 제공합니다. 단순한 정보 제공뿐 아니라 협회 회원과 소통할 수 있는 기능도 포함되어 있습니다.",
    features: [
      {
        title: "자료실/공지사항",
        desc: "회원용 자료 다운로드 및 공지사항 게시",
        image: "/images/ivma-feature-0.svg",
      },
      {
        title: "회원 관리",
        desc: "회원 가입, 수정, 권한 관리 기능",
        image: "/images/ivma-feature-1.svg",
      },
      {
        title: "반응형 웹",
        desc: "모바일/데스크톱 최적화 UI",
        image: "/images/ivma-feature-2.svg",
      },
    ],
    role: "Frontend 개발 및 UI/UX 구현",
    contributions: [
      "Next.js 기반 웹사이트 SPA 개발",
      "Tailwind CSS 활용한 반응형 디자인",
      "회원용 기능 및 자료 다운로드 페이지 구현",
    ],
    period: "2023.06 ~ 2023.11",
    githubLink: "",
    liveLink: "#",
  },
  {
    id: "3",
    title: "소셜 미디어 앱",
    desc: "사용자 상호작용이 있는 완전한 소셜 플랫폼",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    fullDesc:
      "사용자들이 연결되고 콘텐츠를 공유할 수 있는 완전한 소셜 미디어 플랫폼입니다. 팔로우, 좋아요, 댓글, 메시지 등 모든 기능을 갖추고 있습니다.",
    features: [
      {
        title: "반응형 디자인",
        desc: "모바일과 데스크톱 최적화 UI",
        image: "/images/betell-feature-0.svg",
      },
      {
        title: "챗봇 연동",
        desc: "실시간 상담 기능 제공",
        image: "/images/betell-feature-1.svg",
      },
      {
        title: "사용자 계정 관리",
        desc: "회원가입, 로그인, 프로필 수정 기능",
        image: "/images/betell-feature-2.svg",
      },
    ],
    githubLink: "#",
    liveLink: "#",
  },
];
