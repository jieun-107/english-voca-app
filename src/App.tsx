import { useState } from 'react';
// import './App.css'; // Removed for Tailwind
import MainMenu from './components/MainMenu';
import StudyMode from './components/StudyMode';
import PracticeMode from './components/PracticeMode';

type View = 'menu' | 'study' | 'practice';

/**
 * 메인 애플리케이션 컴포넌트
 * 화면 상태(View)를 관리하고 각 모드에 따른 컴포넌트를 렌더링합니다.
 */
function App() {
  const [view, setView] = useState<View>('menu');

  return (
    <div className="w-full max-w-[600px] min-h-screen h-auto flex flex-col justify-center items-center p-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-400 blur-[150px] opacity-20 -z-10 rounded-full"></div>

      {view === 'menu' && (
        <MainMenu onSelectMode={setView} />
      )}

      {view === 'study' && (
        <StudyMode onBack={() => setView('menu')} />
      )}

      {view === 'practice' && (
        <PracticeMode onBack={() => setView('menu')} />
      )}
    </div>
  );
}

export default App;

