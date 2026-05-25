import React, { useState } from 'react';
import {
  FiSearch,
  FiShield,
} from 'react-icons/fi';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import MainLayout from '../componets/Layout';

export default function AdminControlPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Elena Lundqvist',
      email: 'elena@norditbank',
      tier: 'PREMIUM',
      limit: '$250,000',
      status: 'Active',
      color: 'bg-green-100',
      initials: 'EL',
    },
    {
      id: 2,
      name: 'Marcus Kane',
      email: 'm.kane@nexus.io',
      tier: 'BASIC',
      limit: '$15,000',
      status: 'Frozen',
      color: 'bg-red-100',
      initials: 'MK',
    },
    {
      id: 3,
      name: 'Sienna Yang',
      email: 'sienna@pacific.fin',
      tier: 'PREMIUM',
      limit: '$500,000',
      status: 'Active',
      color: 'bg-blue-100',
      initials: 'SY',
    },
  ]);

  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [apiKeyRotation, setApiKeyRotation] = useState(false);

  const tiers = [
    {
      id: 1,
      name: 'Basic Users',
      badge: 'TIER 01',
      assets: 'Assets under $25k',
      withdrawal: '0.50%',
      transfer: 'Free',
      color: 'bg-gray-100',
      btnColor: 'border-gray-300 text-gray-700 hover:bg-gray-50',
    },
    {
      id: 2,
      name: 'Premium Plus',
      badge: 'TIER 02',
      assets: 'Assets $25k - $500k',
      withdrawal: '0.15%',
      transfer: 'Free',
      color: 'bg-emerald-50',
      btnColor: 'bg-emerald-600 text-white hover:bg-emerald-700',
      featured: true,
    },
    {
      id: 3,
      name: 'Institutional',
      badge: 'TIER 03',
      assets: 'Assets $500k+',
      withdrawal: '0.05%',
      transfer: 'Free',
      color: 'bg-blue-50',
      btnColor: 'border-blue-300 text-blue-700 hover:bg-blue-50',
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">SYSTEM ARCHITECTURE</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Control
          </h1>
        </div>

        {/* User Management Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              👥 User Management
            </h2>
            <div className="w-full md:w-64 relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by ID or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    ACCOUNT HOLDER
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    TIER
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    SAVINGS LIMIT
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    STATUS
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 text-sm">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center font-semibold text-sm`}
                        >
                          {user.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          user.tier === 'PREMIUM'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {user.tier}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      {user.limit}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {user.status === 'Active' ? (
                          <FaCheckCircle className="text-emerald-500" />
                        ) : (
                          <FaTimesCircle className="text-red-500" />
                        )}
                        <span
                          className={`text-sm font-semibold ${
                            user.status === 'Active'
                              ? 'text-emerald-600'
                              : 'text-red-600'
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        <FiShield size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center font-semibold text-sm`}
                  >
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tier:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.tier === 'PREMIUM'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {user.tier}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Limit:</span>
                    <span className="font-semibold text-gray-900">
                      {user.limit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <div className="flex items-center gap-1">
                      {user.status === 'Active' ? (
                        <FaCheckCircle className="text-emerald-500" />
                      ) : (
                        <FaTimesCircle className="text-red-500" />
                      )}
                      <span
                        className={`text-xs font-semibold ${
                          user.status === 'Active'
                            ? 'text-emerald-600'
                            : 'text-red-600'
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
              View All 12,482 Users
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Security Protocols */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm p-6 md:p-8 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🔒 Security Protocols
            </h3>

            <div className="space-y-4">
              {/* 2FA */}
              <div className="pb-4 border-b border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">Enforce 2FA</p>
                    <p className="text-sm text-gray-500">
                      Mandatory for all accounts
                    </p>
                  </div>
                  <button
                    onClick={() => setTwoFAEnabled(!twoFAEnabled)}
                    className={`relative inline-flex h-6 w-11 rounded-full ${
                      twoFAEnabled ? 'bg-emerald-500' : 'bg-gray-300'
                    } transition-colors`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        twoFAEnabled ? 'translate-x-6' : 'translate-x-1'
                      } mt-1`}
                    />
                  </button>
                </div>
              </div>

              {/* API Key Rotation */}
              <div className="pb-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">
                      API Key Rotation
                    </p>
                    <p className="text-sm text-gray-500">
                      90-day forced renewal
                    </p>
                  </div>
                  <button
                    onClick={() => setApiKeyRotation(!apiKeyRotation)}
                    className={`relative inline-flex h-6 w-11 rounded-full ${
                      apiKeyRotation ? 'bg-emerald-500' : 'bg-gray-300'
                    } transition-colors`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        apiKeyRotation ? 'translate-x-6' : 'translate-x-1'
                      } mt-1`}
                    />
                  </button>
                </div>
              </div>

              {/* Revoke Sessions */}
              <div className="mt-6">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Revoke All Active Sessions
                </button>
                <p className="text-xs text-red-600 mt-2 text-center">
                  DESTRUCTIVE ACTION REQUIRED
                </p>
              </div>

              {/* Encrypted Nodes */}
              <div className="mt-6 bg-linear-to-br from-gray-900 to-black rounded-xl p-4 text-white">
                <p className="font-semibold mb-2">🔐 Encrypted Nodes</p>
                <p className="text-sm">100% System Uptime Verified</p>
              </div>
            </div>
          </div>

          {/* Fee Configuration & Tiers */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                💳 Fee Configuration & Tiers
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Manage platform revenue structures per user category.
              </p>

              {/* Tab Buttons */}
              <div className="flex gap-2 mb-6 border-b border-gray-200">
                {['Standard', 'Crypto', 'Institutional'].map((tab) => (
                  <button
                    key={tab}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-colors"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tier Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`rounded-xl p-6 ${tier.color} border ${
                      tier.featured
                        ? 'border-emerald-300 shadow-lg'
                        : 'border-gray-200'
                    } relative`}
                  >
                    {tier.featured && (
                      <div className="absolute top-4 right-4 text-2xl">⭐</div>
                    )}

                    <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-xs font-bold text-gray-700 mb-4">
                      {tier.badge}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-gray-600 mb-4">{tier.assets}</p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-gray-600">Withdrawal Fee</p>
                        <p className="text-lg font-bold text-emerald-600">
                          {tier.withdrawal}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Internal Transfer</p>
                        <p className="text-lg font-bold text-emerald-600">
                          {tier.transfer}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`w-full py-2 px-4 rounded-lg font-bold border-2 transition-colors ${tier.btnColor}`}
                    >
                      Configure
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}