const AnimatedBackground = () => {
  return (
    <div className="particles-background">
      {/* Основной анимированный фон */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, 
              #392e20 0%, 
              #4a3a28 15%, 
              #3d3222 30%, 
              #453529 45%, 
              #392e20 60%, 
              #413326 75%, 
              #392e20 100%
            )`,
          backgroundSize: '400% 400%',
          animation: 'backgroundFlow 20s ease-in-out infinite, colorShift 15s ease-in-out infinite'
        }}
      />

      {/* Дополнительный слой с градиентами */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(57, 46, 32, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(74, 58, 40, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(61, 50, 34, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(69, 53, 41, 0.5) 0%, transparent 50%)
          `,
          animation: 'backgroundFlow 25s ease-in-out infinite reverse'
        }}
      />

      {/* Анимированные частицы с новым цветом */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Крупные морфирующие частицы */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`morph-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              background: `radial-gradient(circle, rgba(74, 58, 40, 0.3) 0%, rgba(57, 46, 32, 0.1) 70%, transparent 100%)`,
              animation: `morphingShapes ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}

        {/* Поднимающиеся частицы */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              backgroundColor: '#4a3a28',
              borderRadius: '50%',
              boxShadow: `
                0 0 ${20 + Math.random() * 15}px rgba(74, 58, 40, 0.8),
                0 0 ${40 + Math.random() * 20}px rgba(57, 46, 32, 0.6),
                inset 0 0 ${10 + Math.random() * 5}px rgba(69, 53, 41, 0.4)
              `,
              animation: `particleFlow ${20 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 20}s`
            }}
          />
        ))}

        {/* Яркие акцентные частицы */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`bright-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 8}px`,
              height: `${6 + Math.random() * 8}px`,
              backgroundColor: '#5d4932',
              borderRadius: '50%',
              boxShadow: `
                0 0 ${25 + Math.random() * 15}px rgba(93, 73, 50, 0.9),
                0 0 ${50 + Math.random() * 25}px rgba(74, 58, 40, 0.7),
                0 0 ${75 + Math.random() * 35}px rgba(57, 46, 32, 0.4)
              `,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}

        {/* Средние плавающие частицы */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              backgroundColor: '#453529',
              borderRadius: '50%',
              boxShadow: `
                0 0 ${15 + Math.random() * 10}px rgba(69, 53, 41, 0.7),
                0 0 ${30 + Math.random() * 15}px rgba(57, 46, 32, 0.4)
              `,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Мелкие мерцающие точки */}
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={`small-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              backgroundColor: '#3d3222',
              borderRadius: '50%',
              boxShadow: `
                0 0 ${8 + Math.random() * 6}px rgba(61, 50, 34, 0.6),
                0 0 ${16 + Math.random() * 8}px rgba(57, 46, 32, 0.3)
              `,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Очень мелкие искорки */}
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={`tiny-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              backgroundColor: '#5d4932',
              borderRadius: '50%',
              boxShadow: `0 0 ${4 + Math.random() * 3}px rgba(93, 73, 50, 0.8)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Волновые эффекты */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${30 + i * 30}deg, 
                transparent 0%, 
                rgba(74, 58, 40, ${0.08 + Math.random() * 0.04}) 30%,
                rgba(57, 46, 32, ${0.06 + Math.random() * 0.03}) 50%, 
                rgba(69, 53, 41, ${0.05 + Math.random() * 0.02}) 70%,
                transparent 100%)`,
              animation: `wave ${18 + i * 3}s linear infinite`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}

        {/* Пульсирующие области */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `radial-gradient(circle, 
                rgba(74, 58, 40, 0.15) 0%, 
                rgba(57, 46, 32, 0.08) 50%, 
                transparent 80%)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}

        {/* Дополнительный слой движущихся градиентов */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(93, 73, 50, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(74, 58, 40, 0.10) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 80%, rgba(69, 53, 41, 0.08) 0%, transparent 60%)
            `,
            animation: 'backgroundFlow 30s ease-in-out infinite alternate'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;