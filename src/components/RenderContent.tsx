import React, { Fragment } from "react";

type ContentRenderer = (content: string) => React.ReactNode;

// Función auxiliar para renderizar contenido con patrones anidados
const renderWithPatterns = (text: string, depth = 0): React.ReactNode => {
    if (!text || typeof text !== 'string') return text;
    
    // Máxima profundidad para evitar recursión infinita
    if (depth > 10) return text;

    // Expresiones regulares con captura no codiciosa
    const headingMatch = text.match(/^###\s+(.+)$/m);
    if (headingMatch) {
        const headingText = renderWithPatterns(headingMatch[1], depth + 1);
        return (
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">
                {headingText}
            </h3>
        );
    }

    // Patrones ordenados por precedencia: primero los más específicos
    const patterns = [
        {
            regex: /(\*\*[^*]+\*\*)/,
            key: 'bold',
            handler: (content: string) => (
                <span className="font-bold text-emerald-700 dark:text-emerald-400 mx-0.5">
                    {renderWithPatterns(content.slice(2, -2), depth + 1)}
                </span>
            ),
        },
        {
            regex: /(`[^`]+`)/,
            key: 'code',
            handler: (content: string) => (
                <span className="font-mono text-[0.85em] font-medium text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-[#2A2A2A] border border-slate-200/50 dark:border-white/5 px-1.5 py-0.5 rounded-sm mx-0.5 align-baseline">
                    {renderWithPatterns(content.slice(1, -1), depth + 1)}
                </span>
            ),
        },
        {
            regex: /(__[^_]+__)/,
            key: 'inline-code',
            handler: (content: string) => (
                <span className="font-mono text-[0.85em] font-medium text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-[#2A2A2A] border border-slate-200/50 dark:border-white/5 px-1.5 py-0.5 rounded-sm mx-0.5 align-baseline">
                    {renderWithPatterns(content.slice(2, -2), depth + 1)}
                </span>
            ),
        },
        {
            regex: /(!!.+?!!)/,
            key: 'warning',
            handler: (content: string) => (
                <span className="font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-sm mx-0.5">
                    {renderWithPatterns(content.slice(2, -2), depth + 1)}
                </span>
            ),
        },
        {
            regex: /(\*'.+?'\*)/,
            key: 'error',
            handler: (content: string) => (
                <span className="font-mono text-[0.85em] font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 px-1.5 py-0.5 rounded-sm mx-0.5">
                    {renderWithPatterns(content.slice(2, -2), depth + 1)}
                </span>
            ),
        },
        {
            regex: /('(?![*])[^']*')/,
            key: 'literal',
            handler: (content: string) => (
                <span className="font-medium text-[0.95em] text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-500/20 px-1.5 py-0.5 rounded-sm mx-0.5 italic">
                    {renderWithPatterns(content.slice(1, -1), depth + 1)}
                </span>
            ),
        },
        {
            regex: /(https:\/\/[^\s]+)/,
            key: 'link',
            handler: (content: string) => (
                <a
                    href={content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline underline-offset-4 decoration-blue-300 dark:decoration-blue-700 transition-all duration-200 mx-1 break-all"
                >
                    {content}
                    <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            ),
        },
    ];

    // Buscar el primer patrón coincidente
    for (const pattern of patterns) {
        const match = text.match(pattern.regex);
        if (match) {
            const matchedText = match[1];
            const beforeIndex = text.indexOf(matchedText);
            const afterIndex = beforeIndex + matchedText.length;

            const before = text.slice(0, beforeIndex);
            const after = text.slice(afterIndex);

            return (
                <>
                    {before && <span className="text-slate-700 dark:text-slate-300 leading-7">{renderWithPatterns(before, depth)}</span>}
                    {pattern.handler(matchedText)}
                    {after && <span className="text-slate-700 dark:text-slate-300 leading-7">{renderWithPatterns(after, depth)}</span>}
                </>
            );
        }
    }

    // Sin patrones: procesar saltos de línea
    const newlineRegex = /\n/g;
    if (newlineRegex.test(text)) {
        return text.split(newlineRegex).map((line, i, arr) => (
            <Fragment key={`line-${i}`}>
                <span className="text-slate-700 dark:text-slate-300 leading-7">{line}</span>
                {i < arr.length - 1 && <br className="block content-[''] my-1" />}
            </Fragment>
        ));
    }

    return <span className="text-slate-700 dark:text-slate-300 leading-7">{text}</span>;
};

export const renderContent: ContentRenderer = (content) => {
    if (!content) return null;
    return <>{renderWithPatterns(content)}</>;
};