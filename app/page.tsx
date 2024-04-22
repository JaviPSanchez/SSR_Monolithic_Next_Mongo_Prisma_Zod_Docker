import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  const user = await db.user.findMany();
  console.log(user);

  return (
    <main className="min-h-screen flex-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white drop-shadow-sm font-semibold">
          😊 Auth
        </h1>
        <p className="text-white text-lg">A simple Authentication service</p>
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
