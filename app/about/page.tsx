import type { Metadata } from "next";
import PageViews from "@/components/page-views/PageViews";
import grid from "@/lib/styles.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

const areas = [
  { element: "<header>", area: "header", file: "app/layout.tsx" },
  { element: "<nav>", area: "sidebar", file: "app/layout.tsx" },
  { element: "<aside>", area: "stats", file: "app/about/page.tsx" },
  { element: "<div>", area: "filler", file: "app/layout.tsx" },
  { element: "<main>", area: "content", file: "app/about/page.tsx" },
  { element: "<footer>", area: "footer", file: "app/layout.tsx" },
];

export default function About() {
  return (
    <>
      <main className={`${grid.content} ${styles.main}`}>
        <h2>About</h2>
        <p>Each element is placed using its named grid area.</p>

        <ul className={styles.areas}>
          {areas.map(({ element, area, file }) => (
            <li key={area} className={styles.area}>
              <code className={styles.element}>{element}</code>
              <span>grid-area: {area}</span>
              <span className={styles.file}>{file}</span>
            </li>
          ))}
        </ul>
      </main>

      <PageViews today={5} total={128} />
    </>
  );
}
