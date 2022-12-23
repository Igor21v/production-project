import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    setIsIntersecting?: (value: boolean) => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback, setIsIntersecting, wrapperRef, triggerRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;
        let observer :IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                    setIsIntersecting?.(true);
                } else {
                    setIsIntersecting?.(false);
                }
            }, options);
            observer.observe(triggerElement);
            return (() => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                if (observer && triggerElement) {
                    observer?.unobserve(triggerElement);
                }
            });
        }
    }, [callback, setIsIntersecting, triggerRef, wrapperRef]);
}
