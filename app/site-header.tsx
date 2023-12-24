import { ThemeToggle } from "@/components/theme-toggle";
import { DribbbleIcon } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="flex items-center gap-4 px-8 py-3">
        <Link href={"/"}>
          <DribbbleIcon className="h-6 w-6" />
        </Link>
        <nav className="ms-4 flex items-center gap-4">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              className="text-sm font-medium underline-offset-2 hover:underline"
              key={item}
              href={`/`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <ThemeToggle className="ms-auto" />
      </div>
    </header>
  );
}
