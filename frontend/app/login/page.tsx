import { LoginForm } from "@/components/login-form";

import Link from "next/link";
// import Image from "next/image";
// import closeup from "../../public/teste.png";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-1">
      {/* <div className="bg-foreground/5 relative hidden lg:block">
        <Image
          src={closeup}
          alt="Image"
          className="absolute inset-0 h-full object-contain object-bottom"
          loading="eager"
        />
      </div> */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            S.O.S. na Mão
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
