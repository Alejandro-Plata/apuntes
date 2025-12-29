import React, { useState, useEffect, useRef, useId, useMemo } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import type { LanguageType } from '../services/notes';

// Configuración del CDN de Monaco
loader.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' } });

interface CodeBlockProps {
    code: string;
    language?: LanguageType | string;
    filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
    const [isDark, setIsDark] = useState(true);
    const [copied, setCopied] = useState(false);
    const [editorHeight, setEditorHeight] = useState(100);
    // Determinación de lenguaje (derivada, evita setState en efecto)
    const detectedLang = useMemo(() => {
        if (language) return language.toLowerCase();
        const ext = filename?.split('.').pop()?.toLowerCase();
        if (['jsx', 'tsx', 'ts'].includes(ext || '')) return 'typescript';
        if (['js'].includes(ext || '')) return 'javascript';
        if (['py'].includes(ext || '')) return 'python';
        if (['html'].includes(ext || '')) return 'html';
        if (['css'].includes(ext || '')) return 'css';
        if (code.includes('import React') || code.trim().startsWith('<')) return 'typescript';
        return 'javascript';
    }, [code, language, filename]);

    // 1. GENERAR ID ÚNICO (CRÍTICO)
    // Usamos `useId` (puro) y lo sanitizamos para crear un sufijo seguro
    const uniqueId = useId().replace(/[^a-z0-9]/gi, '').slice(0, 9) || 'id0';

    const editorRef = useRef<unknown>(null);
    const monacoRef = useRef<unknown>(null);

    // (Detección de lenguaje ahora derivada con useMemo arriba)

