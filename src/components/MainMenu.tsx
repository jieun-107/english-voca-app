import React from 'react';
// import './MainMenu.css'; // Removed for Tailwind

interface MainMenuProps {
    onSelectMode: (mode: 'study' | 'practice') => void;
}

/**
 * 메인 메뉴 컴포넌트
 * 사용자가 '단어 공부' 또는 '퀴즈 연습' 모드를 선택할 수 있게 합니다.
 */
const MainMenu: React.FC<MainMenuProps> = ({ onSelectMode }) => {
    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-[500px]">
            <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent text-center">
                English Voca
            </h1>

            <button
                className="w-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-slate-50 text-2xl font-semibold cursor-pointer transition-all duration-300 flex justify-between items-center shadow-md hover:-translate-y-1 hover:bg-white/10 hover:border-sky-400 hover:shadow-lg group"
                onClick={() => onSelectMode('study')}
            >
                <span>Word Study</span>
                <span className="text-3xl opacity-80 group-hover:scale-110 group-hover:text-sky-400 transition-transform">📚</span>
            </button>

            <button
                className="w-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-slate-50 text-2xl font-semibold cursor-pointer transition-all duration-300 flex justify-between items-center shadow-md hover:-translate-y-1 hover:bg-white/10 hover:border-sky-400 hover:shadow-lg group"
                onClick={() => onSelectMode('practice')}
            >
                <span>Practice Quiz</span>
                <span className="text-3xl opacity-80 group-hover:scale-110 group-hover:text-sky-400 transition-transform">✍️</span>
            </button>
        </div>
    );
};

export default MainMenu;
