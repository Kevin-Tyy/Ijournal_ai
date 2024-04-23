"use client";
import React, { Fragment } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type Props = {
  children: React.ReactNode;
};

export default function Progressbar({ children }: Props) {
  return (
    <Fragment>
      <ProgressBar height="3px" color="#9586FB" options={{ showSpinner: true }} shallowRouting />
      {children}
    </Fragment>
  );
}