    // --- Cambiar Tema ---
    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            // Aplicar tema si Monaco ya está cargado
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mc = monacoRef.current as any;
            if (mc && mc.editor && typeof mc.editor.setTheme === 'function') {
                mc.editor.setTheme(next ? 'rune-dark' : 'rune-light');
            }
            return next;
        });
    };

    // --- Configuración (Before Mount) ---
    const handleBeforeMount = (monaco: unknown) => {
        monacoRef.current = monaco;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const m = monaco as any;

        // TEMA OSCURO
        m.editor.defineTheme('rune-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '64748b', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'c084fc', fontStyle: 'bold' },
                { token: 'string', foreground: '4ade80' },
                { token: 'number', foreground: 'f472b6' },
                { token: 'type', foreground: '38bdf8' },
                { token: 'class', foreground: '38bdf8' },
                { token: 'function', foreground: 'fbbf24' },
                { token: 'variable', foreground: 'e2e8f0' },
                { token: 'identifier', foreground: 'e2e8f0' },
                { token: 'tag', foreground: '60a5fa' },
                { token: 'attribute.name', foreground: '94a3b8' },
                { token: 'delimiter', foreground: '475569' },
            ],
            colors: {
                'editor.background': '#0f172a',
                'editor.foreground': '#e2e8f0',
                'editor.lineHighlightBackground': '#1e293b',
                'editorCursor.foreground': '#38bdf8',
                'editor.selectionBackground': '#334155',
            }
        });

        // TEMA CLARO
        m.editor.defineTheme('rune-light', {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '94a3b8', fontStyle: 'italic' },
                { token: 'keyword', foreground: '7c3aed', fontStyle: 'bold' },
                { token: 'string', foreground: '15803d' },
                { token: 'number', foreground: 'db2777' },
                { token: 'type', foreground: '0284c7' },
                { token: 'class', foreground: '0284c7' },
                { token: 'function', foreground: 'd97706' },
                { token: 'variable', foreground: '334155' },
                { token: 'identifier', foreground: '334155' },
                { token: 'tag', foreground: '2563eb' },
                { token: 'attribute.name', foreground: '64748b' },
                { token: 'delimiter', foreground: 'cbd5e1' },
            ],
            colors: {
                'editor.background': '#f8fafc',
                'editor.foreground': '#334155',
                'editor.lineHighlightBackground': '#f1f5f9',
                'editorCursor.foreground': '#0ea5e9',
                'editor.selectionBackground': '#e2e8f0',
            }
        });

        const compilerOptions = {
            jsx: m.languages.typescript.JsxEmit.React,
            jsxFactory: 'React.createElement',
            reactNamespace: 'React',
            allowNonTsExtensions: true,
            allowJs: true,
            target: m.languages.typescript.ScriptTarget.Latest,
        };
        m.languages.typescript.typescriptDefaults.setCompilerOptions(compilerOptions);
        m.languages.typescript.javascriptDefaults.setCompilerOptions(compilerOptions);
        m.languages.typescript.typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true, noSyntaxValidation: false });
    };

    const handleEditorDidMount = (editor: unknown) => {
        editorRef.current = editor;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ed = editor as any;
        const updateHeight = () => {
            const contentHeight = Math.min(800, Math.max(100, ed.getContentHeight()));
            setEditorHeight(contentHeight);
            ed.layout();
        };
        ed.onDidContentSizeChange(updateHeight);
        updateHeight();
    };

    // Actualizar altura si el código cambia
    useEffect(() => {
        if (editorRef.current) {
            // Pequeño delay para asegurar que el modelo se ha actualizado
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const h = (editorRef.current as any)?.getContentHeight?.();
                if (typeof h === 'number') {
                    setEditorHeight(Math.min(800, Math.max(100, h)));
                }
            }, 50);
        }
    }, [code]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getBadgeStyle = (lang: string) => {
        const base = "shadow-sm border transition-colors duration-300";
        if (['typescript', 'tsx', 'ts'].includes(lang)) return `${base} bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30`;
        if (['javascript', 'jsx', 'js'].includes(lang)) return `${base} bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700/30`;
        return `${base} bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700`;
    };

    // 2. CORRECCIÓN DE PATH Y LENGUAJE
    // Forzamos que React/JSX use 'typescript' para el highlighting
    const getMonacoLang = (lang: string) => {
        if (['javascript', 'jsx', 'typescript', 'tsx'].includes(lang)) return 'typescript';
        return lang;
    };

    // Determinamos la extensión adecuada
    const ext = ['javascript', 'jsx', 'typescript', 'tsx'].includes(detectedLang) ? 'tsx' : 'txt';
    
    // 3. RUTA VIRTUAL ÚNICA
    // Usamos el uniqueId aquí. Ahora cada bloque tendrá un path como "file-a1b2c3d4.tsx"
    const virtualPath = `file-${uniqueId}.${ext}`;

    return (
        <div className={`
            w-full md:w-3/4 mx-auto relative group my-6 rounded-xl overflow-hidden border shadow-lg transition-colors duration-500
            ${isDark ? 'border-slate-800 bg-[#0f172a]' : 'border-slate-200 bg-[#f8fafc]'}
        `}>
            {/* ... (HEADER IGUAL QUE ANTES) ... */}
            <div className={`
                flex justify-between items-center w-full h-11 px-4 border-b transition-colors duration-500 select-none
                ${isDark ? 'bg-[#1e293b] border-slate-700/50' : 'bg-white border-slate-200'}
            `}>
                <div className="flex items-center gap-4">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
                    </div>
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase opacity-70 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                        {filename || 'Snippet'}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={toggleTheme} className={`p-1.5 rounded-md transition-colors ${isDark ? 'text-slate-400 hover:text-yellow-300 hover:bg-slate-700' : 'text-slate-400 hover:text-orange-500 hover:bg-slate-100'}`}>
                        {isDark ? <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
                    </button>
                    <button onClick={handleCopy} className={`p-1.5 rounded-md transition-colors flex items-center gap-1.5 ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'}`}>
                        {copied ? <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                    </button>
                    <div className={`${getBadgeStyle(detectedLang)} font-mono font-bold text-[10px] px-3 py-0.5 rounded-full min-w-15 text-center`}>
                        {detectedLang.toUpperCase()}
                    </div>
                </div>
            </div>

            {/* --- EDITOR AREA --- */}
            <div className={`relative transition-colors duration-500 ${isDark ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'}`} style={{ height: editorHeight }}>
                <Editor
                    height={editorHeight}
                    width="100%"
                    
                    // Asegúrate de que esto sea 'value' y no 'defaultValue'
                    value={code} 
                    
                    // El path único es la clave para que el value se actualice correctamente
                    path={virtualPath}
                    
                    defaultLanguage="typescript"
                    language={getMonacoLang(detectedLang)}
                    theme={isDark ? "rune-dark" : "rune-light"}
                    beforeMount={handleBeforeMount}
                    onMount={handleEditorDidMount}
                    options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 13,
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        fontLigatures: true,
                        lineNumbers: 'on',
                        renderLineHighlight: 'none',
                        contextmenu: false,
                        padding: { top: 16, bottom: 16 },
                        scrollbar: { vertical: 'hidden', horizontal: 'auto' },
                        overviewRulerLanes: 0,
                        domReadOnly: true,
                        smoothScrolling: true,
                    }}
                />
            </div>
        </div>
    );
};