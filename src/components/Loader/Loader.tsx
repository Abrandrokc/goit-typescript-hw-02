
import { Vortex } from "react-loader-spinner";
import React from "react";


const Loader: React.FC = () => {
  return (
    <div className="vortex-wrapper"> {}
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}} 
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default Loader;
