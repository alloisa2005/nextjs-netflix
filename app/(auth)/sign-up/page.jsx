import GithubSigninButton from "@/app/components/GithubSigninButton";
import GoogleSigninButton from "@/app/components/GoogleSigninButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleIcon from '../../../public/google.svg'

const SignUpPage = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>

        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button type='submit' variant='destructive' className='w-full bg-[#e50914]'>Sign Up</Button>
        </div>
      </form>

      <div className="tex-sm mt-2 text-gray-500">
        Already have an account? <Link className="text-white hover:underline" href={'/login'}>Log in now</Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSigninButton />
        <GoogleSigninButton />
      </div>
    </div>
  );
};

export default SignUpPage;
