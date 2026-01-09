import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import Navigation from './Navigation';
import LevelSelector from './LevelSelector';
import { vocabularyList } from '../data/vocabulary';

interface StudyModeProps {
    onBack: () => void;
}

/**
 * 단어 학습 모드 컴포넌트
 * 레벨별 단어 학습, 네비게이션, 레벨 선택 기능을 제공합니다.
 */
const StudyMode: React.FC<StudyModeProps> = ({ onBack }) => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filter words based on the current level
    const levelWords = vocabularyList.filter(word => word.level === currentLevel);
    const currentWord = levelWords[currentIndex];

    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < levelWords.length - 1;

    // Get unique available levels from the vocabulary list
    const availableLevels = Array.from(new Set(vocabularyList.map(v => v.level))).sort((a, b) => a - b);

    const handlePrev = () => {
        if (hasPrev) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (hasNext) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleLevelChange = (level: number) => {
        setCurrentLevel(level);
        setCurrentIndex(0); // Reset to first word of the new level
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, hasPrev, hasNext]);

    return (
        <div className="w-full max-w-[600px] flex flex-col items-center">
            <button
                onClick={onBack}
                className="self-start mb-4 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Menu
            </button>

            <LevelSelector
                currentLevel={currentLevel}
                onSelectLevel={handleLevelChange}
                availableLevels={availableLevels}
            />

            {currentWord ? (
                <Flashcard data={currentWord} />
            ) : (
                <div className="text-white text-lg">No words found for this level.</div>
            )}

            <Navigation
                onPrev={handlePrev}
                onNext={handleNext}
                hasPrev={hasPrev}
                hasNext={hasNext}
                currentIndex={currentIndex}
                totalCount={levelWords.length}
            />
        </div>
    );
};

export default StudyMode;
