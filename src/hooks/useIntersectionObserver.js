import { useEffect } from "react";
import { getNavHeight, toggleNavFixedPosition } from "../navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export function useIntersectionObserver() {
  const dispatch = useDispatch();
  const navHeight = useSelector(getNavHeight);

  const { ref: targetRef, inView } = useInView({
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight ?? 0}px`,
  });

  useEffect(() => {
    if (!inView) dispatch(toggleNavFixedPosition(true));
    if (inView) dispatch(toggleNavFixedPosition(false));

    return () => dispatch(toggleNavFixedPosition(true));
  }, [inView]);

  return targetRef;
}
