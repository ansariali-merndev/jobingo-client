import { image } from "@/assets/assets";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="grid-bg"></div>
      <nav className="flex items-center justify-between h-[12vh]">
        <div className="w-25">
          <Image src={image.logo} alt="logo" priority={true} />
        </div>

        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};
