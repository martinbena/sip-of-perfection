import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `Sip of Perfection | ${title}`;
  }, []);
}
