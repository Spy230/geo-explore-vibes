import { ReactNode } from 'react';
import { useDevicePerformance } from '../hooks/useDevicePerformance';

interface OptimizedGlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedGlassCard = ({ children, className = '', style = {} }: OptimizedGlassCardProps) => {
  const { isLowEnd, supportsBackdropFilter } = useDevicePerformance();

  const cardStyle = {
    ...style,
    background: isLowEnd || !supportsBackdropFilter 
      ? 'rgba(28, 20, 19, 0.95)' 
      : 'rgba(28, 20, 19, 0.7)',
    border: '1px solid rgba(44, 44, 43, 0.3)',
    ...(supportsBackdropFilter && !isLowEnd && {
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    })
  };

  return (
    <div className={`${className}`} style={cardStyle}>
      {children}
    </div>
  );
};

export default OptimizedGlassCard;
