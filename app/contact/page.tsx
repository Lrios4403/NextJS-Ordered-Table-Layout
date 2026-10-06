import type { Metadata } from "next";
import PageViews from "@/components/page-views/PageViews";
import grid from "@/lib/styles.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <main className={`${grid.content} ${styles.main}`}>
        <h2>Contact</h2>
        <p>
          <a className={styles.email} href="mailto:hello@example.com">
            hello@example.com
          </a>
        </p>
      </main>

      <PageViews today={2} total={57} />
    </>
  );
}
