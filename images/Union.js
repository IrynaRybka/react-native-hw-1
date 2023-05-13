import React from "react";
import Svg, { Path, Symbol } from "react-native-svg";

{/* <svg>
<symbol id="icon-Union" viewBox="0 0 32 32">
<path d="M17.231 0h-2.462v14.769h-14.769v2.462h14.769v14.769h2.462v-14.769h14.769v-2.462h-14.769v-14.769z"></path>
</symbol>
</svg> */}

const SvgComponent = () => {
    return ( 
      <Svg>
      <Symbol id="icon-Union" viewBox="0 0 32 32">
      <Path fill='#FF6C00' d="M17.231 0h-2.462v14.769h-14.769v2.462h14.769v14.769h2.462v-14.769h14.769v-2.462h-14.769v-14.769z"></Path>
      </Symbol>
      </Svg>
    )
};

export default SvgComponent;
