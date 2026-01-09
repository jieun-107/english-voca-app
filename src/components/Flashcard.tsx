import React from 'react';
import type { Vocabulary } from '../data/vocabulary';
// import './Flashcard.css'; // Removed for Tailwind

interface FlashcardProps {
    data: Vocabulary;
}

/**
 * 단어 카드 컴포넌트
 * 단어의 영문, 뜻, 발음, 예문을 보여주는 카드 UI를 렌더링합니다.
 */
const Flashcard: React.FC<FlashcardProps> = ({ data }) => {
    return (
        <div className="perspective-[1000px] w-full max-w-[500px] min-h-[500px] h-auto flex justify-center items-center mb-8">
            <div className="w-full h-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg flex flex-col justify-start items-center text-center p-12 transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl relative overflow-hidden">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full" key={`header-${data.word}`}>
                    <div className="text-6xl font-extrabold mb-4 bg-gradient-to-br from-white to-slate-200 bg-clip-text text-transparent tracking-tight">
                        {data.word}
                    </div>
                    <div className="w-full pb-8 border-b border-white/10 mb-8">
                        <div className="text-3xl font-bold text-slate-50 mb-2">{data.meaning}</div>
                        <div className="text-xl text-sky-400 font-medium opacity-80">/{data.pronunciation}/</div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100" key={`examples-${data.word}`}>
                    {data.examples.map((example, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <div className="text-slate-50 text-lg font-medium italic">"{example.sentence}"</div>
                            <div className="text-slate-400 text-base">{example.translation}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
