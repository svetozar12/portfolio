import { useState, useEffect } from "react";

const xlBreakpoint = 1280;

/**
 * Custom hook to detect if the screen width is below the Tailwind's xl breakpoint (1280px).
 *
 * @returns {boolean} Returns true if the screen width is below 1280px, otherwise false.
 *
 * @example
 * // Example of using the `useIsMobile` hook inside a component
 * const MyResponsiveComponent = () => {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? <p>Mobile view</p> : <p>Desktop view</p>}
 *     </div>
 *   );
 * };
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < xlBreakpoint);
    const mediaQuery = window.matchMedia(`(max-width: ${xlBreakpoint - 1}px)`);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
