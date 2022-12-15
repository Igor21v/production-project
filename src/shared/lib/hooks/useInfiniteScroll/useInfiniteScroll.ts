import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScroll {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll() {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect( () => {
        cosnt options = {
            root: ,
            rootMargin: '0px',
            threshold: 1.0,
        }
    })
}
