import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='helloWorld'>
      Hello World! 🖖
      <small><em>Live long and prosper</em></small>
    </div>
  </StrictMode>,
)
