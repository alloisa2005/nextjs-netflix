"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from 'next-auth/react'

const GithubSigninButton = () => {
  return (
    <Button onClick={() => signIn('github')} variant="outline" size="icon">
      <Github className="w-5 h-5" />
    </Button>
  );
};

export default GithubSigninButton;
