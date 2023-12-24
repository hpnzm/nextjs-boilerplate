import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Counter } from "@/features/counter/counter";

export default async function Home() {
  const posts = await prisma.post.findMany();
  const session = await auth();

  let slot;
  if (!session?.user) {
    slot = (
      <>
        <h1>You signed out {`:(`}</h1>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button>Sign in</Button>
        </form>
      </>
    );
  } else {
    slot = (
      <>
        <h1>Your name is {session.user.name}</h1>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button>Sign out</Button>
        </form>
      </>
    );
  }
  return (
    <div className="space-y-2">
      {slot}

      <Counter />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
