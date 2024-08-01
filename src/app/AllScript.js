import React from "react";
import Script from "next/script";

const AllScript = () => {
  return (
    <div>
      {/* <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" /> */}
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/modernizr.custom.js" strategy="lazyOnload" />
      {/* <Script
        src="/assets/js/jquery.pointparallax.min.js"
        strategy="lazyOnload"
      />       */}
      {/* <Script src="/assets/js/moving-animation.js" strategy="lazyOnload" /> */}
      {/* <Script src="/assets/js/tilt.jquery.min.js" strategy="lazyOnload" /> */}
    </div>
  );
};

export default AllScript;
