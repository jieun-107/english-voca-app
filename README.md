# English Voca App 📚

English Voca App은 React와 Tailwind CSS로 제작된 영어 단어 학습 애플리케이션입니다. 사용자에게 세련된 UI와 직관적인 학습 경험을 제공하며, 레벨별 단어 학습 모드와 퀴즈 연습 모드를 포함하고 있습니다.

## ✨ 주요 기능 (Key Features)

- **📖 단어 학습 모드 (Study Mode)**
  - 레벨별(Level 1~2) 단어 카드를 통해 단어, 뜻, 발음, 예문을 학습할 수 있습니다.
  - 키보드 방향키(←, →)를 이용한 편리한 단어 이동 기능을 제공합니다.
  - 세련된 플래시카드 UI와 애니메이션 효과를 적용했습니다.

- **✍️ 퀴즈 연습 모드 (Practice Mode)**
  - 빈칸 채우기 형식의 객관식 퀴즈를 통해 학습 내용을 테스트할 수 있습니다.
  - 정답 시 점수 획득 및 즉각적인 피드백(정답/오답 표시)을 제공합니다.
  - 연속적으로 문제를 풀며 점수를 쌓아가는 재미를 느낄 수 있습니다.

- **🎨 모던한 UI/UX**
  - **Tailwind CSS** 기반의 세련된 디자인 시스템.
  - 다크 모드 스타일의 배경과 Glassmorphism 효과 적용.
  - 부드러운 화면 전환 및 인터랙션 애니메이션.

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 | 설명 |
|---|---|---|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | UI 컴포넌트 라이브러리 |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | 정적 타입 지정을 통한 안정성 확보 |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | 유틸리티 퍼스트 CSS 프레임워크 |
| **Build** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | 빠르고 가벼운 빌드 툴 |
| **Icons** | **Lucide / Heroicons** | 직관적인 아이콘 사용 |

## 🚀 설치 및 실행 방법 (Installation & Running)

이 프로젝트를 로컬 환경에서 실행하려면 Node.js가 설치되어 있어야 합니다.

1. **저장소 클론 (Clone Repository)**
   ```bash
   git clone https://github.com/jieun-107/english-voca-app.git
   cd english-voca-app
   ```

2. **의존성 설치 (Install Dependencies)**
   ```bash
   npm install
   ```

3. **개발 서버 실행 (Run Dev Server)**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173`으로 접속합니다.

4. **빌드 (Build)**
   ```bash
   npm run build
   ```

## 📂 프로젝트 구조 (Project Structure)

```
english-voca-app/
├── public/              # 정적 파일
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Flashcard.tsx    # 단어 카드
│   │   ├── LevelSelector.tsx # 레벨 선택
│   │   ├── MainMenu.tsx      # 메인 메뉴
│   │   ├── Navigation.tsx    # 이전/다음 버튼
│   │   ├── PracticeMode.tsx  # 퀴즈 모드
│   │   └── StudyMode.tsx     # 학습 모드
│   ├── data/            # 단어 데이터 (vocabulary.ts)
│   ├── App.tsx          # 메인 앱 컴포넌트
│   └── index.css        # Tailwind CSS 설정
├── tailwind.config.js   # Tailwind 설정 파일
└── vite.config.ts       # Vite 설정 파일
```

## 🤝 기여 (Contributing)

이 프로젝트에 기여하고 싶다면 이슈(Issue)를 등록하거나 풀 리퀘스트(Pull Request)를 보내주세요.

## 📝 라이선스 (License)

This project is licensed under the MIT License.
