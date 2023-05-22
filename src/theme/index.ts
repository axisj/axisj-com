import colors from "./colors";
import { media, breakpoint } from "./media";

const theme = {
    name: 'DEFAULT',
    ...colors,
    ...media,
    ...breakpoint,
};

export default theme;