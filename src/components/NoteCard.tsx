import React from 'react';
import type { Concept } from '../services/notes';
import { Link } from 'react-router-dom';

interface NoteCardProps {
    note: Concept;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {

    // Mapa de colores para dificultad
    const difficultyColor = {
        'Básico': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
        'Intermedio': 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
        'Avanzado': 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
    };

    const conceptTypeStyle = (type: string) => {
        if (type === 'apuntes') return 'bg-sky-100 text-sky-700 dark:bg-sky-800/20 dark:text-sky-300 border-sky-200 dark:border-sky-600/20';
        if (type === 'practica') return 'bg-violet-100 text-violet-700 dark:bg-violet-800/20 dark:text-violet-300 border-violet-200 dark:border-violet-600/20';
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
    };

    return (
        <Link to={`${note.id}`} className="block h-full">
            <div className="relative min-h-56 group flex flex-col bg-white dark:bg-[#0a0f14] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-rune-500/10 dark:hover:shadow-rune-500/5 hover:border-rune-200 dark:hover:border-rune-500/30 transition-all duration-300">

                {/* Badges en esquinas */}
                <span className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${difficultyColor[note.difficulty]}`}>
                    {note.difficulty}
                </span>
                <span className={`absolute top-3 right-3 z-20 px-2 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider border ${conceptTypeStyle(note.conceptType)}`}>
                    {note.conceptType === 'apuntes' ? 'Apuntes' : 'Práctica'}
                </span>

                <div className="pt-12 px-6 pb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-rune-600 dark:group-hover:text-rune-400 transition-colors">
                        {note.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {note.shortDescription}
                    </p>

                    {/* Tags debajo de la descripción */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {note.tags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded font-mono text-slate-600 dark:text-slate-300">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};