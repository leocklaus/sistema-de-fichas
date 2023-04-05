export const BREAKPOINTS = {
    tabletMin: 600,
    laptopMin: 950,
    desktopMin: 1300,
  };
  
  export const QUERIES = {
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    cellphoneOnly: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  };