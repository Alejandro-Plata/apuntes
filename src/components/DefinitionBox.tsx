interface DefinitionBoxProps {
    title?: string;
    children: React.ReactNode;
}

export const DefinitionBox: React.FC<DefinitionBoxProps> = ({ title = "Concepto Clave", children }) => {
    return (
        <div className="group relative my-8 overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            {/* Barra lateral de acento (Indicador visual rápido) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 group-hover:bg-indigo-400 transition-colors"></div>
            
            <div className="flex flex-col sm:flex-row gap-5 p-5 pl-7">
                {/* Ícono semántico limpio */}
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div className="space-y-2 w-full">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {title}
                    </h4>
                    {/* Sin tipografía específica, hereda la de tu app */}
                    <div className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};