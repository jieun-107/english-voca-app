import React from 'react';
// import './LevelSelector.css'; // Removed for Tailwind

interface LevelSelectorProps {
    currentLevel: number;
    onSelectLevel: (level: number) => void;
    availableLevels: number[];
}

/**
 * 레벨 선택 컴포넌트
 * 사용자가 학습할 단어의 레벨을 선택할 수 있는 버튼 그룹을 렌더링합니다.
 */
const LevelSelector: React.FC<LevelSelectorProps> = ({ currentLevel, onSelectLevel, availableLevels }) => {
    return (
        <div className="flex gap-4 mb-8 bg-white/5 p-2 rounded-xl backdrop-blur-md border border-white/10">
            {availableLevels.map((level) => (
                <button
                    key={level}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all text-sm
                        ${currentLevel === level
                            ? 'bg-sky-400 text-slate-900 shadow-lg shadow-sky-400/30'
                            : 'text-slate-400 hover:text-slate-50 hover:bg-white/10'
                        }`}
                    onClick={() => onSelectLevel(level)}
                >
                    Level {level}
                </button>
            ))}
        </div>
    );
};

export default LevelSelector;
