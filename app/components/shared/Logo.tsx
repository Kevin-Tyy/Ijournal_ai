import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  isLight?: boolean;
}
export default function Logo({ isLight }: Props) {
  return (
    <Link href="/" className={``}>
      <Image src="/logo/Journal Ai.svg" alt="ijournal" height={80} width={80} className={`w-44 max-h-16 min-w-44`} />
    </Link>
  );
}
