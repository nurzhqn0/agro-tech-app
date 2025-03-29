export function getLangValue(
  language: string,
  prefix: string = "name",
): string {
  switch (language) {
    case "ru":
      return `${prefix}_ru`;
    case "en":
      return `${prefix}_en`;
    default:
      return `${prefix}_kz`;
  }
}

export const useLocalizeProperty = () => {
  const { locale } = useI18n();
  const localizeProperty = (prefix: string): string => {
    return getLangValue(locale.value, prefix);
  };
  return { localizeProperty };
};

export const validatePhone = (phone: string) => {
  if (!phone.length) {
    return {
      valid: false,

      error: "This field is required.",
    };
  }

  if (
    !phone.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)
  ) {
    return {
      valid: false,
      error: "Please, enter a valid international phone number.",
    };
  }

  return { valid: true, error: null };
};

export const validateEmail = (email: string) => {
  if (!email.length) {
    return { valid: false, error: "This field is required" };
  }
  if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    return { valid: false, error: "Please, enter a valid email." };
  }
  return { valid: true, error: null };
};

export const getUserAgent = () => {
  return navigator.userAgent;
};

export const getLowestPrice = (specializations: any[]) => {
  const prices = specializations.map((spec) => parseFloat(spec.price));
  const lowestPriceNumber = Math.min(...prices);
  return lowestPriceNumber;
};

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): T {
  let lastCallTime: number | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();

    if (lastCallTime === null || now - lastCallTime >= wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      func.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(
        () => {
          lastCallTime = Date.now();
          timeoutId = null;
          func.apply(this, args);
        },
        wait - (now - lastCallTime),
      );
    }
  } as T;
}

export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}.${month}`;
}

export function formatDateRequest(date: Date) {
  const year = String(date.getFullYear());
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isDateToday(date: Date) {
  const today = new Date();

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat("en-US").format(number).replaceAll(",", " ");
}

export function customDebounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
}

// Utility function to format numbers to 2 decimal places
export function toTwoDecimalPlaces(value: number): number {
  return Math.round(value * 100) / 100;
}
