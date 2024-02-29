"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressbarProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default ProgressbarProviders;
