import React, { useState, useEffect } from 'react';
import { vocabularyList, type Vocabulary } from '../data/vocabulary';
// import './PracticeMode.css'; // Removed for Tailwind

interface PracticeModeProps {
    onBack: () => void;
}

interface Question {
    id: number;
    sentencePart1: string;
    sentencePart2: string;
    answer: Vocabulary;
    options: Vocabulary[];
}

/**
 * 퀴즈 연습 모드 컴포넌트
 * 문장 빈칸 채우기 퀴즈를 생성하고 사용자와 상호작용합니다.
 */
const PracticeMode: React.FC<PracticeModeProps> = ({ onBack }) => {
    const [question, setQuestion] = useState<Question | null>(null);
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);

    // Generate a new question
    const generateQuestion = () => {
        // Pick a random word
        const randomWordIndex = Math.floor(Math.random() * vocabularyList.length);
        const answer = vocabularyList[randomWordIndex];

        // Pick a random example from that word
        const randomExampleIndex = Math.floor(Math.random() * answer.examples.length);
        const example = answer.examples[randomExampleIndex];

        // Split sentence by the word (case insensitive)
        const sentence = example.sentence;
        const regex = new RegExp(`\\b${answer.word}\\b`, 'i');

        // Find distractors (same level preferably)
        const sameLevelWords = vocabularyList.filter(v => v.level === answer.level && v.id !== answer.id);
        const shuffledDistractors = sameLevelWords.sort(() => 0.5 - Math.random()).slice(0, 3);

        const options = [...shuffledDistractors, answer].sort(() => 0.5 - Math.random());

        // Calculate split parts for display
        const match = sentence.match(regex);
        let part1 = "", part2 = "";
        if (match && match.index !== undefined) {
            part1 = sentence.substring(0, match.index);
            part2 = sentence.substring(match.index + match[0].length);
        } else {
            // Fallback if word not found exactly
            part1 = sentence;
            part2 = "";
        }

        setQuestion({
            id: Date.now(),
            sentencePart1: part1,
            sentencePart2: part2,
            answer,
            options
        });
        setSelectedOptionId(null);
        setIsCorrect(null);
    };

    useEffect(() => {
        generateQuestion();
    }, []);

    const handleOptionClick = (optionId: number) => {
        if (selectedOptionId !== null) return; // Prevent multiple clicks

        setSelectedOptionId(optionId);
        if (question && optionId === question.answer.id) {
            setIsCorrect(true);
            setScore(s => s + 10);
        } else {
            setIsCorrect(false);
        }
    };

    if (!question) return <div className="text-white text-center">Loading...</div>;

    return (
        <div className="w-full max-w-[600px] flex flex-col items-center gap-8">
            <div className="w-full flex justify-between items-center mb-4">
                <button
                    onClick={onBack}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg border-none cursor-pointer hover:bg-white/20 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Quit
                </button>
                <div className="text-xl font-bold text-amber-400">Score: {score}</div>
            </div>

            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg flex flex-col items-center p-8 relative overflow-hidden transition-all animate-in fade-in zoom-in-95 duration-300">
                <div className="text-2xl font-medium text-center mb-8 leading-relaxed text-slate-100">
                    {question.sentencePart1}
                    <span className="inline-block min-w-[100px] border-b-2 border-slate-400 mx-2 text-center text-sky-400 font-bold tracking-wider">
                        {isCorrect && selectedOptionId !== null ? question.answer.word : '______'}
                    </span>
                    {question.sentencePart2}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {question.options.map(option => {
                        let buttonClass = "w-full p-4 bg-white/5 border border-white/10 rounded-xl text-lg font-medium text-slate-200 transition-all hover:bg-white/10 hover:border-sky-400 disabled:cursor-not-allowed";

                        if (selectedOptionId !== null) {
                            if (option.id === question.answer.id) {
                                buttonClass = "w-full p-4 bg-green-500/20 border border-green-500 rounded-xl text-lg font-bold text-green-400 cursor-default scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                            } else if (selectedOptionId === option.id && !isCorrect) {
                                buttonClass = "w-full p-4 bg-red-500/20 border border-red-500 rounded-xl text-lg font-medium text-red-400 cursor-default opacity-80";
                            } else {
                                buttonClass = "w-full p-4 bg-white/5 border border-white/5 rounded-xl text-lg font-medium text-slate-500 cursor-default opacity-50";
                            }
                        }

                        return (
                            <button
                                key={option.id}
                                className={buttonClass}
                                onClick={() => handleOptionClick(option.id)}
                                disabled={selectedOptionId !== null}
                            >
                                {option.word}
                            </button>
                        );
                    })}
                </div>

                {selectedOptionId !== null && (
                    <div className="w-full mt-8 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className={`text-xl font-bold ${isCorrect ? 'text-green-400 drop-shadow-sm' : 'text-red-400 drop-shadow-sm'}`}>
                            {isCorrect ? 'Correct! 🎉' : `Wrong! The answer was "${question.answer.word}".`}
                        </div>
                        <button
                            className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-1 active:translate-y-0"
                            onClick={generateQuestion}
                        >
                            Next Question →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PracticeMode;
