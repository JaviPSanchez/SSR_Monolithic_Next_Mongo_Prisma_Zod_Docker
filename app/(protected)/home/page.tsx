"use client";

import { signOut, useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/user-current-user";

const Home = () => {
  const user = useCurrentUser();

  const handleSignOut = () => {
    signOut;
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      {JSON.stringify(user)}
      <form>
        <button
          onClick={handleSignOut}
          className="bg-black text-white px-4 py-2 rounded-lg"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Home;
