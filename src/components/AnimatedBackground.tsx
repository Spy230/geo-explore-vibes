const AnimatedBackground = () => {
  return (
    <div className="particles-background">
      {/* Темный фон с текстурой */}
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

      {/* Анимированные золотистые частицы - МНОГО БОЛЬШЕ */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Крупные яркие частицы */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`large-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 4}px`,
              height: `${6 + Math.random() * 4}px`,
              backgroundColor: '#392e20',
              borderRadius: '50%',
              boxShadow: `0 0 ${30 + Math.random() * 20}px rgba(57, 46, 32, 0.9), 0 0 ${60 + Math.random() * 30}px rgba(75, 60, 42, 0.8), 0 0 ${90 + Math.random() * 40}px rgba(95, 77, 55, 0.6)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Средние частицы */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 2}px`,
              height: `${3 + Math.random() * 2}px`,
              backgroundColor: '#4b3c2a',
              borderRadius: '50%',
              boxShadow: `0 0 ${15 + Math.random() * 10}px rgba(75, 60, 42, 0.8), 0 0 ${30 + Math.random() * 15}px rgba(95, 77, 55, 0.6)`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${14 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Мелкие частицы */}
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={`small-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: '#392e20',
              borderRadius: '50%',
              boxShadow: `0 0 ${8 + Math.random() * 5}px rgba(57, 46, 32, 0.7), 0 0 ${16 + Math.random() * 8}px rgba(75, 60, 42, 0.4)`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${16 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Очень мелкие мерцающие точки */}
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={`tiny-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              backgroundColor: '#5f4d37',
              borderRadius: '50%',
              boxShadow: `0 0 ${3 + Math.random() * 2}px rgba(95, 77, 55, 0.9)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Движущиеся волны света */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${45 + i * 22.5}deg, transparent 0%, rgba(57, 46, 32, ${0.08 + Math.random() * 0.05}) 50%, transparent 100%)`,
              animation: 'wave 15s linear infinite',
              animationDelay: `${i * 2}s`
            }}
          />
        ))}

        {/* Пульсирующие области света */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle, rgba(57, 46, 32, 0.15) 0%, transparent 70%)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Дополнительные эффекты движения */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(57, 46, 32, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(75, 60, 42, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 20%, rgba(95, 77, 55, 0.08) 0%, transparent 60%)
            `,
            animation: 'wave 25s ease-in-out infinite alternate'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;