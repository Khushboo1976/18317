import React, { useEffect, useState } from "react";
import { getNotifications } from "./core/apiClient";
import { extractTopNotifications } from "./core/topSelector";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function load() {
      const raw = await getNotifications();
      const top = extractTopNotifications(raw, 10);
      setItems(top);
    }
    load();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Inbox (Top 10)</h2>

      {items.map((n, idx) => (
        <div key={idx} style={{ marginBottom: "12px" }}>
          <div><b>{idx + 1}. {n.message}</b></div>
          <div>Score: {n.priorityScore.toFixed(4)}</div>
        </div>
      ))}
    </div>
  );
}
export default App;
