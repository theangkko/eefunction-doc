## 🐳 Dev Container 점검 포인트

실행시
`pnpm preview`

--- 

- **포트 바인딩**: `npm run dev` 실행 시, 서버가 `0.0.0.0:4321`로 리슨 중인지 확인  
  (IPv6 `::1`만 바인딩되면 VS Code 포트포워딩/브라우저에서 접속 불가)
- **접속 확인**:  
  - 터미널에서 `curl http://127.0.0.1:4321/`로 200 OK 및 HTML 응답 확인
  - VS Code Ports 패널에서 4321 포트가 `Forwarded` 상태인지 확인
  - 필요시 `"$BROWSER" http://localhost:4321/`로 브라우저에서 직접 열기
- **설정**:  
  - `astro.config.mjs`에 `server: { host: true, port: 4321 }` 설정 필요
  - 또는 `package.json`의 dev 스크립트에 `--host 0.0.0.0 --port 4321` 옵션 포함
- **문제 발생 시 점검 명령어**:  
  ```bash
  # 포트 리슨 상태 확인
  lsof -nP -iTCP:4321 -sTCP:LISTEN
  
  # 로컬 접속 테스트
  curl -i http://127.0.0.1:4321/ | head -n 20
  
  # 컨테이너 IP로 접속 테스트
  curl -i http://$(hostname -I | awk '{print $1}'):4321/ | head -n 20
  ```
- **초기 빌드 시간**: 첫 실행 시 약 50초 소요됨 (화면이 비어 보일 수 있음)

---

## cloudflare AUTO build
- after adding commit on github 
- and cloud run 'npm run build' automatically and deploy to cloudflare "eefunction-doc.pages.dev"


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



## Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 👀 Want to learn more?

Check out [Starlight's docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
