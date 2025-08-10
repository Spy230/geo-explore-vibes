import { useDevicePerformance } from '../hooks/useDevicePerformance';

interface PerformanceIndicatorProps {
  show?: boolean;
}

const PerformanceIndicator = ({ show = false }: PerformanceIndicatorProps) => {
  const { isLowEnd, isMobile, performanceScore, reducedMotion } = useDevicePerformance();

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 9999,
        fontFamily: 'monospace'
      }}
    >
      <div>Score: {performanceScore}</div>
      <div>Mobile: {isMobile ? 'Yes' : 'No'}</div>
      <div>Low-end: {isLowEnd ? 'Yes' : 'No'}</div>
      <div>Reduced Motion: {reducedMotion ? 'Yes' : 'No'}</div>
      <div>Memory: {(navigator as any).deviceMemory || 'Unknown'} GB</div>
      <div>Cores: {navigator.hardwareConcurrency || 'Unknown'}</div>
    </div>
  );
};

export default PerformanceIndicator;
