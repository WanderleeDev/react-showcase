import { useEffect, useState, useCallback } from "react";

export interface CallbackParams {
  isIntersecting: boolean;
  target?: Element;
}

export function useIntersectionObserver(
  observerId: string,
  callback: (params: CallbackParams) => void,
  options?: IntersectionObserverInit
) {
  const [isEntry, setIsEntry] = useState(false);
  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsEntry(() => {
          callback({
            isIntersecting: entry.isIntersecting,
            target: entry.target,
          });
          return entry.isIntersecting;
        });
      });
    },
    [callback]
  );

  useEffect(() => {
    const observerElement = document.querySelectorAll(observerId);

    if (!observerElement.length) return;

    const observerApi = new IntersectionObserver(handleIntersection, {
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px",
      threshold: options?.threshold ?? 0,
    });

    observerElement.forEach((element) => {
      observerApi.observe(element);
    });

    return () => observerApi.disconnect();
  }, [observerId, handleIntersection, options]);

  return {
    isEntry,
  };
}
