// Утилиты для проверки поддержки браузера и полифиллы

export const BrowserSupport = {
  // Проверка поддержки CSS свойств
  supportsCSS: (property: string, value: string): boolean => {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports(property, value);
    }
    
    // Фоллбэк для старых браузеров
    const element = document.createElement('div');
    try {
      (element.style as any)[property] = value;
      return (element.style as any)[property] === value;
    } catch {
      return false;
    }
  },

  // Проверка поддержки backdrop-filter
  supportsBackdropFilter: (): boolean => {
    return BrowserSupport.supportsCSS('backdrop-filter', 'blur(1px)') ||
           BrowserSupport.supportsCSS('-webkit-backdrop-filter', 'blur(1px)');
  },

  // Проверка поддержки flexbox
  supportsFlexbox: (): boolean => {
    return BrowserSupport.supportsCSS('display', 'flex');
  },

  // Проверка поддержки grid
  supportsGrid: (): boolean => {
    return BrowserSupport.supportsCSS('display', 'grid');
  },

  // Проверка поддержки intersection observer
  supportsIntersectionObserver: (): boolean => {
    return typeof window !== 'undefined' && 'IntersectionObserver' in window;
  },

  // Проверка мобильного устройства
  isMobile: (): boolean => {
    return typeof window !== 'undefined' && 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // Проверка touch поддержки
  supportsTouch: (): boolean => {
    return typeof window !== 'undefined' && 
           ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  },

  // Проверка поддержки WebP
  supportsWebP: (): Promise<boolean> => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  },

  // Получение информации о браузере
  getBrowserInfo: () => {
    if (typeof window === 'undefined') return { name: 'unknown', version: 'unknown' };
    
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';
    let browserVersion = 'Unknown';

    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
      browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
      browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
      browserVersion = userAgent.match(/Version\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Edge') > -1) {
      browserName = 'Edge';
      browserVersion = userAgent.match(/Edge\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) {
      browserName = 'Internet Explorer';
      browserVersion = userAgent.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1] || 'Unknown';
    }

    return { name: browserName, version: browserVersion };
  }
};

// Полифиллы для старых браузеров
export const addPolyfills = () => {
  // Полифилл для requestAnimationFrame
  if (typeof window !== 'undefined' && !window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback: FrameRequestCallback) => {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  // Полифилл для Array.from (IE)
  if (!Array.from) {
    Array.from = (function () {
      const toStr = Object.prototype.toString;
      const isCallable = function (fn: any) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };
      const toInteger = function (value: any) {
        const number = Number(value);
        if (isNaN(number)) return 0;
        if (number === 0 || !isFinite(number)) return number;
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      const maxSafeInteger = Math.pow(2, 53) - 1;
      const toLength = function (value: any) {
        const len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      return function from(arrayLike: any, mapFn?: any, thisArg?: any) {
        const C = this;
        const items = Object(arrayLike);
        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }
        const mapFunction = typeof mapFn !== 'undefined' ? mapFn : null;
        let T;
        if (typeof mapFunction !== 'undefined') {
          if (!isCallable(mapFunction)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }
          if (arguments.length > 2) {
            T = thisArg;
          }
        }
        const len = toLength(items.length);
        const A = isCallable(C) ? Object(new C(len)) : new Array(len);
        let k = 0;
        let kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFunction) {
            A[k] = typeof T === 'undefined' ? mapFunction(kValue, k) : mapFunction.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        A.length = len;
        return A;
      };
    })();
  }

  // Полифилл для Object.assign (IE)
  if (typeof Object.assign !== 'function') {
    Object.assign = function(target: any, ...sources: any[]) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      const to = Object(target);
      sources.forEach(source => {
        if (source != null) {
          for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              to[key] = source[key];
            }
          }
        }
      });
      return to;
    };
  }
};