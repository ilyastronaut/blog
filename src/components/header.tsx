import Link from "next/link";
import { BookDashed } from "lucide-react";

import { Button } from "./ui/button";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between px-6 w-full h-14 bg-background">
      <div className="flex gap-2">
        <Button asChild size="icon" variant="ghost" className="w-8 h-8">
          <Link href="/">
            <BookDashed />
          </Link>
        </Button>
        <nav className="flex gap-0.5">
          <Button asChild size="sm" variant="ghost">
            <Link href="/blog">Blog</Link>
          </Button>
        </nav>
      </div>

      <ModeToggle />
    </header>
  );
}
