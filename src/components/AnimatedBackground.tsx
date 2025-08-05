const AnimatedBackground = () => {
  return (
    <div className="particles-background">
      {/* Темный фон с текстурой как на изображении */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(40, 40, 40, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(35, 35, 35, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(45, 45, 45, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1f1f1f 50%, #2a2a2a 75%, #1a1a1a 100%),
            #1a1a1a
          `,
        }}
      />

      {/* Дополнительный слой для создания глубины */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.3) 70%),
            linear-gradient(45deg, transparent 30%, rgba(20, 20, 20, 0.2) 50%, transparent 70%)
          `,
        }}
      />

      {/* Анимированные золотистые частицы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Крупные яркие частицы */}
        <div
          className="absolute animate-float"
          style={{
            top: '15%', left: '10%', width: '6px', height: '6px',
            backgroundColor: '#6e5a4a',
            borderRadius: '50%',
            boxShadow: '0 0 30px rgba(110, 90, 74, 0.9), 0 0 60px rgba(110, 90, 74, 0.5), 0 0 90px rgba(110, 90, 74, 0.2)',
            animationDelay: '0s',
            animationDuration: '12s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '70%', right: '15%', width: '8px', height: '8px',
            backgroundColor: '#5c4a3a',
            borderRadius: '50%',
            boxShadow: '0 0 35px rgba(92, 74, 58, 0.8), 0 0 70px rgba(92, 74, 58, 0.4)',
            animationDelay: '3s',
            animationDuration: '15s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '30%', left: '70%', width: '4px', height: '4px',
            backgroundColor: '#4a3a2a',
            borderRadius: '50%',
            boxShadow: '0 0 25px rgba(74, 58, 42, 0.7), 0 0 50px rgba(74, 58, 42, 0.3)',
            animationDelay: '6s',
            animationDuration: '18s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '80%', left: '25%', width: '5px', height: '5px',
            backgroundColor: '#564836',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(86, 72, 54, 0.6), 0 0 40px rgba(86, 72, 54, 0.3)',
            animationDelay: '9s',
            animationDuration: '20s'
          }}
        />

        {/* Средние частицы */}
        <div
          className="absolute animate-float"
          style={{
            top: '25%', right: '30%', width: '3px', height: '3px',
            backgroundColor: '#4a3a2a',
            borderRadius: '50%',
            boxShadow: '0 0 15px rgba(74, 58, 42, 0.5), 0 0 30px rgba(74, 58, 42, 0.2)',
            animationDelay: '2s',
            animationDuration: '14s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '45%', left: '5%', width: '3px', height: '3px',
            backgroundColor: '#392e20',
            borderRadius: '50%',
            boxShadow: '0 0 12px rgba(57, 46, 32, 0.4), 0 0 24px rgba(57, 46, 32, 0.2)',
            animationDelay: '5s',
            animationDuration: '16s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '60%', right: '40%', width: '2px', height: '2px',
            backgroundColor: '#5c4a3a',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(92, 74, 58, 0.4), 0 0 20px rgba(92, 74, 58, 0.2)',
            animationDelay: '8s',
            animationDuration: '22s'
          }}
        />

        {/* Мелкие частицы */}
        <div
          className="absolute animate-float"
          style={{
            top: '10%', left: '60%', width: '2px', height: '2px',
            backgroundColor: '#453528',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(69, 53, 40, 0.3), 0 0 16px rgba(69, 53, 40, 0.1)',
            animationDelay: '1s',
            animationDuration: '13s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '85%', right: '60%', width: '2px', height: '2px',
            backgroundColor: '#392e20',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(57, 46, 32, 0.3), 0 0 12px rgba(57, 46, 32, 0.1)',
            animationDelay: '4s',
            animationDuration: '17s'
          }}
        />
        <div
          className="absolute animate-float"
          style={{
            top: '40%', right: '10%', width: '1px', height: '1px',
            backgroundColor: '#2d2118',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(45, 33, 24, 0.2), 0 0 8px rgba(45, 33, 24, 0.1)',
            animationDelay: '7s',
            animationDuration: '19s'
          }}
        />

        {/* Очень мелкие точки для создания глубины */}
        <div
          className="absolute animate-glow"
          style={{
            top: '20%', left: '80%', width: '1px', height: '1px',
            backgroundColor: '#6e5a4a',
            borderRadius: '50%',
            animationDelay: '1.5s',
            animationDuration: '4s'
          }}
        />
        <div
          className="absolute animate-glow"
          style={{
            top: '90%', left: '50%', width: '1px', height: '1px',
            backgroundColor: '#5c4a3a',
            borderRadius: '50%',
            animationDelay: '3.5s',
            animationDuration: '5s'
          }}
        />
        <div
          className="absolute animate-glow"
          style={{
            top: '5%', left: '30%', width: '1px', height: '1px',
            backgroundColor: '#4a3a2a',
            borderRadius: '50%',
            animationDelay: '2.5s',
            animationDuration: '6s'
          }}
        />

        {/* Волновые эффекты */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(110, 90, 74, 0.02) 50%, transparent 100%)',
            animation: 'wave 15s linear infinite',
            animationDelay: '0s'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(92, 74, 58, 0.01) 50%, transparent 100%)',
            animation: 'wave 20s linear infinite',
            animationDelay: '5s'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(74, 58, 42, 0.015) 50%, transparent 100%)',
            animation: 'wave 25s linear infinite',
            animationDelay: '10s'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;