import { useDevicePerformance } from '../hooks/useDevicePerformance';

const AnimatedBackground = () => {
  const { isLowEnd, isMobile, reducedMotion } = useDevicePerformance();

  // Адаптивное количество частиц в зависимости от производительности устройства
  const particleCount = {
    large: isLowEnd ? 1 : isMobile ? 3 : 8,
    medium: isLowEnd ? 2 : isMobile ? 5 : 12,
    small: isLowEnd ? 3 : isMobile ? 8 : 20,
    tiny: isLowEnd ? 5 : isMobile ? 10 : 25,
    white: isLowEnd ? 3 : isMobile ? 8 : 20,
    whiteSmall: isLowEnd ? 2 : isMobile ? 5 : 15,
    waves: isLowEnd ? 0 : isMobile ? 2 : 4,
    pulse: isLowEnd ? 1 : isMobile ? 3 : 6
  };

  // Если пользователь предпочитает уменьшенную анимацию, показываем только статичный фон
  if (reducedMotion) {
    return (
      <div className="particles-background">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(40, 40, 40, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(35, 35, 35, 0.4) 0%, transparent 50%),
              linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1f1f1f 50%, #2a2a2a 75%, #1a1a1a 100%),
              #1a1a1a
            `,
          }}
        />
      </div>
    );
  }

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

      {/* Анимированные частицы - оптимизированное количество */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Крупные яркие частицы */}
        {Array.from({ length: particleCount.large }, (_, i) => (
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
              boxShadow: isMobile
                ? `0 0 ${15 + Math.random() * 10}px rgba(57, 46, 32, 0.6)`
                : `0 0 ${30 + Math.random() * 20}px rgba(57, 46, 32, 0.9), 0 0 ${60 + Math.random() * 30}px rgba(75, 60, 42, 0.8)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Средние частицы */}
        {Array.from({ length: particleCount.medium }, (_, i) => (
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
              boxShadow: isMobile
                ? `0 0 ${8 + Math.random() * 5}px rgba(75, 60, 42, 0.6)`
                : `0 0 ${15 + Math.random() * 10}px rgba(75, 60, 42, 0.8), 0 0 ${30 + Math.random() * 15}px rgba(95, 77, 55, 0.6)`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${14 + Math.random() * 6}s`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Мелкие частицы */}
        {Array.from({ length: particleCount.small }, (_, i) => (
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
              boxShadow: `0 0 ${4 + Math.random() * 3}px rgba(57, 46, 32, 0.7)`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${16 + Math.random() * 4}s`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Очень мелкие мерцающие точки */}
        {Array.from({ length: particleCount.tiny }, (_, i) => (
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
              boxShadow: `0 0 ${2 + Math.random() * 2}px rgba(95, 77, 55, 0.8)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              willChange: 'opacity, transform'
            }}
          />
        ))}

        {/* Белые летающие частицы */}
        {Array.from({ length: particleCount.white }, (_, i) => (
          <div
            key={`white-${i}`}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              boxShadow: isMobile
                ? `0 0 ${4 + Math.random() * 2}px rgba(255, 255, 255, 0.4)`
                : `0 0 ${8 + Math.random() * 4}px rgba(255, 255, 255, 0.6)`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Мелкие белые точки */}
        {Array.from({ length: particleCount.whiteSmall }, (_, i) => (
          <div
            key={`white-small-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              boxShadow: `0 0 ${2 + Math.random() * 2}px rgba(255, 255, 255, 0.6)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              willChange: 'opacity, transform'
            }}
          />
        ))}

        {/* Движущиеся волны света - только для десктопа */}
        {!isMobile && Array.from({ length: particleCount.waves }, (_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${45 + i * 45}deg, transparent 0%, rgba(57, 46, 32, ${0.05 + Math.random() * 0.03}) 50%, transparent 100%)`,
              animation: 'wave 20s linear infinite',
              animationDelay: `${i * 3}s`,
              willChange: 'transform'
            }}
          />
        ))}

        {/* Пульсирующие области света */}
        {Array.from({ length: particleCount.pulse }, (_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute animate-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              background: `radial-gradient(circle, rgba(57, 46, 32, ${isMobile ? 0.08 : 0.12}) 0%, transparent 70%)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              willChange: 'opacity, transform'
            }}
          />
        ))}

        {/* Дополнительные эффекты движения - только для десктопа */}
        {!isMobile && (
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, rgba(57, 46, 32, 0.08) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 70%, rgba(75, 60, 42, 0.06) 0%, transparent 60%)
              `,
              animation: 'wave 30s ease-in-out infinite alternate',
              willChange: 'transform'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;
