/* eslint-disable @typescript-eslint/no-unused-vars */
import { type StyleFunctionProps } from "@chakra-ui/react";

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            scrollbarWidth : "none",
            fontWeight: "thin"
        },
    }),
}

export default styles;