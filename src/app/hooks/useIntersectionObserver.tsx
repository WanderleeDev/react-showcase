import { useEffect, useState, useCallback } from "react";

export function useIntersectionObserver(
  observerId: string,
  callback: (isIntersecting: boolean) => void,
  options?: IntersectionObserverInit
) {
  const [isEntry, setIsEntry] = useState(false);
  const handleIntersection: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        
        setIsEntry(() => {
          callback(entry.isIntersecting);
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
