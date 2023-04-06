/* eslint-disable @typescript-eslint/no-unused-vars */
import { type StyleFunctionProps } from "@chakra-ui/react";

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            scrollbarWidth : "none",
        },
        h1: {
            fontSize: "1.5em",
        },
        h2: {
            fontSize: "1.375em",
        },
        h3: {
            fontSize: "1.25em",
        },
        h4: {
            fontSize: "1.125em",
        },
        h5: {
            fontSize: "1em",
        },
        h6: {
            fontSize: "1em",
        }
    }),
}

export default styles;