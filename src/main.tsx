import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NotesPage } from './components/NotesPage'
import { Routes, Route } from 'react-router-dom';
import { NewNote } from './components/NewNote';

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<NotesPage />} />
                <Route path=":noteId" element={<NewNote />} />
                </Routes>
    </BrowserRouter>
  </StrictMode>,
)
