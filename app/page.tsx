import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ThemeToggle } from "@/components/theme-toggle";
import { Counter } from "@/features/counter/counter";

export default async function Home() {
  const posts = await prisma.post.findMany();
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="space-y-2 p-2">
      <ThemeToggle />
      <h1>This is server</h1>
      <h1>Your name is {session.user.name}</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign out</Button>
      </form>
      <Counter />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
