import { projectsData } from "@/lib/projects";

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export default async function ProjectDetail({ params }: { params: any }) {
  // NOTE(ko): Next.js의 스트리밍 환경에서는 `params`가 thenable(ReactPromise)로 올 수 있습니다.
  // 필요한 경우 await로 안전하게 값을 얻은 뒤 id를 추출합니다.
  let resolvedParams = params;
  try {
    if (params && typeof params.then === "function") {
      resolvedParams = await params;
    }
  } catch (e) {
    // 에러가 발생해도 페이지 렌더링이 계속되도록 로그만 남깁니다.
    console.error("[project detail] params 대기 중 에러:", e);
  }

  // NOTE(ko): resolvedParams가 { id: '0' } 형태가 아니라
  // { value: '{"id":"0"}' } 같은 구조로 올 수 있으므로 안전하게 파싱합니다.
  let id: string | undefined = resolvedParams?.id;
  if (
    (!id || id === "undefined") &&
    typeof resolvedParams?.value === "string"
  ) {
    try {
      const parsed = JSON.parse(resolvedParams.value);
      id = parsed?.id ?? id;
    } catch (e) {
      // 파싱 실패 시 무시하고 이후 로직에서 처리합니다.
    }
  }

  // 프로젝트 찾기: id를 문자열로 변환해 비교합니다.
  const project = projectsData.find((p) => p.id === String(id));
  // 프로젝트에 optional 이미지가 있을 수 있으므로 any로 안전하게 접근합니다.
  const projectImage = (project as any)?.image;
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300 font-semibold inline-block"
          >
            뒤로 가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <a
            href="/"
            aria-label="뒤로가기"
            className="text-slate-300 hover:text-white transition duration-300 font-semibold flex items-center gap-2 z-10"
          >
            <span className="text-2xl">←</span>
            <span className="hidden md:inline">뒤로 가기</span>
          </a>
          <h1 className="text-3xl font-bold gradient-text absolute left-1/2 transform -translate-x-1/2 z-0">
            seulgi.dev
          </h1>
          <div></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* 히어로: 이미지(플레이스홀더) + 제목/설명/태그/버튼 */}
          <div className="mb-8 grid md:grid-cols-7 gap-12 items-center">
            <div className="md:col-span-3">
              {/* 이미지가 있으면 이미지를 보여주고, 없으면 플레이스홀더 */}
              <div className="w-full rounded-xl overflow-hidden">
                {/* 16:9 비율 유지 (padding-top 56.25%) */}
                <div className="w-full pt-[56.25%] relative">
                  {projectImage ? (
                    <img
                      src={projectImage}
                      alt={`${project.title} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover object-top  rounded-lg shadow-xl"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600">
                      {project.title ? project.title : "PRJ"}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4">
                {project.desc}
              </p>

              {/* 기술스택 */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 바로가기 링크F */}
              <div className="flex gap-3 flex-wrap">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300 font-semibold"
                  >
                    라이브 보기
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="px-6 py-3 border-2 border-purple-400 text-white rounded-lg hover:bg-purple-400/10 transition duration-300 font-semibold"
                  >
                    GitHub 보기
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">프로젝트 소개</span>
          </h2>
          <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {project.fullDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      {(project.period || project.role) && (
        <section className="px-6 py-20 bg-slate-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">
              <span className="gradient-text">프로젝트 정보</span>
            </h2>

            <div className="bg-slate-900/40 border border-purple-500/30 rounded-xl p-8 space-y-10 backdrop-blur-sm">
              {/* 기간 */}
              {project.period && (
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    프로젝트 기간
                  </h3>
                  <p className="text-lg text-slate-300">{project.period}</p>
                </div>
              )}

              {/* 역할 및 기여 */}
              {project.role && (
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    역할 및 기여
                  </h3>

                  {/* 역할 */}
                  <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line mb-4">
                    {project.role}
                  </p>

                  {/* 기여 */}
                  {project.contributions &&
                    Array.isArray(project.contributions) && (
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        {project.contributions.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features + Screenshots Section */}
      <section className="px-6 py-20 bg-slate-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            <span className="gradient-text">주요 기능</span>
          </h2>

          <div className="bg-slate-900/40 border border-purple-500/30 rounded-xl p-8 space-y-10 backdrop-blur-sm">
            <div className="flex flex-col divide-y divide-purple-500/30">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid md:grid-cols-2 gap-6 items-center md:items-start py-6"
                >
                  {/* 기능 카드 */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-4 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1 flex-shrink-0"></div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    {feature.desc && (
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {feature.desc}
                      </p>
                    )}
                  </div>

                  {/* 대응 스크린샷 */}
                  {feature.image && feature.image.length > 0 && (
                    <div className="flex gap-4 overflow-x-auto scrollbar scrollbar-thumb-purple-500 scrollbar-track-gray-200">
                      {feature.image.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="rounded-xl overflow-hidden bg-slate-900 shadow-lg transition duration-300 hover:shadow-2xl hover:shadow-purple-500/50 min-w-[300px]"
                        >
                          <img
                            src={img}
                            alt={`feature-${idx}-img-${imgIdx}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">다른 프로젝트 보기</span>
          </h2>
          <a
            href="/#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition duration-300 font-semibold inline-block"
          >
            포트폴리오로 돌아가기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-8 border-t border-purple-500/20 bg-slate-950/80 backdrop-blur-lg text-center text-slate-400">
        <p>
          &copy; 2025 Frontend Engineer Portfolio. Built with Next.js & Tailwind
          CSS.
        </p>
      </footer>
    </div>
  );
}
