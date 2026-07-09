import React, { useState, useMemo, useEffect } from 'react';

// ============================================================================
// ZERO-DEPENDENCY ICONS: Hardcoded to prevent package crashes
// ============================================================================
const Icon = ({ path, size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    dangerouslySetInnerHTML={{ __html: path }}
  />
);

const Icons = {
  Info: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
    />
  ),
  CheckCircle: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
    />
  ),
  Lock: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
    />
  ),
  Settings: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
    />
  ),
  AlertTriangle: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'
    />
  ),
  ShieldAlert: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>'
    />
  ),
  DollarSign: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
    />
  ),
  TrendingUp: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
    />
  ),
  Clock: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
    />
  ),
  Sun: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
    />
  ),
  Moon: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'
    />
  ),
  Linkedin: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'
    />
  ),
  ArrowRight: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
    />
  ),
  Edit: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'
    />
  ),
  BarChart: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'
    />
  ),
  Loader2: ({ size, className }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};

const LabelWithTooltip = ({
  label,
  tooltip,
  colorClass = 'text-slate-900 dark:text-slate-100',
}) => (
  <div className="flex items-center gap-1.5 group relative">
    <span className={`text-sm font-semibold block ${colorClass}`}>{label}</span>
    <Icons.Info
      size={14}
      className="text-slate-400 dark:text-slate-500 cursor-help"
    />
    <div className="absolute top-full left-0 mt-2 hidden group-hover:block w-64 bg-slate-800 text-slate-100 text-xs p-3 rounded-lg shadow-2xl z-[9999] pointer-events-none border border-slate-700 leading-relaxed text-left">
      {tooltip}
      <div className="absolute bottom-full left-4 border-4 border-transparent border-b-slate-800"></div>
    </div>
  </div>
);

