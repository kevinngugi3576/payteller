import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()
  return (

    <main className="flex w-full h-screeen">
      <SideBar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div className="">
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>

  );
}
