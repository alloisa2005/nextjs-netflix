import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import SignOutButton from "./components/SignOutButton";
import { authOptions } from "./utils/auth";

export default async function Home() {  

  const session = await getServerSession(authOptions)
  console.log(session?.user);

  if(!session) {
    redirect('/login')
  }

  return (
    <div className="m-4">
      <h1>{session?.user.name} - {session?.user.email}</h1>
      <Image src={session?.user.image} alt='My Image' priority width={45} height={45} className="rounded-full my-2" />
      <SignOutButton />
    </div>
  );
}
