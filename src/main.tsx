import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { addPolyfills } from './utils/browserSupport'

// Загружаем полифиллы для совместимости
addPolyfills();

createRoot(document.getElementById("root")!).render(<App />);
