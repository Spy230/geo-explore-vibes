import { useState, useEffect } from 'react';
import { debounce, getDevicePerformanceScore } from '../utils/performance';

interface DevicePerformance {
  isLowEnd: boolean;
  isMobile: boolean;
  supportsBackdropFilter: boolean;
  reducedMotion: boolean;
  performanceScore: number;
}

export const useDevicePerformance = (): DevicePerformance => {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowEnd: false,
    isMobile: false,
    supportsBackdropFilter: true,
    reducedMotion: false,
    performanceScore: 100
  });

  useEffect(() => {
    const checkPerformance = () => {
      // Проверяем мобильное устройство
      const isMobile = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Получаем оценку производительности
      const performanceScore = getDevicePerformanceScore();
      
      // Определяем слабое устройство на основе оценки
      const isLowEnd = performanceScore < 60;

      // Проверяем поддержку backdrop-filter
      const supportsBackdropFilter = 
        (typeof CSS !== 'undefined' && CSS.supports && (
          CSS.supports('backdrop-filter', 'blur(1px)') ||
          CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
        )) || false;

      // Проверяем предпочтения пользователя по анимации
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setPerformance({
        isLowEnd,
        isMobile,
        supportsBackdropFilter,
        reducedMotion,
        performanceScore
      });
    };

    // Дебаунсим проверку производительности
    const debouncedCheck = debounce(checkPerformance, 300);

    checkPerformance();
    window.addEventListener('resize', debouncedCheck);

    return () => {
      window.removeEventListener('resize', debouncedCheck);
    };
  }, []);

  return performance;
};
