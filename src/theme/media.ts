

const breakpoint = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    ul: '1600px',
} as const;

const media = {
    xs: `@media (min-width: ${breakpoint.xs})`,
    sm: `@media (min-width: ${breakpoint.sm})`,
    md: `@media (min-width: ${breakpoint.md})`,
    lg: `@media (min-width: ${breakpoint.lg})`,
    xl: `@media (min-width: ${breakpoint.xl})`,
    ul: `@media (min-width: ${breakpoint.ul})`,
} as const;

const mediaMax = {
    xs: `@media (max-width: ${breakpoint.xs})`,
    sm: `@media (max-width: ${breakpoint.sm})`,
    md: `@media (max-width: ${breakpoint.md})`,
    lg: `@media (max-width: ${breakpoint.lg})`,
    xl: `@media (max-width: ${breakpoint.xl})`,
    ul: `@media (max-width: ${breakpoint.ul})`,
} as const;

export { breakpoint, media, mediaMax }