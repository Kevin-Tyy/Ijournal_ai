"use client";

import React from "react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1360px] gap-10 mx-auto p-2">
      <div className="text-white flex flex-col items-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold">
          <CountUp end={7} duration={4} /> years
        </h1>
        <p className="text-sm">In Business</p>
      </div>
      <div className="text-white flex flex-col items-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold">
          <CountUp end={10_000} duration={4} />+
        </h1>
        <p className="text-sm">Customers</p>
      </div>
      <div className="text-white flex flex-col items-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold">
          <CountUp end={100} duration={4} />
          k+
        </h1>
        <p className="text-sm">Monthly Journal Users</p>
      </div>
      <div className="text-white flex flex-col items-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold">
          <CountUp end={2} duration={4} />
          K+
        </h1>
        <p className="text-sm">Social Followers</p>
      </div>
    </div>
  );
}
