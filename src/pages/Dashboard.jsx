import { useState } from 'react'
import './Dashboard.css'

const metrics = [
  { label: 'Total Requests', value: '1,284,390', delta: '+12.4%', up: true },
  { label: 'Bandwidth', value: '48.2 GB', delta: '+7.1%', up: true },
  { label: 'Avg Latency', value: '3.2 ms', delta: '-18%', up: true },
  { label: 'Error Rate', value: '0.02%', delta: '-0.01%', up: true },
]

const buckets = [
  { name: 'static-assets', size: '12.4 GB', objects: 3842, public: true },
  { name: 'spa-builds', size: '892 MB', objects: 156, public: true },
  { name: 'backups', size: '34.1 GB', objects: 21, public: false },
  { name: 'media-uploads', size: '8.2 GB', objects: 10421, public: false },
  { name: 'logs', size: '2.1 GB', objects: 89432, public: false },
]

const bars = [68, 82, 45, 91, 73, 88, 56, 77, 94, 63, 71, 85]
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div>
          <span className="page-label">/ DASHBOARD</span>
          <h1 className="page-title">RustFS Console</h1>
        </div>
        <div className="dash-status">
          <span className="status-dot" />
          <span className="status-text">OPERATIONAL</span>
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map(m => (
          <div key={m.label} className="metric-card">
            <span className="metric-label">{m.label}</span>
            <span className="metric-value">{m.value}</span>
            <span className={`metric-delta ${m.up ? 'up' : 'down'}`}>{m.delta}</span>
          </div>
        ))}
      </div>

      <div className="dash-tabs">
        {['overview', 'buckets'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="chart-section">
          <h3 className="chart-title">Monthly Requests</h3>
          <div className="bar-chart">
            {bars.map((h, i) => (
              <div key={i} className="bar-col">
                <div className="bar" style={{ height: `${h}%` }} />
                <span className="bar-label">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'buckets' && (
        <div className="buckets-section">
          <table className="buckets-table">
            <thead>
              <tr>
                <th>Bucket</th>
                <th>Size</th>
                <th>Objects</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {buckets.map(b => (
                <tr key={b.name}>
                  <td><code className="bucket-name">{b.name}</code></td>
                  <td>{b.size}</td>
                  <td>{b.objects.toLocaleString()}</td>
                  <td>
                    <span className={`access-badge ${b.public ? 'public' : 'private'}`}>
                      {b.public ? 'PUBLIC' : 'PRIVATE'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
