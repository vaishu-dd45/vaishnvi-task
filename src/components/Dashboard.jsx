import { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [fearGreed, setFearGreed] = useState(50);
  const [chartData, setChartData] = useState(null);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  /* ================= LIVE API SIMULATION ================= */
  useEffect(() => {
    const fetchDashboardData = () => {
      // 🔹 Simulated backend response
      setSummary([
        { title: "Total Sale", amount: 160 + Math.random() * 20, growth: 10 + Math.random() * 5 },
        { title: "Orders", amount: 300 + Math.random() * 50, growth: 8 + Math.random() * 6 },
        { title: "Revenue", amount: 900 + Math.random() * 100, growth: -5 + Math.random() * 10 },
        { title: "Products", amount: 80 + Math.random() * 10, growth: 5 + Math.random() * 6 }
      ]);

      const fgScore = Math.floor(40 + Math.random() * 40);
      setFearGreed(fgScore);

      setChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: Array.from({ length: 6 }, () =>
              Math.floor(8000 + Math.random() * 12000)
            ),
            backgroundColor: "#00ff99",
            borderRadius: 8
          }
        ]
      });

      setProgress({
        marketCap: Math.floor(60 + Math.random() * 20),
        volume: Math.floor(40 + Math.random() * 30)
      });

      setLoading(false);
    };

    fetchDashboardData(); // initial load

    const interval = setInterval(fetchDashboardData, 10000); // 🔥 LIVE REFRESH

    return () => clearInterval(interval);
  }, []);

  /* ================= GAUGE ROTATION FIX ================= */
  // 0–100 → -90deg to +90deg
  const needleRotation = (fearGreed - 50) * 1.8;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">Dashboard UI</h2>
        <div className="menu">
          <p>MENU</p>
          <a className="active">Dashboard</a>
          <a>Products</a>
          <a>Order</a>
          <a>Reports</a>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <h1>Dashboard Analytics</h1>
            <span>Live market performance</span>
          </div>
        </header>

        {/* ================= TOP CARDS ================= */}
        <section className="cards">
          {loading ? (
            <p className="loading">Loading analytics...</p>
          ) : (
            summary.map((item, i) => (
              <div className="card" key={i}>
                <span className={`tag ${item.growth < 0 ? "red" : "green"}`}>
                  {item.growth > 0 ? "+" : ""}
                  {item.growth.toFixed(1)}%
                </span>
                <h3>{item.title}</h3>
                <h2>{item.title === "Orders" || item.title === "Products"
                  ? item.amount.toFixed(0)
                  : `$${item.amount.toFixed(2)}`}
                </h2>
                <p>Live data</p>
              </div>
            ))
          )}
        </section>

        <section className="content">
          {/* ================= BAR CHART ================= */}
          <div className="chart-box">
            <h3>Products Reports</h3>
            {chartData && (
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: "#222" } }
                  }
                }}
              />
            )}
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="right-panel">
            {/* 🔥 FIXED GAUGE */}
            <div className="gauge">
              <h3>Fear & Greed Index</h3>

              <div className="meter">
                <div
                  className="needle"
                  style={{ transform: `rotate(${needleRotation}deg)` }}
                />
              </div>

              <p>
                Score: <b>{fearGreed}</b>
              </p>

              <small>
                {fearGreed < 40
                  ? "Fear"
                  : fearGreed < 60
                  ? "Neutral"
                  : "Greed"}
              </small>
            </div>

            {/* ================= PROGRESS ================= */}
            <div className="progress-box">
              <h3>Progress</h3>

              <div className="progress">
                <span>Market cap ({progress.marketCap}%)</span>
                <div>
                  <i style={{ width: `${progress.marketCap}%` }} />
                </div>
              </div>

              <div className="progress">
                <span>Volume ({progress.volume}%)</span>
                <div>
                  <i style={{ width: `${progress.volume}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
