import type { Metadata } from "next";
import Link from "next/link";
import grid from "@/lib/styles.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "Grid template areas in the Next.js App Router",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {/* The grid container lives on a wrapper rather than <body>, so nothing
        that Next.js or a browser extension injects into <body> can end up as
        a stray grid item. */}
        <div className={grid.grid}>
          {/* The header will be at the top, spanning both columns. */}
          <header className={grid.header}>
            <h1>My Website</h1>
          </header>

          {/* The footer is written above the navigation and the page, but the
          grid template still places it at the bottom. */}
          <footer className={grid.footer}>My Website &copy; 2026</footer>

          {/* The sidebar will be on the left. */}
          <nav className={grid.sidebar} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* The filler is empty. It fills the rest of the left column. */}
          <div className={grid.filler} />

          {/* Each page renders its own <main className={grid.content}> and
          <PageViews>, which fill the content and stats areas. Both become
          direct children of the grid container right here. */}
          {children}
        </div>
      </body>
    </html>
  );
}
