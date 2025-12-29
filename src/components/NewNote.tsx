import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Concept } from '../services/notes';
import { notesService } from '../services/notes';
import { CodeBlock } from './CodeBlock';
import { DefinitionBox } from './DefinitionBox';
import { renderContent } from './RenderContent';

export const NewNote = () => {
    const { noteId } = useParams();
    const note = useMemo<Concept | undefined>(() => {
        if (!noteId) return undefined;
        return notesService.getById(noteId);
    }, [noteId]);

    // 2. Scroll al inicio al cambiar de nota
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [noteId]);

    // 3. Lógica de navegación (Prev/Next)
    const navigation = useMemo(() => {
        if (!note) return { prev: null, next: null };
        
        const sameLanguageNotes = notesService.getAll().filter(n => n.language === note.language);
        const currentIndex = sameLanguageNotes.findIndex(n => n.id === note.id);
        
        return {
            prev: currentIndex > 0 ? sameLanguageNotes[currentIndex - 1] : null,
            next: currentIndex < sameLanguageNotes.length - 1 ? sameLanguageNotes[currentIndex + 1] : null
        };
    }, [note]);

    if (!note) return null;

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* --- HEADER DE NAVEGACIÓN --- */}
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-10"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
                    </svg>
                    Volver a la biblioteca
                </Link>

                {/* --- TÍTULO Y METADATOS --- */}
                <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <div className="flex gap-3 mb-4">
                        {/* Tags simples estilo Notion */}
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                            {note.language}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium
                            ${note.difficulty === 'Básico' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                            ${note.difficulty === 'Intermedio' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                            ${note.difficulty === 'Avanzado' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' : ''}
                        `}>
                            {note.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wide border ${note.conceptType === 'apuntes' ? 'bg-sky-100 text-sky-700 dark:bg-sky-800/20 dark:text-sky-300 border-sky-200' : 'bg-violet-100 text-violet-700 dark:bg-violet-800/20 dark:text-violet-300 border-violet-200'}`}>
                            {note.conceptType === 'apuntes' ? 'Apuntes' : 'Práctica'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        {note.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 text-sm">
                        {note.tags.map(tag => (
                            <span key={tag} className="text-slate-500 dark:text-slate-400">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* --- CONCEPTO CLAVE --- */}
                <div className="mb-12">
                    <DefinitionBox title="Concepto Fundamental">
                        {renderContent(note.keyConcept)}
                    </DefinitionBox>
                </div>

                {/* --- CONTENIDO PRINCIPAL --- */}
                <div className="space-y-8">
                    {note.content.map((item, index) => (
                        <div key={index}>
                            {item.type === 'text' ? (
                                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                                    {/* Renderizamos el contenido tal cual, respetando saltos de línea */}
                                    <p>{renderContent(item.value)}</p>
                                </div>
                            ) : (
                                <CodeBlock
                                    code={item.value}
                                    language={note.language}
                                />
                            )}
                        </div>
                    ))}
                </div>

               
                {/* --- NAV FOOTER --- */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {navigation.prev ? (
                        <Link 
                            to={`/${navigation.prev.id}`}
                            className="block p-4 rounded border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="text-xs text-slate-500 block mb-1">Anterior</span>
                            <span className="font-semibold block truncate">{navigation.prev.title}</span>
                        </Link>
                    ) : <div />}

                    {navigation.next ? (
                        <Link 
                            to={`/${navigation.next.id}`}
                            className="block p-4 rounded border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-right"
                        >
                            <span className="text-xs text-slate-500 block mb-1">Siguiente</span>
                            <span className="font-semibold block truncate">{navigation.next.title}</span>
                        </Link>
                    ) : (
                         <Link 
                            to="/"
                            className="block p-4 rounded border border-emerald-200 dark:border-emerald-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-right"
                        >
                            <span className="text-xs text-emerald-600 block mb-1">Finalizado</span>
                            <span className="font-semibold text-emerald-700 dark:text-emerald-400 block">Volver al índice</span>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};