const CurrencyField = ({
  label,
  tooltip,
  value,
  setValue,
  prefix = '',
  suffix = '',
  rightLabel = '',
}) => (
  <div className="relative z-20 mb-6">
    <div className="flex justify-between items-end mb-2 w-full">
      <LabelWithTooltip label={label} tooltip={tooltip} />
      {rightLabel && (
        <span className="text-[10px] text-slate-500 font-medium">
          {rightLabel}
        </span>
      )}
    </div>
    <div className="flex items-center bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 focus-within:border-indigo-500 dark:focus-within:border-indigo-400 transition-colors shadow-inner">
      {prefix && (
        <span className="text-slate-400 dark:text-slate-500 font-mono text-lg mr-2">
          {prefix}
        </span>
      )}
      <input
        type="number"
        step="any"
        value={value}
        onChange={(e) =>
          setValue(e.target.value === '' ? '' : Number(e.target.value))
        }
        className="w-full bg-transparent font-mono text-indigo-700 dark:text-indigo-400 text-xl font-bold outline-none appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {suffix && (
        <span className="text-slate-400 dark:text-slate-500 font-mono text-lg ml-2">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

const NumberInputSmall = ({
  value,
  setValue,
  prefix = '',
  suffix = '',
  width = 'w-16',
}) => (
  <div className="flex items-center justify-end bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-transparent focus-within:border-indigo-500 dark:focus-within:border-indigo-400 transition-colors shadow-inner z-0">
    {prefix && (
      <span className="text-slate-400 dark:text-slate-500 font-mono text-xs mr-1">
        {prefix}
      </span>
    )}
    <input
      type="number"
      step="any"
      value={value}
      onChange={(e) =>
        setValue(e.target.value === '' ? '' : Number(e.target.value))
      }
      className={`bg-transparent font-mono text-indigo-700 dark:text-indigo-400 text-sm font-bold text-right outline-none appearance-none ${width} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none relative z-10`}
    />
    {suffix && (
      <span className="text-slate-400 dark:text-slate-500 font-mono text-xs ml-1">
        {suffix}
      </span>
    )}
  </div>
);

const App = () => {
  // 1. STATE & NAVIGATION
  const [currency, setCurrency] = useState('INR');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });
  const [activeView, setActiveView] = useState('inputs'); // 'inputs', 'calculating', 'outputs'

  // Earnings Profile (THESE WERE MISSING!)
  const [revenue, setRevenue] = useState(150.5);
  const [baseEbitda, setBaseEbitda] = useState(32.5);
  const [addBacks, setAddBacks] = useState(3.0);

  // Capitalization
  const [enterpriseValue, setEnterpriseValue] = useState(245.0);
  const [newDebt, setNewDebt] = useState(75.5);
  const [existingDebt, setExistingDebt] = useState(0.0);

  // Risk Profile
  const [isSponsorBacked, setIsSponsorBacked] = useState(true);
  const [pledgedCollateral, setPledgedCollateral] = useState(125.0);
  const [equityKicker, setEquityKicker] = useState(0);

  // Deal Economics
  const [tenor, setTenor] = useState(5);
  const [oid, setOid] = useState(98.0);
  const [upfrontFee, setUpfrontFee] = useState(2.0);
  const [pikPremium, setPikPremium] = useState(0.0);

  // Structure & Covenants
  const [amortization, setAmortization] = useState('Bullet');
  const [maxLeverageCov, setMaxLeverageCov] = useState(4.5);
  const [hasDSRA, setHasDSRA] = useState(true);

  // Add this block to forcefully apply the theme to the entire document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (activeView !== 'inputs') {
      window.scrollTo(0, 0);
    }
  }, [activeView]);

  const metrics = useMemo(() => {
    const numRev = Number(revenue) || 0;
    const numEbitda = Number(baseEbitda) || 0;
    const numAddBacks = Number(addBacks) || 0;
    const numNewDebt = Number(newDebt) || 0;
    const numExistDebt = Number(existingDebt) || 0;
    const numEV = Number(enterpriseValue) || 0;
    const numCollateral = Number(pledgedCollateral) || 0;

    const adjustedEbitda = numEbitda + numAddBacks;
    const ebitdaMargin = numRev > 0 ? (numEbitda / numRev) * 100 : 0;

    const impliedMultiple = adjustedEbitda > 0 ? numEV / adjustedEbitda : 0;

    const totalDebt = numNewDebt + numExistDebt;
    const leverage = adjustedEbitda > 0 ? totalDebt / adjustedEbitda : 0;

    const ltv = numCollateral > 0 ? (totalDebt / numCollateral) * 100 : 999;

    const headroom = maxLeverageCov - leverage;
    const isCovenantBreached = headroom < 0;

    const sponsorEquity = Math.max(0, numEV - totalDebt);

    const baseRate = currency === 'USD' ? 5.3 : 8.0;
    const baseRateName = currency === 'USD' ? 'SOFR' : 'RBI / MCLR';

    let borrowerTier = '';
    let profileMod = 0;
    if (leverage > 5.5 || ebitdaMargin < 10) {
      borrowerTier = 'Turnaround / Stressed';
      profileMod = 2.5;
    } else if (isSponsorBacked && leverage <= 4.0) {
      borrowerTier = 'Top-Tier Sponsor Backed';
      profileMod = -0.75;
    } else {
      borrowerTier = 'Standard Mid-Market';
      profileMod = 0.0;
    }

    let collateralTier = '';
    let collateralMod = 0;
    if (ltv <= 60) {
      collateralTier = 'Hard Assets (LTV < 60%)';
      collateralMod = -0.5;
    } else if (ltv <= 100) {
      collateralTier = 'Standard (Cash Flow & AR)';
      collateralMod = 0.0;
    } else {
      collateralTier = 'Asset-Light / Unsecured';
      collateralMod = 1.5;
    }

    let baseSpread = 0;
    let structure = '';
    let structureDesc = '';
    let tranches = [];

    if (leverage <= 0) {
      baseSpread = 0;
      structure = 'Unlevered';
      structureDesc = 'Company currently has no pro-forma debt burden.';
      tranches = [{ name: 'No Debt', amount: 0 }];
    } else if (leverage <= 3.0) {
      baseSpread = 3.5;
      structure = 'Senior Secured NCDs';
      structureDesc =
        'First-lien Non-Convertible Debentures with strict priority claim on all assets and cash flows.';
      tranches = [{ name: 'Senior Secured NCDs', amount: totalDebt }];
    } else if (leverage <= 5.0) {
      baseSpread = 5.5;
      structure = 'First-Lien NCDs with Upside (Unitranche)';
      structureDesc =
        'Blends senior and subordinated risk into a single debenture facility for execution speed.';
      tranches = [{ name: 'Blended Yield NCDs', amount: totalDebt }];
    } else if (leverage <= 6.5) {
      baseSpread = 7.5;
      structure = 'Senior NCDs + Subordinated OCDs';
      structureDesc =
        'Bifurcated stack: Senior NCDs take first loss, Subordinated Optionally Convertible Debentures (OCDs) take higher yield.';
      const seniorCap = adjustedEbitda * 4.0;
      const mezzCap = totalDebt - seniorCap;
      tranches = [
        { name: 'Senior Secured NCDs', amount: seniorCap },
        { name: 'Subordinated OCDs', amount: mezzCap },
      ];
    } else {
      baseSpread = 9.5;
      structure = 'Structured CCDs / HoldCo Debt';
      structureDesc =
        'Highly structured Compulsorily Convertible Debentures utilizing non-cash interest (PIK) to preserve operating liquidity.';
      const seniorCap = adjustedEbitda * 4.0;
      const mezzCap = adjustedEbitda * 2.0;
      const holdcoCap = totalDebt - (seniorCap + mezzCap);
      tranches = [
        { name: 'Senior Secured NCDs', amount: seniorCap },
        { name: 'Subordinated OCDs', amount: mezzCap },
        { name: 'HoldCo CCDs / Mezzanine', amount: holdcoCap },
      ];
    }

    let dsraMod = hasDSRA && baseSpread > 0 ? -0.25 : 0;
    let equityDiscount = equityKicker * 0.3;

    let finalSpread =
      baseSpread + profileMod + collateralMod + dsraMod - equityDiscount;
    finalSpread = Math.max(finalSpread, 2.0);

    const blendedCashRate = baseRate + finalSpread;
    const totalCoupon = blendedCashRate + pikPremium;

    let wal = tenor;
    let schedule = [];
    for (let i = 1; i <= tenor; i++) {
      let principalPct = 0;
      if (amortization === 'Bullet') {
        principalPct = i === tenor ? 1 : 0;
      } else if (amortization === '1% Standard') {
        principalPct = i === tenor ? 1 - 0.01 * (tenor - 1) : 0.01;
      } else if (amortization === 'Straight Line') {
        principalPct = 1 / tenor;
      } else if (amortization === 'Balloon (50/50)') {
        principalPct = i === tenor ? 0.5 / tenor + 0.5 : 0.5 / tenor;
      } else if (amortization === 'Step-Up') {
        const step = 0.05 * i;
        const totalPrevious = Array.from(
          { length: i - 1 },
          (_, idx) => 0.05 * (idx + 1)
        ).reduce((a, b) => a + b, 0);
        principalPct = i === tenor ? 1 - totalPrevious : step;
      } else if (
        amortization === 'Bespoke (50% Penultimate Year, 50% Maturity)'
      ) {
        if (tenor === 1) principalPct = 1;
        else if (i === tenor - 1) principalPct = 0.5;
        else if (i === tenor) principalPct = 0.5;
        else principalPct = 0;
      }
      schedule.push({
        year: i,
        principalPct: principalPct,
        amount: numNewDebt * principalPct,
      });
    }

    let calculatedWal = 0;
    schedule.forEach((pmt) => {
      calculatedWal += pmt.principalPct * pmt.year;
    });
    wal = calculatedWal || tenor;

    const discountAndFees = 100 - oid + upfrontFee;
    const amortizedFees = discountAndFees / wal;
    const grossIrr = totalCoupon + amortizedFees;

    const eqPct = numEV > 0 ? (sponsorEquity / numEV) * 100 : 0;
    const newDebtPct = numEV > 0 ? (numNewDebt / numEV) * 100 : 0;
    const existDebtPct = numEV > 0 ? (numExistDebt / numEV) * 100 : 0;

    return {
      baseEbitda: numEbitda,
      adjustedEbitda,
      ebitdaMargin,
      totalDebt,
      leverage,
      ltv,
      enterpriseValue: numEV,
      impliedMultiple,
      sponsorEquity,
      baseRate,
      baseRateName,
      spread: finalSpread,
      blendedCashRate,
      totalCoupon,
      grossIrr,
      structure,
      structureDesc,
      tranches,
      headroom,
      isCovenantBreached,
      wal,
      schedule,
      borrowerTier,
      collateralTier,
      eqPct,
      newDebtPct,
      existDebtPct,
      numNewDebt,
      numExistDebt,
    };
  }, [
    revenue,
    baseEbitda,
    addBacks,
    newDebt,
    existingDebt,
    enterpriseValue,
    pledgedCollateral,
    isSponsorBacked,
    tenor,
    oid,
    upfrontFee,
    pikPremium,
    currency,
    maxLeverageCov,
    hasDSRA,
    amortization,
    equityKicker,
  ]);

  const formatCurrency = (value) => {
    const symbol = currency === 'USD' ? '$' : '₹';
    const unit = currency === 'USD' ? 'M' : 'Cr';
    return `${symbol}${Number(value).toFixed(1)}${unit}`;
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const handleRunEngine = () => {
    setActiveView('calculating');
    setTimeout(() => {
      setActiveView('outputs');
    }, 2500);
  };

  const renderInputsView = () => (
    <div className="max-w-3xl mx-auto space-y-6 pb-32 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
          An institutional-grade underwriting engine that models private debt
          facilities. Input core company financials and risk parameters below to
          dynamically generate risk-adjusted capital stacks, calculate blended
          IRRs, and output structured term sheets.
        </p>
        <h2 className="text-3xl font-light text-slate-800 dark:text-white">
          Configure Deal Assumptions
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-900/70 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl z-10 relative">
        {/* 1. Earnings Profile */}
        <div
          className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-8 relative"
          style={{ zIndex: 100 }}
        >
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6">
            1. Earnings Profile
          </h3>
          <div className="relative" style={{ zIndex: 99 }}>
            <CurrencyField
              label="Gross Revenue"
              tooltip="Top-line sales before any expenses are deducted. Used to understand scale and calculate EBITDA margins."
              value={revenue}
              setValue={setRevenue}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
            />
          </div>
          <div className="relative" style={{ zIndex: 98 }}>
            <CurrencyField
              label="Base EBITDA"
              tooltip="Earnings Before Interest, Taxes, Depreciation, and Amortization. This is the proxy for operating cash flow."
              value={baseEbitda}
              setValue={setBaseEbitda}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
              rightLabel={`Implied Margin: ${metrics.ebitdaMargin.toFixed(1)}%`}
            />
          </div>
          <div className="relative" style={{ zIndex: 97 }}>
            <CurrencyField
              label="Pro-Forma Add-Backs"
              tooltip="One-time, non-recurring expenses (like restructuring costs) added back to Base EBITDA to reflect true forward-looking cash flow available for debt service."
              value={addBacks}
              setValue={setAddBacks}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
            />
          </div>
        </div>

        {/* 2. Capitalization */}
        <div
          className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-8 relative"
          style={{ zIndex: 90 }}
        >
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6">
            2. Capitalization
          </h3>
          <div className="relative" style={{ zIndex: 89 }}>
            <CurrencyField
              label="Total Enterprise Value (EV)"
              tooltip="The total implied valuation of the company."
              value={enterpriseValue}
              setValue={setEnterpriseValue}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
              rightLabel={`Implied Entry: ${metrics.impliedMultiple.toFixed(
                1
              )}x EBITDA`}
            />
          </div>
          <div className="relative" style={{ zIndex: 88 }}>
            <CurrencyField
              label="New Debt Facility"
              tooltip="The core loan amount currently being negotiated and priced in this term sheet."
              value={newDebt}
              setValue={setNewDebt}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
            />
          </div>
          <div className="relative" style={{ zIndex: 87 }}>
            <CurrencyField
              label="Existing Debt Rollover"
              tooltip="Any current debt that is not being paid off and will remain on the balance sheet alongside the New Debt, affecting total leverage."
              value={existingDebt}
              setValue={setExistingDebt}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
            />
          </div>
        </div>

        {/* 3. Risk Profile */}
        <div
          className="space-y-5 border-b border-slate-100 dark:border-slate-800 pb-8 mb-8 relative"
          style={{ zIndex: 80 }}
        >
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6">
            3. Risk & Deal Profile
          </h3>
          <div
            className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 relative"
            style={{ zIndex: 79 }}
          >
            <div className="flex items-center gap-3">
              <Icons.CheckCircle size={18} className="text-emerald-500" />
              <div>
                <LabelWithTooltip
                  label="Sponsor Backed (PE/VC)"
                  tooltip="Deals backed by Private Equity or VC firms are priced with lower risk spreads because the sponsor provides institutional governance and acts as a capital backstop."
                />
              </div>
            </div>
            <button
              onClick={() => setIsSponsorBacked(!isSponsorBacked)}
              className={`w-12 h-6 rounded-full transition-colors relative flex-shrink-0 shadow-inner border border-transparent ${
                isSponsorBacked
                  ? 'bg-emerald-500'
                  : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                  isSponsorBacked ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              ></div>
            </button>
          </div>
          <div className="relative" style={{ zIndex: 78 }}>
            <CurrencyField
              label="Value of Pledged Collateral"
              tooltip="The specific value of the assets the company is legally pledging as first-lien security to the lender. Used to calculate Loan-to-Value (LTV)."
              value={pledgedCollateral}
              setValue={setPledgedCollateral}
              prefix={currency === 'USD' ? '$' : '₹'}
              suffix={currency === 'USD' ? 'M' : 'Cr'}
              rightLabel={`Calculated LTV: ${metrics.ltv.toFixed(1)}%`}
            />
          </div>
          <div className="relative" style={{ zIndex: 77 }}>
            <div className="flex justify-between items-end mb-2 mt-6">
              <LabelWithTooltip
                label="Equity Kicker (Warrants)"
                tooltip="Percentage of company equity given to the lender. Lenders will mathematically discount the cash interest rate if they receive equity upside."
              />
              <NumberInputSmall
                value={equityKicker}
                setValue={setEquityKicker}
                suffix="%"
                width="w-12"
              />
            </div>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={equityKicker}
              onChange={(e) => setEquityKicker(Number(e.target.value))}
              style={{ touchAction: 'pan-y' }}
              className="thumb-only w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
            />
          </div>
        </div>

        {/* 4 & 5. Economics & Covenants */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
          style={{ zIndex: 70 }}
        >
          <div className="space-y-6 relative" style={{ zIndex: 70 }}>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              4. Economics
            </h3>
            <div className="relative" style={{ zIndex: 69 }}>
              <div className="flex justify-between items-end mb-2">
                <LabelWithTooltip
                  label="Tenor (Years)"
                  tooltip="The duration of the loan. Longer tenors increase duration risk and usually require higher yields."
                />
                <NumberInputSmall
                  value={tenor}
                  setValue={setTenor}
                  width="w-12"
                />
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={tenor}
                onChange={(e) => setTenor(Number(e.target.value))}
                style={{ touchAction: 'pan-y' }}
                className="thumb-only w-full accent-amber-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
              />
            </div>
            <div className="relative" style={{ zIndex: 68 }}>
              <div className="flex justify-between items-end mb-2 mt-4">
                <LabelWithTooltip
                  label="OID (%)"
                  tooltip="Original Issue Discount. A loan priced at 98 OID means the borrower receives $98 but owes $100. It boosts the lender's IRR without raising the stated cash coupon."
                />
                <NumberInputSmall value={oid} setValue={setOid} width="w-16" />
              </div>
              <input
                type="range"
                min="90"
                max="100"
                step="0.5"
                value={oid}
                onChange={(e) => setOid(Number(e.target.value))}
                style={{ touchAction: 'pan-y' }}
                className="thumb-only w-full accent-amber-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
              />
            </div>
            <div className="relative" style={{ zIndex: 67 }}>
              <div className="flex justify-between items-end mb-2 mt-4">
                <LabelWithTooltip
                  label="Upfront Fee (%)"
                  tooltip="A cash fee paid by the borrower to the lender at closing. Usually deducted directly from the loan proceeds."
                />
                <NumberInputSmall
                  value={upfrontFee}
                  setValue={setUpfrontFee}
                  width="w-16"
                />
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.25"
                value={upfrontFee}
                onChange={(e) => setUpfrontFee(Number(e.target.value))}
                style={{ touchAction: 'pan-y' }}
                className="thumb-only w-full accent-amber-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
              />
            </div>
            <div className="relative" style={{ zIndex: 66 }}>
              <div className="flex justify-between items-end mb-2 mt-4">
                <LabelWithTooltip
                  label="PIK Premium (%)"
                  tooltip="Payment-in-Kind. Interest that is not paid in cash, but added to the principal balance to be paid at maturity. Highly common in HoldCo or mezzanine structures."
                />
                <NumberInputSmall
                  value={pikPremium}
                  setValue={setPikPremium}
                  width="w-16"
                />
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={pikPremium}
                onChange={(e) => setPikPremium(Number(e.target.value))}
                style={{ touchAction: 'pan-y' }}
                className="thumb-only w-full accent-amber-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
              />
            </div>
          </div>

          <div className="space-y-6 relative" style={{ zIndex: 60 }}>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              5. Covenants
            </h3>
            <div className="relative" style={{ zIndex: 65 }}>
              <LabelWithTooltip
                label="Repayment Profile"
                tooltip="The schedule for paying down principal. Faster amortization significantly increases the Gross IRR by realizing OID and Upfront Fees sooner."
              />
              <select
                value={amortization}
                onChange={(e) => setAmortization(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 text-sm p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 outline-none focus:border-indigo-500 font-semibold cursor-pointer text-slate-900 dark:text-slate-200 shadow-inner mt-2 relative z-10"
              >
                <option value="Bullet">Bullet (100% at Maturity)</option>
                <option value="1% Standard">1% Standard Amortization</option>
                <option value="Straight Line">
                  Straight Line (Equal Principal)
                </option>
                <option value="Balloon (50/50)">
                  Balloon (50% Amortized, 50% Bullet)
                </option>
                <option value="Step-Up">
                  Step-Up (Back-ended Amortization)
                </option>
                <option value="Bespoke (50% Penultimate Year, 50% Maturity)">
                  Bespoke (50% Penultimate Year, 50% Maturity)
                </option>
              </select>
            </div>
            <div className="relative" style={{ zIndex: 64 }}>
              <div className="flex justify-between items-end mb-2 mt-6">
                <LabelWithTooltip
                  label="Max Leverage Covenant"
                  tooltip="A strict legal limit on how much Debt the company can hold relative to EBITDA. A breach constitutes an Event of Default."
                />
                <NumberInputSmall
                  value={maxLeverageCov}
                  setValue={setMaxLeverageCov}
                  suffix="x"
                />
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="0.25"
                value={maxLeverageCov}
                onChange={(e) => setMaxLeverageCov(Number(e.target.value))}
                style={{ touchAction: 'pan-y' }}
                className="thumb-only w-full accent-rose-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none relative z-10"
              />
            </div>
            <div
              className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mt-6 relative"
              style={{ zIndex: 63 }}
            >
              <div className="flex items-center gap-3">
                <Icons.Lock
                  size={18}
                  className="text-slate-500 dark:text-slate-400"
                />
                <div>
                  <LabelWithTooltip
                    label="Require 1Q DSRA"
                    tooltip="A Debt Service Reserve Account (DSRA) mandates the borrower to set aside cash (usually 1 quarter of interest + principal) to protect the lender against immediate default risk."
                  />
                </div>
              </div>
              <button
                onClick={() => setHasDSRA(!hasDSRA)}
                className={`w-12 h-6 rounded-full transition-colors relative flex-shrink-0 shadow-inner border border-transparent ${
                  hasDSRA ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    hasDSRA ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 md:p-6 z-[1000] flex justify-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]">
        <button
          onClick={handleRunEngine}
          className="w-full max-w-3xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/30 group"
        >
          Run Pricing Engine{' '}
          <Icons.ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );

  const renderCalculatingView = () => (
    <div className="max-w-3xl mx-auto h-[60vh] flex flex-col items-center justify-center space-y-6 animate-in fade-in duration-300">
      <Icons.Loader2
        size={64}
        className="w-16 h-16 text-indigo-500 animate-spin"
      />
      <h2 className="text-2xl font-light text-slate-800 dark:text-white">
        Analyzing Credit Profile...
      </h2>
      <p className="text-slate-500 font-mono text-sm animate-pulse">
        Running Monte Carlo IRR logic & structuring tranches
      </p>
    </div>
  );

  const renderOutputsView = () => (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-12 relative z-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-50">
        <div className="flex items-center gap-3">
          <Icons.CheckCircle size={24} className="text-emerald-500" />
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">
              Underwriting Complete
            </h2>
            <p className="text-xs text-slate-500">
              Based on {currency} {formatCurrency(newDebt)} requirement
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveView('inputs')}
          className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors w-full sm:w-auto justify-center"
        >
          <Icons.Edit size={16} /> Edit Assumptions
        </button>
      </div>

      <div
        className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg relative"
        style={{ zIndex: 45 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Icons.Settings size={18} className="text-indigo-500" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Algorithmic Underwriting Assessment
          </h3>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Based on your inputs, the engine has categorized the risk profile as
          follows:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Borrower Tier
            </span>
            <span
              className={`text-sm font-bold px-3 py-1.5 rounded-full inline-block w-fit ${
                metrics.borrowerTier === 'Turnaround / Stressed'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  : metrics.borrowerTier === 'Top-Tier Sponsor Backed'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400'
              }`}
            >
              {metrics.borrowerTier}
            </span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Collateral Quality
            </span>
            <span
              className={`text-sm font-bold px-3 py-1.5 rounded-full inline-block w-fit ${
                metrics.collateralTier.includes('Unsecured')
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  : metrics.collateralTier.includes('Hard Assets')
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400'
              }`}
            >
              {metrics.collateralTier}
            </span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Loan-to-Value (LTV)
            </span>
            <span
              className={`text-sm font-bold font-mono px-3 py-1.5 rounded-full inline-block w-fit ${
                metrics.ltv > 100
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  : metrics.ltv > 60
                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400'
                  : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
              }`}
            >
              {metrics.ltv.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative"
        style={{ zIndex: 40 }}
      >
        <div
          className={`p-6 rounded-2xl border shadow-lg relative overflow-visible flex flex-col justify-between ${
            metrics.isCovenantBreached
              ? 'bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-900/50'
              : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800'
          }`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 flex justify-between relative">
              <LabelWithTooltip
                label="Recommended Structure"
                tooltip="The algorithmic capital structure recommended based on the company's leverage ratio and cash flow profile."
              />
              {metrics.isCovenantBreached ? (
                <Icons.AlertTriangle size={16} className="text-red-500" />
              ) : (
                <Icons.ShieldAlert
                  size={16}
                  className="text-indigo-600 dark:text-indigo-500"
                />
              )}
            </div>
            <div
              className={`text-2xl font-bold leading-tight ${
                metrics.isCovenantBreached
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              {metrics.isCovenantBreached
                ? 'Un-Bankable (Covenant Breach)'
                : metrics.structure}
            </div>
            {!metrics.isCovenantBreached && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed font-medium relative z-10">
                {metrics.structureDesc}
              </p>
            )}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center text-sm relative z-10">
            <span className="text-slate-500">Covenant Headroom</span>
            <span
              className={`font-mono font-bold text-lg ${
                metrics.isCovenantBreached
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {metrics.headroom > 0 ? '+' : ''}
              {metrics.headroom.toFixed(2)}x
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-visible flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 flex justify-between relative">
              <LabelWithTooltip
                label="Total Coupon (ROI)"
                tooltip="The actual interest rate charged to the company, representing the blend of base rates, risk premiums, and PIK."
              />
              <Icons.DollarSign size={16} className="text-amber-500" />
            </div>
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 font-mono relative z-10">
              {metrics.totalCoupon.toFixed(2)}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-4 flex flex-col gap-2 font-medium relative z-10">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>{metrics.baseRateName} (Base):</span>
                <span className="font-mono text-slate-900 dark:text-slate-200">
                  {metrics.baseRate.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                <span>Risk Spread (Auto-Priced):</span>
                <span className="font-mono text-slate-900 dark:text-slate-200">
                  +{metrics.spread.toFixed(2)}%
                </span>
              </div>
              {pikPremium > 0 && (
                <div className="flex justify-between text-amber-600 dark:text-amber-500 font-bold">
                  <span>PIK Premium:</span>
                  <span className="font-mono">+{pikPremium.toFixed(2)}%</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 dark:from-slate-900 dark:to-indigo-950/40 p-6 rounded-2xl border border-indigo-800 dark:border-indigo-900/30 shadow-lg relative overflow-visible text-white flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="z-10 relative">
            <div className="text-sm text-indigo-200/80 mb-2 flex justify-between relative">
              <LabelWithTooltip
                label="Estimated Gross IRR"
                tooltip="The definitive yield metric. It proves that receiving OID and Upfront Fees early in a shorter amortization schedule massively spikes your actual rate of return."
                colorClass="text-indigo-200/80"
              />
              <Icons.TrendingUp size={16} className="text-indigo-400" />
            </div>
            <div className="text-5xl font-bold font-mono">
              {metrics.grossIrr.toFixed(2)}%
            </div>
            <p className="text-sm text-indigo-100/70 mt-4 font-medium leading-relaxed">
              Yield factoring base rates, risk spreads, upfront fees (
              {upfrontFee}%), and OID ({oid}%) over the loan's effective life.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-indigo-800/50 dark:border-indigo-900/30 flex justify-between items-center text-sm z-10">
            <span className="text-indigo-200/70">Based on WAL:</span>
            <span className="font-mono text-indigo-100 font-bold bg-indigo-800/50 dark:bg-indigo-900/50 px-3 py-1 rounded-md flex items-center gap-1 shadow-inner">
              <Icons.Clock size={14} /> {metrics.wal.toFixed(2)} Years
            </span>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative"
        style={{ zIndex: 30 }}
      >
        {/* Vertical Pitchbook Capital Stack */}
        <div className="bg-white dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col relative z-20">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Pro-Forma Capitalization
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Enterprise Value vs. Capital Structure (Implied Entry:{' '}
              {metrics.impliedMultiple.toFixed(1)}x)
            </p>
          </div>

          <div className="flex-1 flex justify-center items-end gap-4 sm:gap-12 min-h-[300px] mb-8 relative">
            <div className="absolute w-full h-full flex flex-col justify-between pointer-events-none opacity-10">
              <div className="w-full border-t border-dashed border-slate-900 dark:border-white"></div>
              <div className="w-full border-t border-dashed border-slate-900 dark:border-white"></div>
              <div className="w-full border-t border-dashed border-slate-900 dark:border-white"></div>
              <div className="w-full border-t border-dashed border-slate-900 dark:border-white"></div>
            </div>

            {/* EV Pillar - Flat 2D */}
            <div className="w-24 sm:w-32 h-full bg-slate-100 dark:bg-slate-800/80 rounded-t-xl flex flex-col justify-start items-center border border-b-0 border-slate-200 dark:border-slate-700 relative z-10">
              <div className="p-2 sm:p-4 text-center w-full mt-4">
                <span className="block text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Enterprise Value
                </span>
                <span className="block font-mono font-bold text-sm sm:text-lg text-slate-800 dark:text-slate-200 mt-1">
                  {formatCurrency(metrics.enterpriseValue)}
                </span>
              </div>
            </div>

            {/* Capital Stack Pillar - Matches EV Pillar */}
            <div className="w-24 sm:w-32 h-full flex flex-col justify-end relative z-10 rounded-t-xl overflow-hidden border border-b-0 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              {metrics.eqPct > 0 && (
                <div
                  className="w-full flex flex-col justify-center items-center relative group transition-all"
                  style={{
                    height: `${metrics.eqPct}%`,
                    minHeight: '15%',
                    backgroundColor: '#10b981',
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-950">
                    Equity
                  </span>
                  <div className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none">
                    {formatCurrency(metrics.sponsorEquity)} (
                    {metrics.eqPct.toFixed(1)}%)
                  </div>
                </div>
              )}
              {metrics.existDebtPct > 0 && (
                <div
                  className="w-full flex flex-col justify-center items-center border-t border-slate-800/20 relative group transition-all"
                  style={{
                    height: `${metrics.existDebtPct}%`,
                    minHeight: '15%',
                    backgroundColor: '#64748b',
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-bold text-white">
                    Rollover
                  </span>
                  <div className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none">
                    {formatCurrency(metrics.numExistDebt)} (
                    {metrics.existDebtPct.toFixed(1)}%)
                  </div>
                </div>
              )}
              {metrics.newDebtPct > 0 && (
                <div
                  className="w-full flex flex-col justify-center items-center border-t border-slate-900/20 relative group transition-all"
                  style={{
                    height: `${metrics.newDebtPct}%`,
                    minHeight: '15%',
                    backgroundColor: '#4f46e5',
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-bold text-white">
                    New Debt
                  </span>
                  <div className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-20 pointer-events-none">
                    {formatCurrency(metrics.numNewDebt)} (
                    {metrics.newDebtPct.toFixed(1)}%)
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-auto">
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#4f46e5' }}
                ></div>
                New Debt
              </div>
              <div className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                {formatCurrency(metrics.numNewDebt)}
              </div>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#64748b' }}
                ></div>
                Rollover
              </div>
              <div className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                {formatCurrency(metrics.numExistDebt)}
              </div>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50">
              <div className="text-[10px] text-emerald-700 dark:text-emerald-500 uppercase flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                Equity
              </div>
              <div className="font-mono font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                {formatCurrency(metrics.sponsorEquity)}
              </div>
            </div>
          </div>
        </div>

        {/* Term Sheet & Amortization Chart Stack */}
        <div
          className="space-y-8 flex flex-col relative"
          style={{ zIndex: 20 }}
        >
          <div className="bg-white dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg flex-1 relative z-10">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
              Indicative Term Sheet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm relative">
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500">Facility Size</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {formatCurrency(newDebt)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500">Tenure</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {tenor} Years
                </span>
              </div>

              {/* Explicit Tranche Breakdowns */}
              <div className="col-span-1 md:col-span-2 py-3 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 mt-2 mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">
                  Calculated Tranche Sizing
                </span>
                {metrics.tranches.map((tranche, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1.5"
                  >
                    <span className="font-semibold text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {tranche.name}
                    </span>
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                      {formatCurrency(tranche.amount)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 col-span-1 md:col-span-2">
                <span className="text-slate-500">Amortization</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                  {amortization}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500">Total Leverage Limit</span>
                <span
                  className={`font-mono font-bold ${
                    metrics.isCovenantBreached
                      ? 'text-red-500'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  &lt; {maxLeverageCov.toFixed(2)}x
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500">Upfront Fee / OID</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {upfrontFee.toFixed(2)}% / {oid}%
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 col-span-1 md:col-span-2">
                <span className="text-slate-500">
                  Underwritten Borrower Tier
                </span>
                <span
                  className={`font-semibold text-right ${
                    metrics.borrowerTier.includes('Stressed')
                      ? 'text-red-500'
                      : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {metrics.borrowerTier}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 col-span-1 md:col-span-2">
                <span className="text-slate-500">Security / Enhancements</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                  {hasDSRA ? '1Q DSRA, ' : ''}Share Pledge,{' '}
                  {metrics.collateralTier.split(' (')[0]} Charge
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg relative z-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Repayment Schedule
              </h3>
            </div>
            <div className="h-44 w-full flex items-end gap-2 border-b border-slate-300 dark:border-slate-700 pb-1 relative mt-12">
              {metrics.schedule.map((pmt, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-full flex flex-col justify-end items-center relative"
                >
                  {pmt.principalPct > 0 && (
                    <div className="absolute bottom-full mb-1 flex flex-col items-center w-full">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                        {(pmt.principalPct * 100).toFixed(0)}%
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-500">
                        {formatCurrency(pmt.amount)}
                      </span>
                    </div>
                  )}
                  <div
                    className="w-full max-w-[48px] bg-indigo-500 dark:bg-indigo-600 rounded-t-sm"
                    style={{
                      height: `${Math.max(pmt.principalPct * 100, 1)}%`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="w-full flex gap-2 pt-2 text-[10px] text-slate-500 font-mono">
              {metrics.schedule.map((pmt, idx) => (
                <div key={idx} className="flex-1 text-center truncate">
                  Y{pmt.year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${theme} min-h-screen font-inter`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        .thumb-only { pointer-events: none; }
        .thumb-only::-webkit-slider-thumb { pointer-events: auto; cursor: grab; }
        .thumb-only:active::-webkit-slider-thumb { cursor: grabbing; }
        .thumb-only::-moz-range-thumb { pointer-events: auto; cursor: grab; }
      `,
        }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300 selection:bg-indigo-900 selection:text-indigo-50">
        {/* GLOBAL HEADER */}
        <div className="bg-white dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-[1000] backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div>
              <div className="flex items-center gap-3">
                <Icons.BarChart
                  className="text-indigo-600 dark:text-indigo-500"
                  size={28}
                />
                <h1 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white">
                  Structured Credit{' '}
                  <span className="font-bold text-indigo-600 dark:text-indigo-500">
                    Pricer
                  </span>
                </h1>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <p className="text-indigo-600 dark:text-indigo-500 text-[11px] font-bold uppercase tracking-wider">
                  Algorithmic Private Credit & Term Sheet Structuring
                </p>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <Icons.Sun size={18} />
                ) : (
                  <Icons.Moon size={18} />
                )}
              </button>
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1 rounded-md text-xs font-bold transition-all ${
                    currency === 'USD'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  $ USD
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-4 py-1 rounded-md text-xs font-bold transition-all ${
                    currency === 'INR'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  ₹ INR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="p-4 md:p-8 pt-8">
          {activeView === 'inputs' && renderInputsView()}
          {activeView === 'calculating' && renderCalculatingView()}
          {activeView === 'outputs' && renderOutputsView()}
        </div>

        {/* GLOBAL FOOTER */}
        <div className="bg-white dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 pt-12 pb-32 mt-12 relative z-0">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors flex-wrap justify-center shadow-sm">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Architected & Built by
              </span>
              <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
              <a
                href="https://www.linkedin.com/in/kiran-kashyap-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <Icons.Linkedin
                  size={18}
                  className="text-indigo-600 dark:text-indigo-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Kiran Kashyap Sai Aluru
                </span>
              </a>
            </div>
            <p className="text-center mt-6 text-xs text-slate-400 dark:text-slate-500 max-w-xl leading-relaxed">
              * Note: This dashboard is a conceptual FinTech model built
              independently for educational and illustrative purposes. The
              proprietary logic, metrics, and algorithmic risk-pricing do not
              represent live market conditions or the views of any specific
              financial institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
