import Header from '../components/Header';
import { Toaster } from '../components/ui/toaster';

const IndexDebug = () => {
  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
      <Header />

      <main style={{ paddingTop: '100px' }}>
        <section style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#d4c4b0',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 8vw, 3.75rem)',
              marginBottom: '1rem',
              color: '#b8956f'
            }}>
              Гео-продвижение для вашего бизнеса
            </h1>
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#a08670',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Поднимем ваш бизнес в топ поиска. Больше клиентов из вашего города уже через 2 недели!
            </p>
          </div>
        </section>
      </main>

      <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(44, 44, 43, 0.3)' }}>
        <div style={{ textAlign: 'center', color: '#a08670' }}>
          <p>&copy; 2024 Phenix-project. Все права защищены.</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default IndexDebug;
