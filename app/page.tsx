import PageViews from "@/components/page-views/PageViews";
import grid from "@/lib/styles.module.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={`${grid.content} ${styles.main}`}>
        <h2>Main Content</h2>
        <p>This area fills the remaining width beside the navigation.</p>
        <p>
          It is rendered by <code>app/page.tsx</code>, but it lands in the{" "}
          <code>content</code> area defined in <code>lib/styles.module.css</code>,
          even though the layout renders it after the footer.
        </p>
        <p>
          The views box under the navigation comes from <code>app/page.tsx</code>{" "}
          too. It lands in the <code>stats</code> area, between the navigation
          and the filler that the layout renders.
        </p>
      </main>

      <PageViews today={12} total={340} />
    </>
  );
}
