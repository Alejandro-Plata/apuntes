import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (

      <main className="bg-slate-50 flex-1 overflow-y-auto scrollbar-hide relative z-10">
                    <Outlet />
                </main>

  )
}

export default App
