import React from 'react';
// import './Navigation.css'; // Removed for Tailwind

interface NavigationProps {
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
    currentIndex: number;
    totalCount: number;
}

/**
 * 네비게이션 컴포넌트
 * 이전/다음 단어로 이동하는 버튼과 현재 진행 상태를 표시합니다.
 */
const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, hasPrev, hasNext, currentIndex, totalCount }) => {
    return (
        <div className="flex items-center gap-8">
            <button
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all hover:bg-white/10 hover:text-sky-400 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                onClick={onPrev}
                disabled={!hasPrev}
                aria-label="Previous Word"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>

            <div className="text-slate-400 font-semibold text-lg min-w-[80px] text-center">
                {currentIndex + 1} / {totalCount}
            </div>

            <button
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all hover:bg-white/10 hover:text-sky-400 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                onClick={onNext}
                disabled={!hasNext}
                aria-label="Next Word"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </div>
    );
};

export default Navigation;
