import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export function Sidebar() {
  const { user } = useUser();

  return (
    <div className="fixed flex flex-col h-screen bg-indigo-500 w-80 p-8">
      {!user && (
        <Link href="/api/auth/login">
          <a className="flex items-center gap-2 w-full bg-pink-500 text-white font-medium p-4 rounded-md justify-center hover:shadow-btn transition-all">
            <FiLogIn size="20" />
            Login
          </a>
        </Link>
      )}
      {user && (
        <>
          <h1 className="text-white text-2xl after:block after:bg-indigo-700 after:w-full after:h-0.5 after:mt-1">
            Contacts
          </h1>
          <div className="mt-auto flex items-center gap-2 rounded-md bg-purple-400 p-4">
            <div className="w-10">
              <img
                className="rounded-full"
                src={user?.picture}
                alt="profile pic"
              />
            </div>
            <strong className="font-medium text-white text-lg">
              {user?.nickname}
            </strong>
            <Link href="/api/auth/logout">
              <a className="w-10 h-10 rounded-md bg-pink-500 flex items-center justify-center hover:shadow-btn transition-all ml-auto">
                <FiLogOut size="20" color="white" />
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
