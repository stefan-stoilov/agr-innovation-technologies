import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../public/agr_logo.png";

export function Logo() {
  return (
    <Link href="/">
      <div className="absolute left-4 top-1/2 flex h-3/5 w-fit -translate-y-1/2 gap-2">
        <div className="relative aspect-square h-full">
          <Image priority src={logo} alt="logo" placeholder="blur" />
        </div>
        <p className="ml-0.5 self-center text-2xl font-bold text-primary">
          AGR
        </p>
      </div>
    </Link>
  );
}
