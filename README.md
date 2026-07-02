# eeFunction Docs

Astro Starlight 기반의 eeFunction 문서 사이트입니다. eeFunction은 Excel에서 유체역학 및 열역학 관련 물성을 빠르게 계산하기 위한 Office Add-in입니다.

## 주요 구조

```text
.
├── src/
│   ├── assets/              # 문서 이미지와 아이콘
│   ├── components/          # 문서에서 사용하는 Astro 컴포넌트
│   ├── content/
│   │   ├── docs/            # 영문 문서
│   │   └── docs/ko/         # 한국어 문서
│   └── styles/              # Starlight 커스텀 CSS
├── astro.config.mjs         # Starlight 사이트 설정
├── package.json
└── tsconfig.json
```

## 개발 명령어

| Command | Action |
| :-- | :-- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 실행 (`0.0.0.0:4321`) |
| `npm run build` | 정적 사이트 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run astro -- --help` | Astro CLI 도움말 |

## 문서 작성 규칙

- 기본 영문 문서는 `src/content/docs/` 아래에 작성합니다.
- 한국어 문서는 같은 상대 경로로 `src/content/docs/ko/` 아래에 작성합니다.
- 문서 파일명은 새로 추가할 때 소문자 kebab-case를 사용합니다.
- 한국어 문서의 내부 링크는 한국어 경로(`/ko/...`)로 연결합니다.
- 이미지와 표 컴포넌트는 기존 `src/assets/`, `src/components/`, `src/content/docs/reference/` 구조를 재사용합니다.

## 배포

GitHub에 변경사항이 반영되면 Cloudflare Pages에서 `npm run build`를 실행해 `https://eefunction-doc.pages.dev`로 배포합니다.

## Dev Container 점검

- 개발 서버는 `0.0.0.0:4321`로 리슨해야 합니다.
- 접속 확인: `curl http://127.0.0.1:4321/`
- VS Code Ports 패널에서 4321 포트가 `Forwarded` 상태인지 확인합니다.
