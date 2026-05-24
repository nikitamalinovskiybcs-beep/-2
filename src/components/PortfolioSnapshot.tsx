'use client'

import React, { useState, useEffect } from 'react'

interface PortfolioData {
  totalNotional: string
  barrierAlerts: number
  liquidityIdx: number
  riskMult: number
}

export default function PortfolioSnapshot() {
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    totalNotional: '$4.25B',
    barrierAlerts: 14,
    liquidityIdx: 0.942,
    riskMult: 1.05,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolio(prev => ({
        totalNotional: prev.totalNotional,
        barrierAlerts: Math.max(0, Math.min(50, prev.barrierAlerts + Math.floor((Math.random() - 0.6) * 4))),
        liquidityIdx: Math.max(0, Math.min(1, prev.liquidityIdx + (Math.random() - 0.5) * 0.03)),
        riskMult: Math.max(0.8, Math.min(1.5, prev.riskMult + (Math.random() - 0.5) * 0.08)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="col-span-1 border border-outline-variant/30 bg-surface-container-lowest p-margin-sm hover:border-primary-container transition-colors duration-300">
      <div className="flex justify-between items-start mb-4 border-b border-outline-variant/30 pb-2">
        <h2 className="font-data-lg text-data-lg text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">account_balance</span>
          [PORTFOLIO_SNAPSHOT]
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">TOTAL_NOTIONAL</div>
          <div className="font-headline-lg text-headline-lg-mobile text-primary-fixed">{portfolio.totalNotional}</div>
        </div>

        <div className="border-t border-outline-variant/20 pt-4">
          <div className="flex justify-between items-center">
            <div className="font-label-caps text-label-caps text-on-surface-variant">BARRIER_ALERTS</div>
            <div className={`font-data-sm text-data-sm px-2 py-0.5 rounded flex items-center gap-1 ${
              portfolio.barrierAlerts > 10 
                ? 'bg-error-container text-on-error-container'
                : 'bg-surface-container text-on-surface'
            }`}>
              <span className="material-symbols-outlined text-[14px]">warning</span>
              {portfolio.barrierAlerts} ACTIVE
            </div>
          </div>
        </div>

        <div className="border-t border-outline-variant/20 pt-2 flex flex-col gap-1">
          <div className="flex justify-between font-data-sm text-data-sm">
            <span className="text-on-surface-variant">LIQUIDITY_IDX:</span>
            <span className="text-secondary-container">{portfolio.liquidityIdx.toFixed(3)}</span>
          </div>
          <div className="flex justify-between font-data-sm text-data-sm">
            <span className="text-on-surface-variant">RISK_MULT:</span>
            <span className="text-on-surface">{portfolio.riskMult.toFixed(2)}x</span>
          </div>
        </div>
      </div>
    </div>
  )
}
