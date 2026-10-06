import grid from "@/lib/styles.module.css";
import styles from "./styles.module.css";

type Views = {
  today: number;
  total: number;
};

// Example numbers. A real site would read these from its analytics.
const site: Views = { today: 58, total: 2914 };

// Each page renders this with its own numbers. The grid.stats class places it
// in the stats area under the layout's navigation.
export default function PageViews({ today, total }: Views) {
  const rows = [
    { label: "Page", today, total },
    { label: "Site", ...site },
  ];

  return (
    <aside className={`${grid.stats} ${styles.stats}`} aria-label="Page views">
      <h3>Views</h3>
      <div className={styles.row}>
        <span />
        <span>Today</span>
        <span>Total</span>
      </div>
      {rows.map(({ label, today, total }) => (
        <div key={label} className={styles.row}>
          <span>{label}</span>
          <span>{today.toLocaleString("en-US")}</span>
          <span>{total.toLocaleString("en-US")}</span>
        </div>
      ))}
    </aside>
  );
}
