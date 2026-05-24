'use client'

import React, { useState } from 'react'

const navItems = [
  { id: 1, label: 'BUILDER', icon: 'architecture' },
  { id: 2, label: 'CALC', icon: 'query_stats' },
  { id: 3, label: 'RISK', icon: 'query_builder', active: true },
  { id: 4, label: 'VAULT', icon: 'inventory_2' },
]

export default function BottomNavBar() {
  const [active, setActive] = useState(3)

  return (
    <nav className="fixed bottom-0 w-full z-50 h-16 border-t border-outline-variant/50 flex justify-around items-center bg-surface-container-lowest md:hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex flex-col items-center justify-center pt-1 scale-95 transition-transform duration-75 ${
            active === item.id
              ? 'text-primary-fixed border-t-2 border-primary-fixed'
              : 'text-on-surface-variant/60 hover:text-primary-fixed-dim'
          }`}
        >
          <span className="material-symbols-outlined">
            {item.icon}
          </span>
          <span className="font-label-caps text-label-caps mt-1">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
