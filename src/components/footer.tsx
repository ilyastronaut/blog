import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-6 w-full h-24">
      <p className="text-center text-sm text-muted-foreground leading-loose">
        Built by{" "}
        <Link
          href="https://x.com/ilyastronaut"
          className="font-medium underline underline-offset-4"
        >
          Ilyas Ayachi
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/ilyastronaut/mdx-blog-pages"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}
