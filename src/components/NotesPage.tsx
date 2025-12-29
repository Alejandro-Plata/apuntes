import { useNotes } from '../hooks/useNotes';
import type { ChangeEvent } from 'react';
import type { DifficultyFilter } from '../hooks/useNotes';
import type { ConceptType } from '../services/notes';
import { Icons } from './Icons';
import { NoteCard } from './NoteCard';

export const NotesPage = () => {
    const {
        difficulties,
        conceptTypes,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedConceptType,
        setSelectedConceptType,
        searchQuery,
        setSearchQuery,
        filteredNotes
    } = useNotes();

    return (
        <div className="p-8 lg:p-14 min-h-full animate-fade-in">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header & Search */}
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                            Apuntes de React
                        </h1>
                    </div>

                    {/* Search Bar (Ahora sola en la derecha superior) */}
                    <div className="relative w-full md:w-80 group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            {Icons.search}
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-2.5 border border-slate-200 dark:border-white/10 rounded-md bg-white dark:bg-[#0b1015] text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rune-500/50 focus:border-rune-500 transition-all duration-300 sm:text-sm shadow-sm group-hover:shadow-md"
                            placeholder="Buscar concepto..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Navigation Bar (Tabs + Filter Select) */}
                <div className="flex flex-col sm:flex-row justify-between items-end border-b border-slate-200 dark:border-white/10 gap-4">

                    {/* Difficulty Select */}
                    <div className="pb-2 sm:pb-3 w-full sm:w-auto">
                        <div className="mb-2 flex flex-col items-center text-center">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dificultad</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Filtra por nivel</span>
                        </div>
                        <div className="relative flex justify-center">
                            <select
                                value={selectedDifficulty}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDifficulty(e.target.value as DifficultyFilter)}
                                className="appearance-none bg-white dark:bg-[#071018] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 py-2 pl-4 pr-8 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rune-500/50 shadow-sm hover:shadow-md transition-all w-full sm:w-auto text-center"
                            >
                                {difficulties.map((diff) => (
                                    <option key={diff} value={diff} className="bg-slate-200 dark:bg-[#0b1015] border-slate-300 dark:border-white/10">
                                        {diff === 'Todas' ? 'Todas' : diff}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-slate-500">
                                {Icons.arrowDown}
                            </div>
                        </div>
                    </div>
                    {/* Concept Type Select */}
                    <div className="pb-2 sm:pb-3 w-full sm:w-auto">
                        <div className="mb-2 flex flex-col items-center text-center">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tipo</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Apuntes / Práctica</span>
                        </div>
                        <div className="relative flex justify-center">
                            <select
                                value={selectedConceptType}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedConceptType(e.target.value as ConceptType | 'Todas')}
                                className="appearance-none bg-white dark:bg-[#071018] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 py-2 pl-4 pr-8 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-rune-500/50 shadow-sm hover:shadow-md transition-all w-full sm:w-auto text-center"
                            >
                                {conceptTypes.map((ct) => (
                                    <option key={ct} value={ct} className="bg-slate-200 dark:bg-[#0b1015] border-slate-300 dark:border-white/10">
                                        {ct === 'Todas' ? 'Todos' : ct === 'apuntes' ? 'Apuntes' : 'Práctica'}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2 text-slate-500">
                                {Icons.arrowDown}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid de Notas */}
                {filteredNotes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredNotes.map((note, index) => (
                            <div key={note.id} className="animate-enter-up" style={{ animationDelay: `${index * 50}ms` }}>
                                <NoteCard note={note} />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Estado Vacío */
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 mb-4">
                            <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">No se encontraron apuntes</h3>
                        <p className="mt-1 text-slate-500 dark:text-slate-400">Intenta cambiar los filtros de dificultad o búsqueda.</p>
                        <button
                            onClick={() => { setSelectedDifficulty('Todas'); setSearchQuery(''); setSelectedConceptType('Todas'); }}
                            className="mt-4 text-sm font-bold text-rune-500 hover:text-rune-600 transition-colors"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};