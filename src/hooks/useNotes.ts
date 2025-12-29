import { useState, useMemo } from 'react';
import { notesService } from '../services/notes';
import type { LanguageType, ConceptType } from '../services/notes';

export type DifficultyFilter = 'Todas' | 'Básico' | 'Intermedio' | 'Avanzado';

export const useNotes = () => {
    const allNotes = notesService.getAll();

    const languages: LanguageType[] = Array.from(new Set(allNotes.map(n => n.language))) as LanguageType[];

    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(
        languages.length ? languages[0] : 'React'
    );

    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('Todas');
    const conceptTypes: (ConceptType | 'Todas')[] = [
        'Todas',
        ...Array.from(new Set(allNotes.map(n => n.conceptType))) as ConceptType[]
    ];
    const [selectedConceptType, setSelectedConceptType] = useState<ConceptType | 'Todas'>('Todas');
    const [searchQuery, setSearchQuery] = useState('');

    const difficulties: DifficultyFilter[] = ['Todas', 'Básico', 'Intermedio', 'Avanzado'];

    const filteredNotes = useMemo(() => {
        const allNotes = notesService.getAll();

        return allNotes.filter(note => {
            // -----------------------------------------------------------
            // 1. MODIFICACIÓN AQUÍ: Filtro por Lenguaje Inteligente
            // -----------------------------------------------------------
            let matchesLanguage = note.language === selectedLanguage;

            // Si estamos en la pestaña de React, aceptamos también JSX y TSX
            if (selectedLanguage === 'React') {
                matchesLanguage = ['React', 'JSX', 'TSX'].includes(note.language);
            }
            // -----------------------------------------------------------

            // 2. Filtro por Dificultad
            const matchesDifficulty = selectedDifficulty === 'Todas' || note.difficulty === selectedDifficulty;

            // 3. Filtro por Concept Type
            const matchesConceptType = selectedConceptType === 'Todas' || note.conceptType === selectedConceptType;

            // 3. Filtro por Búsqueda
            const query = searchQuery.toLowerCase();
            const matchesSearch = note.title.toLowerCase().includes(query) ||
                note.shortDescription.toLowerCase().includes(query) ||
                note.tags.some(tag => tag.toLowerCase().includes(query));

            return matchesLanguage && matchesDifficulty && matchesSearch && matchesConceptType;
        });
    }, [selectedLanguage, selectedDifficulty, searchQuery, selectedConceptType]);

    return {
        languages,
        difficulties,
        conceptTypes,
        selectedLanguage,
        setSelectedLanguage,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedConceptType,
        setSelectedConceptType,
        searchQuery,
        setSearchQuery,
        filteredNotes
    };
};