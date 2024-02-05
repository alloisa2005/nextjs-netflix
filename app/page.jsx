import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import SignOutButton from "./components/SignOutButton";
import { authOptions } from "./utils/auth";

export default async function Home() {  

  const session = await getServerSession(authOptions)

  if(!session) {
    return redirect('/login')
  }

  return (    
      <Navbar />    
  );
}
