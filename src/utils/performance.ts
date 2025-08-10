// Утилиты для оптимизации производительности

// Дебаунс функция для оптимизации событий
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Троттлинг функция для ограничения частоты вызовов
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Проверка поддержки пассивных событий
export const supportsPassive = (() => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
        return true;
      }
    });
    window.addEventListener('testPassive', () => {}, opts);
    window.removeEventListener('testPassive', () => {}, opts);
  } catch (e) {}
  return supportsPassive;
})();

// Оптимизированный обработчик скролла
export const addOptimizedScrollListener = (
  callback: () => void,
  throttleMs: number = 16
) => {
  const throttledCallback = throttle(callback, throttleMs);
  const options = supportsPassive ? { passive: true } : false;
  
  window.addEventListener('scroll', throttledCallback, options);
  
  return () => {
    window.removeEventListener('scroll', throttledCallback, options as any);
  };
};

// Проверка видимости элемента
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Оптимизация анимаций с requestAnimationFrame
export const animateWithRAF = (callback: () => void) => {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(callback);
  } else {
    return window.setTimeout(callback, 1000 / 60);
  }
};

// Проверка производительности устройства
export const getDevicePerformanceScore = (): number => {
  let score = 100;
  
  // Проверяем память устройства
  if ((navigator as any).deviceMemory) {
    const memory = (navigator as any).deviceMemory;
    if (memory < 2) score -= 30;
    else if (memory < 4) score -= 15;
  }
  
  // Проверяем количество ядер процессора
  if (navigator.hardwareConcurrency) {
    if (navigator.hardwareConcurrency < 2) score -= 20;
    else if (navigator.hardwareConcurrency < 4) score -= 10;
  }
  
  // Проверяем соединение
  if ((navigator as any).connection) {
    const connection = (navigator as any).connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      score -= 25;
    } else if (connection.effectiveType === '3g') {
      score -= 10;
    }
  }
  
  // Проверяем размер экрана
  if (window.innerWidth < 480 || window.innerHeight < 800) {
    score -= 15;
  }
  
  return Math.max(0, Math.min(100, score));
};
