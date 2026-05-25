import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { FiDownload, FiAlertTriangle } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import MainLayout from '../componets/Layout';

// Type Definitions
interface TransactionData {
  name: string;
  value: number;
}

interface RegionalHealth {
  region: string;
  uptime: number;
}

interface Alert {
  id: number;
  type: string;
  entity: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  time: string;
  action: string;
  icon: string;
}

interface KPICard {
  label: string;
  value: string;
  icon: string;
  trend: string;
  isAlert?: boolean;
}

type TabType = 'weekly' | 'monthly';

const SuperAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('weekly');

  const transactionData: TransactionData[] = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 2800 },
    { name: 'Thu', value: 3400 },
    { name: 'Fri', value: 3100 },
    { name: 'Sat', value: 3200 },
    { name: 'Sun', value: 2900 },
  ];

  const regionalHealth: RegionalHealth[] = [
    { region: 'North America', uptime: 99.98 },
    { region: 'Europe', uptime: 99.95 },
    { region: 'Asia Pacific', uptime: 96.42 },
  ];

  const alerts: Alert[] = [
    {
      id: 1,
      type: 'Suspicious Login Attempt',
      entity: 'ID: 882910-X (Frankfurt)',
      severity: 'HIGH',
      time: '2 mins ago',
      action: 'Investigate',
      icon: '⚠️',
    },
    {
      id: 2,
      type: 'Failed Bank Link',
      entity: 'Plaid Integration (Global)',
      severity: 'MEDIUM',
      time: '14 mins ago',
      action: 'Reconnect',
      icon: '🔗',
    },
    {
      id: 3,
      type: 'DB Replication Lag',
      entity: 'AWS Region: us-east-1',
      severity: 'LOW',
      time: '45 mins ago',
      action: 'Monitor',
      icon: '💾',
    },
  ];

  const kpiCards: KPICard[] = [
    {
      label: 'Total Assets Under Management',
      value: '$4.2B',
      icon: '💰',
      trend: '+4.2%',
    },
    {
      label: 'Active User Growth',
      value: '2.4M',
      icon: '👥',
      trend: '+12%',
    },
    {
      label: 'System Uptime',
      value: '99.9%',
      icon: '✅',
      trend: 'Live Status',
    },
    {
      label: 'Platform Risk Alerts',
      value: '14',
      icon: '⚠️',
      trend: 'High Priority',
      isAlert: true,
    },
  ];

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  const getSeverityColor = (
    severity: 'HIGH' | 'MEDIUM' | 'LOW'
  ): string => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-100 text-red-700';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-700';
      case 'LOW':
        return 'bg-blue-100 text-blue-700';
    }
  };

  const getActionButtonColor = (
    severity: 'HIGH' | 'MEDIUM' | 'LOW'
  ): string => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-100 text-red-700 hover:bg-red-200';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
      case 'LOW':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
    }
  };

  const getProgressBarColor = (uptime: number): string => {
    if (uptime > 98) return 'bg-emerald-500';
    if (uptime > 96) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">PLATFORM OVERSIGHT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Super Admin Dashboard
            </h1>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <FiDownload /> Download Report
            </button>
            <button className="flex-1 md:flex-none px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Update Policies
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiCards.map((kpi, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 ${
                kpi.isAlert
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">{kpi.icon}</span>
                <span
                  className={`text-xs font-bold ${
                    kpi.isAlert ? 'text-red-600' : 'text-emerald-600'
                  }`}
                >
                  {kpi.trend}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{kpi.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Transaction Volume */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Transaction Volume
              </h3>
              <div className="flex gap-2">
                {(['Weekly', 'Monthly'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab.toLowerCase() as TabType)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="#059669" radius={[8, 8, 0, 0]} />
                <Bar dataKey="value" fill="#a7f3d0" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Health */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              🌍 Regional Health
            </h3>

            <div className="space-y-4">
              {regionalHealth.map((region, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      {region.region}
                    </span>
                    <span className="text-sm font-bold text-emerald-600">
                      {region.uptime}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressBarColor(
                        region.uptime
                      )}`}
                      style={{ width: `${region.uptime}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Bot Card */}
            <div className="mt-6 bg-linear-to-br from-emerald-900 to-black rounded-xl p-4 text-white">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <p className="font-bold text-sm">AI Risk Analyzer</p>
                  <p className="text-xs opacity-80">
                    Real-time threat detection powered by machine learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              🚨 Recent Critical Alerts
            </h3>
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
              View All Logs →
            </button>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    Alert Type
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    Affected Entity
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    Severity
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    Timestamp
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert) => (
                  <tr
                    key={alert.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{alert.icon}</span>
                        <span className="font-semibold text-gray-900">
                          {alert.type}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {alert.entity}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getSeverityColor(
                          alert.severity
                        )}`}
                      >
                        {alert.severity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">
                      {alert.time}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${getActionButtonColor(
                          alert.severity
                        )}`}
                      >
                        {alert.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{alert.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {alert.type}
                    </p>
                    <p className="text-xs text-gray-500">{alert.entity}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${getSeverityColor(
                        alert.severity
                      )}`}
                    >
                      {alert.severity}
                    </span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <button
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${getActionButtonColor(
                      alert.severity
                    )}`}
                  >
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuperAdminDashboard;