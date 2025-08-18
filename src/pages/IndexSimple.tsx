const IndexSimple = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#1a1a1a', 
      color: '#d4c4b0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        color: '#b8956f'
      }}>
        PHENIX PROJECT
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Гео-продвижение для вашего бизнеса
      </p>
      <p style={{ 
        fontSize: '1rem', 
        marginTop: '1rem',
        color: '#a08670'
      }}>
        Тестовая страница работает!
      </p>
    </div>
  );
};

export default IndexSimple;
