import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  // admin@admin.com 123456

  return (
    <main className="min-h-screen flex-center bg-slate-200">
      <div className="space-y-6 text-center bg-white p-6 text-black shadow-lg rounded-xl">
        <h1 className="text-6xl  drop-shadow-sm font-semibold">😊 Auth</h1>
        <p className=" text-lg">A simple Authentication service</p>
        <div>
          <LoginButton>
            <Button size="lg" variant="custom">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
