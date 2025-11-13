export type Project = {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  fullDesc: string;
  features: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: "0",
    title: "이커머스 플랫폼",
    desc: "Next.js와 Tailwind CSS로 만든 현대적인 쇼핑 플랫폼",
    // 테스트 이미지: public/images/project-0.svg (내보내기 시 public 폴더를 사용하세요)
    image: "/images/project-0.svg",
    tech: ["React", "TypeScript", "Tailwind"],
    fullDesc:
      "사용자 친화적인 인터페이스와 빠른 성능을 갖춘 완전한 이커머스 플랫폼입니다. 상품 검색, 장바구니, 결제 기능 등 모든 필수 기능을 포함하고 있습니다.",
    features: [
      "반응형 디자인",
      "장바구니 관리",
      "상품 필터링 및 검색",
      "결제 시스템 연동",
      "사용자 계정 관리",
    ],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "1",
    title: "작업 관리 앱",
    desc: "부드러운 애니메이션이 있는 실시간 협업 도구",
    tech: ["Next.js", "WebSocket", "React"],
    fullDesc:
      "팀 협업을 위한 실시간 작업 관리 애플리케이션입니다. 실시간 업데이트, 부드러운 애니메이션, 직관적인 UI로 생산성을 극대화합니다.",
    features: [
      "실시간 협업",
      "작업 우선순위 설정",
      "팀 멤버 초대",
      "주석 및 첨부파일",
      "진행 상황 추적",
    ],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "2",
    title: "분석 대시보드",
    desc: "대화형 차트가 있는 데이터 시각화 대시보드",
    tech: ["React", "D3.js", "TypeScript"],
    fullDesc:
      "복잡한 데이터를 아름다운 차트와 그래프로 시각화하는 대시보드입니다. 실시간 데이터 업데이트와 상호작용형 요소로 인사이트를 빠르게 얻을 수 있습니다.",
    features: [
      "실시간 데이터 시각화",
      "커스터마이징 가능한 대시보드",
      "다양한 차트 유형",
      "데이터 내보내기",
      "필터 및 검색 기능",
    ],
    githubLink: "#",
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
      "사용자 프로필",
      "게시물 작성 및 공유",
      "팔로우 시스템",
      "좋아요 및 댓글",
      "실시간 메시지",
    ],
    githubLink: "#",
    liveLink: "#",
  },
];
