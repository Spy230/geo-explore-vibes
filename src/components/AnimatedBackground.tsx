const AnimatedBackground = () => {
  return (
    <div className="particles-background">
      {/* Маленькие частицы по всему фону */}
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            backgroundColor: i % 3 === 0 ? '#4a3a28' : i % 3 === 1 ? '#5d4932' : '#453529',
            borderRadius: '50%',
            animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;