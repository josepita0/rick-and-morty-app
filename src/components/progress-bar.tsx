"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ProgressBarPleas = () => {
  return (
    <ProgressBar
      height="4px"
      color={"#60ef24"}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
