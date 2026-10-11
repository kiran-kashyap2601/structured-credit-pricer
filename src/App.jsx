import React, { useState, useMemo, useEffect, useRef } from 'react';

// ============================================================================
// [SECTION 1: IMPORTS & ICONS]
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
      path='<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
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
  TrendingDown: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>'
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
  Layers: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>'
    />
  ),
  X: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
    />
  ),
  ShieldCheck: ({ size, className }) => (
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
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Sliders: ({ size, className }) => (
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
    >
      <line x1="4" x2="20" y1="21" y2="14" />
      <line x1="4" x2="20" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
    </svg>
  ),
  Download: ({ size, className }) => (
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
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Activity: ({ size, className }) => (
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
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Briefcase: ({ size, className }) => (
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
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  BookOpen: ({ size, className }) => (
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
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Building2: ({ size, className }) => (
    <Icon
      size={size}
      className={className}
      path='<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
    />
  ),
  Lightbulb: ({ size, className }) => (
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
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
};

const CaseIllustration = ({ kind = 'generic', className = '' }) => {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  return (
    <svg viewBox="0 0 240 150" aria-hidden="true" className={className}>
      <circle cx="184" cy="31" r="18" fill="currentColor" opacity=".12" />
      <path
        d="M15 128H226"
        stroke="currentColor"
        strokeWidth="2"
        opacity=".18"
      />
      {kind === 'manufacturing' && (
        <g {...common}>
          <path d="M34 126V64l48 22V65l45 21V45h54v81" />
          <path d="M151 45V25h18v20M52 104h17v22M92 104h17v22M139 76h17M139 92h17M139 108h17" />
          <circle cx="199" cy="107" r="17" />
          <path d="m199 83 4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
        </g>
      )}
      {kind === 'software' && (
        <g {...common}>
          <rect x="35" y="37" width="153" height="89" rx="12" />
          <path d="M35 58h153M53 48h.1M65 48h.1M77 48h.1M58 103l25-24 23 18 34-31 25 17" />
          <path d="M193 79c19-2 30 8 29 22-1 13-12 20-28 18" />
        </g>
      )}
      {kind === 'consumer' && (
        <g {...common}>
          <path d="M46 54h61l9 72H37zM57 54c0-17 8-29 20-29s20 12 20 29" />
          <path d="M137 68h61l-7 58h-47zM149 68c0-14 7-24 19-24 11 0 18 10 18 24" />
          <path d="M153 91h27M153 103h20" />
        </g>
      )}
      {kind === 'renewables' && (
        <g {...common}>
          <circle cx="192" cy="34" r="17" />
          <path d="M192 7v10M192 51v10M165 34h10M209 34h10M173 15l7 7M204 46l7 7" />
          <path d="m35 77 115-10 17 51-120 8zM72 74l10 49M112 70l11 50M41 95l118-10M46 112l118-10M103 122v13M147 118v17" />
        </g>
      )}
      {kind === 'healthcare' && (
        <g {...common}>
          <path d="M45 126V42h112v84M72 42V25h59v17M85 25v17M108 25v17M82 66h38M101 47v38M65 98h18M101 98h18M137 98h18M83 126v-21h36v21" />
          <path d="M178 68h28v58h-28zM192 82v30M177 97h30" />
        </g>
      )}
      {kind === 'finance' && (
        <g {...common}>
          <ellipse cx="82" cy="48" rx="42" ry="17" />
          <path d="M40 48v25c0 9 19 17 42 17s42-8 42-17V48M40 73v25c0 9 19 17 42 17 15 0 28-3 35-8" />
          <ellipse cx="163" cy="91" rx="40" ry="16" />
          <path d="M123 91v22c0 9 18 16 40 16s40-7 40-16V91M148 82c5-5 10-9 15-13M163 69v-13M176 76l11-7" />
        </g>
      )}
      {kind === 'realestate' && (
        <g {...common}>
          <path d="M38 126V55h57v71M95 126V30h72v96M167 126V72h39v54M54 72h11M76 72h11M54 91h11M76 91h11M112 48h12M140 48h12M112 70h12M140 70h12M112 92h12M140 92h12" />
        </g>
      )}
      {kind === 'logistics' && (
        <g {...common}>
          <path d="M28 75h112v39H28zM140 84h37l29 24v6h-66zM155 84v22h46" />
          <circle cx="63" cy="119" r="13" />
          <circle cx="174" cy="119" r="13" />
          <path d="M43 62h80M55 49h68M191 47c16 0 27 8 27 20M197 35c18 0 30 7 34 20" />
        </g>
      )}
      {kind === 'infrastructure' && (
        <g {...common}>
          <path d="M27 112h186M46 112V64M194 112V64M46 73c34 28 114 28 148 0M66 87v25M92 96v16M120 99v13M148 96v16M174 87v25" />
          <path d="M22 126h196" />
        </g>
      )}
      {kind === 'special' && (
        <g {...common}>
          <path d="M40 106 75 75l27 20 37-50 25 23 35-35" />
          <path d="m172 33 27 0 0 27" />
          <path d="M55 126h135" />
          <path d="M92 35 70 46v22c0 21 22 32 22 32s22-11 22-32V46z" />
        </g>
      )}
      {kind === 'generic' && (
        <g {...common}>
          <path d="m43 83 55-30 55 30-55 30zM98 113l55-30 39 21-55 30zM43 83l-25 14 55 30 25-14" />
        </g>
      )}
    </svg>
  );
};

const CASE_PRESENTATION_DETAILS = {
  'stable-manufacturer': {
    visual: 'manufacturing',
    products: [
      ['Precision assemblies', 46],
      ['Machined components', 31],
      ['Aftermarket parts', 23],
    ],
    customer:
      'Industrial and mobility OEMs under annual and multi-year supply programmes.',
    operations:
      'Three plants, 74% current utilisation and an approved fourth production line tied to the new award.',
    assetNote:
      'Machining centres, testing equipment, factory land and receivables form the principal asset base.',
  },
  'growth-saas': {
    visual: 'software',
    products: [
      ['Core workflow platform', 58],
      ['Analytics modules', 24],
      ['Implementation & support', 18],
    ],
    customer:
      'Mid-market enterprises with recurring subscriptions; the largest ten customers contribute 34% of ARR.',
    operations:
      'Cloud-delivered platform with implementation teams in India and a growing overseas sales channel.',
    assetNote:
      'Value rests primarily in contracted ARR, software IP and customer relationships rather than hard collateral.',
  },
  'consumer-working-capital': {
    visual: 'consumer',
    products: [
      ['Core consumer range', 52],
      ['Premium range', 28],
      ['Digital-exclusive products', 20],
    ],
    customer:
      'Retail distributors, marketplaces and direct online customers with seasonal purchasing patterns.',
    operations:
      'Third-party manufacturing with owned inventory, regional warehouses and a growing distribution network.',
    assetNote:
      'Inventory and receivables are the main financeable assets; ageing and eligibility determine borrowing capacity.',
  },
  'renewable-project': {
    visual: 'renewables',
    products: [
      ['Contracted solar generation', 72],
      ['Open-access supply', 18],
      ['Environmental attributes', 10],
    ],
    customer:
      'Long-term power purchasers under contracted tariffs, supplemented by limited merchant exposure.',
    operations:
      'A ring-fenced project company will construct and operate the asset under a 25-year operating plan.',
    assetNote:
      'Project land rights, plant, contracts, insurance and collection accounts support the financing.',
  },
  'sponsor-acquisition': {
    visual: 'healthcare',
    products: [
      ['Diagnostic imaging', 42],
      ['Pathology testing', 38],
      ['Speciality testing', 20],
    ],
    customer:
      'Hospitals, doctors, corporates and retail patients across a multi-city network.',
    operations:
      'A scaled operating platform acquiring a regional laboratory chain, with integration and procurement synergies.',
    assetNote:
      'Laboratory equipment, receivables, brand value and shares of the acquisition vehicle underpin recoverability.',
  },
  'nbfc-book-growth': {
    visual: 'finance',
    products: [
      ['Secured MSME loans', 48],
      ['Vehicle finance', 32],
      ['Small business loans', 20],
    ],
    customer:
      'Diversified small-business borrowers originated through branches and digital partnerships.',
    operations:
      'Granular loan book funded through banks, NCDs and securitisation, with monthly collection monitoring.',
    assetNote:
      'Eligible loan receivables and collection accounts form the borrowing base; asset quality is central.',
  },
  'hospital-rollout': {
    visual: 'healthcare',
    products: [
      ['In-patient care', 48],
      ['Surgery & procedures', 34],
      ['Diagnostics & pharmacy', 18],
    ],
    customer:
      'Insured, corporate and self-pay patients across established regional catchments.',
    operations:
      'Existing hospitals remain cash-generative while two new facilities move through licensing and ramp-up.',
    assetNote:
      'Hospital properties, equipment, receivables and operating licences support the credit case.',
  },
  'real-estate-completion': {
    visual: 'realestate',
    products: [
      ['Sold residential units', 72],
      ['Unsold inventory', 21],
      ['Retail component', 7],
    ],
    customer:
      'Homebuyers with construction-linked payment plans and a small retail-investor base.',
    operations:
      'A substantially completed project with remaining civil work, approvals and customer collections.',
    assetNote:
      'Project land, unsold inventory, receivables and escrowed collections are the primary security.',
  },
  'stressed-refinancing': {
    visual: 'special',
    products: [
      ['Engineering programmes', 55],
      ['Maintenance contracts', 27],
      ['Non-core components', 18],
    ],
    customer:
      'A concentrated base of industrial customers with milestone-based collections.',
    operations:
      'The core business remains viable, but delayed receipts and a near-term maturity have compressed liquidity.',
    assetNote:
      'Plant, receivables and a potential non-core asset sale support recovery, subject to creditor priority.',
  },
  'logistics-fleet': {
    visual: 'logistics',
    products: [
      ['Contract logistics', 47],
      ['Line-haul transport', 35],
      ['Digital freight services', 18],
    ],
    customer:
      'Enterprise customers under annual contracts, with the top five representing 41% of revenue.',
    operations:
      'Asset-light network using contracted carriers, control towers and limited owned strategic fleet capacity.',
    assetNote:
      'Receivables and contracted cash flows are more relevant than vehicle collateral.',
  },
  'pre-ipo-hybrid': {
    visual: 'software',
    products: [
      ['Digital engineering', 49],
      ['Managed services', 33],
      ['Platform solutions', 18],
    ],
    customer:
      'Global enterprises under multi-year technology programmes with moderate client concentration.',
    operations:
      'Profitable delivery platform investing in sales capacity ahead of a potential capital-markets event.',
    assetNote:
      'The credit relies on cash flow and enterprise value; conversion economics provide additional lender upside.',
  },
  'covenant-breach': {
    visual: 'special',
    products: [
      ['Export components', 51],
      ['Domestic assemblies', 29],
      ['Service parts', 20],
    ],
    customer:
      'Industrial buyers with programme concentration and foreign-currency exposure.',
    operations:
      'A temporary earnings shock and customer delay have created a covenant breach before the replacement order ramps.',
    assetNote:
      'Plant, inventory and receivables provide value, but existing liens complicate a rescue financing.',
  },
  'completion-rescue': {
    visual: 'infrastructure',
    products: [
      ['Contracted capacity', 84],
      ['Ancillary revenue', 10],
      ['Uncontracted capacity', 6],
    ],
    customer:
      'Anchor users under long-term capacity agreements once construction is complete.',
    operations:
      'An existing project company requires controlled rescue capital to complete a delayed infrastructure asset.',
    assetNote:
      'Project rights, contracts, accounts and the incomplete asset are available, subject to intercreditor agreement.',
  },
};

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ============================================================================
// [SECTION 2: DICTIONARIES & DATA]
// ============================================================================
const SECTOR_DATA = {
  'Consumer & Retail': [
    'Consumer Products & D2C',
    'Retail & E-commerce',
    'Food & Beverage',
    'Travel & Hospitality',
  ],
  'Industrials & Manufacturing': [
    'Industrial Manufacturing',
    'Automotive & Components',
    'Chemicals & Materials',
    'Capital Goods',
  ],
  'Technology & Digital Services': [
    'Enterprise Software',
    'IT & Digital Services',
    'FinTech Software',
    'Telecom & Digital Infrastructure',
  ],
  'Financial Services': [
    'NBFC / Lending',
    'Insurance & Distribution',
    'Wealth / Asset Management',
    'Payments & Financial Infrastructure',
  ],
  'Healthcare & Life Sciences': [
    'Hospitals & Clinics',
    'Pharmaceuticals',
    'Diagnostics',
    'HealthTech',
  ],
  'Infrastructure, Energy & Utilities': [
    'Renewable Energy',
    'Transport & Logistics Infrastructure',
    'Digital Infrastructure',
    'Utilities & Environmental Services',
  ],
  'Real Estate': [
    'Commercial Real Estate',
    'Residential Development',
    'Warehousing & Industrial Parks',
    'Hospitality Assets',
  ],
  'Business Services & Logistics': [
    'Professional Services',
    'Logistics & Supply Chain',
    'Staffing & Outsourcing',
    'Education & Training',
  ],
  'Agriculture & Food Value Chain': [
    'Agritech',
    'Farming Operations',
    'Agri-Processing',
    'Distribution & Cold Chain',
  ],
  Other: [
    'Diversified Business',
    'Media & Entertainment',
    'Special Situations',
    'Other / Not Listed',
  ],
};

const BUSINESS_MODELS = [
  'Contracted B2B / Enterprise',
  'Subscription / SaaS',
  'Consumer / Retail',
  'Manufacturing / Product Sales',
  'Asset Ownership / Leasing',
  'Project / EPC / Concession',
  'Lending / Financial Spread',
  'Transaction / Marketplace',
  'Real Estate Development',
  'Healthcare Operator',
  'Mixed / Other',
];
const TRANSACTION_SCOPES = [
  'Business-wide funding',
  'Specific project or asset',
  'Acquisition vehicle',
  'Not sure yet',
];
const CASH_FLOW_SEPARATION = [
  'Clearly separable',
  'Partly separable',
  'Not separable',
  'Not sure yet',
];
const SPV_STATUS_OPTIONS = [
  'No SPV / not decided',
  'Existing SPV',
  'SPV can be established',
];
const RECOURSE_OPTIONS = [
  'Open to operating-company or sponsor support',
  'Limited support preferred',
  'No-recourse preferred',
  'Not sure yet',
];
const PROJECT_STAGES = [
  'Development / planning',
  'Construction / implementation',
  'Operational / cash-generating',
];
const FINANCING_OBJECTIVES = [
  'Capacity Expansion / Equipment',
  'New Facility / Location',
  'Product Development / R&D',
  'Sales / Market Expansion',
  'Working Capital / Inventory',
  'Acquisition Financing',
  'Refinancing Existing Debt',
  'Project Development / Construction',
  'Bridge to a Defined Milestone',
  'Shareholder Liquidity',
  'General Corporate Purposes',
  'Other',
];
const FINANCING_PRIORITIES = [
  'Lowest Cost of Capital',
  'Fastest Execution',
  'Maximum Structural Flexibility',
  'Highest Funding Certainty',
  'Balanced Across All Objectives',
];
const SHAREHOLDER_PREFERENCES = [
  'Avoid Equity Dilution Wherever Possible',
  'Limited Equity Participation is Acceptable',
  'Equity Participation is Acceptable if it Improves Financing',
];
const PRIVATE_CREDIT_OBJECTIVES = [
  'Faster Execution',
  'Greater Structural Flexibility',
  'Higher Leverage',
  'Strategic Value Beyond Capital',
  'Long-Term Financing Partner',
  'Still Evaluating Financing Alternatives',
  'Other',
];
const LENDER_RESTRICTIONS = ['Yes', 'No', 'Unsure'];
const SECURITY_AVAILABILITY = [
  'Specific assets may be available',
  'Substantially all business assets',
  'Unsecured / no meaningful collateral',
  'Not sure yet',
];
const COLLATERAL_TYPES = [
  'Receivables',
  'Inventory',
  'Plant and equipment',
  'Real estate',
  'Financial assets / loan book',
  'Cash or deposits',
  'Project contracts and rights',
  'Shares of an OpCo / SPV',
  'Intellectual property',
  'Mixed collateral',
  'Other',
];
const LIEN_STATUS_OPTIONS = [
  'Unencumbered',
  'Partly encumbered',
  'Fully encumbered',
  'Not sure yet',
];
const FINANCIAL_PERIOD_OPTIONS = [
  'Latest complete financial year',
  'Two financial years + latest interim',
  'Three financial years + latest interim',
];
const BASE_SAMPLE_CASES = [
  {
    id: 'stable-manufacturer',
    title: 'Stable manufacturer',
    subtitle: 'Expansion facility for an established cash-generating company',
    story:
      'A family-owned manufacturer has won multi-year customer orders and must add a production line without giving up control. The board wants to understand whether cheaper conventional debt is enough or whether private-credit flexibility is worth paying for.',
    mandate:
      'Fund the expansion while preserving liquidity and avoiding unnecessary complexity.',
    learningGoal: 'See how leverage, asset support and amortisation interact.',
    decisionSchema: {
      level: 'Guided',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    },
    tone: 'emerald',
    data: {
      sector: 'Industrials & Manufacturing',
      segment: 'Industrial Manufacturing',
      businessModel: 'Manufacturing / Product Sales',
      foundedYear: 2009,
      customerCount: 84,
      revenue: 240,
      otherIncome: 3,
      financeCosts: 8,
      depreciation: 12,
      profitBeforeTax: 31,
      taxExpense: 8,
      profitAfterTax: 23,
      exceptionalItems: 0,
      ocf: 39,
      totalCashCapex: 10,
      existingTermDebt: 38,
      utilizedWorkingCapital: 14,
      cashAndEquivalents: 18,
      otherBankBalances: 3,
      restrictedCash: 2,
      existingAnnualCashInterest: 8,
      yearOnePrincipalDue: 6,
      targetDebt: 60,
      targetTenor: 5,
      allocations: [
        {
          id: 'sample-mfg-1',
          purpose: 'Capacity Expansion / Equipment',
          amount: 60,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Plant and equipment',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 115,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'Steady & Predictable (< 10% variance)',
      enterpriseValue: 320,
      financingPriority: 'Lowest Cost of Capital',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
    },
  },
  {
    id: 'growth-saas',
    title: 'Growth-stage SaaS',
    subtitle: 'Runway extension for a recurring-revenue business',
    story:
      'A founder-led SaaS company has strong recurring revenue but modest current cash generation. It needs runway to reach a defined commercial milestone while existing shareholders want to limit dilution.',
    mandate:
      'Protect runway and ownership while choosing a credible repayment path.',
    learningGoal:
      'Explore the trade-off between cash interest, PIK and dilution.',
    decisionSchema: {
      level: 'Guided',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    },
    tone: 'indigo',
    data: {
      sector: 'Technology & Digital Services',
      segment: 'Enterprise Software',
      businessModel: 'Subscription / SaaS',
      foundedYear: 2019,
      customerCount: 410,
      revenue: 72,
      otherIncome: 1,
      financeCosts: 2,
      depreciation: 4,
      profitBeforeTax: 5,
      taxExpense: 1,
      profitAfterTax: 4,
      exceptionalItems: 0,
      ocf: 9,
      totalCashCapex: 2,
      arr: 78,
      grossMargin: 82,
      existingTermDebt: 5,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 16,
      otherBankBalances: 0,
      restrictedCash: 1,
      existingAnnualCashInterest: 1,
      yearOnePrincipalDue: 1,
      targetDebt: 25,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-saas-1',
          purpose: 'Bridge to a Defined Milestone',
          amount: 25,
        },
      ],
      securityAvailability: 'Unsecured / no meaningful collateral',
      collateralType: 'Intellectual property',
      collateralLienStatus: 'Not sure yet',
      pledgedCollateral: 0,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'High Growth (Re-investing)',
      enterpriseValue: 220,
      financingPriority: 'Maximum Structural Flexibility',
      shareholderPreference: 'Limited Equity Participation is Acceptable',
    },
  },
  {
    id: 'consumer-working-capital',
    title: 'Consumer growth business',
    subtitle: 'Inventory and market-expansion financing',
    story:
      'A fast-growing consumer brand needs inventory before the festive season and also wants to enter two new regions. The financing uses have different cash-conversion profiles and should not automatically be forced into one term loan.',
    mandate:
      'Allocate the facility between recurring liquidity and longer-dated expansion.',
    learningGoal:
      'Compare a borrowing-base line with term debt for mixed uses.',
    decisionSchema: {
      level: 'Structuring',
      facilitySize: false,
      allocation: true,
      tenor: true,
      perimeter: false,
      tenorOptions: [2, 3, 4, 5],
      allowedPurposes: [
        'Working Capital / Inventory',
        'Sales / Market Expansion',
        'New Facility / Location',
      ],
    },
    tone: 'amber',
    data: {
      sector: 'Consumer & Retail',
      segment: 'Consumer Products & D2C',
      businessModel: 'Consumer / Retail',
      foundedYear: 2016,
      customerCount: 68000,
      revenue: 155,
      otherIncome: 2,
      financeCosts: 5,
      depreciation: 5,
      profitBeforeTax: 14,
      taxExpense: 4,
      profitAfterTax: 10,
      exceptionalItems: 1,
      ocf: 15,
      totalCashCapex: 4,
      existingTermDebt: 12,
      utilizedWorkingCapital: 18,
      cashAndEquivalents: 9,
      otherBankBalances: 1,
      restrictedCash: 1,
      existingAnnualCashInterest: 5,
      yearOnePrincipalDue: 4,
      targetDebt: 35,
      targetTenor: 3,
      allocations: [
        {
          id: 'sample-d2c-1',
          purpose: 'Working Capital / Inventory',
          amount: 22,
        },
        { id: 'sample-d2c-2', purpose: 'Sales / Market Expansion', amount: 13 },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Inventory',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 52,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'High Growth (Re-investing)',
      enterpriseValue: 145,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
    },
  },
  {
    id: 'renewable-project',
    title: 'Renewable-energy project',
    subtitle: 'Ring-fenced project financing with sponsor support',
    story:
      'An operating energy company has secured a long-term offtake arrangement for a new renewable asset. The project has identifiable contracts and cash flows, but construction and completion risks remain.',
    mandate:
      'Choose the financing perimeter, tenor and allocation without weakening the operating company unnecessarily.',
    learningGoal:
      'Understand when an SPV and project-level coverage become relevant.',
    decisionSchema: {
      level: 'Structuring',
      facilitySize: false,
      allocation: false,
      tenor: true,
      perimeter: true,
      tenorOptions: [6, 8, 10, 12],
    },
    tone: 'purple',
    data: {
      sector: 'Infrastructure, Energy & Utilities',
      segment: 'Renewable Energy',
      businessModel: 'Project / EPC / Concession',
      foundedYear: 2012,
      customerCount: 0,
      revenue: 190,
      otherIncome: 2,
      financeCosts: 13,
      depreciation: 14,
      profitBeforeTax: 25,
      taxExpense: 6,
      profitAfterTax: 19,
      exceptionalItems: 0,
      ocf: 43,
      totalCashCapex: 16,
      existingTermDebt: 75,
      utilizedWorkingCapital: 5,
      cashAndEquivalents: 20,
      otherBankBalances: 6,
      restrictedCash: 8,
      existingAnnualCashInterest: 13,
      yearOnePrincipalDue: 10,
      targetDebt: 140,
      targetTenor: 8,
      allocations: [
        {
          id: 'sample-project-1',
          purpose: 'Project Development / Construction',
          amount: 140,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Project contracts and rights',
      collateralLienStatus: 'Unencumbered',
      pledgedCollateral: 250,
      transactionScope: 'Specific project or asset',
      cashFlowSeparation: 'Clearly separable',
      spvStatus: 'SPV can be established',
      recoursePreference: 'Limited support preferred',
      projectStage: 'Construction / implementation',
      projectCost: 240,
      projectSponsorEquity: 100,
      projectCfads: 31,
      contractedRevenuePct: 88,
      expectedCodMonths: 14,
      projectLifeYears: 22,
      historicalTrend: 'Cyclical / Project-Based (Lumpy)',
      enterpriseValue: 410,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
    },
  },
  {
    id: 'sponsor-acquisition',
    title: 'Sponsor-backed acquisition',
    subtitle:
      'Acquisition financing with integration and working-capital needs',
    story:
      'A mid-market sponsor is acquiring a profitable healthcare-services platform. The purchase price is agreed, but the debt package must also fund integration and seasonal working capital without creating multiple closing processes.',
    mandate:
      'Design a certain-to-close package and decide how much belongs in term debt versus revolving liquidity.',
    learningGoal:
      'Balance acquisition certainty, leverage and a mixed-use facility.',
    tone: 'indigo',
    decisionSchema: {
      level: 'Structuring',
      facilitySize: false,
      allocation: true,
      tenor: true,
      perimeter: true,
      tenorOptions: [4, 5, 6],
      allowedPurposes: [
        'Acquisition Financing',
        'Working Capital / Inventory',
        'Sales / Market Expansion',
      ],
    },
    data: {
      sector: 'Healthcare & Life Sciences',
      segment: 'Hospitals & Clinics',
      businessModel: 'Healthcare Operator',
      foundedYear: 2011,
      customerCount: 32000,
      revenue: 310,
      otherIncome: 4,
      financeCosts: 9,
      depreciation: 15,
      profitBeforeTax: 38,
      taxExpense: 10,
      profitAfterTax: 28,
      exceptionalItems: 2,
      ocf: 49,
      totalCashCapex: 12,
      existingTermDebt: 35,
      utilizedWorkingCapital: 8,
      cashAndEquivalents: 24,
      otherBankBalances: 2,
      restrictedCash: 2,
      existingAnnualCashInterest: 9,
      yearOnePrincipalDue: 7,
      targetDebt: 125,
      targetTenor: 5,
      allocations: [
        { id: 'sample-acq-1', purpose: 'Acquisition Financing', amount: 105 },
        {
          id: 'sample-acq-2',
          purpose: 'Working Capital / Inventory',
          amount: 20,
        },
      ],
      securityAvailability: 'Substantially all business assets',
      collateralType: 'Mixed collateral',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 230,
      transactionScope: 'Acquisition vehicle',
      cashFlowSeparation: 'Partly separable',
      spvStatus: 'SPV can be established',
      recoursePreference: 'Open to operating-company or sponsor support',
      projectCost: 190,
      projectSponsorEquity: 65,
      projectCfads: 48,
      contractedRevenuePct: 45,
      historicalTrend: 'Steady & Predictable (< 10% variance)',
      enterpriseValue: 410,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Faster Execution',
    },
  },
  {
    id: 'nbfc-book-growth',
    title: 'Specialty lender expansion',
    subtitle: 'Funding growth in a secured loan book',
    story:
      'A specialty lender wants to accelerate disbursements into a granular secured portfolio. Management must decide how much leverage the balance sheet can prudently support while protecting asset quality and liquidity.',
    mandate:
      'Size a facility that supports loan-book growth without relying on corporate EBITDA as the primary credit measure.',
    learningGoal:
      'Use financial-services metrics rather than a generic industrial-company template.',
    tone: 'emerald',
    decisionSchema: {
      level: 'Investment Committee',
      facilitySize: true,
      allocation: false,
      tenor: true,
      perimeter: false,
      amountRange: [70, 140],
      tenorOptions: [2, 3, 4, 5],
    },
    data: {
      sector: 'Financial Services',
      segment: 'NBFC / Lending',
      businessModel: 'Lending / Financial Spread',
      foundedYear: 2014,
      customerCount: 18500,
      revenue: 118,
      otherIncome: 5,
      financeCosts: 42,
      depreciation: 3,
      profitBeforeTax: 24,
      taxExpense: 6,
      profitAfterTax: 18,
      exceptionalItems: 0,
      ocf: 32,
      totalCashCapex: 2,
      aum: 720,
      nim: 8.2,
      gnpa: 2.8,
      existingTermDebt: 260,
      utilizedWorkingCapital: 25,
      cashAndEquivalents: 44,
      otherBankBalances: 6,
      restrictedCash: 8,
      existingAnnualCashInterest: 42,
      yearOnePrincipalDue: 38,
      targetDebt: 105,
      targetTenor: 3,
      allocations: [
        {
          id: 'sample-nbfc-1',
          purpose: 'Sales / Market Expansion',
          amount: 105,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Financial assets / loan book',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 210,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'High Growth (Re-investing)',
      enterpriseValue: 540,
      totalEquity: 125,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Higher Leverage',
    },
  },
  {
    id: 'hospital-rollout',
    title: 'Hospital network rollout',
    subtitle: 'Staged capex for new clinics and diagnostic centres',
    story:
      'A regional healthcare operator plans to open several clinics over eighteen months. Sites will become operational at different times, so drawing the full facility on day one would create avoidable carry cost.',
    mandate:
      'Allocate capital and choose a tenor that matches staged deployment and ramp-up.',
    learningGoal:
      'See why deployment timing can be as important as headline pricing.',
    tone: 'purple',
    decisionSchema: {
      level: 'Structuring',
      facilitySize: false,
      allocation: true,
      tenor: true,
      perimeter: false,
      tenorOptions: [4, 5, 6, 7],
      allowedPurposes: [
        'New Facility / Location',
        'Capacity Expansion / Equipment',
        'Working Capital / Inventory',
      ],
    },
    data: {
      sector: 'Healthcare & Life Sciences',
      segment: 'Hospitals & Clinics',
      businessModel: 'Healthcare Operator',
      foundedYear: 2007,
      customerCount: 96000,
      revenue: 225,
      otherIncome: 2,
      financeCosts: 7,
      depreciation: 18,
      profitBeforeTax: 27,
      taxExpense: 7,
      profitAfterTax: 20,
      exceptionalItems: 0,
      ocf: 41,
      totalCashCapex: 15,
      existingTermDebt: 42,
      utilizedWorkingCapital: 6,
      cashAndEquivalents: 21,
      otherBankBalances: 2,
      restrictedCash: 1,
      existingAnnualCashInterest: 7,
      yearOnePrincipalDue: 8,
      targetDebt: 80,
      targetTenor: 6,
      allocations: [
        {
          id: 'sample-health-1',
          purpose: 'New Facility / Location',
          amount: 55,
        },
        {
          id: 'sample-health-2',
          purpose: 'Capacity Expansion / Equipment',
          amount: 25,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Plant and equipment',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 135,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'Steady & Predictable (< 10% variance)',
      enterpriseValue: 360,
      financingPriority: 'Maximum Structural Flexibility',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  {
    id: 'real-estate-completion',
    title: 'Real-estate completion capital',
    subtitle: 'Last-mile financing for a partly completed project',
    story:
      'A developer needs last-mile capital to complete a residential project. Customer collections are visible but timing is uncertain, existing security is partly encumbered and the sponsor must decide how much additional equity to commit.',
    mandate:
      'Determine whether a ring-fenced facility is financeable and whether the proposed debt quantum is prudent.',
    learningGoal:
      'Test project coverage, completion risk and sponsor alignment.',
    tone: 'amber',
    decisionSchema: {
      level: 'Investment Committee',
      facilitySize: true,
      allocation: false,
      tenor: true,
      perimeter: true,
      amountRange: [55, 100],
      tenorOptions: [2, 3, 4],
    },
    data: {
      sector: 'Real Estate',
      segment: 'Residential Development',
      businessModel: 'Real Estate Development',
      foundedYear: 2005,
      customerCount: 740,
      revenue: 175,
      otherIncome: 3,
      financeCosts: 16,
      depreciation: 4,
      profitBeforeTax: 19,
      taxExpense: 5,
      profitAfterTax: 14,
      exceptionalItems: 0,
      ocf: 26,
      totalCashCapex: 4,
      existingTermDebt: 68,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 12,
      otherBankBalances: 3,
      restrictedCash: 6,
      existingAnnualCashInterest: 16,
      yearOnePrincipalDue: 14,
      targetDebt: 78,
      targetTenor: 3,
      allocations: [
        {
          id: 'sample-re-1',
          purpose: 'Project Development / Construction',
          amount: 78,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Real estate',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 190,
      transactionScope: 'Specific project or asset',
      cashFlowSeparation: 'Clearly separable',
      spvStatus: 'Existing SPV',
      recoursePreference: 'Limited support preferred',
      projectStage: 'Construction / implementation',
      projectCost: 250,
      projectSponsorEquity: 92,
      projectCfads: 34,
      contractedRevenuePct: 62,
      expectedCodMonths: 11,
      projectLifeYears: 5,
      historicalTrend: 'Cyclical / Project-Based (Lumpy)',
      enterpriseValue: 300,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  {
    id: 'stressed-refinancing',
    title: 'Stressed refinancing',
    subtitle: 'Maturity wall with weak near-term coverage',
    story:
      'An industrial-services business faces a near-term maturity after a customer delay. The requested refinancing would solve timing, but current cash generation may not support the proposed amount without deleveraging, sponsor support or a smaller facility.',
    mandate:
      'Decide whether to proceed, resize or reject rather than solving every weakness through a higher coupon.',
    learningGoal: 'Recognise when price cannot repair a debt-capacity problem.',
    tone: 'amber',
    decisionSchema: {
      level: 'Investment Committee',
      facilitySize: true,
      allocation: false,
      tenor: true,
      perimeter: false,
      amountRange: [45, 95],
      tenorOptions: [3, 4, 5, 6],
    },
    data: {
      sector: 'Business Services & Logistics',
      segment: 'Professional Services',
      businessModel: 'Contracted B2B / Enterprise',
      foundedYear: 2003,
      customerCount: 27,
      revenue: 142,
      otherIncome: 1,
      financeCosts: 13,
      depreciation: 7,
      profitBeforeTax: 6,
      taxExpense: 2,
      profitAfterTax: 4,
      exceptionalItems: 1,
      ocf: 15,
      totalCashCapex: 5,
      existingTermDebt: 54,
      utilizedWorkingCapital: 16,
      cashAndEquivalents: 5,
      otherBankBalances: 1,
      restrictedCash: 1,
      existingAnnualCashInterest: 13,
      yearOnePrincipalDue: 30,
      targetDebt: 82,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-stress-1',
          purpose: 'Refinancing Existing Debt',
          amount: 82,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Receivables',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 72,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'Turnaround / Volatile',
      enterpriseValue: 118,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  {
    id: 'logistics-fleet',
    title: 'Asset-light logistics platform',
    subtitle: 'Technology and network expansion without fleet ownership',
    story:
      'A logistics platform coordinates third-party fleets and earns from contracted enterprise customers. It wants growth capital but owns limited hard assets, making repayment visibility more important than collateral value.',
    mandate:
      'Choose a structure that respects the asset-light model and avoids excessive cash burden.',
    learningGoal:
      'Understand cash-flow lending when traditional collateral is limited.',
    tone: 'indigo',
    decisionSchema: {
      level: 'Guided',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    },
    data: {
      sector: 'Business Services & Logistics',
      segment: 'Logistics & Supply Chain',
      businessModel: 'Transaction / Marketplace',
      foundedYear: 2017,
      customerCount: 1300,
      revenue: 128,
      otherIncome: 1,
      financeCosts: 3,
      depreciation: 3,
      profitBeforeTax: 12,
      taxExpense: 3,
      profitAfterTax: 9,
      exceptionalItems: 0,
      ocf: 18,
      totalCashCapex: 2,
      existingTermDebt: 8,
      utilizedWorkingCapital: 6,
      cashAndEquivalents: 14,
      otherBankBalances: 1,
      restrictedCash: 1,
      existingAnnualCashInterest: 3,
      yearOnePrincipalDue: 2,
      targetDebt: 32,
      targetTenor: 4,
      allocations: [
        { id: 'sample-log-1', purpose: 'Sales / Market Expansion', amount: 32 },
      ],
      securityAvailability: 'Unsecured / no meaningful collateral',
      collateralType: 'Other',
      collateralLienStatus: 'Not sure yet',
      pledgedCollateral: 0,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'High Growth (Re-investing)',
      enterpriseValue: 175,
      financingPriority: 'Maximum Structural Flexibility',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  {
    id: 'pre-ipo-hybrid',
    title: 'Pre-IPO hybrid capital',
    subtitle: 'Milestone financing with conversion optionality',
    story:
      'A profitable technology-services company expects a potential pre-IPO round within two years. Existing investors resist immediate dilution, while the incoming capital provider wants upside if the milestone is achieved.',
    mandate:
      'Balance cash cost, redemption protection and future conversion economics.',
    learningGoal: 'Explore an event-driven debt and equity-linked structure.',
    tone: 'purple',
    decisionSchema: {
      level: 'Structuring',
      facilitySize: false,
      allocation: true,
      tenor: true,
      perimeter: false,
      tenorOptions: [3, 4, 5],
      allowedPurposes: [
        'Bridge to a Defined Milestone',
        'Working Capital / Inventory',
        'Sales / Market Expansion',
      ],
    },
    data: {
      sector: 'Technology & Digital Services',
      segment: 'IT & Digital Services',
      businessModel: 'Contracted B2B / Enterprise',
      foundedYear: 2010,
      customerCount: 64,
      revenue: 265,
      otherIncome: 4,
      financeCosts: 5,
      depreciation: 9,
      profitBeforeTax: 36,
      taxExpense: 9,
      profitAfterTax: 27,
      exceptionalItems: 0,
      ocf: 43,
      totalCashCapex: 6,
      existingTermDebt: 18,
      utilizedWorkingCapital: 7,
      cashAndEquivalents: 28,
      otherBankBalances: 2,
      restrictedCash: 1,
      existingAnnualCashInterest: 5,
      yearOnePrincipalDue: 4,
      targetDebt: 75,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-ipo-1',
          purpose: 'Bridge to a Defined Milestone',
          amount: 60,
        },
        {
          id: 'sample-ipo-2',
          purpose: 'Working Capital / Inventory',
          amount: 15,
        },
      ],
      securityAvailability: 'Substantially all business assets',
      collateralType: 'Mixed collateral',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 96,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'High Growth (Re-investing)',
      enterpriseValue: 520,
      financingPriority: 'Maximum Structural Flexibility',
      shareholderPreference: 'Limited Equity Participation is Acceptable',
      privateCreditObjective: 'Strategic Value Beyond Capital',
    },
  },
];

// The case library is authored independently from the real-company input route.
// Each case keeps the factual mandate fixed and gives the learner agency only at
// the structure, negotiation and resilience stages.
const CASE_ENRICHMENTS = {
  'stable-manufacturer': {
    title: 'Project Forge',
    subtitle:
      'Capacity expansion and refinancing for an established precision manufacturer',
    track: 'core',
    category: 'Cash-flow lending',
    difficulty: 'Intermediate',
    duration: '25 min',
    teaser:
      'A three-year customer award supports a major production expansion, but the board wants to protect liquidity and preserve refinancing flexibility.',
    story:
      'Meridian Components is a second-generation precision manufacturer supplying industrial and mobility customers across India. A newly awarded multi-year programme can increase installed capacity by almost 40%, provided the new line is commissioned before the next procurement cycle. The company has remained profitable through the cycle, but customer concentration and the execution timetable make the funding package more consequential than its headline coupon.',
    marketContext:
      'The company competes on qualification history, process reliability and delivery performance. Switching costs are meaningful after a component enters an approved programme, although the five largest customers still represent 58% of revenue.',
    transactionRationale:
      'The ₹350 Cr requirement comprises ₹260 Cr of equipment and installation expenditure and ₹90 Cr to refinance shorter-dated borrowings. The board wants committed capital at closing while avoiding an aggressive Year 1 repayment burden.',
    financialNarrative:
      'Revenue and EBITDA have grown steadily, operating cash conversion remains healthy and leverage is moderate. The expansion temporarily increases capex and execution risk before the contracted programme contributes a full year of earnings.',
    priorities: [
      'Fund the complete expansion programme',
      'Protect minimum operating liquidity',
      'Avoid equity dilution',
      'Retain the ability to refinance after ramp-up',
    ],
    tensions: [
      '58% revenue concentration among the five largest customers',
      'Commissioning must occur within nine months',
      'Part of the existing security package is already encumbered',
      'The board resists a large mandatory cash sweep',
    ],
    timeline: [
      'Equipment order · Month 0',
      'Installation · Months 3–7',
      'Customer validation · Month 8',
      'Commercial production · Month 10',
    ],
    financials: [
      { period: 'FY24', revenue: 860, ebitda: 158, ocf: 142, debt: 255 },
      { period: 'FY25', revenue: 1030, ebitda: 196, ocf: 181, debt: 230 },
      { period: 'FY26', revenue: 1200, ebitda: 235, ocf: 250, debt: 210 },
      {
        period: 'FY27E',
        revenue: 1460,
        ebitda: 292,
        ocf: 276,
        debt: 560,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1710,
        ebitda: 359,
        ocf: 338,
        debt: 472,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'delay',
        title: 'Commissioning delay',
        summary: 'Validation slips by six months and cash conversion weakens.',
        cashFlowDecline: 18,
        liquidityHit: 28,
        event:
          'The new programme contributes later while committed costs continue.',
      },
      {
        id: 'customer',
        title: 'Customer volume cut',
        summary: 'A major customer reduces scheduled volumes.',
        cashFlowDecline: 25,
        liquidityHit: 18,
        event: 'EBITDA and working-capital release fall below the base case.',
      },
      {
        id: 'rates',
        title: 'Higher base rate',
        summary: 'Reference rates remain 200 bps above plan.',
        cashFlowDecline: 7,
        liquidityHit: 12,
        event: 'Cash interest stays elevated through the ramp-up period.',
      },
    ],
    data: {
      foundedYear: 2009,
      customerCount: 84,
      revenue: 1200,
      otherIncome: 10,
      financeCosts: 45,
      depreciation: 55,
      profitBeforeTax: 145,
      taxExpense: 38,
      profitAfterTax: 107,
      exceptionalItems: 0,
      ocf: 250,
      totalCashCapex: 40,
      existingTermDebt: 150,
      utilizedWorkingCapital: 60,
      cashAndEquivalents: 82,
      otherBankBalances: 12,
      restrictedCash: 8,
      existingAnnualCashInterest: 45,
      yearOnePrincipalDue: 35,
      targetDebt: 350,
      targetTenor: 5,
      allocations: [
        {
          id: 'sample-mfg-1',
          purpose: 'Capacity Expansion / Equipment',
          amount: 260,
        },
        {
          id: 'sample-mfg-2',
          purpose: 'Refinancing Existing Debt',
          amount: 90,
        },
      ],
      pledgedCollateral: 750,
      enterpriseValue: 1800,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'growth-saas': {
    title: 'Project Nimbus',
    subtitle: 'Milestone financing for a scaled recurring-revenue platform',
    track: 'core',
    category: 'Growth credit',
    difficulty: 'Advanced',
    duration: '25 min',
    teaser:
      'A fast-growing software platform wants to reach cash-flow breakeven without launching a dilutive equity round at today’s valuation.',
    story:
      'Nimbus Systems provides workflow software to regulated enterprises. Annual recurring revenue has compounded rapidly, retention is strong and implementation revenue is declining as a share of the mix. Management expects to reach cash-flow breakeven after completing its international sales build-out, but the timing of that milestone remains the central underwriting question.',
    marketContext:
      'The market is expanding, but well-capitalised global competitors can sustain higher customer-acquisition spending. Contract duration and net retention support visibility while the absence of hard assets limits conventional collateral support.',
    transactionRationale:
      'The company seeks ₹200 Cr for runway, product localisation and a modest acquisition. Existing investors want to defer the next equity raise until the platform reaches its operating milestone.',
    financialNarrative:
      'ARR growth and gross margins are attractive, but free cash flow remains sensitive to sales hiring and implementation timing. The credit case rests on recurring revenue, liquidity runway and a credible refinancing or equity event.',
    priorities: [
      'Extend runway beyond 24 months',
      'Limit immediate dilution',
      'Keep Year 1 cash servicing manageable',
      'Preserve flexibility for a future equity round',
    ],
    tensions: [
      'No meaningful hard-asset collateral',
      'Breakeven depends on sales productivity',
      'Potential acquisition integration risk',
      'A bullet repayment creates refinancing dependence',
    ],
    timeline: [
      'Facility close · Month 0',
      'International launch · Month 4',
      'Acquisition integration · Month 9',
      'Breakeven target · Month 20',
    ],
    financials: [
      { period: 'FY24', revenue: 220, ebitda: 28, ocf: 18, debt: 35 },
      { period: 'FY25', revenue: 292, ebitda: 46, ocf: 34, debt: 30 },
      { period: 'FY26', revenue: 360, ebitda: 72, ocf: 78, debt: 30 },
      {
        period: 'FY27E',
        revenue: 475,
        ebitda: 119,
        ocf: 106,
        debt: 230,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 610,
        ebitda: 183,
        ocf: 171,
        debt: 230,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'growth',
        title: 'Slower bookings',
        summary: 'New ARR grows 30% below plan.',
        cashFlowDecline: 28,
        liquidityHit: 32,
        event: 'Breakeven moves back by two quarters.',
      },
      {
        id: 'churn',
        title: 'Retention pressure',
        summary: 'Net revenue retention falls after a product transition.',
        cashFlowDecline: 22,
        liquidityHit: 24,
        event: 'Recurring-revenue visibility weakens.',
      },
      {
        id: 'round',
        title: 'Equity round delayed',
        summary: 'The anticipated funding event moves out by twelve months.',
        cashFlowDecline: 12,
        liquidityHit: 45,
        event: 'The debt must carry the company for longer.',
      },
    ],
    data: {
      foundedYear: 2017,
      customerCount: 620,
      revenue: 360,
      otherIncome: 4,
      financeCosts: 12,
      depreciation: 15,
      profitBeforeTax: 35,
      taxExpense: 9,
      profitAfterTax: 26,
      exceptionalItems: 0,
      ocf: 78,
      totalCashCapex: 10,
      arr: 420,
      grossMargin: 82,
      existingTermDebt: 30,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 105,
      otherBankBalances: 5,
      restrictedCash: 4,
      existingAnnualCashInterest: 6,
      yearOnePrincipalDue: 5,
      targetDebt: 200,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-saas-1',
          purpose: 'Bridge to a Defined Milestone',
          amount: 150,
        },
        { id: 'sample-saas-2', purpose: 'Acquisition Financing', amount: 50 },
      ],
      enterpriseValue: 1800,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'consumer-working-capital': {
    title: 'Project Pulse',
    subtitle:
      'Seasonal liquidity and distribution expansion for a national consumer brand',
    track: 'core',
    category: 'Working capital',
    difficulty: 'Intermediate',
    duration: '25 min',
    teaser:
      'Inventory must be built before peak season while a regional expansion needs longer-dated capital with a different repayment profile.',
    story:
      'Pulse Consumer has built a national personal-care portfolio through distributors and digital channels. Management plans to enter two new regions just as peak-season inventory requirements rise. The uses have different cash-conversion profiles, making a single undifferentiated term loan expensive and operationally awkward.',
    marketContext:
      'Brand momentum and repeat purchase rates are strong, although retailer bargaining power and promotional intensity can compress margins. Inventory ageing and channel receivables are the most relevant collateral pools.',
    transactionRationale:
      'The ₹275 Cr package includes ₹170 Cr of revolving seasonal liquidity and ₹105 Cr of term-funded distribution expansion. Certainty before the inventory build is more important than achieving the lowest possible headline margin.',
    financialNarrative:
      'Growth is strong but working-capital absorption has increased. Debt service is supportable in the base case, provided inventory converts after the seasonal peak and expansion spending remains controlled.',
    priorities: [
      'Secure funding before the inventory build',
      'Match revolving debt to seasonal assets',
      'Avoid permanent dilution',
      'Keep expansion capital separate from working capital',
    ],
    tensions: [
      'Seasonal inventory concentration',
      'Retailer receivable days are increasing',
      'Promotional spending pressures margins',
      'Borrowing-base eligibility may reduce availability',
    ],
    timeline: [
      'Inventory procurement · Month 0',
      'Peak sales · Months 3–5',
      'Receivable collection · Months 5–7',
      'Regional rollout · Months 2–12',
    ],
    financials: [
      { period: 'FY24', revenue: 610, ebitda: 78, ocf: 60, debt: 140 },
      { period: 'FY25', revenue: 780, ebitda: 103, ocf: 82, debt: 160 },
      { period: 'FY26', revenue: 960, ebitda: 135, ocf: 150, debt: 180 },
      {
        period: 'FY27E',
        revenue: 1190,
        ebitda: 171,
        ocf: 174,
        debt: 455,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1420,
        ebitda: 220,
        ocf: 232,
        debt: 365,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'season',
        title: 'Weak peak season',
        summary: 'Sell-through is 20% below plan.',
        cashFlowDecline: 24,
        liquidityHit: 42,
        event: 'Inventory remains funded for longer.',
      },
      {
        id: 'receivables',
        title: 'Collection delay',
        summary: 'Receivable days increase by 25 days.',
        cashFlowDecline: 15,
        liquidityHit: 55,
        event: 'Revolver availability and cash headroom tighten.',
      },
      {
        id: 'margin',
        title: 'Promotion pressure',
        summary: 'Gross margin falls during the regional launch.',
        cashFlowDecline: 18,
        liquidityHit: 22,
        event: 'Term-debt coverage compresses.',
      },
    ],
    data: {
      foundedYear: 2014,
      customerCount: 180000,
      revenue: 960,
      otherIncome: 5,
      financeCosts: 30,
      depreciation: 25,
      profitBeforeTax: 80,
      taxExpense: 22,
      profitAfterTax: 58,
      exceptionalItems: 5,
      ocf: 150,
      totalCashCapex: 25,
      existingTermDebt: 80,
      utilizedWorkingCapital: 100,
      cashAndEquivalents: 55,
      otherBankBalances: 8,
      restrictedCash: 5,
      existingAnnualCashInterest: 30,
      yearOnePrincipalDue: 15,
      targetDebt: 275,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-d2c-1',
          purpose: 'Working Capital / Inventory',
          amount: 170,
        },
        {
          id: 'sample-d2c-2',
          purpose: 'Sales / Market Expansion',
          amount: 105,
        },
      ],
      pledgedCollateral: 420,
      enterpriseValue: 1100,
      privateCreditObjective: 'Highest Funding Certainty',
    },
  },
  'renewable-project': {
    title: 'Project Solstice',
    subtitle: 'Construction financing for a contracted renewable-energy SPV',
    track: 'core',
    category: 'Project & SPV finance',
    difficulty: 'Advanced',
    duration: '30 min',
    teaser:
      'A contracted project has strong long-term economics, but completion support, reserve funding and sculpted repayment remain contested.',
    story:
      'Solstice Renewables has secured land, grid connectivity and a long-term offtake agreement for a utility-scale hybrid project. The asset will sit in a ring-fenced SPV. Construction is well advanced in design, but equipment delivery and transmission readiness create timing risk before contracted cash flows begin.',
    marketContext:
      'Long-term contracted revenue supports debt capacity, while curtailment, counterparty quality and completion risk determine the required protections. Sponsor capability matters most before commercial operation.',
    transactionRationale:
      'The SPV requires ₹750 Cr of debt within a ₹1,100 Cr project cost. Sponsor equity funds the balance. The negotiation centres on tenor, DSRA, completion support, cash sweep and prepayment flexibility.',
    financialNarrative:
      'The operating sponsor is profitable, but the financing is primarily underwritten to project CFADS. Base-case coverage is adequate; construction delay and lower generation are the decisive downside scenarios.',
    priorities: [
      'Ring-fence project liabilities',
      'Match repayment to contracted CFADS',
      'Limit open-ended sponsor support',
      'Preserve refinancing flexibility after stabilisation',
    ],
    tensions: [
      'Transmission completion is on the critical path',
      'One offtaker represents most contracted revenue',
      'Six-month DSRA would trap meaningful cash',
      'Generation performance remains untested',
    ],
    timeline: [
      'Financial close · Month 0',
      'Major equipment delivery · Month 7',
      'Grid synchronisation · Month 13',
      'Commercial operation · Month 15',
    ],
    financials: [
      { period: 'FY24', revenue: 540, ebitda: 170, ocf: 152, debt: 0 },
      { period: 'FY25', revenue: 690, ebitda: 224, ocf: 198, debt: 0 },
      { period: 'FY26', revenue: 820, ebitda: 278, ocf: 244, debt: 0 },
      {
        period: 'FY27E',
        revenue: 945,
        ebitda: 331,
        ocf: 302,
        debt: 750,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1015,
        ebitda: 362,
        ocf: 332,
        debt: 736,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'cod',
        title: 'COD delay',
        summary: 'Commercial operation slips by six months.',
        cashFlowDecline: 20,
        liquidityHit: 65,
        event: 'Interest during construction and reserve needs rise.',
      },
      {
        id: 'generation',
        title: 'Lower generation',
        summary: 'Annual output is 12% below the P90 case.',
        cashFlowDecline: 16,
        liquidityHit: 20,
        event: 'DSCR and distribution capacity weaken.',
      },
      {
        id: 'offtaker',
        title: 'Offtaker payment delay',
        summary: 'Collections move out by 90 days.',
        cashFlowDecline: 10,
        liquidityHit: 75,
        event: 'The DSRA becomes the immediate liquidity bridge.',
      },
    ],
    data: {
      foundedYear: 2012,
      customerCount: 0,
      revenue: 820,
      otherIncome: 8,
      financeCosts: 60,
      depreciation: 75,
      profitBeforeTax: 135,
      taxExpense: 35,
      profitAfterTax: 100,
      exceptionalItems: 0,
      ocf: 244,
      totalCashCapex: 55,
      existingTermDebt: 0,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 90,
      otherBankBalances: 15,
      restrictedCash: 20,
      existingAnnualCashInterest: 0,
      yearOnePrincipalDue: 0,
      targetDebt: 750,
      targetTenor: 10,
      allocations: [
        {
          id: 'sample-project-1',
          purpose: 'Project Development / Construction',
          amount: 750,
        },
      ],
      pledgedCollateral: 1100,
      enterpriseValue: 1850,
      projectCost: 1100,
      projectSponsorEquity: 350,
      projectCfads: 155,
      contractedRevenuePct: 92,
      expectedCodMonths: 15,
      projectLifeYears: 25,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'sponsor-acquisition': {
    title: 'Project Keystone',
    subtitle:
      'Certain-funds acquisition of a scaled healthcare-services platform',
    track: 'core',
    category: 'Acquisition finance',
    difficulty: 'Advanced',
    duration: '30 min',
    teaser:
      'A sponsor needs acquisition certainty, integration liquidity and a debt package that does not consume the target’s operating flexibility.',
    story:
      'Keystone Capital has signed exclusivity to acquire a multi-city diagnostics platform with dense local networks and recurring institutional contracts. The purchase price is fixed, but a short exclusivity window requires a financing solution that can underwrite integration and seasonal liquidity alongside the acquisition.',
    marketContext:
      'Diagnostics demand is resilient, yet reimbursement pressure and doctor retention can affect margins. The platform benefits from network density, brand recognition and a diversified test mix.',
    transactionRationale:
      'A ₹900 Cr facility funds acquisition consideration and integration expenditure within a ₹1,350 Cr transaction. Sponsor equity funds ₹450 Cr. Certain funds and documentation speed carry more weight than minimum pricing.',
    financialNarrative:
      'The target generates stable cash flow and moderate leverage at entry. The principal risks are integration execution, synergy reliance and the temptation to over-distribute cash after closing.',
    priorities: [
      'Deliver certain funds at signing',
      'Preserve integration liquidity',
      'Avoid excessive Year 1 amortisation',
      'Retain capacity for bolt-on acquisitions',
    ],
    tensions: [
      'Synergies represent part of the deleveraging plan',
      'Management retention packages are not final',
      'Working-capital seasonality follows insurer collections',
      'The sponsor wants flexible restricted-payment capacity',
    ],
    timeline: [
      'Signing · Week 0',
      'Financing commitment · Week 2',
      'Regulatory consent · Weeks 4–8',
      'Closing · Week 10',
    ],
    financials: [
      { period: 'FY24', revenue: 1180, ebitda: 214, ocf: 184, debt: 0 },
      { period: 'FY25', revenue: 1390, ebitda: 258, ocf: 226, debt: 0 },
      { period: 'FY26', revenue: 1600, ebitda: 302, ocf: 274, debt: 0 },
      {
        period: 'FY27E',
        revenue: 1820,
        ebitda: 356,
        ocf: 326,
        debt: 900,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 2040,
        ebitda: 421,
        ocf: 382,
        debt: 812,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'integration',
        title: 'Integration delay',
        summary: 'Planned synergies arrive one year late.',
        cashFlowDecline: 18,
        liquidityHit: 35,
        event: 'Deleveraging slows while one-off costs continue.',
      },
      {
        id: 'reimbursement',
        title: 'Pricing pressure',
        summary: 'Reimbursement rates decline across key tests.',
        cashFlowDecline: 22,
        liquidityHit: 28,
        event: 'EBITDA headroom tightens.',
      },
      {
        id: 'bolt',
        title: 'Bolt-on opportunity',
        summary: 'A strategic acquisition requires ₹120 Cr within Year 2.',
        cashFlowDecline: 5,
        liquidityHit: 120,
        event:
          'Incremental debt and restricted-payment capacity become important.',
      },
    ],
    data: {
      foundedYear: 2008,
      customerCount: 210000,
      revenue: 1600,
      otherIncome: 12,
      financeCosts: 35,
      depreciation: 55,
      profitBeforeTax: 220,
      taxExpense: 57,
      profitAfterTax: 163,
      exceptionalItems: 4,
      ocf: 274,
      totalCashCapex: 45,
      existingTermDebt: 0,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 120,
      otherBankBalances: 12,
      restrictedCash: 8,
      existingAnnualCashInterest: 0,
      yearOnePrincipalDue: 0,
      targetDebt: 900,
      targetTenor: 6,
      allocations: [
        { id: 'sample-acq-1', purpose: 'Acquisition Financing', amount: 820 },
        {
          id: 'sample-acq-2',
          purpose: 'Working Capital / Inventory',
          amount: 80,
        },
      ],
      pledgedCollateral: 1500,
      enterpriseValue: 2200,
      projectCost: 1350,
      projectSponsorEquity: 450,
      projectCfads: 210,
      contractedRevenuePct: 52,
      privateCreditObjective: 'Faster Execution',
    },
  },
  'nbfc-book-growth': {
    title: 'Project Ledger',
    subtitle: 'Secured warehouse facility for a specialty-finance platform',
    track: 'core',
    category: 'Financial services',
    difficulty: 'Advanced',
    duration: '30 min',
    teaser:
      'Rapid loan-book growth is attractive, but advance rates, asset quality and asset-liability matching determine how much leverage is prudent.',
    story:
      'Ledger Finance originates granular secured loans to small businesses through a technology-led underwriting platform. The company wants to accelerate disbursements without raising equity immediately. Its credit performance is stable, but rapid growth can disguise emerging delinquencies and liquidity mismatches.',
    marketContext:
      'Borrower demand is deep and bank partnerships validate origination quality. Competition is increasing, and the funding model remains sensitive to advance rates, concentration limits and eligibility definitions.',
    transactionRationale:
      'The company seeks a ₹500 Cr warehouse line backed by an eligible loan pool. The commercial debate concerns borrowing-base haircuts, concentration limits, amortisation triggers and the cost of committed but undrawn capital.',
    financialNarrative:
      'AUM and net interest income are expanding while GNPA remains contained. Liquidity is adequate, but prudent leverage depends on maintaining collection performance and matching facility tenor to the underlying assets.',
    priorities: [
      'Create dependable disbursement capacity',
      'Preserve balance-sheet liquidity',
      'Avoid an immediate equity raise',
      'Match debt maturity to loan collections',
    ],
    tensions: [
      'Fast vintages have limited seasoning',
      'Top-originator concentration is increasing',
      'Advance-rate haircuts could reduce usable funding',
      'A rapid GNPA rise would trigger amortisation',
    ],
    timeline: [
      'Pool audit · Week 0',
      'Warehouse close · Week 5',
      'First draw · Week 6',
      'Term-out review · Month 18',
    ],
    financials: [
      { period: 'FY24', revenue: 310, ebitda: 118, ocf: 390, debt: 1420 },
      { period: 'FY25', revenue: 420, ebitda: 158, ocf: 510, debt: 1680 },
      { period: 'FY26', revenue: 560, ebitda: 205, ocf: 650, debt: 1950 },
      {
        period: 'FY27E',
        revenue: 735,
        ebitda: 272,
        ocf: 770,
        debt: 2450,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 920,
        ebitda: 348,
        ocf: 915,
        debt: 2290,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'gnpa',
        title: 'Asset-quality drift',
        summary: 'GNPA rises by 180 bps.',
        cashFlowDecline: 22,
        liquidityHit: 55,
        event: 'Eligibility and advance-rate headroom contract.',
      },
      {
        id: 'collections',
        title: 'Collection slowdown',
        summary: 'Monthly collections fall below plan.',
        cashFlowDecline: 18,
        liquidityHit: 80,
        event: 'The asset-liability gap widens.',
      },
      {
        id: 'haircut',
        title: 'Borrowing-base haircut',
        summary: 'The lender excludes a portion of the pool.',
        cashFlowDecline: 8,
        liquidityHit: 95,
        event: 'Usable capacity falls despite an unchanged commitment.',
      },
    ],
    data: {
      foundedYear: 2013,
      customerCount: 54000,
      revenue: 560,
      otherIncome: 20,
      financeCosts: 220,
      depreciation: 12,
      profitBeforeTax: 110,
      taxExpense: 29,
      profitAfterTax: 81,
      exceptionalItems: 0,
      ocf: 650,
      totalCashCapex: 15,
      aum: 3500,
      nim: 8.1,
      gnpa: 2.5,
      existingTermDebt: 1800,
      utilizedWorkingCapital: 150,
      cashAndEquivalents: 310,
      otherBankBalances: 45,
      restrictedCash: 40,
      existingAnnualCashInterest: 220,
      yearOnePrincipalDue: 160,
      targetDebt: 500,
      targetTenor: 3,
      allocations: [
        {
          id: 'sample-nbfc-1',
          purpose: 'Sales / Market Expansion',
          amount: 500,
        },
      ],
      pledgedCollateral: 780,
      totalEquity: 650,
      enterpriseValue: 2600,
      privateCreditObjective: 'Higher Leverage',
    },
  },
  'hospital-rollout': {
    title: 'Project Aegis',
    subtitle:
      'Staged financing for a regional hospital and diagnostics rollout',
    track: 'core',
    category: 'Expansion finance',
    difficulty: 'Intermediate',
    duration: '25 min',
    teaser:
      'New facilities open at different times, so funding certainty must be balanced against carry cost and a gradual earnings ramp-up.',
    story:
      'Aegis Health operates profitable secondary-care hospitals and diagnostic centres in underserved cities. It plans three new hospitals and eight satellite centres over eighteen months. Existing locations generate cash, but each new site requires a commissioning and occupancy ramp before contributing fully.',
    marketContext:
      'Regional demand is resilient and doctor relationships create local barriers to entry. Execution depends on clinician recruitment, licensing and disciplined project management.',
    transactionRationale:
      'The ₹425 Cr programme combines construction, medical equipment and launch liquidity. A delayed-draw structure may reduce carry cost, while the lender will seek visibility over deployment and minimum liquidity.',
    financialNarrative:
      'Mature hospitals generate stable cash, supporting the initial debt burden. The risk sits in synchronising multiple site openings without allowing growth capex to consume the group’s liquidity buffer.',
    priorities: [
      'Secure the full rollout budget',
      'Draw capital only when sites require it',
      'Protect liquidity during occupancy ramp-up',
      'Avoid equity dilution',
    ],
    tensions: [
      'Three sites are being developed concurrently',
      'Doctor recruitment affects revenue ramp',
      'Equipment orders require deposits',
      'New locations dilute group margins initially',
    ],
    timeline: [
      'Site works · Months 0–8',
      'Equipment delivery · Months 6–11',
      'First hospital opening · Month 10',
      'Final satellite opening · Month 18',
    ],
    financials: [
      { period: 'FY24', revenue: 820, ebitda: 176, ocf: 148, debt: 190 },
      { period: 'FY25', revenue: 1010, ebitda: 218, ocf: 191, debt: 175 },
      { period: 'FY26', revenue: 1220, ebitda: 260, ocf: 220, debt: 150 },
      {
        period: 'FY27E',
        revenue: 1430,
        ebitda: 285,
        ocf: 236,
        debt: 575,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1700,
        ebitda: 354,
        ocf: 315,
        debt: 510,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'ramp',
        title: 'Slower occupancy ramp',
        summary: 'New hospitals reach break-even six months late.',
        cashFlowDecline: 20,
        liquidityHit: 42,
        event: 'Group cash supports the new sites for longer.',
      },
      {
        id: 'capex',
        title: 'Equipment overrun',
        summary: 'Imported equipment costs increase.',
        cashFlowDecline: 8,
        liquidityHit: 55,
        event: 'The final draw and contingency become critical.',
      },
      {
        id: 'licence',
        title: 'Licence delay',
        summary: 'One facility cannot open on schedule.',
        cashFlowDecline: 14,
        liquidityHit: 30,
        event: 'Revenue is deferred while fixed costs begin.',
      },
    ],
    data: {
      foundedYear: 2007,
      customerCount: 245000,
      revenue: 1220,
      otherIncome: 8,
      financeCosts: 25,
      depreciation: 48,
      profitBeforeTax: 187,
      taxExpense: 49,
      profitAfterTax: 138,
      exceptionalItems: 8,
      ocf: 220,
      totalCashCapex: 40,
      existingTermDebt: 120,
      utilizedWorkingCapital: 30,
      cashAndEquivalents: 95,
      otherBankBalances: 10,
      restrictedCash: 5,
      existingAnnualCashInterest: 25,
      yearOnePrincipalDue: 25,
      targetDebt: 425,
      targetTenor: 6,
      allocations: [
        {
          id: 'sample-health-1',
          purpose: 'New Facility / Location',
          amount: 300,
        },
        {
          id: 'sample-health-2',
          purpose: 'Capacity Expansion / Equipment',
          amount: 125,
        },
      ],
      pledgedCollateral: 780,
      enterpriseValue: 1900,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'real-estate-completion': {
    title: 'Project Horizon',
    subtitle:
      'Last-mile completion financing for a substantially sold residential project',
    track: 'core',
    category: 'Real-estate credit',
    difficulty: 'Advanced',
    duration: '30 min',
    teaser:
      'Visible customer collections can complete the project, but timing, escrow controls and sponsor support determine whether the debt is resilient.',
    story:
      'Horizon Residences is a premium residential development that is 68% complete and substantially pre-sold. Cost inflation and a slower collection cycle created a funding gap before handover. The project sits in an existing SPV with a controlled collection account.',
    marketContext:
      'Comparable inventory has sold well, but buyer collections depend on construction milestones. Completion certainty therefore drives both sales velocity and lender recovery.',
    transactionRationale:
      'The SPV requires ₹650 Cr to complete construction, fund statutory costs and refinance a short bridge. Sponsor equity of ₹300 Cr is already invested and additional support is capped.',
    financialNarrative:
      'Forecast collections cover the remaining project cost and debt in the base case. Timing rather than aggregate value is the key risk, making escrow waterfalls, cost-to-complete monitoring and cash reserves central.',
    priorities: [
      'Complete construction without interruption',
      'Ring-fence collections',
      'Avoid unlimited sponsor support',
      'Permit prepayment from accelerated sales',
    ],
    tensions: [
      'Collections are milestone-dependent',
      'Existing security requires release mechanics',
      'Cost-to-complete contingency is limited',
      'A six-month delay materially reduces DSCR',
    ],
    timeline: [
      'Facility close · Month 0',
      'Structure completion · Month 7',
      'Handover begins · Month 13',
      'Final collections · Month 24',
    ],
    financials: [
      { period: 'FY24', revenue: 280, ebitda: 74, ocf: 58, debt: 0 },
      { period: 'FY25', revenue: 390, ebitda: 103, ocf: 82, debt: 0 },
      { period: 'FY26', revenue: 510, ebitda: 136, ocf: 108, debt: 0 },
      {
        period: 'FY27E',
        revenue: 760,
        ebitda: 205,
        ocf: 185,
        debt: 650,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 890,
        ebitda: 251,
        ocf: 228,
        debt: 420,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'delay',
        title: 'Six-month delay',
        summary: 'Handover and linked collections move out.',
        cashFlowDecline: 24,
        liquidityHit: 70,
        event: 'Interest carry and remaining cost increase.',
      },
      {
        id: 'sales',
        title: 'Slower unsold inventory',
        summary: 'Residual units sell at a slower pace.',
        cashFlowDecline: 18,
        liquidityHit: 45,
        event: 'The final repayment tail lengthens.',
      },
      {
        id: 'cost',
        title: 'Cost-to-complete increase',
        summary: 'Remaining construction cost rises by 10%.',
        cashFlowDecline: 8,
        liquidityHit: 65,
        event: 'Contingency and sponsor-support terms are tested.',
      },
    ],
    data: {
      foundedYear: 2005,
      customerCount: 920,
      revenue: 510,
      otherIncome: 6,
      financeCosts: 28,
      depreciation: 6,
      profitBeforeTax: 102,
      taxExpense: 27,
      profitAfterTax: 75,
      exceptionalItems: 0,
      ocf: 108,
      totalCashCapex: 10,
      existingTermDebt: 0,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 65,
      otherBankBalances: 15,
      restrictedCash: 18,
      existingAnnualCashInterest: 0,
      yearOnePrincipalDue: 0,
      targetDebt: 650,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-re-1',
          purpose: 'Project Development / Construction',
          amount: 650,
        },
      ],
      pledgedCollateral: 1350,
      enterpriseValue: 1750,
      projectCost: 950,
      projectSponsorEquity: 300,
      projectCfads: 145,
      contractedRevenuePct: 72,
      expectedCodMonths: 13,
      projectLifeYears: 5,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'stressed-refinancing': {
    title: 'Project Phoenix',
    subtitle: 'Liquidity stabilisation and maturity-wall restructuring',
    track: 'special',
    category: 'Special situations',
    difficulty: 'Expert',
    duration: '35 min',
    teaser:
      'A delayed customer programme has created a maturity wall. The learner must stabilise liquidity before negotiating a credible restructuring.',
    story:
      'Phoenix Industrial Services supports large infrastructure projects under multi-year contracts. A customer-led commissioning delay pushed receivables and milestone payments into the next financial year just as a large term facility approaches maturity. The underlying order book remains intact, but the company cannot meet the scheduled repayment from current liquidity.',
    marketContext:
      'The company has defensible technical capabilities and repeat customers, but bargaining power is weak when customer projects are delayed. Lenders must distinguish temporary timing stress from permanent impairment.',
    transactionRationale:
      'The proposed ₹450 Cr package refinances ₹380 Cr of near-term debt and provides ₹70 Cr of controlled liquidity. Sponsor support is limited, making cash controls, milestones and a realistic exit path central to the restructuring.',
    financialNarrative:
      'EBITDA remains positive but cash conversion deteriorated sharply. The restructuring works only if delayed receivables convert and the new maturity profile avoids another cliff before operating recovery.',
    priorities: [
      'Avoid a payment default',
      'Protect critical operations and employees',
      'Preserve enterprise value',
      'Create a credible 24-month refinancing path',
    ],
    tensions: [
      'A ₹380 Cr maturity falls due within four months',
      'Receivables depend on two delayed customer milestones',
      'Sponsors resist further equity',
      'Existing lenders seek cash control and asset-sale proceeds',
    ],
    timeline: [
      'Liquidity low point · Week 5',
      'Existing maturity · Month 4',
      'Delayed milestone receipt · Month 7',
      'Refinancing window · Months 18–24',
    ],
    stabilisationOptions: [
      {
        id: 'standstill',
        title: 'Standstill + controlled liquidity',
        detail:
          'Seek a short standstill, lock cash and fund critical operations.',
      },
      {
        id: 'sponsor',
        title: 'Sponsor-led bridge',
        detail: 'Require new equity before lenders extend maturities.',
      },
      {
        id: 'asset',
        title: 'Asset sale programme',
        detail: 'Monetise a non-core division and reduce the refinancing need.',
      },
    ],
    stressScenarios: [
      {
        id: 'receipt',
        title: 'Milestone slips again',
        summary: 'The largest delayed receipt moves by another quarter.',
        cashFlowDecline: 28,
        liquidityHit: 65,
        event: 'The liquidity runway is exhausted before recovery.',
      },
      {
        id: 'customer',
        title: 'Contract termination',
        summary: 'One delayed programme is cancelled.',
        cashFlowDecline: 38,
        liquidityHit: 45,
        event: 'The case moves from timing stress toward impairment.',
      },
      {
        id: 'sale',
        title: 'Asset sale discount',
        summary: 'Non-core assets realise 25% less than expected.',
        cashFlowDecline: 10,
        liquidityHit: 55,
        event: 'The refinancing requirement remains elevated.',
      },
    ],
    data: {
      foundedYear: 2003,
      customerCount: 31,
      revenue: 780,
      otherIncome: 5,
      financeCosts: 42,
      depreciation: 28,
      profitBeforeTax: 35,
      taxExpense: 9,
      profitAfterTax: 26,
      exceptionalItems: 6,
      ocf: 125,
      totalCashCapex: 20,
      existingTermDebt: 380,
      utilizedWorkingCapital: 70,
      cashAndEquivalents: 32,
      otherBankBalances: 5,
      restrictedCash: 8,
      existingAnnualCashInterest: 42,
      yearOnePrincipalDue: 380,
      targetDebt: 450,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-stress-1',
          purpose: 'Refinancing Existing Debt',
          amount: 380,
        },
        {
          id: 'sample-stress-2',
          purpose: 'Working Capital / Inventory',
          amount: 70,
        },
      ],
      pledgedCollateral: 520,
      enterpriseValue: 780,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'logistics-fleet': {
    title: 'Project Relay',
    subtitle: 'Cash-flow financing for an asset-light logistics network',
    track: 'core',
    category: 'Asset-light credit',
    difficulty: 'Intermediate',
    duration: '25 min',
    teaser:
      'Contracted enterprise revenue supports growth, but limited owned assets force the lender to underwrite retention and cash conversion.',
    story:
      'Relay Logistics coordinates third-party fleets for national manufacturers and retailers. Its technology and dense carrier network produce attractive customer retention without requiring fleet ownership. Management wants to expand into temperature-controlled logistics and automate additional hubs.',
    marketContext:
      'The asset-light model scales efficiently, but service quality depends on third-party carriers and a small number of enterprise contracts. Receivable timing is more important than hard-asset value.',
    transactionRationale:
      'A ₹300 Cr growth facility funds technology, hub automation and launch working capital. The structure must recognise contracted cash flow without forcing the company into an asset-backed template it cannot support.',
    financialNarrative:
      'Revenue and cash generation are growing with moderate leverage. Concentration and receivable days are the main underwriting variables; excessive amortisation could starve the expansion programme.',
    priorities: [
      'Fund the network expansion',
      'Avoid pledging assets the company does not own',
      'Protect working liquidity',
      'Retain flexibility for strategic investment',
    ],
    tensions: [
      'Top ten customers represent 61% of revenue',
      'Carrier costs can move faster than contract repricing',
      'Receivable days have increased',
      'Collateral coverage is limited',
    ],
    timeline: [
      'Technology deployment · Months 0–6',
      'Hub automation · Months 4–10',
      'Cold-chain launch · Month 9',
      'National scale-up · Months 12–24',
    ],
    financials: [
      { period: 'FY24', revenue: 620, ebitda: 88, ocf: 72, debt: 125 },
      { period: 'FY25', revenue: 790, ebitda: 113, ocf: 96, debt: 120 },
      { period: 'FY26', revenue: 980, ebitda: 145, ocf: 140, debt: 110 },
      {
        period: 'FY27E',
        revenue: 1210,
        ebitda: 184,
        ocf: 173,
        debt: 410,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1460,
        ebitda: 232,
        ocf: 218,
        debt: 348,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'customer',
        title: 'Customer loss',
        summary: 'A top-five contract is not renewed.',
        cashFlowDecline: 26,
        liquidityHit: 35,
        event: 'Cash-flow leverage and concentration risk rise.',
      },
      {
        id: 'fuel',
        title: 'Cost pass-through lag',
        summary: 'Carrier costs rise before customer repricing.',
        cashFlowDecline: 18,
        liquidityHit: 28,
        event: 'Margins compress for two quarters.',
      },
      {
        id: 'receivable',
        title: 'Receivable stretch',
        summary: 'Collections slow by 20 days.',
        cashFlowDecline: 12,
        liquidityHit: 48,
        event: 'Minimum operating cash is tested.',
      },
    ],
    data: {
      foundedYear: 2015,
      customerCount: 2100,
      revenue: 980,
      otherIncome: 5,
      financeCosts: 20,
      depreciation: 22,
      profitBeforeTax: 108,
      taxExpense: 28,
      profitAfterTax: 80,
      exceptionalItems: 0,
      ocf: 140,
      totalCashCapex: 15,
      existingTermDebt: 70,
      utilizedWorkingCapital: 40,
      cashAndEquivalents: 75,
      otherBankBalances: 8,
      restrictedCash: 4,
      existingAnnualCashInterest: 20,
      yearOnePrincipalDue: 15,
      targetDebt: 300,
      targetTenor: 5,
      allocations: [
        {
          id: 'sample-log-1',
          purpose: 'Sales / Market Expansion',
          amount: 300,
        },
      ],
      pledgedCollateral: 0,
      enterpriseValue: 1250,
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  'pre-ipo-hybrid': {
    title: 'Project Ascend',
    subtitle: 'Pre-IPO bridge with equity-linked optionality',
    track: 'core',
    category: 'Hybrid capital',
    difficulty: 'Advanced',
    duration: '30 min',
    teaser:
      'A profitable technology-services company wants milestone capital without fixing today’s equity valuation, while the lender seeks upside participation.',
    story:
      'Ascend Digital provides cloud-transformation services to global enterprises. The company is profitable and preparing for a potential public-market or strategic transaction within three years. Management wants capital for two overseas delivery centres without launching an equity round before the expansion is reflected in earnings.',
    marketContext:
      'Demand is strong but talent costs and customer concentration create earnings volatility. The company’s valuation depends heavily on achieving international revenue and margin milestones.',
    transactionRationale:
      'The ₹250 Cr requirement funds delivery capacity and working capital. A hybrid debt and convertible component can reduce current cash burden, but dilution, conversion valuation and redemption protection must be negotiated together.',
    financialNarrative:
      'Cash generation supports debt, while the prospective liquidity event creates a credible exit path. The principal question is whether near-term flexibility justifies equity-linked participation and back-ended repayment risk.',
    priorities: [
      'Avoid pricing an equity round today',
      'Limit cash burden during expansion',
      'Preserve IPO readiness',
      'Cap eventual dilution',
    ],
    tensions: [
      'The liquidity event is not committed',
      'Two customers represent 34% of revenue',
      'International hiring precedes revenue',
      'Conversion economics can become expensive if valuation rises',
    ],
    timeline: [
      'Facility close · Month 0',
      'Delivery centres open · Month 8',
      'Margin milestone · Month 18',
      'Liquidity event window · Months 24–36',
    ],
    financials: [
      { period: 'FY24', revenue: 760, ebitda: 142, ocf: 121, debt: 150 },
      { period: 'FY25', revenue: 940, ebitda: 173, ocf: 148, debt: 140 },
      { period: 'FY26', revenue: 1120, ebitda: 205, ocf: 170, debt: 130 },
      {
        period: 'FY27E',
        revenue: 1370,
        ebitda: 267,
        ocf: 231,
        debt: 380,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 1630,
        ebitda: 334,
        ocf: 295,
        debt: 350,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'ipo',
        title: 'IPO window closes',
        summary: 'The expected liquidity event moves beyond maturity.',
        cashFlowDecline: 12,
        liquidityHit: 30,
        event: 'Refinancing becomes the primary exit.',
      },
      {
        id: 'margin',
        title: 'Talent-cost inflation',
        summary: 'Margin expansion is 400 bps below plan.',
        cashFlowDecline: 22,
        liquidityHit: 25,
        event: 'Debt service remains manageable but valuation falls.',
      },
      {
        id: 'client',
        title: 'Customer concentration event',
        summary: 'A major programme is reduced.',
        cashFlowDecline: 28,
        liquidityHit: 38,
        event: 'Both leverage and conversion value are affected.',
      },
    ],
    data: {
      foundedYear: 2010,
      customerCount: 92,
      revenue: 1120,
      otherIncome: 12,
      financeCosts: 18,
      depreciation: 32,
      profitBeforeTax: 163,
      taxExpense: 42,
      profitAfterTax: 121,
      exceptionalItems: 0,
      ocf: 170,
      totalCashCapex: 20,
      existingTermDebt: 100,
      utilizedWorkingCapital: 30,
      cashAndEquivalents: 125,
      otherBankBalances: 12,
      restrictedCash: 6,
      existingAnnualCashInterest: 18,
      yearOnePrincipalDue: 18,
      targetDebt: 250,
      targetTenor: 4,
      allocations: [
        {
          id: 'sample-ipo-1',
          purpose: 'Bridge to a Defined Milestone',
          amount: 200,
        },
        {
          id: 'sample-ipo-2',
          purpose: 'Working Capital / Inventory',
          amount: 50,
        },
      ],
      pledgedCollateral: 260,
      enterpriseValue: 2300,
      privateCreditObjective: 'Strategic Value Beyond Capital',
    },
  },
};

const SPECIAL_SITUATION_CASES = [
  {
    id: 'covenant-breach',
    title: 'Project Crosswind',
    subtitle: 'Covenant reset and liquidity protection after an earnings shock',
    track: 'special',
    category: 'Special situations',
    difficulty: 'Expert',
    duration: '35 min',
    tone: 'amber',
    teaser:
      'A profitable exporter has breached leverage after losing a programme, forcing a negotiation before liquidity becomes the next problem.',
    story:
      'Crosswind Engineering exports specialised assemblies under multi-year programmes. One customer unexpectedly insourced a programme, reducing EBITDA and triggering a leverage covenant breach. The company remains cash-generative and has a replacement order pipeline, but lenders control the immediate timetable.',
    marketContext:
      'Technical approvals and switching costs support recovery, although customer concentration and foreign-exchange exposure remain material.',
    transactionRationale:
      'A ₹325 Cr amend-and-extend package refinances ₹200 Cr, provides ₹125 Cr of working liquidity and resets covenants around a two-year recovery plan.',
    financialNarrative:
      'The business is solvent but has limited covenant headroom. Success depends on converting the replacement order book without allowing liquidity to erode first.',
    mandate:
      'Stabilise liquidity, select a credible restructuring structure and negotiate protections that preserve the recovery plan.',
    learningGoal:
      'Distinguish a curable covenant breach from a debt-capacity failure.',
    priorities: [
      'Obtain a waiver before acceleration rights arise',
      'Protect working capital',
      'Create covenant headroom for recovery',
      'Retain customer-facing operations',
    ],
    tensions: [
      'A leverage covenant is already breached',
      'The replacement order is not yet in production',
      'Lenders seek additional pricing and controls',
      'Sponsor equity is available only in a limited amount',
    ],
    timeline: [
      'Waiver deadline · Week 3',
      'Liquidity low point · Week 9',
      'Replacement programme · Month 8',
      'Covenant reset test · Month 12',
    ],
    stabilisationOptions: [
      {
        id: 'waiver',
        title: 'Waiver + liquidity controls',
        detail: 'Obtain a time-bound waiver with weekly liquidity reporting.',
      },
      {
        id: 'equity',
        title: 'Sponsor equity cure',
        detail: 'Inject equity and reduce the refinancing quantum.',
      },
      {
        id: 'sale',
        title: 'Non-core asset disposal',
        detail: 'Sell surplus property before completing the amend-and-extend.',
      },
    ],
    financials: [
      { period: 'FY24', revenue: 720, ebitda: 126, ocf: 110, debt: 205 },
      { period: 'FY25', revenue: 790, ebitda: 139, ocf: 118, debt: 190 },
      { period: 'FY26', revenue: 650, ebitda: 95, ocf: 100, debt: 160 },
      {
        period: 'FY27E',
        revenue: 735,
        ebitda: 112,
        ocf: 116,
        debt: 365,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 850,
        ebitda: 143,
        ocf: 139,
        debt: 305,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'order',
        title: 'Order ramp delay',
        summary: 'The replacement programme slips by six months.',
        cashFlowDecline: 25,
        liquidityHit: 40,
        event: 'The covenant reset becomes too tight.',
      },
      {
        id: 'fx',
        title: 'Currency reversal',
        summary: 'Export realisations weaken during recovery.',
        cashFlowDecline: 16,
        liquidityHit: 24,
        event: 'Margin recovery slows.',
      },
      {
        id: 'supplier',
        title: 'Supplier tightening',
        summary: 'Critical suppliers reduce payment terms.',
        cashFlowDecline: 10,
        liquidityHit: 45,
        event: 'Working liquidity is consumed faster.',
      },
    ],
    decisionSchema: {
      level: 'Special situations',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    },
    data: {
      sector: 'Industrials & Manufacturing',
      segment: 'Industrial Manufacturing',
      businessModel: 'Manufacturing / Product Sales',
      foundedYear: 2001,
      customerCount: 42,
      revenue: 650,
      otherIncome: 5,
      financeCosts: 26,
      depreciation: 21,
      profitBeforeTax: 43,
      taxExpense: 11,
      profitAfterTax: 32,
      exceptionalItems: 10,
      ocf: 100,
      totalCashCapex: 12,
      existingTermDebt: 120,
      utilizedWorkingCapital: 40,
      cashAndEquivalents: 34,
      otherBankBalances: 4,
      restrictedCash: 4,
      existingAnnualCashInterest: 26,
      yearOnePrincipalDue: 60,
      targetDebt: 325,
      targetTenor: 4,
      allocations: [
        {
          id: 'crosswind-1',
          purpose: 'Refinancing Existing Debt',
          amount: 200,
        },
        {
          id: 'crosswind-2',
          purpose: 'Working Capital / Inventory',
          amount: 125,
        },
      ],
      securityAvailability: 'Substantially all business assets',
      collateralType: 'Mixed collateral',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 420,
      transactionScope: 'Business-wide funding',
      historicalTrend: 'Turnaround / Volatile',
      enterpriseValue: 720,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Avoid Equity Dilution Wherever Possible',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
  {
    id: 'completion-rescue',
    title: 'Project Anchor',
    subtitle: 'Rescue capital for a delayed infrastructure asset',
    track: 'special',
    category: 'Special situations',
    difficulty: 'Expert',
    duration: '40 min',
    tone: 'purple',
    teaser:
      'A nearly completed asset needs fresh capital after a contractor failure, raising difficult questions about priority, sponsor support and completion risk.',
    story:
      'Anchor Port Services is developing a specialised logistics terminal under a long-term concession. A contractor insolvency has delayed completion and exhausted the original contingency. The asset is strategically valuable and contracted customers remain committed, but existing lenders will not fund the overrun without new protections.',
    marketContext:
      'The completed terminal would occupy a defensible logistics position. Until completion, value depends on permits, replacement contracting and sponsor execution.',
    transactionRationale:
      'A ₹600 Cr rescue facility completes the asset and refinances critical claims. It is structurally senior, carries controlled disbursements and depends on a revised completion plan.',
    financialNarrative:
      'Post-completion CFADS can support the capital structure, but delay risk and cost-to-complete uncertainty dominate current value. Recovery analysis matters alongside going-concern financeability.',
    mandate:
      'Choose a stabilisation path, structure the rescue capital and negotiate the control package required to reach completion.',
    learningGoal:
      'Understand super-senior rescue financing, milestones and recovery trade-offs.',
    priorities: [
      'Prevent construction stoppage',
      'Complete the asset',
      'Limit further sponsor exposure',
      'Preserve residual value for existing stakeholders',
    ],
    tensions: [
      'The original contingency is exhausted',
      'Existing lenders dispute priority',
      'A replacement contractor requires mobilisation cash',
      'Commercial operation is twelve months away',
    ],
    timeline: [
      'Cash exhaustion · Week 4',
      'Replacement contract · Week 6',
      'Mechanical completion · Month 9',
      'Commercial operation · Month 12',
    ],
    stabilisationOptions: [
      {
        id: 'rescue',
        title: 'Super-senior rescue facility',
        detail: 'Fund completion with controlled draws and payment priority.',
      },
      {
        id: 'sponsor',
        title: 'Sponsor-funded completion',
        detail: 'Require the sponsor to fund the first-loss overrun.',
      },
      {
        id: 'sale',
        title: 'Accelerated asset sale',
        detail: 'Seek a strategic buyer before committing further capital.',
      },
    ],
    financials: [
      { period: 'FY24', revenue: 310, ebitda: 92, ocf: 78, debt: 0 },
      { period: 'FY25', revenue: 355, ebitda: 105, ocf: 86, debt: 0 },
      { period: 'FY26', revenue: 390, ebitda: 111, ocf: 91, debt: 0 },
      {
        period: 'FY27E',
        revenue: 610,
        ebitda: 188,
        ocf: 170,
        debt: 600,
        forecast: true,
      },
      {
        period: 'FY28E',
        revenue: 720,
        ebitda: 231,
        ocf: 212,
        debt: 575,
        forecast: true,
      },
    ],
    stressScenarios: [
      {
        id: 'delay',
        title: 'Further contractor delay',
        summary: 'Completion moves by another six months.',
        cashFlowDecline: 22,
        liquidityHit: 90,
        event: 'Interest carry and cost-to-complete rise.',
      },
      {
        id: 'volume',
        title: 'Lower ramp-up volume',
        summary: 'Customer throughput is 20% below plan.',
        cashFlowDecline: 24,
        liquidityHit: 35,
        event: 'Post-completion DSCR weakens.',
      },
      {
        id: 'priority',
        title: 'Priority challenge',
        summary: 'An existing lender contests rescue-facility priority.',
        cashFlowDecline: 8,
        liquidityHit: 55,
        event: 'Closing and draw certainty deteriorate.',
      },
    ],
    decisionSchema: {
      level: 'Special situations',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    },
    data: {
      sector: 'Infrastructure, Energy & Utilities',
      segment: 'Transportation Infrastructure',
      businessModel: 'Project / EPC / Concession',
      foundedYear: 2010,
      customerCount: 0,
      revenue: 390,
      otherIncome: 4,
      financeCosts: 18,
      depreciation: 24,
      profitBeforeTax: 69,
      taxExpense: 18,
      profitAfterTax: 51,
      exceptionalItems: 0,
      ocf: 91,
      totalCashCapex: 15,
      existingTermDebt: 0,
      utilizedWorkingCapital: 0,
      cashAndEquivalents: 38,
      otherBankBalances: 5,
      restrictedCash: 12,
      existingAnnualCashInterest: 0,
      yearOnePrincipalDue: 0,
      targetDebt: 600,
      targetTenor: 6,
      allocations: [
        {
          id: 'anchor-1',
          purpose: 'Project Development / Construction',
          amount: 600,
        },
      ],
      securityAvailability: 'Specific assets may be available',
      collateralType: 'Project contracts and rights',
      collateralLienStatus: 'Partly encumbered',
      pledgedCollateral: 1000,
      transactionScope: 'Specific project or asset',
      cashFlowSeparation: 'Clearly separable',
      spvStatus: 'Existing SPV',
      recoursePreference: 'Limited support preferred',
      projectStage: 'Construction / implementation',
      projectCost: 1050,
      projectSponsorEquity: 450,
      projectCfads: 125,
      contractedRevenuePct: 84,
      expectedCodMonths: 12,
      projectLifeYears: 24,
      historicalTrend: 'Cyclical / Project-Based (Lumpy)',
      enterpriseValue: 1400,
      financingPriority: 'Highest Funding Certainty',
      shareholderPreference: 'Limited Equity Participation is Acceptable',
      privateCreditObjective: 'Greater Structural Flexibility',
    },
  },
];

const SAMPLE_CASES = [
  ...BASE_SAMPLE_CASES.map((base) => {
    const enrichment = CASE_ENRICHMENTS[base.id] || {};
    return {
      ...base,
      ...enrichment,
      decisionSchema: {
        level: enrichment.difficulty || 'Intermediate',
        facilitySize: false,
        allocation: false,
        tenor: false,
        perimeter: false,
      },
      data: { ...base.data, ...(enrichment.data || {}) },
    };
  }),
  ...SPECIAL_SITUATION_CASES,
];

const INSIGHT_DICT = {
  Tenor: {
    title: 'Facility Tenor',
    concept: 'The total duration or lifespan of the loan facility.',
    impact: [
      'Determines the annual amortization burden (if not a bullet).',
      'A longer tenor stretches out the repayment schedule, preserving near-term cash flow.',
      'Requires a longer commitment to restrictive financial covenants.',
    ],
    rationale: [
      'Lenders prefer shorter tenors to reduce macroeconomic and execution risk.',
      'Beyond 5 years, pricing typically increases to compensate for duration risk.',
    ],
    market:
      'Standard private credit terms in the current market range from 3 to 5 years. Anything beyond 5 years is typically reserved for highly stable, infrastructure-like assets.',
    strategy:
      'If you need a longer tenor, offer the lender a higher mandatory cash sweep. It gives them comfort that if the company performs well, the loan will be paid down faster than the stated maturity.',
  },
  OID: {
    title: 'Original Issue Discount (OID)',
    concept:
      'The debt is issued at a price less than par (e.g., 98 cents on the dollar), but the borrower must repay 100 at maturity.',
    impact: [
      'Reduces Day 1 net cash received by the company.',
      'Mathematically increases the effective interest rate (IRR) over the life of the loan.',
    ],
    rationale: [
      'Boosts the Gross IRR mathematically.',
      'Allows the fund to hit high yield targets without increasing the stated cash-coupon, making the deal look optically cheaper on cash flow.',
    ],
    market:
      'Standard OIDs range from 97.0% to 99.0% in current private credit markets depending on the risk profile.',
    strategy:
      'OID is frequently traded against upfront fees during negotiations. If maximizing day-one liquidity is critical, try negotiating a higher PIK margin or a backend exit fee instead of upfront discounts.',
  },
  UpfrontFee: {
    title: 'Upfront Fee (Processing Fee)',
    concept:
      'A one-time cash fee paid by the borrower directly to the lender at the closing of the transaction.',
    impact: [
      'Deducted directly from the loan proceeds at funding.',
      'Reduces net liquidity available for operations or capex day-one.',
    ],
    rationale: [
      'Provides immediate cash return to the fund.',
      'Compensates the lender for the time, legal, and operational cost of underwriting and syndicating the deal.',
    ],
    market:
      'Typically ranges from 1.0% to 3.0% of the total facility amount for mid-market private credit.',
    strategy:
      'If the lender demands a 3% upfront fee but you need maximum day-one cash, negotiate to split the fee: 1.5% paid at closing, and 1.5% added to the backend Redemption Premium.',
  },
  Redemption: {
    title: 'Exit / Redemption Premium',
    concept:
      'A penalty or additional fee paid by the borrower upon the final repayment or maturity of the loan.',
    impact: [
      'Does not drain operating cash flow during the life of the loan.',
      'Creates a larger lump-sum balloon payment at exit.',
    ],
    rationale: [
      'Engineers the overall fund IRR upward without stressing the borrower’s day-to-day liquidity.',
      'Acts as a synthetic equity kicker.',
    ],
    market:
      'Common in venture debt or distressed situations, ranging from 2% to 10% of the principal.',
    strategy:
      'This is the most borrower-friendly way for a lender to juice their IRR. Offer a higher redemption premium in exchange for loosening restrictive operating covenants.',
  },
  WarrantKicker: {
    title: 'Warrant / Equity Kicker',
    concept:
      'An option given to the lender to purchase equity in the company at a set valuation.',
    impact: [
      'Highly dilutive to founders and existing shareholders upon exit or IPO.',
      'Does not require any cash outlay from the company.',
    ],
    rationale: [
      'Provides massive upside potential for the fund if the company succeeds, pushing their blended return into private PE territory (20%+).',
    ],
    market:
      'Standard in venture debt (1-3% coverage) and mezzanine/distressed credit (5-15%).',
    strategy:
      'Only use warrants as a last resort to bridge a massive valuation gap or to secure debt for an unproven, cash-burning business model.',
  },
  PIKPremium: {
    title: 'Payment-in-Kind (PIK) Interest',
    concept:
      'Interest that is capitalized (added to the principal balance) rather than paid in cash each month.',
    impact: [
      'Preserves vital operating cash flow.',
      'The principal grows exponentially over time, resulting in a much larger final repayment.',
    ],
    rationale: [
      'Allows lenders to charge 15%+ total interest rates without immediately bankrupting the borrower’s cash flow.',
      'Compounds their returns.',
    ],
    market:
      'Often structured as a toggle (e.g., 10% Cash + 4% PIK). Heavy PIK is standard in Mezzanine or deeply subordinated structures.',
    strategy:
      'If your business is a high-growth SaaS or turnaround, negotiate for maximum PIK to protect your runway, even if the total stated interest rate is higher.',
  },
  Amortization: {
    title: 'Repayment Profile (Amortization)',
    concept:
      'The schedule by which the primary principal of the loan must be paid back.',
    impact: [
      'Heavy amortization (like Straight Line) drains free cash flow, leaving less money for growth or dividends.',
      'A Bullet structure maximizes operational flexibility but creates refinancing risk at maturity.',
    ],
    rationale: [
      'Lenders prefer rapid amortization because it constantly de-risks their exposure as the loan balance drops.',
    ],
    market:
      'Standard institutional term loans often feature 1% annual amortization with a bullet at maturity. Mid-market loans may require 5-10% annual amortization.',
    strategy:
      'Fight aggressively for a Bullet or heavily back-ended (Step-Up) profile. Protecting your free cash flow is almost always worth accepting slightly tighter covenants.',
  },
  CallProtection: {
    title: 'Call Protection (Prepayment Penalty)',
    concept:
      'A fee charged to the borrower if they choose to refinance or pay off the loan early.',
    impact: [
      'Locks the borrower into the facility for a specific time period.',
      'Makes early refinancing very expensive.',
    ],
    rationale: [
      'Funds spend months underwriting a deal; if you refinance in 6 months, their IRR model breaks. Call protection guarantees them a minimum return hurdle.',
    ],
    market:
      'Standard structures include "103 / 102 / 101" (3% penalty Year 1, 2% Year 2, 1% Year 3), or "Make-Whole".',
    strategy:
      'If you are a high-growth company, negotiate a "Soft Call" (101 for 1 year). Avoid Make-Whole provisions unless the base pricing is incredibly cheap.',
  },
  DSRA: {
    title: 'Debt Service Reserve Account (DSRA)',
    concept:
      'A blocked bank account holding 3 to 6 months of upcoming interest and principal payments.',
    impact: [
      'Traps liquidity. If you borrow $10M and need a 1-Quarter DSRA, a portion of that cash is instantly locked in escrow.',
      'Cannot be used for operating expenses.',
    ],
    rationale: [
      'Provides a vital buffer for the lender. If the company hits a cash flow hiccup, the lender can draw from the DSRA while working out a solution, avoiding an immediate default.',
    ],
    market:
      'Extremely standard in project finance, real estate, and leveraged mid-market buyouts (typically 1 to 2 quarters).',
    strategy:
      'Always negotiate a "Step-Down" or Release trigger. For example: "The DSRA will be released back to the company if Net Leverage falls below 2.0x for two quarters."',
  },
  CashSweep: {
    title: 'Mandatory Cash Sweep',
    concept:
      'A covenant requiring the company to use a percentage of its Excess Cash Flow (ECF) to pay down the debt early.',
    impact: [
      'Accelerates debt paydown, overriding the standard amortization schedule.',
      'Restricts the ability to issue dividends or stockpile cash on the balance sheet.',
    ],
    rationale: [
      'Forces the borrower to de-lever in good times.',
      'Lenders do not want to see cash accumulating or leaving the company while their high-risk debt remains outstanding.',
    ],
    market:
      'Standard sweeps range from 50% to 75% of Excess Cash Flow (defined as Cash Flow from Operations minus Capex and baseline debt service).',
    strategy:
      'Negotiate "Step-Downs". If leverage drops, the sweep should reduce. Also, aggressively negotiate the definition of ECF to ensure you can deduct growth capex before the sweep applies.',
  },
  StepDown: {
    title: 'Performance Step-Downs',
    concept:
      'A negotiated mechanism where restrictive terms (like Cash Sweeps, DSRA, or Margins) automatically relax if the company performs well.',
    impact: [
      'Provides a clear path to greater operational flexibility and lower costs without needing to refinance.',
      'Aligns incentives between founder and lender.',
    ],
    rationale: [
      'Lenders are willing to drop protections if the risk profile fundamentally improves (e.g., leverage drops from 4.0x to 2.0x).',
    ],
    market:
      'Highly negotiated. Best-in-class CFOs always embed step-downs into their credit agreements.',
    strategy:
      'Structure your step-downs against Net Leverage rather than absolute EBITDA. It is the purest measure of risk and usually the easiest for credit committees to approve.',
  },
  MaxLev: {
    title: 'Max Leverage Covenant',
    concept:
      'A strict legal threshold dictating the maximum ratio of Total Debt to EBITDA the company can maintain.',
    impact: [
      'Breaching this ratio triggers an Event of Default, giving lenders the right to accelerate the loan or take control of the company.',
      'Restricts future borrowing.',
    ],
    rationale: [
      'The ultimate downside protection. It acts as a tripwire, allowing the lender to intervene before the company goes bankrupt.',
    ],
    market:
      'Typically set with 15% to 25% "headroom" above the company’s current or projected leverage profile.',
    strategy:
      'Never accept a "maintenance" covenant that is too tight. Fight for "incurrence" covenants only, or ensure EBITDA definitions allow for heavy add-backs.',
  },
  ICR: {
    title: 'Minimum Interest Cover Ratio (ICR)',
    concept:
      'A financial covenant requiring the company to generate EBITDA equal to a certain multiple of its interest expenses (e.g., 2.0x).',
    impact: [
      'Ensures the company always generates enough cash to pay the interest bill.',
      'Can be triggered if interest rates spike (in floating rate debt) or if earnings drop.',
    ],
    rationale: [
      'Proves ongoing debt serviceability. Leverage shows total debt size, but ICR proves the company can afford the monthly payments.',
    ],
    market: 'Most institutional funds require a minimum ICR of 2.0x to 2.5x.',
    strategy:
      'If your business has highly seasonal cash flows, negotiate to have this tested on a "Trailing Twelve Month (TTM)" basis to smooth out the bumps.',
  },
  Coupon: {
    title: 'Total Coupon / Interest Rate',
    concept:
      'The stated, headline interest rate charged on the outstanding loan balance.',
    impact: [
      'Directly dictates the monthly or quarterly cash interest expense of the business.',
    ],
    rationale: [
      'The baseline yield for the lender before factoring in fees, discounts, or exit premiums.',
    ],
    market:
      'Varies wildly based on risk, but private credit usually prices at a spread of 500 to 800 bps over the base rate (SOFR/MCLR).',
    strategy:
      'Don’t be blinded by the headline coupon. A 10% coupon with heavy fees and OID is mathematically more expensive than an 11% coupon with no fees.',
  },
  GrossIRR: {
    title: 'Gross Internal Rate of Return (IRR)',
    concept:
      'The true, mathematically complete annualized return the lender earns, factoring in all fees, discounts, and the timing of cash flows.',
    impact: [
      'This is the real cost of your capital.',
      'A deal with a low coupon but high Upfront Fees and OID will have a massive IRR.',
    ],
    rationale: [
      'Private credit funds are judged by their LPs (investors) strictly on IRR. They will manipulate fees and amortization schedules to hit their target 15-18% IRR hurdle.',
    ],
    market:
      'Senior Private Credit targets 10-14% IRR. Unitranche targets 14-17% IRR. Mezzanine/Sub-Debt targets 18-22%+ IRR.',
    strategy:
      'Always ask your advisor to calculate the Gross IRR of a term sheet. It is the only way to accurately compare two competing debt offers.',
  },
  FinancingPriority: {
    title: 'Financing Priority',
    concept: 'The primary optimization goal for the transaction.',
    impact: ['Dictates trade-offs between cost, speed, and covenants.'],
    rationale: [
      'Lenders design term sheets differently depending on what the founder values most. Fast execution usually commands a premium.',
    ],
    market: 'Standard underwriting context.',
    strategy:
      'Be honest about what matters most. Squeezing cost usually means accepting tighter covenants.',
  },
  ShareholderPreference: {
    title: 'Shareholder Dilution',
    concept: 'Appetite for equity-linked debt structures.',
    impact: ['Determines if warrants, OCDs, or convertibles are viable.'],
    rationale: [
      'Highly subordinated or risky debt requires venture-like returns, which are often bridged via equity kickers.',
    ],
    market: 'Venture Debt and Mezzanine rely heavily on this.',
    strategy:
      'Only accept dilution if the debt provides massive enterprise value growth that offsets the slice.',
  },
  PrivateCreditObjective: {
    title: 'Private Credit Objective',
    concept:
      'Why alternative capital is being considered over traditional banks.',
    impact: ['Signals the desired relationship dynamic to the committee.'],
    rationale: [
      'Funds want to know if they are acting as a gap-filler or a strategic, long-term partner.',
    ],
    market:
      'Private credit is increasingly replacing bank syndicates for speed and flex.',
    strategy:
      'Position the fund as a growth partner rather than a lender of last resort.',
  },
  LenderRestrictions: {
    title: 'Existing Lender Restrictions',
    concept: 'Covenants in current debt preventing new borrowing.',
    impact: ['May force new debt to be unsecured or deeply subordinated.'],
    rationale: [
      'Lenders must understand their position in the capital stack and intercreditor dynamics.',
    ],
    market:
      'Common issue in growth companies with existing working capital lines.',
    strategy:
      'Always request carve-outs for permitted debt in your existing bank facilities.',
  },
  FinancialDocuments: {
    title: 'Financial Documents',
    concept: 'The statements used to prefill and validate the assessment.',
    impact: [
      'A latest complete year can support a preliminary screen.',
      'Additional historical and interim periods improve trend analysis and reduce reliance on assumptions.',
    ],
    rationale: [
      'Lenders normally compare historical performance with the most recent trading period rather than relying on one point in time.',
    ],
    market:
      'A complete financial pack contains the balance sheet, profit and loss statement, cash-flow statement and notes. An auditor opinion page on its own is not sufficient.',
    strategy:
      'Upload the best information readily available. The app should identify gaps and lower the authority of the conclusion rather than prevent exploration.',
  },
  OperatingCashFlow: {
    title: 'Reported Operating Cash Flow',
    concept:
      'Cash generated by normal operations, usually shown in the cash-flow statement after working-capital movements and cash taxes.',
    impact: [
      'Forms the starting point for repayment cash flow when this method is selected.',
    ],
    rationale: [
      'It is harder to service debt from accounting profit that does not convert into cash.',
    ],
    market:
      'Use the latest full-year or trailing-period figure and confirm whether exceptional movements distort it.',
    strategy:
      'Do not subtract cash taxes or working-capital movements again if they are already included in reported operating cash flow.',
  },
  MaintenanceCapex: {
    title: 'Maintenance Capital Expenditure',
    concept:
      'Spending required to keep existing assets and operations functioning, excluding expansion projects.',
    impact: [
      'Reduces the cash genuinely available for interest and principal.',
    ],
    rationale: [
      'Deferring essential maintenance can temporarily overstate repayment capacity.',
    ],
    market:
      'It may be disclosed in management information rather than as a separate financial-statement line.',
    strategy:
      'If unavailable, use a clearly identified estimate and test a higher downside case.',
  },
  WorkingCapitalInvestment: {
    title: 'Working-Capital Investment',
    concept:
      'Cash absorbed when receivables and inventory grow faster than supplier and other operating credit.',
    impact: [
      'A positive investment reduces cash available for debt service; a release increases it.',
    ],
    rationale: [
      'Fast growth can consume cash even while revenue and EBITDA rise.',
    ],
    market:
      'It can usually be derived from the cash-flow statement or changes in operating balance-sheet accounts.',
    strategy:
      'Use this field only in an EBITDA-to-cash bridge; reported operating cash flow normally already includes it.',
  },
  CashTaxes: {
    title: 'Cash Taxes',
    concept:
      'Taxes actually paid in cash during the period, which may differ from the tax expense reported in the profit and loss statement.',
    impact: [
      'Reduces cash available for debt service in an EBITDA-to-cash bridge.',
    ],
    rationale: [
      'Accounting tax charges do not always reflect the timing of cash payments.',
    ],
    market:
      'Usually sourced from the cash-flow statement, tax workings or management accounts.',
    strategy:
      'Do not subtract this separately when using reported operating cash flow if it is already included there.',
  },
  CFADS: {
    title: 'Cash Available for Debt Service (CFADS)',
    concept:
      'Cash generated by a project or ring-fenced asset after necessary operating costs and taxes, but before interest and principal on the proposed financing.',
    impact: [
      'Supports project DSCR and the indicative amount of debt the ring-fenced cash flow can carry.',
    ],
    rationale: [
      'In project finance, lenders rely primarily on the project cash flow rather than the sponsor’s consolidated EBITDA.',
    ],
    market:
      'CFADS normally comes from a project financial model and requires validation of operating, tax, contract and reserve assumptions.',
    strategy:
      'If no reliable project model exists, keep the route comparative and avoid presenting a precise SPV debt capacity.',
  },
  DownsideCashFlow: {
    title: 'Downside Cash-Flow Reduction',
    concept:
      'A simple stress assumption applied to the repayment cash flow to test how much headroom remains if performance weakens.',
    impact: [
      'Changes downside coverage and whether the proposed structure remains workable.',
    ],
    rationale: [
      'Lenders assess repayment under both a base case and an adverse case.',
    ],
    market:
      'The appropriate stress depends on sector volatility, customer concentration, contracts and operating leverage.',
    strategy:
      'Treat the default percentage as an assumption, not a forecast, and revise it when better evidence is available.',
  },
  MinimumOperatingCash: {
    title: 'Minimum Operating Cash',
    concept:
      'The cash buffer management believes the business must retain to operate safely.',
    impact: [
      'Prevents the model from treating every rupee of balance-sheet cash as available for debt service.',
    ],
    rationale: [
      'Lenders test liquidity headroom as well as accounting profitability.',
    ],
    market:
      'Often based on payroll, supplier cycles, seasonality and committed operating expenditure.',
    strategy:
      'Use a board-approved liquidity floor where available; otherwise flag the number as a management estimate.',
  },
  ExistingDebtService: {
    title: 'Existing Debt Service',
    concept:
      'Cash interest and scheduled principal that must be paid on debt already outstanding during the next twelve months.',
    impact: ['Reduces the cash available to service the proposed facility.'],
    rationale: [
      'A new lender assesses all debt obligations, not only the new loan.',
    ],
    market:
      'The most reliable source is a current lender statement or debt maturity schedule.',
    strategy:
      'If the split is unavailable, provide the total next-twelve-month payment and flag it for confirmation.',
  },
  TransactionPerimeter: {
    title: 'Funding Perimeter',
    concept:
      'Whether the borrowing relies on the whole operating company or on a separately identifiable project, acquisition or asset.',
    impact: [
      'Determines whether an OpCo, HoldCo or project-SPV route deserves comparison.',
    ],
    rationale: [
      'A separate vehicle is useful only when ownership, contracts and cash flows can be meaningfully ring-fenced.',
    ],
    market:
      'The borrower or adviser usually proposes an initial structure and the lender determines what perimeter and support it will accept.',
    strategy:
      'SPV financing is a conditional structuring route, not a use of funds and not automatically an off-balance-sheet solution.',
  },
  CollateralType: {
    title: 'Security Type and Availability',
    concept:
      'The assets or rights that may support recovery if the borrower cannot repay as agreed.',
    impact: [
      'Asset type, value and existing liens affect lender protection differently.',
    ],
    rationale: [
      'A headline collateral value is not meaningful without knowing what the asset is and whether another lender already has security over it.',
    ],
    market:
      'Receivables, inventory, equipment, property, financial assets, project rights and share pledges can support very different structures.',
    strategy:
      'If the position is unknown, say so. The preliminary assessment should not assume assets are freely available.',
  },
};

const MODAL_DICT = {
  'Venture Debt + Warrants': {
    icon: <Icons.TrendingUp size={24} className="text-indigo-500" />,
    title: 'Venture Debt + Warrants',
    desc: 'A specialized debt instrument for high-growth, asset-light tech startups.',
    mechanism:
      'Underwritten based on Annual Recurring Revenue (ARR) and VC backing rather than historical EBITDA. Lenders take a small equity kicker (Warrants) to compensate for the high cash-burn risk.',
    scenario:
      'Used to extend cash runway to the next valuation milestone without taking massive equity dilution.',
  },
  'Revenue-Based Financing': {
    icon: <Icons.DollarSign size={24} className="text-emerald-500" />,
    title: 'Revenue-Based Financing (RBF)',
    desc: 'Non-dilutive growth capital repaid as a fixed percentage of future top-line revenue.',
    mechanism:
      'There is no fixed interest rate or maturity date. The lender simply takes a percentage (e.g., 5%) of monthly cash receipts until a predetermined return multiple (e.g., 1.5x MOIC) is reached.',
    scenario:
      'Ideal for SaaS or E-commerce brands with high gross margins but unpredictable month-to-month growth.',
  },
  'Senior Working Capital': {
    icon: <Icons.Building2 size={24} className="text-blue-500" />,
    title: 'Senior Working Capital Line',
    desc: 'A revolving credit facility strictly tied to short-term assets.',
    mechanism:
      'Priced very cheaply but heavily covenanted. The loan amount dynamically scales based on a monthly borrowing base of eligible accounts receivable and inventory.',
    scenario:
      'Used purely for day-to-day liquidity and bridging the gap between paying suppliers and collecting from customers.',
  },
  'Senior Secured Term Loan': {
    icon: <Icons.ShieldAlert size={24} className="text-slate-500" />,
    title: 'Senior Secured Term Loan',
    desc: 'The standard, cheapest form of institutional debt.',
    mechanism:
      'Sits at the very top of the capital stack with a first-priority claim on all company assets. Priced tightly based on historical cash flows and collateral value.',
    scenario:
      'Used for stable, cash-generating businesses looking for long-term capital for CAPEX or acquisitions.',
  },
  'Term Debt + OCDs': {
    icon: <Icons.Layers size={24} className="text-purple-500" />,
    title: 'Term Debt + OCDs',
    desc: 'A bifurcated structure utilizing Optionally Convertible Debentures.',
    mechanism:
      'Maxes out senior debt capacity, then layers subordinated OCDs on top. OCDs carry a higher interest rate and give the lender the option to convert their debt into equity if the company performs exceptionally well. Forced to be a Bullet repayment to protect operating liquidity.',
    scenario:
      'Used when a sponsor wants to maximize leverage beyond senior bank limits to boost their own equity IRR.',
  },
  'Unitranche Facility': {
    icon: <Icons.Layers size={24} className="text-indigo-500" />,
    title: 'Unitranche Facility',
    desc: 'A hybrid loan structure that combines senior and subordinated debt into one single tranche.',
    mechanism:
      'Instead of managing two separate credit agreements and inter-creditor dynamics, the borrower receives one blended interest rate and one set of covenants from a single private credit fund.',
    scenario:
      'Ideal for sponsor-backed buyouts or mid-market companies seeking fast execution and maximum flexibility without the complexity of syndicated debt.',
  },
  'Asset-Backed Revolver': {
    icon: <Icons.Lock size={24} className="text-cyan-500" />,
    title: 'Asset-Backed Revolver (ABL)',
    desc: 'A revolving line of credit secured directly by unencumbered hard assets.',
    mechanism:
      'Provides a flexible draw-down and repayment structure. The limit is determined by applying a steep haircut (e.g., 50%) to the appraised value of the pledged collateral.',
    scenario:
      'Best for asset-heavy manufacturers that have cyclical cash flows but own their own plants and machinery.',
  },
  'Senior Secured NCD': {
    icon: <Icons.CheckCircle size={24} className="text-emerald-500" />,
    title: 'Senior Secured NCD',
    desc: 'Non-Convertible Debentures used primarily in project finance.',
    mechanism:
      'A publicly or privately placed bond that offers a fixed coupon. In Real Estate, it often includes a moratorium on interest payments for the first 1-2 years while the project is under construction.',
    scenario:
      'Standard instrument for financing the core construction costs of a commercial or residential development.',
  },
  'Mezzanine Debt': {
    icon: <Icons.AlertTriangle size={24} className="text-amber-500" />,
    title: 'Mezzanine / Subordinated Debt',
    desc: 'Highly subordinated capital sitting right above equity.',
    mechanism:
      'Takes the highest risk of any debt instrument. Usually priced with a massive blended IRR (18%+) via a mix of cash interest, PIK (Payment-in-Kind), and equity warrants.',
    scenario:
      'Used as gap funding when a project is over budget or when a developer has exhausted all senior bank limits.',
  },
  'Inventory Funding': {
    icon: <Icons.BarChart size={24} className="text-indigo-500" />,
    title: 'Inventory Funding Line',
    desc: 'A highly secure, short-term facility tied to physical inventory or pre-sales.',
    mechanism:
      'Lenders provide capital directly against the value of completed, unsold inventory or against the escrow receivables of pre-sold units.',
    scenario:
      'Used to unlock trapped liquidity from completed projects to fund the next development cycle.',
  },
  'Subordinated NCDs': {
    icon: <Icons.TrendingUp size={24} className="text-rose-500" />,
    title: 'Tier-II Subordinated NCDs',
    desc: 'Tier-II debt capital specifically for NBFCs and financial institutions.',
    mechanism:
      'Subordinated to senior lenders, meaning it counts as quasi-equity for regulatory capital adequacy ratios (CRAR). Requires a significantly higher yield.',
    scenario:
      'Used by aggressive NBFCs to bolster their capital base so they can raise even more senior debt to rapidly expand their loan book.',
  },
  'Securitization (PTC)': {
    icon: <Icons.Settings size={24} className="text-blue-500" />,
    title: 'Securitization (PTCs)',
    desc: 'Pass-Through Certificates (Off-balance sheet financing).',
    mechanism:
      'The NBFC bundles a pool of its existing, high-quality loans and sells them directly to an institutional investor. The investor receives the cash flows, and the NBFC gets instant liquidity.',
    scenario:
      'Used to free up balance sheet space and lock in a fixed spread, transferring the loan default risk entirely to the buyer.',
  },
};

// ============================================================================
// [SECTION 3: UI HELPER COMPONENTS]
// ============================================================================
const FormField = ({
  label,
  value,
  setValue,
  prefix = '',
  suffix = '',
  rightLabel = '',
}) => (
  <div className="relative z-20 mb-6">
    <div className="flex justify-between items-end mb-2 w-full">
      <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100">
        {label}
      </span>
      {rightLabel && (
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          {rightLabel}
        </span>
      )}
    </div>
    <div className="flex items-center bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 focus-within:border-indigo-500 transition-colors shadow-inner">
      {prefix && (
        <span className="text-slate-400 dark:text-slate-500 font-mono text-base mr-2">
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
        className="w-full bg-transparent font-mono text-indigo-700 dark:text-indigo-400 text-base font-bold outline-none appearance-none"
      />
      {suffix && (
        <span className="text-slate-400 dark:text-slate-500 font-mono text-base ml-2">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

const LabelWithTooltip = ({
  label,
  tooltip,
  colorClass = 'text-slate-900 dark:text-slate-100',
  sizeClass = 'text-sm',
}) => (
  <div className="flex items-center gap-1.5 group/tt relative w-max cursor-help">
    <span className={`${sizeClass} font-semibold block ${colorClass}`}>
      {label}
    </span>
    <Icons.Info
      size={14}
      className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 transition-colors"
    />
    <div className="absolute bottom-full left-0 mb-2 opacity-0 invisible group-hover/tt:opacity-100 group-hover/tt:visible w-64 bg-slate-800 text-slate-100 text-xs p-3 rounded-lg shadow-xl z-[9999] pointer-events-none border border-slate-700 leading-relaxed text-left transition-all duration-200">
      {tooltip}
    </div>
  </div>
);

const SelectionGrid = ({ options, value, onChange }) => (
  <div className="flex flex-wrap gap-3 mt-3">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all border text-left flex-grow sm:flex-grow-0 ${
          value === opt
            ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm dark:bg-indigo-900/30 dark:border-indigo-400 dark:text-indigo-300'
            : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-200 shadow-sm dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-800'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
              value === opt
                ? 'border-indigo-500 bg-indigo-500 dark:border-indigo-400 dark:bg-indigo-400'
                : 'border-slate-300 dark:border-slate-600'
            }`}
          >
            {value === opt && (
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            )}
          </div>
          <span className="leading-snug">{opt}</span>
        </div>
      </button>
    ))}
  </div>
);

const LabelWithCoach = ({
  label,
  insightKey,
  onOpenInsight,
  colorClass = 'text-slate-900 dark:text-slate-100',
  sizeClass = 'text-sm',
}) => (
  <div
    className="flex items-center gap-1.5 relative group/label cursor-pointer w-max"
    onClick={(e) => {
      e.stopPropagation();
      if (onOpenInsight && insightKey) onOpenInsight(insightKey);
    }}
  >
    <span className={`${sizeClass} font-semibold block ${colorClass}`}>
      {label}
    </span>
    {insightKey && (
      <button className="text-slate-400 hover:text-indigo-500 transition-colors focus:outline-none focus:text-indigo-600">
        <Icons.Info size={14} />
      </button>
    )}
  </div>
);

const DealSlider = ({
  label,
  insightKey,
  onOpenInsight,
  onAutoInsight,
  min,
  max,
  step,
  value,
  onCommit,
  suffix,
  baseline,
  counter,
  isLocked,
}) => {
  const [localVal, setLocalVal] = useState(value);
  useEffect(() => {
    setLocalVal(value);
  }, [value]);

  const getMarkerStyle = (val) => {
    const percent = Math.max(
      0,
      Math.min(100, ((val - min) / (max - min)) * 100)
    );
    return { left: `calc(${percent}% + ${2 - (percent / 100) * 4}px)` };
  };

  const handleInteract = () => {
    if (onAutoInsight && insightKey) onAutoInsight(insightKey);
  };

  return (
    <div className="relative w-full pt-4 pb-2 group/row deal-slider-bounds">
      <div className="flex justify-between items-end mb-2 w-full">
        <LabelWithCoach
          label={label}
          insightKey={insightKey}
          onOpenInsight={onOpenInsight}
          colorClass="text-slate-600 dark:text-slate-300 text-xs font-semibold"
        />
        <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
          {isLocked ? `${value.toFixed(1)}${suffix}` : `${localVal}${suffix}`}
        </span>
      </div>
      <div className="relative h-6 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={isLocked ? value : localVal}
          disabled={isLocked}
          onChange={(e) => {
            setLocalVal(Number(e.target.value));
            handleInteract();
          }}
          onMouseUp={(e) => onCommit(Number(e.target.value))}
          onTouchEnd={(e) => onCommit(Number(e.target.value))}
          onPointerDown={handleInteract}
          className={`absolute w-full sleek-range z-20 ${
            isLocked ? 'opacity-50 cursor-not-allowed' : ''
          } ${counter !== undefined && counter !== null ? 'red-thumb' : ''}`}
        />
        {baseline !== undefined && baseline !== null && (
          <div
            className="absolute -top-1.5 z-10 pointer-events-none transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-400"
            style={getMarkerStyle(baseline)}
          ></div>
        )}
        {counter !== undefined && counter !== null && (
          <div
            className="absolute -top-1.5 z-30 pointer-events-none transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-rose-500"
            style={getMarkerStyle(counter)}
          ></div>
        )}
      </div>
    </div>
  );
};

// Docked Insight Drawer Component
const InsightDrawer = ({
  isOpen,
  onClose,
  insightKey,
  visible,
  onOpen,
  context = 'inputs',
}) => {
  const insight = INSIGHT_DICT[insightKey] || {};
  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 right-0 h-screen z-[99990] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center no-print ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* The Tab */}
      <div
        onClick={isOpen ? onClose : onOpen}
        className={`absolute right-full top-[20%] flex flex-col items-center justify-center cursor-pointer transition-colors shadow-[-4px_0_12px_rgba(0,0,0,0.15)] rounded-l-xl overflow-hidden ${
          isOpen
            ? 'w-12 h-12 bg-white dark:bg-slate-900 border-y border-l border-slate-200 dark:border-slate-800'
            : 'w-10 h-32 bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {isOpen ? (
          <Icons.X
            size={20}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 py-3">
            <Icons.Lightbulb size={16} className="text-indigo-100" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.2em] text-white">
              COACH
            </span>
          </div>
        )}
      </div>

      {/* The Drawer Content */}
      <div className="w-80 md:w-96 bg-white dark:bg-slate-900 h-screen shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col insight-drawer-bounds">
        <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar">
          {insightKey ? (
            <div className="space-y-6 animate-fade-in-up">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                  <Icons.TrendingUp size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {context === 'assess'
                      ? 'Assessment Coach'
                      : context === 'simulate'
                      ? 'Negotiation Coach'
                      : 'Deal Coach'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {insight.title}
                </h2>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  What is this?
                </h4>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {insight.concept}
                </p>
              </div>
              {insight.impact && (
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Company Impact
                  </h4>
                  <ul className="space-y-2">
                    {insight.impact.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {insight.rationale && (
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Why Credit Funds Care
                  </h4>
                  <ul className="space-y-2">
                    {insight.rationale.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {insight.market && (
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Typical Market Practice
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {insight.market}
                  </p>
                </div>
              )}
              {insight.strategy && (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                  <h4 className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">
                    Negotiation Strategy
                  </h4>
                  <p className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed italic">
                    {insight.strategy}
                  </p>
                </div>
              )}
            </div>
          ) : context === 'assess' ? (
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                  <Icons.Lightbulb size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Assessment Coach
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Read the conclusion before the numbers
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                The assessment separates what appears financeable from what
                still needs evidence. It is a preliminary view, not a lender
                approval.
              </p>
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Use this view to understand
                </h4>
                {[
                  'The principal constraint on the transaction',
                  'Whether OpCo, HoldCo or SPV funding deserves consideration',
                  'Which assumptions materially influence the conclusion',
                  'What information should be added before speaking to lenders',
                ].map((x) => (
                  <div
                    key={x}
                    className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-indigo-500">•</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 text-sm text-amber-900 dark:text-amber-200">
                Lower information coverage does not mean the credit is weak. It
                means the conclusion should carry less authority.
              </div>
            </div>
          ) : context === 'simulate' ? (
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                  <Icons.Lightbulb size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Negotiation Coach
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Negotiate the package, not one term
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Draft changes freely. A lender response is created only when you
                submit the package, so the ledger records genuine rounds rather
                than every slider movement.
              </p>
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Good negotiation discipline
                </h4>
                {[
                  'Identify the borrower objective behind the request',
                  'Watch cash burden, lender return and downside protection together',
                  'Expect a concession to be exchanged for economics, control or protection',
                  'Do not try to solve an affordability failure through price alone',
                ].map((x) => (
                  <div
                    key={x}
                    className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-indigo-500">•</span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <Icons.Lightbulb
                size={48}
                className="text-indigo-300 dark:text-indigo-700"
              />
              <p className="text-sm text-slate-500 font-medium">
                Use the information icons to understand why each input or term
                matters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// [SECTION 4: MAIN APP STATE]
// ============================================================================
const App = () => {
  const [currency, setCurrency] = useState('INR');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return (
      saved ||
      (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    );
  });
  const [activeView, setActiveView] = useState('landing');
  const [assessmentMode, setAssessmentMode] = useState('real');
  const [selectedSampleId, setSelectedSampleId] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [workspaceStage, setWorkspaceStage] = useState('assess');
  const [showFullEconomics, setShowFullEconomics] = useState(false);
  const [selectedStressScenario, setSelectedStressScenario] = useState(null);
  const [selectedStabilisation, setSelectedStabilisation] = useState(null);
  const [structureRationale, setStructureRationale] = useState([]);
  const [learnerStructureSelected, setLearnerStructureSelected] =
    useState(false);
  const [activeNegotiationTerm, setActiveNegotiationTerm] = useState('tenor');

  // INPUTS PAGE STATE
  const [activeInputStep, setActiveInputStep] = useState('about');

  const scrollToStep = (stepId) => {
    setActiveInputStep(stepId);
    const element = document.getElementById(stepId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (activeView !== 'inputs' || assessmentMode !== 'real') return undefined;
    const ids = ['about', 'goals', 'financials', 'security', 'review'];
    const updateActiveStep = () => {
      const anchor = 190;
      let current = ids[0];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= anchor) current = id;
      });
      setActiveInputStep(current);
    };
    updateActiveStep();
    window.addEventListener('scroll', updateActiveStep, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveStep);
  }, [activeView, assessmentMode]);

  // DEAL COACH STATE
  const [activeInsight, setActiveInsight] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [seenInsights, setSeenInsights] = useState(() => {
    try {
      const saved = localStorage.getItem('scp_seen_insights');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  useEffect(() => {
    setActiveInsight(null);
    setIsDrawerOpen(false);
  }, [workspaceStage]);

  // COMPANY PROFILE FACTS
  const [sector, setSector] = useState('Consumer & Retail');
  const [segment, setSegment] = useState('Consumer Products & D2C');
  const [businessModel, setBusinessModel] = useState('Consumer / Retail');
  const [foundedYear, setFoundedYear] = useState(2018);
  const [customerCount, setCustomerCount] = useState(15000);
  const [financialEntryMode, setFinancialEntryMode] = useState('upload');
  const [financialPeriodCoverage, setFinancialPeriodCoverage] = useState(
    'Latest complete financial year'
  );
  const [financialFiles, setFinancialFiles] = useState([]);
  const [showManualFinancials, setShowManualFinancials] = useState(false);
  const [manualStatementConfirmed, setManualStatementConfirmed] =
    useState(false);
  const [financialReviewConfirmed, setFinancialReviewConfirmed] =
    useState(false);
  const [showAdvancedAdjustments, setShowAdvancedAdjustments] = useState(false);

  useEffect(() => {
    if (
      SECTOR_DATA[sector] &&
      SECTOR_DATA[sector].length > 0 &&
      !SECTOR_DATA[sector].includes(segment)
    ) {
      setSegment(SECTOR_DATA[sector][0]);
    }
  }, [sector, segment]);

  const currentArchetype = useMemo(() => {
    if (businessModel === 'Lending / Financial Spread') return 'NBFC';
    if (businessModel === 'Subscription / SaaS') return 'SAAS';
    if (businessModel === 'Real Estate Development') return 'REAL_ESTATE';
    if (businessModel === 'Project / EPC / Concession') return 'PROJECT';
    return 'TRADITIONAL';
  }, [businessModel]);

  // EARNINGS & CAPITALIZATION FACTS
  const [historicalTrend, setHistoricalTrend] = useState(
    'Not established from available history'
  );
  const [revenue, setRevenue] = useState(150.5);
  const [otherIncome, setOtherIncome] = useState(1.5);
  const [financeCosts, setFinanceCosts] = useState(6.0);
  const [depreciationAmortization, setDepreciationAmortization] = useState(8.0);
  const [profitBeforeTax, setProfitBeforeTax] = useState(20.0);
  const [taxExpense, setTaxExpense] = useState(5.0);
  const [profitAfterTax, setProfitAfterTax] = useState(15.0);
  const [exceptionalItems, setExceptionalItems] = useState(0.0);
  const [addBacks, setAddBacks] = useState(0.0);
  const [ocf, setOcf] = useState(28.5);
  const [totalCashCapex, setTotalCashCapex] = useState(3.0);
  const [arr, setArr] = useState(85.0);
  const [grossMargin, setGrossMargin] = useState(82.0);
  const [aum, setAum] = useState(500.0);
  const [nim, setNim] = useState(8.5);
  const [gnpa, setGnpa] = useState(2.1);
  const [enterpriseValue, setEnterpriseValue] = useState(245.0);
  const [existingTermDebt, setExistingTermDebt] = useState(0.0);
  const [utilizedWorkingCapital, setUtilizedWorkingCapital] = useState(0.0);
  const [cashAndEquivalents, setCashAndEquivalents] = useState(15.0);
  const [otherBankBalances, setOtherBankBalances] = useState(0.0);
  const [restrictedCash, setRestrictedCash] = useState(0.0);
  const [totalEquity, setTotalEquity] = useState(90.0);
  const [tradeReceivables, setTradeReceivables] = useState(24.0);
  const [inventory, setInventory] = useState(18.0);
  const [tradePayables, setTradePayables] = useState(16.0);
  const [propertyPlantEquipment, setPropertyPlantEquipment] = useState(72.0);
  const [existingAnnualCashInterest, setExistingAnnualCashInterest] =
    useState(0.0);
  const [yearOnePrincipalDue, setYearOnePrincipalDue] = useState(0.0);
  const [downsideCashFlowDecline, setDownsideCashFlowDecline] = useState(20.0);
  const baseEbitda = Math.max(
    0,
    Number(profitBeforeTax || 0) +
      Number(financeCosts || 0) +
      Number(depreciationAmortization || 0) -
      Number(otherIncome || 0) +
      Number(exceptionalItems || 0)
  );
  const unrestrictedCash = Math.max(
    0,
    Number(cashAndEquivalents || 0) +
      Number(otherBankBalances || 0) -
      Number(restrictedCash || 0)
  );
  const estimatedCashOperatingCosts = Math.max(
    0,
    Number(revenue || 0) +
      Number(otherIncome || 0) -
      Number(profitBeforeTax || 0) -
      Number(financeCosts || 0) -
      Number(depreciationAmortization || 0)
  );
  const minimumOperatingCash = estimatedCashOperatingCosts / 12;

  // PHASE 3: STRATEGIC FINANCING REQUEST (MULTI-OBJECTIVE)
  const [targetDebt, setTargetDebt] = useState(200.0);
  const [targetTenor, setTargetTenor] = useState(5);

  const [allocations, setAllocations] = useState([
    { id: '1', purpose: 'Sales / Market Expansion', amount: 120.0 },
  ]);

  // Derived values for the allocation table
  const allocatedAmount = allocations.reduce(
    (sum, a) => sum + (Number(a.amount) || 0),
    0
  );
  const unallocatedAmount = Math.max(0, targetDebt - allocatedAmount);

  // For backward compatibility with the current engine until Step 2, we determine the primary objective
  const financingObjective =
    allocations.length > 0
      ? allocations.reduce((prev, current) =>
          (Number(prev.amount) || 0) > (Number(current.amount) || 0)
            ? prev
            : current
        ).purpose
      : 'General Corporate Purposes';

  const [financingPriority, setFinancingPriority] = useState(
    'Balanced Across All Objectives'
  );
  const [shareholderPreference, setShareholderPreference] = useState(
    'Avoid Equity Dilution Wherever Possible'
  );
  const [privateCreditObjective, setPrivateCreditObjective] = useState(
    'Still Evaluating Financing Alternatives'
  );
  const [lenderRestrictions, setLenderRestrictions] = useState('Unsure');
  const [transactionScope, setTransactionScope] = useState(
    'Business-wide funding'
  );
  const [showFundingPerimeter, setShowFundingPerimeter] = useState(false);
  const [cashFlowSeparation, setCashFlowSeparation] = useState('Not sure yet');
  const [spvStatus, setSpvStatus] = useState('No SPV / not decided');
  const [recoursePreference, setRecoursePreference] = useState('Not sure yet');
  const [projectStage, setProjectStage] = useState('Development / planning');
  const [projectCost, setProjectCost] = useState(300.0);
  const [projectSponsorEquity, setProjectSponsorEquity] = useState(75.0);
  const [projectCfads, setProjectCfads] = useState(35.0);
  const [contractedRevenuePct, setContractedRevenuePct] = useState(70.0);
  const [expectedCodMonths, setExpectedCodMonths] = useState(18);
  const [projectLifeYears, setProjectLifeYears] = useState(15);

  const [isSponsorBacked, setIsSponsorBacked] = useState(true);
  const [pledgedCollateral, setPledgedCollateral] = useState(125.0);
  const [securityAvailability, setSecurityAvailability] = useState(
    'Specific assets may be available'
  );
  const [collateralType, setCollateralType] = useState('Mixed collateral');
  const [collateralLienStatus, setCollateralLienStatus] =
    useState('Not sure yet');

  // OUTPUT SANDBOX STATE
  const [tenor, setTenor] = useState(5);
  const [oid, setOid] = useState(98.0);
  const [upfrontFee, setUpfrontFee] = useState(2.0);
  const [pikPremium, setPikPremium] = useState(0.0);
  const [redemptionPremium, setRedemptionPremium] = useState(0.0);
  const [amortization, setAmortization] = useState('Bullet (100% at Maturity)');
  const [maxLeverageCov, setMaxLeverageCov] = useState(4.5);
  const [minIcrCov, setMinIcrCov] = useState(2.0);
  const [dsra, setDsra] = useState('1-Quarter Reserve');
  const [hasDsraStepDown, setHasDsraStepDown] = useState(false);
  const [cashSweep, setCashSweep] = useState(50.0);
  const [hasSweepStepDown, setHasSweepStepDown] = useState(false);
  const [sweepStepDownTo, setSweepStepDownTo] = useState(25.0);
  const [sweepStepDownTrigger, setSweepStepDownTrigger] = useState(
    'Net Leverage < 3.0x'
  );
  const [callProtection, setCallProtection] = useState('101 (1-Yr Soft Call)');
  const [equityKicker, setEquityKicker] = useState(0);

  // LIVE NEGOTIATION STATE — deliberately isolated from frozen underwriting baselines.
  const [liveNegotiationTerms, setLiveNegotiationTerms] = useState(null);
  const [draftNegotiationTerms, setDraftNegotiationTerms] = useState(null);
  const [acceptedNegotiationTerms, setAcceptedNegotiationTerms] =
    useState(null);
  const [negotiationHistory, setNegotiationHistory] = useState([]);
  const [lenderResponse, setLenderResponse] = useState(null);
  const [conversionValuation, setConversionValuation] = useState(245.0);

  const [bridgeToast, setBridgeToast] = useState(null);
  const previousNetCash = useRef(null);

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ============================================================================
  // [SECTION 5: CORE MATH ENGINE & INSTITUTIONAL LOGIC]
  // ============================================================================
  // Baseline underwriting is intentionally isolated from the negotiation sandbox.
  // Nothing in the live borrower/lender negotiation state is a dependency here.
  // ============================================================================

  const metrics = useMemo(() => {
    try {
      const num = (v) => Math.max(0, Number(v) || 0);
      const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
      const str = (v) => String(v ?? '').toLowerCase();

      // ------------------------------------------------------------------------
      // 0. BORROWER METRICS
      // ------------------------------------------------------------------------
      let adjustedEbitda = 0;
      let primaryMetricLabel = 'Revenue';
      let primaryMetricValue = num(revenue);
      let baselineOcf = num(ocf);

      if (currentArchetype === 'NBFC') {
        adjustedEbitda = num(aum) * (num(nim) / 100) * (1 - num(gnpa) / 100);
        primaryMetricLabel = 'AUM';
        primaryMetricValue = num(aum);
        baselineOcf = num(ocf) || adjustedEbitda;
      } else if (currentArchetype === 'SAAS') {
        adjustedEbitda = num(arr) * (num(grossMargin) / 100) * 0.4;
        primaryMetricLabel = 'ARR';
        primaryMetricValue = num(arr);
        baselineOcf = num(ocf) || adjustedEbitda;
      } else {
        adjustedEbitda = num(baseEbitda) + num(addBacks);
      }
      adjustedEbitda = Math.max(0, adjustedEbitda);

      const isSpvAssessment =
        transactionScope === 'Specific project or asset' ||
        transactionScope === 'Acquisition vehicle';
      // Reported operating cash flow already incorporates cash taxes and working-capital movements.
      // We therefore deduct reported cash capex once and never ask the user to choose a methodology.
      const corporateCashAfterReinvestment = Math.max(
        0,
        baselineOcf - num(totalCashCapex)
      );
      const debtServiceCash =
        isSpvAssessment && num(projectCfads) > 0
          ? num(projectCfads)
          : corporateCashAfterReinvestment;
      const downsideDebtServiceCash =
        debtServiceCash *
        (1 - clamp(num(downsideCashFlowDecline), 0, 90) / 100);

      const numNewDebt = num(targetDebt);
      const numExistTermDebt = num(existingTermDebt);
      const numUtilizedWC = num(utilizedWorkingCapital);
      const numExistDebt = numExistTermDebt + numUtilizedWC;
      const requestedRefinancingAmount = [...(allocations || [])]
        .filter((item) => str(item?.purpose).includes('refinanc'))
        .reduce((sum, item) => sum + num(item?.amount), 0);
      const refinancedExistingDebt = Math.min(
        numExistTermDebt,
        requestedRefinancingAmount
      );
      const retainedExistingDebt = Math.max(
        0,
        numExistDebt - refinancedExistingDebt
      );
      const retainedExistingDebtRatio =
        numExistDebt > 0 ? retainedExistingDebt / numExistDebt : 0;
      const retainedTermDebtRatio =
        numExistTermDebt > 0
          ? Math.max(0, numExistTermDebt - refinancedExistingDebt) /
            numExistTermDebt
          : 0;
      const retainedExistingInterest =
        num(existingAnnualCashInterest) * retainedExistingDebtRatio;
      const retainedYearOnePrincipal =
        num(yearOnePrincipalDue) * retainedTermDebtRatio;
      const numEV = num(enterpriseValue);
      const collateralAvailabilityFactor =
        securityAvailability === 'Unsecured / no meaningful collateral' ||
        collateralLienStatus === 'Fully encumbered'
          ? 0
          : collateralLienStatus === 'Unencumbered'
          ? 1
          : collateralLienStatus === 'Partly encumbered'
          ? 0.5
          : 0;
      const numCollateral =
        num(pledgedCollateral) * collateralAvailabilityFactor;

      const totalRequestedDebt = numNewDebt + retainedExistingDebt;
      const impliedMultiple = adjustedEbitda > 0 ? numEV / adjustedEbitda : 0;
      const baselineLeverage =
        adjustedEbitda > 0 ? totalRequestedDebt / adjustedEbitda : 999;
      const baselineLtv =
        numCollateral > 0 ? (totalRequestedDebt / numCollateral) * 100 : 999;

      const baseRate = currency === 'USD' ? 5.3 : 8.0;
      const baseRateName = currency === 'USD' ? 'SOFR' : 'RBI / MCLR';
      const operatingHistoryYears = Math.max(
        0,
        new Date().getFullYear() - num(foundedYear)
      );
      const indicativeRequestedInterest =
        (numNewDebt * (baseRate + 2.5)) / 100 + num(existingAnnualCashInterest);
      const conventionalCoverageProxy =
        indicativeRequestedInterest > 0
          ? adjustedEbitda / indicativeRequestedInterest
          : 999;
      const conventionalDebtLikely =
        currentArchetype === 'TRADITIONAL' &&
        baselineLeverage <= 3.25 &&
        conventionalCoverageProxy >= 2.25 &&
        operatingHistoryYears >= 5 &&
        (baselineLtv <= 85 ||
          securityAvailability === 'Substantially all business assets') &&
        !str(historicalTrend).includes('turnaround');

      // ------------------------------------------------------------------------
      // 1. OBJECTIVES — retain up to three and make the allocation explicit.
      // ------------------------------------------------------------------------
      const rawAllocations = [...(allocations || [])]
        .map((a) => ({
          ...a,
          purpose: String(a?.purpose || 'General Corporate Purposes'),
          amount: num(a?.amount),
        }))
        .filter((a) => a.amount > 0)
        .slice(0, 3);

      if (!rawAllocations.length) {
        rawAllocations.push({
          id: 'default',
          purpose: 'General Corporate Purposes',
          amount: numNewDebt,
        });
      }

      const allocationTotal = rawAllocations.reduce((s, a) => s + a.amount, 0);
      const scale = allocationTotal > 0 ? numNewDebt / allocationTotal : 1;

      const objectives = rawAllocations.map((a, i) => {
        const scaled = a.amount * scale;
        const prior = rawAllocations
          .slice(0, i)
          .reduce((s, x) => s + x.amount * scale, 0);
        return {
          ...a,
          amount:
            i === rawAllocations.length - 1
              ? Math.max(0, numNewDebt - prior)
              : scaled,
          priority: i + 1,
        };
      });

      const dominantObjective =
        objectives[0]?.purpose ||
        financingObjective ||
        'General Corporate Purposes';

      const objectiveKey = (purpose) => {
        const p = str(purpose);
        if (p.includes('working capital')) return 'WC';
        if (p.includes('acquisition')) return 'ACQ';
        if (p.includes('refinanc')) return 'REFI';
        if (
          p.includes('growth') ||
          p.includes('capacity') ||
          p.includes('facility') ||
          p.includes('product') ||
          p.includes('market expansion') ||
          p.includes('project development')
        )
          return 'GROW';
        if (
          p.includes('ipo') ||
          p.includes('pre-ipo') ||
          p.includes('defined milestone')
        )
          return 'IPO';
        if (p.includes('shareholder')) return 'LIQ';
        return 'GEN';
      };

      const hasMultipleObjectives = objectives.length > 1;
      const hasWC = objectives.some((o) => objectiveKey(o.purpose) === 'WC');
      const hasAcquisition = objectives.some(
        (o) => objectiveKey(o.purpose) === 'ACQ'
      );
      const hasRefinancing = objectives.some(
        (o) => objectiveKey(o.purpose) === 'REFI'
      );
      const hasGrowth = objectives.some((o) =>
        ['GROW', 'IPO'].includes(objectiveKey(o.purpose))
      );

      // ------------------------------------------------------------------------
      // 2. DEPLOYMENT — an explicit modelling assumption, not a universal rule.
      // Working capital is treated as revolver-like: commitment is not assumed
      // to be fully drawn on Day 1.
      // ------------------------------------------------------------------------
      const deploymentSchedule = objectives.map((o, i) => {
        const key = objectiveKey(o.purpose);
        const isWCObjective = key === 'WC';
        const drawMonth = i === 0 ? 0 : isWCObjective ? 0 : i === 1 ? 6 : 12;
        return {
          objective: o.purpose,
          amount: o.amount,
          drawMonth,
          drawYear: drawMonth / 12,
          deploymentStatus:
            drawMonth === 0 ? 'Initial Closing' : 'Deferred Drawdown',
          conditions:
            drawMonth === 0
              ? ['Standard closing conditions precedent']
              : [
                  'Satisfaction of agreed drawdown conditions',
                  'No material adverse change',
                  'No continuing event of default',
                ],
        };
      });

      const dayOneFunding = deploymentSchedule
        .filter((d) => d.drawMonth === 0)
        .reduce((s, d) => s + d.amount, 0);
      const delayedFunding = Math.max(0, numNewDebt - dayOneFunding);

      // ------------------------------------------------------------------------
      // 3. FACILITY SOLUTIONS
      // These are solution templates. The engine constructs bundles from them.
      // ------------------------------------------------------------------------
      const facilityCandidates = [
        {
          id: 'Unitranche Facility',
          family: 'UNITRANCHE',
          baseScore: 70,
          cashSpread: 3.5,
          pik: 1.5,
          oid: 98,
          upfront: 2.0,
          maxLevModifier: 0.5,
          amort: 'Bullet (100% at Maturity)',
          dsra: '1-Quarter Reserve',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'ACQ', 'REFI', 'GEN', 'IPO'],
          wcBundle: true,
          deploymentFlex: true,
        },
        {
          id: 'Senior Secured Term Loan',
          family: 'SENIOR_TERM',
          baseScore: 66,
          cashSpread: 2.5,
          pik: 0,
          oid: 99,
          upfront: 1.0,
          maxLevModifier: 0,
          amort: '1% Standard',
          dsra: '1-Quarter Reserve',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'ACQ', 'REFI', 'GEN', 'IPO'],
          wcBundle: true,
          deploymentFlex: false,
        },
        {
          id: 'Senior Working Capital',
          family: 'WORKING_CAPITAL',
          baseScore: 76,
          cashSpread: 2.0,
          pik: 0,
          oid: 99,
          upfront: 1.0,
          maxLevModifier: -0.5,
          amort: 'Revolving / Borrowing Base',
          dsra: 'None',
          call: 'None (Callable Anytime)',
          fits: ['WC'],
          wcBundle: false,
          deploymentFlex: true,
        },
        {
          id: 'Asset-Backed Revolver',
          family: 'ABL',
          baseScore: 75,
          cashSpread: 1.75,
          pik: 0,
          oid: 99,
          upfront: 1.25,
          maxLevModifier: -0.5,
          amort: 'Revolving / Borrowing Base',
          dsra: 'None',
          call: 'None (Callable Anytime)',
          fits: ['WC'],
          wcBundle: false,
          deploymentFlex: true,
        },
        {
          id: 'Term Debt + OCDs',
          family: 'TERM_OCD',
          baseScore: 68,
          cashSpread: 4.0,
          pik: 4.0,
          oid: 97,
          upfront: 2.0,
          maxLevModifier: 1.0,
          amort: 'Bullet (100% at Maturity)',
          dsra: 'None',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'ACQ', 'GEN', 'IPO'],
          wcBundle: true,
          deploymentFlex: true,
        },
        {
          id: 'OCD + CCD',
          family: 'OCD_CCD',
          baseScore: 72,
          cashSpread: 3.5,
          pik: 3.0,
          oid: 97,
          upfront: 2.0,
          maxLevModifier: 1.25,
          amort: 'Bullet / Convertible',
          dsra: 'None',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'ACQ', 'GEN', 'IPO'],
          wcBundle: false,
          deploymentFlex: true,
          hybrid: true,
        },
        {
          id: 'Mezzanine Debt',
          family: 'MEZZ',
          baseScore: 52,
          cashSpread: 6.0,
          pik: 4.0,
          oid: 96,
          upfront: 2.5,
          maxLevModifier: 1.5,
          amort: 'Bullet (100% at Maturity)',
          dsra: 'None',
          call: '103 / 102 / 101 (Soft Call)',
          fits: ['GROW', 'ACQ', 'GEN', 'IPO'],
          wcBundle: true,
          deploymentFlex: true,
        },
        {
          id: 'Venture Debt + Warrants',
          family: 'VENTURE',
          baseScore: 45,
          cashSpread: 4.5,
          pik: 3.0,
          oid: 97,
          upfront: 2.0,
          maxLevModifier: 0.75,
          amort: 'Balloon (50/50)',
          dsra: 'None',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'IPO'],
          wcBundle: false,
          deploymentFlex: true,
          hybrid: true,
        },
        {
          id: 'Revenue-Based Financing',
          family: 'RBF',
          baseScore: 43,
          cashSpread: 5.0,
          pik: 0,
          oid: 98,
          upfront: 2.0,
          maxLevModifier: 0,
          amort: 'Revenue Linked',
          dsra: 'None',
          call: 'None (Callable Anytime)',
          fits: ['GROW', 'WC'],
          wcBundle: false,
          deploymentFlex: true,
        },
        {
          id: 'Subordinated NCDs',
          family: 'SUB_NCD',
          baseScore: 46,
          cashSpread: 5.0,
          pik: 3.0,
          oid: 97,
          upfront: 2.0,
          maxLevModifier: 0.75,
          amort: 'Bullet (100% at Maturity)',
          dsra: '1-Quarter Reserve',
          call: '101 (1-Yr Soft Call)',
          fits: ['GROW', 'GEN'],
          wcBundle: false,
          deploymentFlex: true,
        },
      ];

      // ------------------------------------------------------------------------
      // 4. STRUCTURE CONSTRUCTION
      // ------------------------------------------------------------------------
      const objectiveFit = (candidate, objective) => {
        const key = objectiveKey(objective.purpose);
        if (candidate.fits.includes(key)) return 35;
        if (key === 'WC' && candidate.wcBundle) return 12;
        if (
          key === 'ACQ' &&
          ['UNITRANCHE', 'SENIOR_TERM', 'TERM_OCD', 'OCD_CCD', 'MEZZ'].includes(
            candidate.family
          )
        )
          return 22;
        if (
          key === 'REFI' &&
          ['UNITRANCHE', 'SENIOR_TERM', 'TERM_OCD', 'OCD_CCD', 'MEZZ'].includes(
            candidate.family
          )
        )
          return 20;
        return -40;
      };

      const isHardCompatible = (candidate) => {
        // A standalone WC facility should not pretend to solve a material
        // acquisition/growth requirement, and a pure term facility should not
        // pretend a revolving WC commitment is term-funded unless bundled.
        for (const o of objectives) {
          const key = objectiveKey(o.purpose);
          if (candidate.fits.includes(key)) continue;
          if (key === 'WC' && candidate.wcBundle) continue;
          if (
            key === 'ACQ' &&
            [
              'UNITRANCHE',
              'SENIOR_TERM',
              'TERM_OCD',
              'OCD_CCD',
              'MEZZ',
            ].includes(candidate.family)
          )
            continue;
          if (
            key === 'REFI' &&
            [
              'UNITRANCHE',
              'SENIOR_TERM',
              'TERM_OCD',
              'OCD_CCD',
              'MEZZ',
            ].includes(candidate.family)
          )
            continue;
          return false;
        }
        return true;
      };

      const buildSolution = (candidate) => {
        const wcObjectives = objectives.filter(
          (o) => objectiveKey(o.purpose) === 'WC'
        );
        const nonWcObjectives = objectives.filter(
          (o) => objectiveKey(o.purpose) !== 'WC'
        );
        const useBundle =
          hasWC && nonWcObjectives.length > 0 && candidate.wcBundle;
        // A hybrid deliberately divides the financing between a repayable debt
        // tranche and an equity-linked tranche. It is not a compatibility
        // shortcut for a working-capital requirement.
        const hybrid =
          Boolean(candidate.hybrid) &&
          !hasWC &&
          (hasGrowth || hasAcquisition || hasRefinancing);
        const hybridPrimaryShare = candidate.family === 'OCD_CCD' ? 0.6 : 0.85;

        if (!isHardCompatible(candidate) && !useBundle && !hybrid) return null;

        const primaryAmount = useBundle
          ? nonWcObjectives.reduce((s, o) => s + o.amount, 0)
          : hybrid
          ? numNewDebt * hybridPrimaryShare
          : numNewDebt;

        const secondaryAmount = useBundle
          ? wcObjectives.reduce((s, o) => s + o.amount, 0)
          : hybrid
          ? Math.max(0, numNewDebt - primaryAmount)
          : 0;

        const solutionType = useBundle
          ? 'BUNDLED_FACILITY'
          : hybrid
          ? 'HYBRID_CONVERTIBLE'
          : 'SINGLE_FACILITY';

        const primaryLabel = useBundle
          ? candidate.id
          : hybrid
          ? candidate.family === 'OCD_CCD'
            ? 'OCD'
            : candidate.id
          : candidate.id;

        const secondaryLabel = useBundle
          ? 'Working Capital Line'
          : hybrid
          ? candidate.family === 'OCD_CCD'
            ? 'CCD'
            : 'Equity-Linked Component'
          : null;

        return {
          ...candidate,
          solutionType,
          primaryAmount: Math.max(0, primaryAmount),
          secondaryAmount: Math.max(0, secondaryAmount),
          primaryLabel,
          secondaryLabel,
          dynamicTitle: useBundle
            ? `${candidate.id} + Working Capital Line`
            : hybrid && candidate.family === 'OCD_CCD'
            ? 'OCD + CCD Hybrid'
            : candidate.id,
        };
      };

      const priorityScore = (candidate) => {
        let score = candidate.baseScore;

        objectives.forEach((o) => {
          score +=
            objectiveFit(candidate, o) * (o.amount / Math.max(numNewDebt, 1));
        });

        if (financingPriority === 'Lowest Cost of Capital') {
          if (
            ['SENIOR_TERM', 'WORKING_CAPITAL', 'ABL'].includes(candidate.family)
          )
            score += 20;
          if (['MEZZ', 'TERM_OCD', 'OCD_CCD'].includes(candidate.family))
            score -= 12;
        }
        if (
          financingPriority === 'Fastest Execution' &&
          ['UNITRANCHE', 'WORKING_CAPITAL', 'ABL'].includes(candidate.family)
        )
          score += 18;
        if (
          financingPriority === 'Maximum Structural Flexibility' &&
          ['UNITRANCHE', 'TERM_OCD', 'OCD_CCD', 'MEZZ'].includes(
            candidate.family
          )
        )
          score += 18;
        if (str(shareholderPreference).includes('avoid')) {
          if (
            ['UNITRANCHE', 'SENIOR_TERM', 'OCD_CCD'].includes(candidate.family)
          )
            score += 10;
          if (candidate.family === 'VENTURE') score -= 20;
        }
        if (
          str(privateCreditObjective).includes('speed') &&
          candidate.family === 'UNITRANCHE'
        )
          score += 10;
        if (
          ['Yes', 'Unsure'].includes(lenderRestrictions) &&
          ['UNITRANCHE', 'OCD_CCD', 'TERM_OCD'].includes(candidate.family)
        )
          score += 8;
        if (
          isSponsorBacked &&
          ['UNITRANCHE', 'SENIOR_TERM', 'OCD_CCD'].includes(candidate.family)
        )
          score += 4;
        if (
          hasWC &&
          candidate.wcBundle &&
          nonWcObjectivesSafe(objectives, objectiveKey)
        )
          score += 4;
        // A bankable borrower should be told that conventional debt may be the
        // cheaper/cheaper-to-document comparator. Do not allow the private-credit
        // ranking to become a disguised bank-loan recommendation solely because
        // the senior term template carries the lowest spread.
        if (
          candidate.family === 'SENIOR_TERM' &&
          conventionalDebtLikely &&
          privateCreditObjective !== 'Long-Term Financing Partner'
        )
          score -= 16;
        return score;
      };

      // Small helper kept local to avoid making the scoring depend on live state.
      function nonWcObjectivesSafe(list, keyFn) {
        return list.some((o) => keyFn(o.purpose) !== 'WC');
      }

      const solutions = facilityCandidates
        .map(buildSolution)
        .filter(Boolean)
        .map((candidate) => ({
          ...candidate,
          committeeScore: priorityScore(candidate),
        }));

      // ------------------------------------------------------------------------
      // 5. PRICING GUARDRAILS
      // Market ranges are modelling guardrails, not claims of universal pricing.
      // ------------------------------------------------------------------------
      const priceStructure = (candidate, primaryAmount, secondaryAmount) => {
        const leveragePressure =
          baselineLeverage <= 2.5
            ? -1.0
            : baselineLeverage <= 3.5
            ? 0
            : baselineLeverage <= 4.5
            ? 0.75
            : baselineLeverage <= 5.5
            ? 1.75
            : 3.0;

        const trendAdjustment = str(historicalTrend).includes('steady')
          ? -0.5
          : str(historicalTrend).includes('high growth')
          ? 0.25
          : str(historicalTrend).includes('cyclical')
          ? 0.75
          : str(historicalTrend).includes('turnaround')
          ? 2.0
          : 0;

        const collateralAdjustment =
          baselineLtv <= 60
            ? -0.75
            : baselineLtv <= 80
            ? 0
            : baselineLtv <= 100
            ? 0.75
            : 1.5;

        const spread = clamp(
          candidate.cashSpread +
            leveragePressure +
            trendAdjustment +
            collateralAdjustment,
          1.25,
          12.0
        );
        const wcSpread = clamp(spread - 1.25, 1.0, 9.0);
        const primaryRate = baseRate + spread;
        const secondaryRate = baseRate + wcSpread;

        const denominator = Math.max(primaryAmount + secondaryAmount, 1);
        const blendedCashRate =
          (primaryAmount * primaryRate + secondaryAmount * secondaryRate) /
          denominator;

        return {
          spread,
          wcSpread,
          primaryRate,
          secondaryRate,
          blendedCashRate,
        };
      };

      const parseCallProtection = (call) => {
        const s = str(call);
        if (s.includes('make-whole')) return 0.04;
        if (s.includes('103')) return 0.03;
        if (s.includes('102')) return 0.02;
        if (s.includes('101')) return 0.01;
        return 0;
      };

      const dsraMonths = (dsraText) => {
        const s = str(dsraText);
        if (s.includes('2-quarter') || s.includes('2-quarter')) return 6;
        if (s.includes('1-quarter')) return 3;
        return 0;
      };

      const amortizationFractions = (type, years) => {
        const n = Math.max(1, Math.round(years));
        const arr = Array.from({ length: n }, () => 0);
        const t = str(type);

        if (t.includes('1%')) {
          for (let y = 0; y < n - 1; y++) arr[y] = 0.01;
          arr[n - 1] = Math.max(0, 1 - 0.01 * (n - 1));
        } else if (t.includes('straight')) {
          for (let y = 0; y < n; y++) arr[y] = 1 / n;
        } else if (t.includes('balloon')) {
          arr[n - 1] = 1;
          if (n > 1) arr[n - 2] = 0;
        } else if (t.includes('bespoke')) {
          if (n >= 2) {
            arr[n - 2] = 0.5;
            arr[n - 1] = 0.5;
          } else arr[0] = 1;
        } else if (t.includes('step-up')) {
          if (n >= 3) {
            arr[n - 3] = 0.1;
            arr[n - 2] = 0.2;
            arr[n - 1] = 0.7;
          } else arr[n - 1] = 1;
        } else if (t.includes('revolving') || t.includes('revenue linked')) {
          // Revolver/RBF is not forced into term amortisation.
          arr[n - 1] = t.includes('revenue linked') ? 1 : 0;
        } else {
          arr[n - 1] = 1;
        }
        return arr;
      };

      const calculateIRR = (cashFlows) => {
        if (!cashFlows?.length) return 0;
        const npv = (rate) =>
          cashFlows.reduce((sum, cf) => {
            const denom = Math.pow(1 + rate, cf.time);
            return sum + (Number.isFinite(denom) ? cf.amount / denom : 0);
          }, 0);

        let low = -0.99,
          high = 2.0;
        let lowNpv = npv(low),
          highNpv = npv(high);

        if (!Number.isFinite(lowNpv) || !Number.isFinite(highNpv)) return 0;
        let tries = 0;
        while (lowNpv * highNpv > 0 && tries < 10) {
          high *= 1.5;
          highNpv = npv(high);
          tries++;
        }
        if (lowNpv * highNpv > 0) return 0;

        for (let i = 0; i < 120; i++) {
          const mid = (low + high) / 2;
          const value = npv(mid);
          if (Math.abs(value) < 1e-8) return mid * 100;
          if (lowNpv * value <= 0) {
            high = mid;
            highNpv = value;
          } else {
            low = mid;
            lowNpv = value;
          }
        }
        return ((low + high) / 2) * 100;
      };

      // ------------------------------------------------------------------------
      // 6. SCENARIO EVALUATOR
      // Accepts a term object so the negotiation sandbox can evaluate live
      // proposals without touching the frozen baseline scenarios.
      // ------------------------------------------------------------------------
      const evaluateScenario = (candidate, termOverrides = {}) => {
        const primaryAmount = num(
          termOverrides.primaryAmount ?? candidate.primaryAmount ?? numNewDebt
        );
        const secondaryAmount = num(
          termOverrides.secondaryAmount ?? candidate.secondaryAmount ?? 0
        );
        const totalFacility = primaryAmount + secondaryAmount;
        const years = Math.max(
          1,
          Math.round(num(termOverrides.tenor ?? targetTenor) || 5)
        );

        const terms = {
          tenor: years,
          oid: clamp(num(termOverrides.oid ?? candidate.oid), 90, 100),
          upfrontFee: clamp(
            num(termOverrides.upfrontFee ?? candidate.upfront),
            0,
            5
          ),
          cashRateAdjustment: clamp(
            Number(termOverrides.cashRateAdjustment ?? 0) || 0,
            -4,
            4
          ),
          pikPremium: clamp(
            num(termOverrides.pikPremium ?? candidate.pik),
            0,
            10
          ),
          redemptionPremium: clamp(
            num(termOverrides.redemptionPremium ?? 0),
            0,
            10
          ),
          amortization: termOverrides.amortization ?? candidate.amort,
          maxLeverageCov: num(
            termOverrides.maxLeverageCov ?? 4.5 + candidate.maxLevModifier
          ),
          minIcrCov: num(termOverrides.minIcrCov ?? 2),
          dsra: termOverrides.dsra ?? candidate.dsra,
          cashSweep: clamp(num(termOverrides.cashSweep ?? 50), 0, 100),
          callProtection: termOverrides.callProtection ?? candidate.call,
          equityKicker: clamp(num(termOverrides.equityKicker ?? 0), 0, 15),
          conversionValuation: num(termOverrides.conversionValuation ?? numEV),
        };

        const pricing = priceStructure(
          candidate,
          primaryAmount,
          secondaryAmount
        );
        // Treat a negotiated PIK increase as a re-allocation of coupon from cash
        // to capitalised interest. Otherwise a control labelled as cash relief
        // would incorrectly add PIK on top of an unchanged cash coupon.
        const pikShift = terms.pikPremium - num(candidate.pik);
        const modeledPrimaryCashRate = Math.max(
          baseRate + 1,
          pricing.primaryRate - pikShift + terms.cashRateAdjustment
        );
        const modeledSecondaryCashRate = Math.max(
          baseRate + 0.75,
          pricing.secondaryRate - pikShift + terms.cashRateAdjustment
        );
        const modeledBlendedCashRate =
          (primaryAmount * modeledPrimaryCashRate +
            secondaryAmount * modeledSecondaryCashRate) /
          Math.max(totalFacility, 1);
        const drawTimes = {
          primary: 0,
          secondary: secondaryAmount > 0 ? 0.5 : null,
        };

        // Existing debt service is user supplied; no coupon is invented.
        const existingDebtCashInterest = retainedExistingInterest;

        const fractions = amortizationFractions(terms.amortization, years);
        const opening = { primary: primaryAmount, secondary: secondaryAmount };
        const isConvertibleHybrid =
          Boolean(candidate.hybrid) && secondaryAmount > 0;
        const schedule = [];
        const lenderCashFlows = [];

        // Correct OID treatment: the lender funds the net purchase price.
        // 98 OID => lender outflow of 98% of principal, not 2%.
        lenderCashFlows.push({
          time: 0,
          amount:
            -((primaryAmount * terms.oid) / 100) +
            (totalFacility * terms.upfrontFee) / 100,
        });
        if (secondaryAmount > 0) {
          lenderCashFlows.push({
            time: drawTimes.secondary,
            amount: -((secondaryAmount * terms.oid) / 100),
          });
        }

        let totalCashInterest = 0;
        let totalPikAccretion = 0;
        let totalPrincipalPaid = 0;
        let y1CashInterest = 0;
        let y1ScheduledPrincipal = 0;
        let convertibleBalanceAtMaturity = isConvertibleHybrid
          ? secondaryAmount
          : 0;

        for (let year = 1; year <= years; year++) {
          const primaryOpening = opening.primary;
          const secondaryOpening = opening.secondary;

          const primaryFraction = fractions[year - 1] || 0;
          const secondaryFraction = isConvertibleHybrid
            ? 0
            : fractions[year - 1] || 0;

          // Primary tranche is outstanding for the full first year.
          const primaryCashInterest =
            (primaryOpening * modeledPrimaryCashRate) / 100;
          const primaryPik = (primaryOpening * terms.pikPremium) / 100;

          // Secondary tranche is drawn at month 6 under the default staggered
          // deployment assumption, so Year 1 receives six months of interest.
          const secondaryYearFactor =
            drawTimes.secondary === null ? 1 : year === 1 ? 0.5 : 1;
          const secondaryCashInterest =
            ((secondaryOpening * modeledSecondaryCashRate) / 100) *
            secondaryYearFactor;
          const secondaryPik =
            ((secondaryOpening * terms.pikPremium) / 100) * secondaryYearFactor;

          const cashInterest = primaryCashInterest + secondaryCashInterest;
          const pikAccretion = primaryPik + secondaryPik;

          let scheduledPrincipal =
            primaryOpening * primaryFraction +
            secondaryOpening * secondaryFraction;

          // Do not amortise a revolver unless it is explicitly modelled as RBF.
          if (
            ['WORKING_CAPITAL', 'ABL'].includes(candidate.family) ||
            str(candidate.amort).includes('revolving')
          ) {
            scheduledPrincipal = 0;
          }

          // PIK capitalises before principal repayment. Cap principal repayment
          // to avoid negative balances.
          const availableDebtPrincipal =
            primaryOpening +
            primaryPik +
            (isConvertibleHybrid ? 0 : secondaryOpening + secondaryPik);
          scheduledPrincipal = Math.min(
            scheduledPrincipal,
            availableDebtPrincipal
          );

          const yearOneCashBeforeSweep =
            year === 1
              ? debtServiceCash -
                cashInterest -
                existingDebtCashInterest -
                scheduledPrincipal -
                retainedYearOnePrincipal
              : 0;
          const sweepAmount =
            year === 1
              ? Math.min(
                  (Math.max(0, yearOneCashBeforeSweep) * terms.cashSweep) / 100,
                  Math.max(0, availableDebtPrincipal - scheduledPrincipal)
                )
              : 0;
          let principalPaid = scheduledPrincipal + sweepAmount;

          let endingDebt = Math.max(0, availableDebtPrincipal - principalPaid);
          const convertibleBalance = isConvertibleHybrid
            ? secondaryOpening + secondaryPik
            : 0;
          if (isConvertibleHybrid)
            convertibleBalanceAtMaturity = convertibleBalance;

          if (year === years) {
            principalPaid += endingDebt;
            endingDebt = 0;
          }

          // At maturity the equity-linked tranche converts instead of being
          // repaid as principal. The schedule therefore closes at zero while
          // its value is recorded separately below as conversion proceeds.
          const endingTotal =
            year === years ? 0 : endingDebt + convertibleBalance;

          totalCashInterest += cashInterest;
          totalPikAccretion += pikAccretion;
          totalPrincipalPaid += principalPaid;

          if (year === 1) {
            y1CashInterest = cashInterest + existingDebtCashInterest;
            y1ScheduledPrincipal = scheduledPrincipal;
          }

          const retainedCash =
            year === 1 ? Math.max(0, yearOneCashBeforeSweep - sweepAmount) : 0;

          schedule.push({
            year,
            principalPct: totalFacility > 0 ? principalPaid / totalFacility : 0,
            amount: principalPaid,
            scheduledAmount: scheduledPrincipal,
            cashInterest,
            pikAccretion,
            endingBalance: endingTotal,
          });

          lenderCashFlows.push({
            time: year,
            amount:
              cashInterest +
              principalPaid +
              (year === years
                ? ((isConvertibleHybrid ? primaryAmount : totalFacility) *
                    terms.redemptionPremium) /
                  100
                : 0),
          });

          if (year === 1) {
            schedule[schedule.length - 1].sweepAmount = sweepAmount;
            schedule[schedule.length - 1].retainedCash = retainedCash;
          }

          if (isConvertibleHybrid) {
            opening.primary = Math.max(
              0,
              primaryOpening + primaryPik - principalPaid
            );
            opening.secondary = convertibleBalance;
          } else {
            const primaryShare =
              availableDebtPrincipal > 0
                ? (primaryOpening + primaryPik) / availableDebtPrincipal
                : 0;
            opening.primary = Math.max(
              0,
              primaryOpening + primaryPik - principalPaid * primaryShare
            );
            opening.secondary = Math.max(
              0,
              secondaryOpening +
                secondaryPik -
                principalPaid * (1 - primaryShare)
            );
          }

          // If maturity repayment cleared the aggregate balance, clear both
          // tranche balances.
          if (year === years) {
            opening.primary = 0;
            opening.secondary = 0;
          }
        }

        // ----------------------------------------------------------------------
        // Equity-linked value is kept separate from debt coupon. For a hybrid,
        // conversion ownership is calculated from the conversion valuation and
        // displayed as an illustrative current-value outcome.
        // ----------------------------------------------------------------------
        const hybrid = isConvertibleHybrid;
        const conversionAmount = hybrid ? convertibleBalanceAtMaturity : 0;
        const conversionOwnershipPct =
          hybrid && terms.conversionValuation > 0
            ? clamp(
                (conversionAmount / terms.conversionValuation) * 100,
                0,
                100
              )
            : 0;
        const equityKickerValue =
          terms.equityKicker > 0 ? (numEV * terms.equityKicker) / 100 : 0;
        const illustrativeEquityValue = hybrid
          ? (numEV * conversionOwnershipPct) / 100
          : equityKickerValue;

        if (illustrativeEquityValue > 0 && years > 0) {
          lenderCashFlows.push({
            time: years,
            amount: illustrativeEquityValue,
          });
        }

        // Call protection is contingent on an early repayment. Reflect only a
        // clearly labelled probability-weighted value in lender IRR; retain the
        // full premium separately for the borrower early-payoff illustration.
        const callProtectionRate = parseCallProtection(terms.callProtection);
        const repayableDebtBase = hybrid ? primaryAmount : totalFacility;
        const callProtectionValue = repayableDebtBase * callProtectionRate;
        const expectedCallProtectionValue = callProtectionValue * 0.2;
        if (expectedCallProtectionValue > 0) {
          lenderCashFlows.push({
            time: Math.min(2, years),
            amount: expectedCallProtectionValue,
          });
        }

        const grossIrr = Math.max(0, calculateIRR(lenderCashFlows));

        // Leverage includes committed new debt, because this is a committee
        // capacity test. WC utilisation can remain lower than commitment in
        // cash-service calculations.
        const totalDebt = totalFacility + retainedExistingDebt;
        const proFormaLeverage =
          adjustedEbitda > 0 ? totalDebt / adjustedEbitda : 999;
        const ltv = numCollateral > 0 ? (totalDebt / numCollateral) * 100 : 999;

        // ICR uses cash interest on the modeled new facility only plus any known
        // existing debt interest (currently zero because no rate was provided).
        const icr = y1CashInterest > 0 ? adjustedEbitda / y1CashInterest : 999;

        // Leverage covenant is a structural term. It is allowed to be negotiated,
        // but cannot rescue an otherwise impossible capital structure.
        const covenantMax = terms.maxLeverageCov;
        const leverageHeadroom = covenantMax - proFormaLeverage;
        const icrHeadroom = icr - terms.minIcrCov;

        const totalYearOneDebtService =
          y1CashInterest + y1ScheduledPrincipal + retainedYearOnePrincipal;
        const projectDscr =
          totalYearOneDebtService > 0
            ? debtServiceCash / totalYearOneDebtService
            : 999;
        const downsideDscr =
          totalYearOneDebtService > 0
            ? downsideDebtServiceCash / totalYearOneDebtService
            : 999;
        const preSweepCash = debtServiceCash - totalYearOneDebtService;
        const cashSweepAmount = Number(
          schedule[0]?.sweepAmount ??
            (Math.max(0, preSweepCash) * terms.cashSweep) / 100
        );
        const retainedCash = Math.max(0, preSweepCash - cashSweepAmount);

        const debtToEquity =
          num(totalEquity) > 0 ? totalDebt / num(totalEquity) : 999;
        const debtToArr = num(arr) > 0 ? totalDebt / num(arr) : 999;
        const internalMaxLeverage =
          candidate.family === 'MEZZ' ||
          candidate.family === 'TERM_OCD' ||
          candidate.family === 'OCD_CCD'
            ? 6.0
            : 5.25;
        const internalMinCoverage = currentArchetype === 'SAAS' ? 1.1 : 1.25;
        const capacityFails =
          currentArchetype === 'NBFC'
            ? debtToEquity > 5.0 || num(gnpa) > 6.0
            : currentArchetype === 'SAAS'
            ? debtToArr > 1.0
            : isSpvAssessment
            ? totalFacility > num(projectCost) * 0.8
            : proFormaLeverage > internalMaxLeverage;
        const coverageFails = isSpvAssessment
          ? downsideDscr < 1.05 || projectDscr < 1.15
          : currentArchetype === 'NBFC'
          ? false
          : currentArchetype === 'SAAS'
          ? (y1CashInterest > 0 ? debtServiceCash / y1CashInterest : 999) <
            internalMinCoverage
          : icr < internalMinCoverage || downsideDscr < 1.0;
        const hardGates = {
          leverage: capacityFails,
          icr: coverageFails,
          liquidity: preSweepCash < 0,
          // Collateral coverage is a sizing gate only where the structure is
          // explicitly asset-backed. In cash-flow lending it remains a risk and
          // pricing consideration, not an automatic rejection.
          ltv:
            ['WORKING_CAPITAL', 'ABL'].includes(candidate.family) &&
            numCollateral > 0 &&
            ltv > 150,
        };
        const covenantBreaches = {
          leverage: proFormaLeverage > covenantMax,
          coverage: isSpvAssessment
            ? projectDscr < terms.minIcrCov
            : icr < terms.minIcrCov,
        };
        const limitedInternalHeadroom =
          currentArchetype === 'NBFC'
            ? debtToEquity > 4.5 || num(gnpa) > 5.0
            : currentArchetype === 'SAAS'
            ? debtToArr > 0.85
            : isSpvAssessment
            ? projectDscr < 1.3 || downsideDscr < 1.15
            : proFormaLeverage > internalMaxLeverage - 0.5 ||
              icr < internalMinCoverage + 0.35;

        let executionState = 'EXECUTABLE';
        let feasibilityReason =
          'Structure passes the current underwriting gates.';

        if (hardGates.leverage) {
          executionState = 'NOT_EXECUTABLE';
          feasibilityReason =
            currentArchetype === 'NBFC'
              ? `Debt-to-equity or asset quality falls outside the preliminary financial-services guardrail.`
              : currentArchetype === 'SAAS'
              ? `Total debt is too high relative to recurring revenue for the current preliminary screen.`
              : isSpvAssessment
              ? `The proposed debt exceeds the preliminary project-cost funding limit.`
              : `Pro-forma leverage of ${proFormaLeverage.toFixed(
                  1
                )}x exceeds the internal ${internalMaxLeverage.toFixed(
                  1
                )}x debt-capacity guardrail.`;
        } else if (hardGates.icr) {
          executionState = 'NOT_EXECUTABLE';
          feasibilityReason = isSpvAssessment
            ? `Project cash flow does not support the preliminary base and downside debt-service coverage tests.`
            : `Cash-service coverage does not clear the internal preliminary underwriting floor.`;
        } else if (hardGates.liquidity) {
          executionState = 'NOT_EXECUTABLE';
          feasibilityReason = `Year 1 cash available after interest and scheduled principal is ${preSweepCash.toFixed(
            1
          )}, below zero.`;
        } else if (hardGates.ltv) {
          executionState = 'NOT_EXECUTABLE';
          feasibilityReason =
            'The identified collateral does not provide sufficient support for the proposed secured facility.';
        } else if (limitedInternalHeadroom) {
          executionState = 'CONDITIONAL';
          feasibilityReason =
            'The structure clears hard gates but has limited underwriting headroom.';
        }

        const collateralTier =
          ltv <= 60
            ? 'Hard Assets (LTV < 60%)'
            : ltv <= 100
            ? 'Standard (Cash Flow & AR)'
            : 'Asset-Light / Unsecured';

        const borrowerTier =
          proFormaLeverage > 5.5
            ? 'Turnaround / Stressed'
            : isSponsorBacked && proFormaLeverage <= 4
            ? 'Top-Tier Sponsor Backed'
            : 'Standard Mid-Market';

        const wal =
          schedule.reduce((s, x) => s + x.principalPct * x.year, 0) || years;

        const executionCosts = {
          legal: totalFacility * 0.003,
          fdd: totalFacility * 0.0015,
          trustee: totalFacility * 0.001,
          stamp: totalFacility * 0.0015,
        };
        const totalExecutionCosts = Object.values(executionCosts).reduce(
          (s, v) => s + v,
          0
        );

        const oidCost = (totalFacility * Math.max(0, 100 - terms.oid)) / 100;
        const upfrontCost = (totalFacility * terms.upfrontFee) / 100;
        const netCashReceived =
          totalFacility - oidCost - upfrontCost - totalExecutionCosts;
        const dsraFunding =
          ((y1CashInterest + y1ScheduledPrincipal) * dsraMonths(terms.dsra)) /
          12;
        const usableNetProceeds = Math.max(0, netCashReceived - dsraFunding);

        const redemptionCost =
          (repayableDebtBase * terms.redemptionPremium) / 100;

        const totalCashOutflowToBorrower =
          totalPrincipalPaid + totalCashInterest + redemptionCost;

        const totalLifetimeInterest = totalCashInterest + totalPikAccretion;

        const totalDebtReturn =
          totalCashInterest + redemptionCost + expectedCallProtectionValue;

        const totalCoupon = modeledBlendedCashRate + terms.pikPremium;
        const pricingState =
          totalCoupon <= 18 ? 'MARKET_CONSISTENT' : 'HIGH_PRICING';

        const rationaleMap = {
          UNITRANCHE:
            'A single-lender private credit facility solving the core capital requirement with flexibility around deployment and documentation.',
          SENIOR_TERM:
            'A lower-cost senior secured solution where cash generation and leverage capacity support conventional debt.',
          WORKING_CAPITAL:
            'A revolving working-capital facility sized around short-term liquidity rather than forcing the full requirement into term debt.',
          ABL: 'An asset-backed revolving structure that monetises eligible collateral while preserving draw-and-repay flexibility.',
          OCD_CCD:
            'A hybrid capital solution separating debt-like liquidity from equity-linked upside and conversion economics.',
          TERM_OCD:
            'A layered senior and subordinated structure that increases financing capacity while preserving operating liquidity.',
          MEZZ: 'A subordinated private credit solution used when senior debt capacity is insufficient.',
          VENTURE:
            'A growth-oriented debt solution combining cash preservation with equity-linked lender economics.',
          RBF: 'A revenue-linked solution designed for businesses with predictable top-line cash generation.',
          SUB_NCD:
            'A subordinated debt solution appropriate where additional capital is required below senior facilities.',
        };

        const rationale =
          rationaleMap[candidate.family] ||
          'A specialised private credit solution selected for the borrower’s operating profile.';

        return {
          ...candidate,
          terms,
          type: candidate.id,
          score: candidate.committeeScore ?? 0,
          fitScore:
            executionState === 'NOT_EXECUTABLE'
              ? 0
              : clamp(
                  Math.round(
                    (candidate.committeeScore ?? 50) +
                      (executionState === 'EXECUTABLE' ? 8 : -8)
                  ),
                  0,
                  99
                ),

          executionState,
          feasibilityReason,
          hardGates,
          covenantBreaches,
          internalGuardrails: {
            maximumLeverage: internalMaxLeverage,
            minimumCoverage: internalMinCoverage,
            debtToEquity,
            debtToArr,
          },
          isSpvAssessment,
          debtServiceCash,
          downsideDebtServiceCash,
          projectDscr,
          downsideDscr,

          solutionType: candidate.solutionType,
          dynamicTitle: candidate.dynamicTitle,
          mdRationale:
            executionState === 'NOT_EXECUTABLE'
              ? `Not recommended in its current form because ${feasibilityReason.toLowerCase()}`
              : rationale +
                (candidate.solutionType === 'BUNDLED_FACILITY'
                  ? ' The model deliberately separates working-capital liquidity from the term-funded capital requirement.'
                  : '') +
                (secondaryAmount > 0 &&
                candidate.solutionType !== 'SINGLE_FACILITY'
                  ? ' The secondary component is modeled as a deferred draw.'
                  : ''),

          primaryLabel: candidate.primaryLabel,
          secondaryLabel: candidate.secondaryLabel,
          activePrimaryDebt: primaryAmount,
          activeSecondaryDebt: secondaryAmount,

          totalDebt,
          leverage: proFormaLeverage,
          ltv,
          sponsorEquity: Math.max(0, numEV - totalDebt),
          averageY1Debt:
            primaryAmount +
            (secondaryAmount > 0 ? secondaryAmount * 0.5 : 0) +
            retainedExistingDebt,

          deploymentSchedule,
          dayOneFunding,
          delayedFunding,
          primaryDrawYear: 0,
          secondaryDrawYear: secondaryAmount > 0 ? 0.5 : null,

          baseRate,
          baseRateName,
          primaryRate: modeledPrimaryCashRate,
          secondaryRate: modeledSecondaryCashRate,
          blendedCashRate: modeledBlendedCashRate,
          totalCoupon,
          finalSpread: pricing.blendedCashRate - baseRate,

          grossIrr,
          pricingState,

          headroom: leverageHeadroom,
          icr,
          icrHeadroom,
          isIcrBreached: hardGates.icr,
          isLeverageBreached: hardGates.leverage,
          isLiquidityBreached: hardGates.liquidity,
          isCovenantBreached:
            covenantBreaches.leverage || covenantBreaches.coverage,
          adjustedMaxLev: covenantMax,

          borrowerTier,
          collateralTier,

          activeAmortization: terms.amortization,
          activePik: terms.pikPremium,

          baselineTenor: terms.tenor,
          baselineOid: terms.oid,
          baselineUpfront: terms.upfrontFee,
          baselineLeverageCov: terms.maxLeverageCov,
          baselineIcrCov: terms.minIcrCov,
          baselineSweep: terms.cashSweep,
          baselineDsra: terms.dsra,
          baselineCall: terms.callProtection,
          redemptionPremium: terms.redemptionPremium,
          equityKicker: terms.equityKicker,
          conversionValuation: terms.conversionValuation,
          conversionOwnershipPct,

          isPikLocked: false,
          isAmortLocked: ['WORKING_CAPITAL', 'ABL', 'RBF'].includes(
            candidate.family
          ),

          wal,
          schedule,

          waterfall: {
            ocf: baselineOcf,
            interest: y1CashInterest,
            principal: y1ScheduledPrincipal,
            preSweep: preSweepCash,
            sweep: cashSweepAmount,
            retained: retainedCash,
          },

          bridge: {
            oidCost,
            upfrontCost,
            totalDiscountFees: oidCost + upfrontCost,
            execCosts: executionCosts,
            totalExec: totalExecutionCosts,
            netCashReceived,
            dsraFunding,
            usableNetProceeds,
            totalLifetimeInterest,
            redemptionCost,
            callProtectionValue,
            expectedCallProtectionValue,
            totalLifetimeOutflow: totalCashOutflowToBorrower,
            lenderCashFlows,
            totalPikAccretion,
            totalPrincipalPaid,
            totalDebtReturn,
          },

          equityLinked: hybrid
            ? {
                conversionValuation: terms.conversionValuation,
                conversionOwnershipPct,
                illustrativeEquityValue,
              }
            : null,
        };
      };

      // ------------------------------------------------------------------------
      // 7. FROZEN BASELINE SCENARIOS
      // ------------------------------------------------------------------------
      const evaluatedScenarios = solutions.map((candidate) =>
        evaluateScenario(candidate, {
          tenor: targetTenor,
          oid: candidate.oid,
          upfrontFee: candidate.upfront,
          pikPremium: candidate.pik,
          redemptionPremium: 0,
          amortization: candidate.amort,
          maxLeverageCov: 4.5 + candidate.maxLevModifier,
          minIcrCov: 2.0,
          dsra: candidate.dsra,
          cashSweep: 50,
          callProtection: candidate.call,
          equityKicker: 0,
          conversionValuation: numEV,
        })
      );

      // Hard feasibility precedes commercial ranking.
      const rank = (list) =>
        [...list].sort((a, b) => {
          if (a.executionState !== b.executionState) {
            const order = { EXECUTABLE: 3, CONDITIONAL: 2, NOT_EXECUTABLE: 1 };
            return order[b.executionState] - order[a.executionState];
          }
          return b.score - a.score;
        });

      const executable = rank(
        evaluatedScenarios.filter((s) => s.executionState === 'EXECUTABLE')
      );
      const conditional = rank(
        evaluatedScenarios.filter((s) => s.executionState === 'CONDITIONAL')
      );
      const nonExecutable = rank(
        evaluatedScenarios.filter((s) => s.executionState === 'NOT_EXECUTABLE')
      );

      const rankedPool = [
        ...executable,
        ...conditional,
        ...nonExecutable,
      ].slice(0, 3);
      const primaryScenario = rankedPool[0];
      const scenarioData = rankedPool.map((s, i) => ({
        ...s,
        rank: i + 1,
        recommendationLabel:
          i === 0
            ? 'Primary Recommendation'
            : i === 1
            ? 'Strong Alternative'
            : 'Structural Fallback',
        rankingExplanation:
          i === 0
            ? `Ranks first because it best combines the stated financing objective, ${financingPriority.toLowerCase()} and the current underwriting constraints.`
            : s.executionState === 'NOT_EXECUTABLE'
            ? `Ranks below the primary path because it does not clear the current preliminary underwriting gates.`
            : s.executionState === 'CONDITIONAL' &&
              primaryScenario?.executionState === 'EXECUTABLE'
            ? `Ranks below the primary path because it carries less underwriting headroom and would require more structural protection.`
            : `Remains viable, but its fit with the borrower’s stated priorities is weaker than ${
                primaryScenario?.dynamicTitle ||
                primaryScenario?.type ||
                'the primary path'
              }.`,
      }));

      const noExecutableStructure = executable.length === 0;

      let committeeMemo = `The transaction is being evaluated as a private credit opportunity. The primary requirement is ${dominantObjective}. `;

      committeeMemo += hasMultipleObjectives
        ? 'The engine treats the request as a bundle of financing objectives and constructs facility combinations where appropriate. '
        : 'The engine therefore prioritises a facility solution specifically matched to the stated requirement. ';

      if (dayOneFunding < numNewDebt) {
        committeeMemo += `Only ${dayOneFunding.toFixed(
          1
        )} of ${numNewDebt.toFixed(
          1
        )} is modeled as Day 1 funding; deferred commitments remain subject to draw conditions. `;
      }

      if (hasWC) {
        committeeMemo +=
          'Working-capital needs are treated as revolving liquidity rather than automatically converting the full commitment into term debt. ';
      }

      if (str(shareholderPreference).includes('avoid')) {
        committeeMemo +=
          'Shareholder preference to minimise dilution increases the relevance of debt-led and carefully engineered hybrid solutions. ';
      }

      if (noExecutableStructure) {
        committeeMemo +=
          'No currently modelled facility passes all hard underwriting gates; structural remediation is required before a nominal recommendation can be treated as executable.';
      }

      const active = scenarioData[0] || null;

      return {
        adjustedEbitda,
        debtServiceCash,
        downsideDebtServiceCash,
        isSpvAssessment,
        primaryMetricLabel,
        primaryMetricValue,
        enterpriseValue: numEV,
        impliedMultiple,
        baseRate,
        baseRateName,
        numExistDebt: retainedExistingDebt,
        originalExistingDebt: numExistDebt,
        refinancedExistingDebt,
        numExistTermDebt,
        numUtilizedWC,
        numNewDebt,
        totalRequestedDebt,
        baselineLeverage,
        baselineLtv,
        objectives,
        validAllocations: rawAllocations,
        hasMultipleObjectives,
        hasWC,
        hasAcquisition,
        hasRefinancing,
        hasGrowth,
        dominantObjective,
        deploymentSchedule,
        dayOneFunding,
        delayedFunding,
        conventionalDebtLikely,
        conventionalCoverageProxy,
        noExecutableStructure,
        scenarioData,
        useOfProceeds: financingObjective,
        committeeMemo,
        evaluateScenario,
        facilityCandidates,
        ...(active || {}),
      };
    } catch (error) {
      console.error('Underwriting Engine Error:', error);
      return null;
    }
  }, [
    revenue,
    baseEbitda,
    addBacks,
    ocf,
    historicalTrend,
    arr,
    grossMargin,
    aum,
    nim,
    gnpa,
    targetDebt,
    targetTenor,
    existingTermDebt,
    utilizedWorkingCapital,
    enterpriseValue,
    pledgedCollateral,
    totalEquity,
    foundedYear,
    isSponsorBacked,
    currency,
    allocations,
    financingPriority,
    shareholderPreference,
    privateCreditObjective,
    lenderRestrictions,
    currentArchetype,
    financingObjective,
    transactionScope,
    totalCashCapex,
    downsideCashFlowDecline,
    projectCfads,
    projectCost,
    existingAnnualCashInterest,
    yearOnePrincipalDue,
    financeCosts,
    depreciationAmortization,
    otherIncome,
    profitBeforeTax,
    exceptionalItems,
    securityAvailability,
    collateralLienStatus,
  ]);

  // [SECTION 6: ADVISORY & NEGOTIATION LOGIC]
  // ============================================================================
  // The sandbox is a live negotiation layer over an immutable baseline scenario.
  // A borrower proposal changes live terms; the lender evaluates the whole package
  // and can ACCEPT, COUNTER or REJECT.
  // ============================================================================

  const selectedBaseline =
    metrics?.scenarioData?.[selectedOptionIndex] ||
    metrics?.scenarioData?.[0] ||
    null;

  const baselineTerms = useMemo(() => {
    if (!selectedBaseline) return null;
    const educational = assessmentMode === 'sample';
    const actualLeverage = Number(selectedBaseline.leverage || 0);
    return {
      family: selectedBaseline.family,
      primaryAmount: selectedBaseline.activePrimaryDebt,
      secondaryAmount: selectedBaseline.activeSecondaryDebt,
      tenor: educational
        ? Math.max(2, Number(selectedBaseline.baselineTenor || 5) - 1)
        : selectedBaseline.baselineTenor,
      oid: educational
        ? Math.min(Number(selectedBaseline.baselineOid || 98), 97)
        : selectedBaseline.baselineOid,
      upfrontFee: educational
        ? Math.max(Number(selectedBaseline.baselineUpfront || 0), 2)
        : selectedBaseline.baselineUpfront,
      cashRateAdjustment: educational ? 1 : 0,
      pikPremium: selectedBaseline.activePik,
      redemptionPremium: selectedBaseline.redemptionPremium || 0,
      amortization:
        educational &&
        String(selectedBaseline.activeAmortization).includes('Bullet')
          ? '1% Standard'
          : selectedBaseline.activeAmortization,
      maxLeverageCov: educational
        ? Math.max(
            actualLeverage + 0.25,
            Number(selectedBaseline.baselineLeverageCov || 4.5) - 0.5
          )
        : selectedBaseline.baselineLeverageCov,
      minIcrCov: educational
        ? Number(selectedBaseline.baselineIcrCov || 2) + 0.25
        : selectedBaseline.baselineIcrCov,
      dsra: educational
        ? transactionScope === 'Specific project or asset' ||
          transactionScope === 'Acquisition vehicle'
          ? '2-Quarters Reserve'
          : '1-Quarter Reserve'
        : selectedBaseline.baselineDsra,
      cashSweep: educational
        ? Math.max(60, Number(selectedBaseline.baselineSweep || 0))
        : selectedBaseline.baselineSweep,
      callProtection: educational
        ? '103 / 102 / 101 (Soft Call)'
        : selectedBaseline.baselineCall,
      equityKicker: selectedBaseline.equityKicker || 0,
      conversionValuation:
        selectedBaseline.conversionValuation || metrics?.enterpriseValue || 0,
    };
  }, [selectedBaseline, metrics, assessmentMode, transactionScope]);

  // Initialise live terms whenever the selected frozen baseline changes.
  useEffect(() => {
    if (!baselineTerms) return;
    setLiveNegotiationTerms({ ...baselineTerms });
    setDraftNegotiationTerms({ ...baselineTerms });
    setAcceptedNegotiationTerms({ ...baselineTerms });
    setNegotiationHistory([]);
    setLenderResponse(null);

    // Keep the existing UI state variables in sync with the live term sheet.
    setTenor(baselineTerms.tenor);
    setOid(baselineTerms.oid);
    setUpfrontFee(baselineTerms.upfrontFee);
    setPikPremium(baselineTerms.pikPremium);
    setRedemptionPremium(baselineTerms.redemptionPremium);
    setAmortization(baselineTerms.amortization);
    setMaxLeverageCov(baselineTerms.maxLeverageCov);
    setMinIcrCov(baselineTerms.minIcrCov);
    setDsra(baselineTerms.dsra);
    setCashSweep(baselineTerms.cashSweep);
    setCallProtection(baselineTerms.callProtection);
    setEquityKicker(baselineTerms.equityKicker);
    setConversionValuation(baselineTerms.conversionValuation);
  }, [selectedOptionIndex, metrics?.scenarioData?.length, baselineTerms]);

  const liveEconomics = useMemo(() => {
    if (!selectedBaseline || !metrics?.evaluateScenario) return null;
    const candidate =
      metrics.facilityCandidates?.find(
        (c) => c.family === selectedBaseline.family
      ) || selectedBaseline;
    return metrics.evaluateScenario(candidate, {
      ...(liveNegotiationTerms || baselineTerms || {}),
    });
  }, [selectedBaseline, metrics, liveNegotiationTerms, baselineTerms]);

  const lenderReturnFloor = useMemo(() => {
    if (!selectedBaseline) return 0;
    // A modest tolerance allows the lender to trade headline economics for
    // improved risk protection without making the engine mechanically rigid.
    return Math.max(0, Number(selectedBaseline.grossIrr || 0) - 0.75);
  }, [selectedBaseline]);

  const proposalImpact = (before, after, patch) => {
    const delta = (a, b) => Number(b || 0) - Number(a || 0);
    return {
      irr: delta(before?.grossIrr, after?.grossIrr),
      leverage: delta(before?.leverage, after?.leverage),
      icr: delta(before?.icr, after?.icr),
      ltv: delta(before?.ltv, after?.ltv),
      cashInterest: delta(
        before?.waterfall?.interest,
        after?.waterfall?.interest
      ),
      retainedCash: delta(
        before?.waterfall?.retained,
        after?.waterfall?.retained
      ),
      sweep: delta(before?.baselineSweep, after?.baselineSweep),
      patch,
    };
  };

  const getProtectionLevel = (term) => {
    const s = String(term || '').toLowerCase();
    if (s.includes('2-quarter')) return 2;
    if (s.includes('1-quarter')) return 1;
    return 0;
  };

  const buildCounter = (proposal, before, after) => {
    if (!selectedBaseline || !metrics?.evaluateScenario) return null;

    const candidate =
      metrics.facilityCandidates?.find(
        (c) => c.family === selectedBaseline.family
      ) || selectedBaseline;
    const candidates = [];

    const addCandidate = (label, patch, priority = 0) => {
      const terms = { ...proposal, ...patch };
      const evaluated = metrics.evaluateScenario(candidate, terms);
      if (!evaluated) return;
      const borrowerDistance = Object.keys(patch).reduce((s, k) => {
        const oldV = Number(proposal[k]);
        const newV = Number(patch[k]);
        if (Number.isFinite(oldV) && Number.isFinite(newV))
          return s + Math.abs(newV - oldV);
        return s + (oldV === newV ? 0 : 1);
      }, 0);

      const hardPenalty =
        evaluated.executionState === 'NOT_EXECUTABLE' ? 1000 : 0;
      const returnPenalty =
        Math.max(0, lenderReturnFloor - Number(evaluated.grossIrr || 0)) * 25;

      const protectionBonus =
        Math.max(0, Number(evaluated.icr || 0) - Number(after?.icr || 0)) * 2 +
        Math.max(
          0,
          Number(after?.leverage || 0) - Number(evaluated.leverage || 0)
        ) *
          3;

      candidates.push({
        label,
        patch,
        evaluated,
        score:
          hardPenalty +
          returnPenalty +
          borrowerDistance -
          protectionBonus -
          priority,
      });
    };

    const p = proposal;
    const b = selectedBaseline;

    // 1. Protect cash yield / lender economics.
    if (Number(p.oid) > Number(b.baselineOid)) {
      addCandidate(
        'Restore part of the OID economics',
        { oid: Math.max(Number(b.baselineOid), Number(p.oid) - 1) },
        5
      );
    }
    if (Number(p.upfrontFee) < Number(b.baselineUpfront)) {
      addCandidate(
        'Restore part of the upfront economics',
        {
          upfrontFee: Math.min(
            Number(b.baselineUpfront),
            Number(p.upfrontFee) + 0.5
          ),
        },
        4
      );
    }
    if (
      Number(p.upfrontFee) < Number(b.baselineUpfront) &&
      Number(p.oid) > Number(b.baselineOid)
    ) {
      addCandidate(
        'Trade OID against upfront fee',
        {
          oid: Math.max(Number(b.baselineOid), Number(p.oid) - 0.5),
          upfrontFee: Math.min(
            Number(b.baselineUpfront),
            Number(p.upfrontFee) + 0.25
          ),
        },
        8
      );
    }
    if (
      Number(p.cashRateAdjustment || 0) <
      Number(baselineTerms?.cashRateAdjustment || 0)
    ) {
      addCandidate(
        'Restore part of the cash pricing',
        {
          cashRateAdjustment: Math.min(
            Number(baselineTerms?.cashRateAdjustment || 0),
            Number(p.cashRateAdjustment || 0) + 0.5
          ),
        },
        7
      );
    }
    if (
      Number(p.redemptionPremium || 0) <
      Number(baselineTerms?.redemptionPremium || 0)
    ) {
      addCandidate(
        'Restore part of the redemption premium',
        {
          redemptionPremium: Math.min(
            Number(baselineTerms?.redemptionPremium || 0),
            Number(p.redemptionPremium || 0) + 1
          ),
        },
        5
      );
    }
    if (Number(p.pikPremium || 0) < Number(baselineTerms?.pikPremium || 0)) {
      addCandidate(
        'Restore part of the PIK coupon',
        {
          pikPremium: Math.min(
            Number(baselineTerms?.pikPremium || 0),
            Number(p.pikPremium || 0) + 0.5
          ),
        },
        4
      );
    }

    // 2. Protect de-leveraging / downside.
    if (Number(p.cashSweep) < Number(b.baselineSweep)) {
      addCandidate(
        'Restore part of the cash sweep',
        {
          cashSweep: Math.min(
            Number(b.baselineSweep),
            Number(p.cashSweep) + 25
          ),
        },
        6
      );
    }
    if (Number(p.maxLeverageCov) > Number(b.baselineLeverageCov)) {
      addCandidate(
        'Tighten the leverage covenant',
        {
          maxLeverageCov: Math.min(
            Number(b.baselineLeverageCov),
            Number(p.maxLeverageCov) - 0.25
          ),
        },
        5
      );
    }
    if (getProtectionLevel(p.dsra) < getProtectionLevel(b.dsra)) {
      addCandidate(
        'Restore liquidity protection through DSRA',
        { dsra: b.dsra },
        7
      );
    }
    if (
      p.callProtection === 'None (Callable Anytime)' &&
      b.callProtection !== 'None (Callable Anytime)'
    ) {
      addCandidate(
        'Restore minimum call protection',
        { callProtection: b.callProtection },
        5
      );
    }

    // 3. If tenor is extended, protect duration economics without blindly using
    // the cash sweep as the only give/get.
    if (Number(p.tenor) > Number(b.tenor)) {
      addCandidate(
        'Compensate duration extension with OID',
        { oid: Math.max(90, Number(p.oid) - 1) },
        6
      );
      addCandidate(
        'Compensate duration extension with upfront economics',
        { upfrontFee: Math.min(5, Number(p.upfrontFee) + 0.5) },
        5
      );
      addCandidate(
        'Compensate duration extension with call protection',
        { callProtection: b.callProtection || '101 (1-Yr Soft Call)' },
        4
      );
    }

    // 4. Protect cash service capacity through PIK only when it actually helps
    // liquidity; PIK is not treated as a cosmetic addition to coupon.
    if (
      Number(after?.waterfall?.interest || 0) >
        Number(before?.waterfall?.interest || 0) &&
      Number(after?.waterfall?.preSweep || 0) <
        Number(before?.waterfall?.preSweep || 0)
    ) {
      addCandidate(
        'Shift part of cash burden into PIK',
        { pikPremium: Math.min(10, Number(p.pikPremium) + 1) },
        3
      );
    }

    // 5. Hybrid / equity-linked give-get.
    if (selectedBaseline.equityLinked) {
      if (Number(p.conversionValuation) > Number(b.conversionValuation)) {
        addCandidate(
          'Lower the conversion valuation to preserve lender equity participation',
          {
            conversionValuation: Math.max(
              Number(b.conversionValuation),
              Number(p.conversionValuation) - 10
            ),
          },
          8
        );
      }
      if (Number(p.equityKicker) < Number(b.equityKicker)) {
        addCandidate(
          'Restore part of the equity-linked kicker',
          {
            equityKicker: Math.min(
              Number(b.equityKicker),
              Number(p.equityKicker) + 1
            ),
          },
          4
        );
      }
    }

    const feasible = candidates
      .filter(
        (x) =>
          x.evaluated.executionState !== 'NOT_EXECUTABLE' &&
          Number(x.evaluated.grossIrr || 0) >= lenderReturnFloor
      )
      .sort((a, b) => a.score - b.score)[0];

    return feasible || null;
  };

  const assessProposal = (
    proposal,
    label = 'Borrower proposed term change',
    previousTerms = null
  ) => {
    if (!baselineTerms || !selectedBaseline || !metrics?.evaluateScenario)
      return;

    const candidate =
      metrics.facilityCandidates?.find(
        (c) => c.family === selectedBaseline.family
      ) || selectedBaseline;
    const priorTerms =
      previousTerms || acceptedNegotiationTerms || baselineTerms;
    const before =
      metrics.evaluateScenario(candidate, priorTerms) ||
      liveEconomics ||
      selectedBaseline;
    const after = metrics.evaluateScenario(candidate, proposal);
    const impact = proposalImpact(before, after, proposal);
    const changes = Object.keys(proposal).reduce((items, key) => {
      const from = priorTerms?.[key];
      const to = proposal?.[key];
      const isDifferent =
        typeof from === 'number' && typeof to === 'number'
          ? Math.abs(from - to) > 0.0001
          : String(from) !== String(to);
      if (isDifferent) items.push({ key, from, to });
      return items;
    }, []);

    let status = 'ACCEPT';
    let reason =
      'The lender accepts the proposal because the revised package remains within the risk and return envelope.';
    let counter = null;

    const hardBreaches = Object.entries(after.hardGates || {})
      .filter(([, v]) => v)
      .map(([k]) => k);
    const severeReturnLoss =
      Number(after.grossIrr || 0) < lenderReturnFloor - 1.5;
    const moderateReturnLoss = Number(after.grossIrr || 0) < lenderReturnFloor;
    const materialRisk =
      after.leverage > before.leverage + 0.25 ||
      after.icr < before.icr - 0.25 ||
      after.ltv > before.ltv + 10;

    if (hardBreaches.length) {
      counter = buildCounter(proposal, before, after);
      if (counter) {
        status = 'COUNTER';
        reason = `The proposal creates a ${hardBreaches.join(
          ', '
        )} constraint. The lender can support the commercial request only with a compensating protection package.`;
      } else {
        status = 'REJECT';
        reason = `The proposal creates a hard ${hardBreaches[0]} breach and no feasible compensating term is available within the modeled negotiation range.`;
      }
    } else if (severeReturnLoss) {
      counter = buildCounter(proposal, before, after);
      if (counter) {
        status = 'COUNTER';
        reason =
          'The borrower proposal reduces lender economics beyond the committee return floor. The lender is willing to trade, but requires an offsetting economic or structural concession.';
      } else {
        status = 'REJECT';
        reason =
          'The proposal reduces lender economics materially below the committee return floor and cannot be restored with the modeled terms.';
      }
    } else if (moderateReturnLoss || materialRisk) {
      counter = buildCounter(proposal, before, after);
      if (counter) {
        status = 'COUNTER';
        reason =
          'The proposal is directionally workable, but the lender requires a give/get to preserve risk-adjusted return and downside protection.';
      } else {
        status = 'COUNTER';
        reason =
          'The lender sees a workable structure but needs to rebalance the package before approval.';
      }
    } else {
      // Improvements to lender return or protection can be accepted immediately.
      status = 'ACCEPT';
      reason =
        impact.irr > 0.05
          ? `Accepted: lender IRR improves by ${impact.irr.toFixed(
              2
            )} percentage points without a material deterioration in credit risk.`
          : 'Accepted: the package remains within the lender’s return, leverage, coverage and liquidity envelope.';
    }

    const response = {
      status,
      reason,
      terms: counter ? { ...proposal, ...counter.patch } : null,
      counterLabel: counter?.label || null,
      impact,
      changes,
      borrowerAsk: changes.length
        ? changes
            .map((change) =>
              String(change.key)
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (x) => x.toUpperCase())
            )
            .join(', ')
        : 'No material change from the accepted position',
      lenderGive:
        status === 'ACCEPT'
          ? 'Accept the submitted package as the simulated agreed position'
          : status === 'COUNTER'
          ? 'Remain supportive of the borrower’s commercial objective'
          : 'No further flexibility while the hard constraint remains',
      lenderGet:
        counter?.label ||
        (status === 'ACCEPT'
          ? 'Return and downside protection remain inside the committee envelope'
          : 'A financeable structure before commercial negotiation can continue'),
      evaluated: after,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setLenderResponse(response);
    setNegotiationHistory((prev) => [
      ...prev,
      {
        time: response.timestamp,
        label,
        status,
        patch: changes.reduce(
          (out, change) => ({ ...out, [change.key]: change.to }),
          {}
        ),
        changes,
        counter: counter?.patch || null,
        reason,
        impact,
      },
    ]);

    if (status === 'ACCEPT') {
      setAcceptedNegotiationTerms({ ...proposal });
    }
  };

  const commitNegotiationTerm = (key, value, label) => {
    if (!baselineTerms) return;

    const previousTerms = { ...(liveNegotiationTerms || baselineTerms) };
    const previousValue = previousTerms[key];
    const unchanged =
      typeof previousValue === 'number' && typeof value === 'number'
        ? Math.abs(previousValue - value) <= 0.0001
        : String(previousValue) === String(value);
    if (unchanged) return;
    const next = {
      ...previousTerms,
      [key]: value,
    };

    setLiveNegotiationTerms(next);

    // Preserve all of the original UI's state variables as the live term sheet.
    const setters = {
      tenor: setTenor,
      oid: setOid,
      upfrontFee: setUpfrontFee,
      pikPremium: setPikPremium,
      redemptionPremium: setRedemptionPremium,
      amortization: setAmortization,
      maxLeverageCov: setMaxLeverageCov,
      minIcrCov: setMinIcrCov,
      dsra: setDsra,
      cashSweep: setCashSweep,
      callProtection: setCallProtection,
      equityKicker: setEquityKicker,
      conversionValuation: setConversionValuation,
    };
    if (setters[key]) setters[key](value);

    // Evaluate against the complete proposed package immediately.
    assessProposal(
      next,
      label || `Borrower proposed ${key} change`,
      previousTerms
    );
  };

  // The redesigned simulator separates drafting from submitting. Moving a
  // control updates live preview economics, while only Submit Proposal creates
  // a negotiation round and a lender response.
  const updateDraftNegotiationTerm = (key, value) => {
    if (!baselineTerms) return;
    setActiveNegotiationTerm(key);
    const next = {
      ...(draftNegotiationTerms || liveNegotiationTerms || baselineTerms),
      [key]: value,
    };
    setDraftNegotiationTerms(next);
    setLiveNegotiationTerms(next);
    // A prior response applies to the last submitted package, not the draft
    // currently being edited.
    if (lenderResponse) setLenderResponse(null);
    const setters = {
      tenor: setTenor,
      oid: setOid,
      upfrontFee: setUpfrontFee,
      pikPremium: setPikPremium,
      redemptionPremium: setRedemptionPremium,
      amortization: setAmortization,
      maxLeverageCov: setMaxLeverageCov,
      minIcrCov: setMinIcrCov,
      dsra: setDsra,
      cashSweep: setCashSweep,
      callProtection: setCallProtection,
      equityKicker: setEquityKicker,
      conversionValuation: setConversionValuation,
    };
    if (setters[key]) setters[key](value);
  };

  const updateDraftNegotiationTerms = (patch) => {
    if (!baselineTerms) return;
    setActiveNegotiationTerm(Object.keys(patch)[0] || 'tenor');
    const next = {
      ...(draftNegotiationTerms || liveNegotiationTerms || baselineTerms),
      ...patch,
    };
    setDraftNegotiationTerms(next);
    setLiveNegotiationTerms(next);
    if (lenderResponse) setLenderResponse(null);
  };

  const submitBorrowerProposal = () => {
    if (!baselineTerms || !draftNegotiationTerms) return;
    const reference = acceptedNegotiationTerms || baselineTerms;
    const hasChanges = Object.keys(draftNegotiationTerms).some((key) => {
      const a = reference?.[key],
        b = draftNegotiationTerms?.[key];
      return typeof a === 'number' && typeof b === 'number'
        ? Math.abs(a - b) > 0.0001
        : String(a) !== String(b);
    });
    if (!hasChanges) return;
    setLiveNegotiationTerms({ ...draftNegotiationTerms });
    assessProposal(
      { ...draftNegotiationTerms },
      'Borrower submitted a revised package',
      reference
    );
  };

  const acceptLenderCounter = () => {
    if (!lenderResponse?.terms) return;
    const proposal = { ...(liveNegotiationTerms || baselineTerms) };
    const accepted = { ...lenderResponse.terms };
    const changes = Object.keys(accepted).reduce((items, key) => {
      const from = proposal?.[key];
      const to = accepted?.[key];
      const isDifferent =
        typeof from === 'number' && typeof to === 'number'
          ? Math.abs(from - to) > 0.0001
          : String(from) !== String(to);
      if (isDifferent) items.push({ key, from, to });
      return items;
    }, []);
    setLiveNegotiationTerms(accepted);
    setDraftNegotiationTerms(accepted);
    setAcceptedNegotiationTerms(accepted);
    setTenor(accepted.tenor);
    setOid(accepted.oid);
    setUpfrontFee(accepted.upfrontFee);
    setPikPremium(accepted.pikPremium);
    setRedemptionPremium(accepted.redemptionPremium);
    setAmortization(accepted.amortization);
    setMaxLeverageCov(accepted.maxLeverageCov);
    setMinIcrCov(accepted.minIcrCov);
    setDsra(accepted.dsra);
    setCashSweep(accepted.cashSweep);
    setCallProtection(accepted.callProtection);
    setEquityKicker(accepted.equityKicker);
    setConversionValuation(accepted.conversionValuation);

    setNegotiationHistory((prev) => [
      ...prev,
      {
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        label: 'Borrower accepted lender counter',
        status: 'ACCEPTED COUNTER',
        patch: changes.reduce(
          (out, change) => ({ ...out, [change.key]: change.to }),
          {}
        ),
        changes,
        counter: null,
        reason: 'Counterproposal accepted and moved into the live term sheet.',
      },
    ]);
    setLenderResponse({
      ...lenderResponse,
      status: 'ACCEPTED',
      reason:
        'Counterproposal accepted. The accepted terms are now the live negotiated package.',
    });
  };

  const rejectLenderCounter = () => {
    const restore = acceptedNegotiationTerms || baselineTerms;
    if (!restore) return;

    setLiveNegotiationTerms({ ...restore });
    setDraftNegotiationTerms({ ...restore });
    setTenor(restore.tenor);
    setOid(restore.oid);
    setUpfrontFee(restore.upfrontFee);
    setPikPremium(restore.pikPremium);
    setRedemptionPremium(restore.redemptionPremium);
    setAmortization(restore.amortization);
    setMaxLeverageCov(restore.maxLeverageCov);
    setMinIcrCov(restore.minIcrCov);
    setDsra(restore.dsra);
    setCashSweep(restore.cashSweep);
    setCallProtection(restore.callProtection);
    setEquityKicker(restore.equityKicker);
    setConversionValuation(restore.conversionValuation);

    setNegotiationHistory((prev) => [
      ...prev,
      {
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        label: 'Borrower rejected lender counter',
        status: 'REJECTED COUNTER',
        patch: {},
        counter: null,
        reason: 'Live terms restored to the last accepted package.',
      },
    ]);
    setLenderResponse(null);
  };

  const advisoryData = useMemo(() => {
    if (!metrics) return null;
    const baselineActive =
      metrics.scenarioData?.[selectedOptionIndex] || metrics.scenarioData?.[0];
    if (!baselineActive) return null;
    const active = liveEconomics
      ? { ...baselineActive, ...liveEconomics }
      : baselineActive;

    const fmt = (v) =>
      `${currency === 'USD' ? '$' : '₹'}${Number(v || 0).toFixed(1)}${
        currency === 'USD' ? 'M' : 'Cr'
      }`;
    let score = 60,
      strengths = [],
      risks = [],
      improvements = [];

    const executionState = active.executionState || 'EXECUTABLE';
    const leverage = Number(active.leverage || 0);
    const levLimit = Number(active.baselineLeverageCov || 4.5);
    const icr = Number(active.icr || 0);
    const icrLimit = Number(active.baselineIcrCov || 2);
    const preSweep = Number(active.waterfall?.preSweep || 0);
    const retained = Number(active.waterfall?.retained || 0);
    const ltv = Number(active.ltv || 0);

    if (executionState === 'EXECUTABLE') {
      score += 20;
      strengths.push(
        'Executable Structure: The recommended structure clears the current hard underwriting gates.'
      );
    } else if (executionState === 'CONDITIONAL') {
      score -= 5;
      risks.push(
        `Conditional Execution: ${
          active.feasibilityReason || 'Limited underwriting headroom.'
        }`
      );
      improvements.push({
        desc: 'Use the negotiation sandbox to improve structural protection before committee presentation.',
        bump: 10,
      });
    } else {
      score -= 45;
      risks.push(
        `Execution Failure: ${
          active.feasibilityReason ||
          'The structure fails a hard underwriting gate.'
        }`
      );
      improvements.push({
        desc: 'Re-engineer the facility through deployment, tranche mix, protection or facility selection rather than simply increasing price.',
        bump: 25,
      });
    }

    if (leverage <= levLimit - 1) {
      score += 10;
      strengths.push(
        `Leverage Headroom: ${leverage.toFixed(1)}x versus ${levLimit.toFixed(
          1
        )}x committee capacity.`
      );
    } else if (leverage <= levLimit) {
      score += 2;
      risks.push(
        `Limited Leverage Headroom: ${leverage.toFixed(
          1
        )}x is close to the ${levLimit.toFixed(1)}x ceiling.`
      );
      improvements.push({
        desc: 'Preserve headroom through staged deployment or a lower initial draw.',
        bump: 8,
      });
    } else {
      score -= 25;
      risks.push(
        `Leverage Constraint: ${leverage.toFixed(
          1
        )}x exceeds ${levLimit.toFixed(1)}x.`
      );
    }

    if (icr >= icrLimit + 1) {
      score += 8;
      strengths.push(
        `Strong Interest Coverage: ${icr.toFixed(1)}x versus ${icrLimit.toFixed(
          1
        )}x minimum.`
      );
    } else if (icr >= icrLimit) {
      strengths.push(
        `Interest Coverage: ${icr.toFixed(1)}x meets the ${icrLimit.toFixed(
          1
        )}x minimum with limited downside headroom.`
      );
    } else {
      score -= 25;
      risks.push(
        `Interest Coverage Pressure: ${icr.toFixed(
          1
        )}x is below ${icrLimit.toFixed(1)}x.`
      );
      improvements.push({
        desc: 'Reduce cash-service burden through staged deployment, PIK, lower initial debt or a different structure.',
        bump: 20,
      });
    }

    if (preSweep > 0) {
      score += 8;
      strengths.push(
        `Positive Year 1 Cash Flow: ${fmt(
          preSweep
        )} remains after modeled interest and scheduled principal before sweep.`
      );
      if (retained > 0)
        strengths.push(
          `Post-Sweep Liquidity: ${fmt(
            retained
          )} remains after the modeled sweep.`
        );
    } else {
      score -= 20;
      risks.push(
        'Year 1 Liquidity Deficit: Modeled operating cash flow does not cover debt service before the sweep.'
      );
      improvements.push({
        desc: 'Reconsider deployment timing, amortisation, PIK, facility size or structure.',
        bump: 20,
      });
    }

    if (Number(active.averageY1Debt || 0) < Number(metrics.numNewDebt || 0)) {
      strengths.push(
        `Staggered Deployment Benefit: average Year 1 new debt of ${fmt(
          active.averageY1Debt
        )} is below the full commitment of ${fmt(metrics.numNewDebt)}.`
      );
    }

    if (ltv <= 60) {
      score += 8;
      strengths.push(`Strong Security Coverage: ${ltv.toFixed(0)}% LTV.`);
    } else if (ltv <= 80) {
      score += 3;
      strengths.push(`Adequate Security Coverage: ${ltv.toFixed(0)}% LTV.`);
    } else {
      risks.push(
        `Higher LTV: ${ltv.toFixed(
          0
        )}% increases reliance on cash-flow recovery.`
      );
    }

    if (isSponsorBacked) {
      score += 8;
      strengths.push(
        'Sponsor Support: Institutional shareholder backing adds governance and potential capital-support capacity.'
      );
    } else {
      risks.push(
        'No Sponsor Backstop: The lender relies primarily on operating cash flow and security.'
      );
    }

    if (String(shareholderPreference).includes('Avoid')) {
      strengths.push(
        'Dilution Preference: Shareholders prefer debt-led solutions where commercially viable.'
      );
    }

    if (objectivesSafeCount(allocations) > 1) {
      strengths.push(
        `Multi-Objective Financing: ${objectivesSafeCount(
          allocations
        )} financing objectives are considered as a bundle.`
      );
    }

    score = Math.max(0, Math.min(100, Math.round(score)));
    if (executionState === 'NOT_EXECUTABLE') score = Math.min(score, 39);
    else if (executionState === 'CONDITIONAL') score = Math.min(score, 69);

    const rating =
      score >= 85
        ? 'Excellent'
        : score >= 70
        ? 'Strong'
        : score >= 55
        ? 'Moderate'
        : score >= 40
        ? 'Challenging'
        : 'High Risk';
    const likelihood =
      score >= 85
        ? 'High Execution Confidence'
        : score >= 70
        ? 'Probable Execution'
        : score >= 55
        ? 'Conditional Execution'
        : score >= 40
        ? 'Difficult Execution'
        : 'Not Currently Executable';

    const investorPerspective =
      executionState === 'NOT_EXECUTABLE'
        ? 'The current structure does not clear core underwriting constraints. Structural remediation is preferable to solving the issue through price alone.'
        : executionState === 'CONDITIONAL'
        ? 'The transaction is potentially financeable, but limited headroom means the lender is likely to require additional structural protection.'
        : score >= 85
        ? 'This presents as a strong institutional private credit opportunity with meaningful repayment capacity and structural protection.'
        : 'This is a credible private credit opportunity where deployment, covenants and downside protection should be negotiated holistically.';

    return {
      score,
      rating,
      likelihood,
      strengths,
      risks,
      improvements,
      investorPerspective,
      executionState,
      feasibilityReason: active.feasibilityReason,
      selectedStructure: active.dynamicTitle || active.type,
    };
  }, [
    metrics,
    selectedOptionIndex,
    liveEconomics,
    isSponsorBacked,
    shareholderPreference,
    allocations,
    currency,
  ]);

  function objectivesSafeCount(list) {
    return Array.isArray(list)
      ? list.filter((a) => Number(a?.amount || 0) > 0).length
      : 0;
  }

  const decisionModel = useMemo(() => {
    const active = selectedBaseline || {};
    const isProject = transactionScope === 'Specific project or asset';
    const isAcquisition = transactionScope === 'Acquisition vehicle';
    const isScoped = isProject || isAcquisition;
    const separable = cashFlowSeparation === 'Clearly separable';
    const partlySeparable = cashFlowSeparation === 'Partly separable';
    let routeScore = 0;
    if (isProject) routeScore += 4;
    if (isAcquisition) routeScore += 3;
    if (separable) routeScore += 3;
    if (partlySeparable) routeScore += 1;
    if (Number(contractedRevenuePct || 0) >= 60) routeScore += 1;
    if (Number(projectSponsorEquity || 0) >= Number(projectCost || 0) * 0.2)
      routeScore += 1;
    if (cashFlowSeparation === 'Not separable') routeScore -= 4;
    if (transactionScope === 'Business-wide funding') routeScore -= 5;

    let fundingRoute = 'Operating company funding';
    let routeCode = 'OPCO';
    let routeReason =
      'The financing need is business-wide and repayment depends on the operating company’s consolidated cash generation.';
    if (isAcquisition && routeScore >= 5) {
      fundingRoute = 'Acquisition / HoldCo SPV';
      routeCode = 'HOLDCO_SPV';
      routeReason =
        'The acquisition can be ring-fenced, but the lender will still assess structural subordination and permitted upstream cash distributions.';
    } else if (isProject && routeScore >= 6) {
      fundingRoute = 'Project or asset SPV';
      routeCode = 'PROJECT_SPV';
      routeReason =
        'Identifiable project cash flows, assets and sponsor equity make a ring-fenced financing perimeter worth evaluating.';
    } else if (isScoped && routeScore >= 2) {
      fundingRoute = 'Compare OpCo and SPV routes';
      routeCode = 'COMPARE';
      routeReason =
        'The asset or project is partly separable, but the available information does not yet establish that SPV complexity improves financeability.';
    } else if (isScoped) {
      routeReason =
        'The proposed cash flows are not sufficiently separable to support a standalone SPV assessment without material operating-company or sponsor support.';
    }

    const securedAssetsIdentified = [
      'Specific assets may be available',
      'Substantially all business assets',
    ].includes(securityAvailability);
    const checks = [
      sector,
      segment,
      businessModel,
      targetDebt,
      targetTenor,
      financingObjective,
      currentArchetype === 'NBFC'
        ? aum
        : currentArchetype === 'SAAS'
        ? arr
        : revenue,
      currentArchetype === 'NBFC'
        ? nim
        : currentArchetype === 'SAAS'
        ? grossMargin
        : baseEbitda,
      currentArchetype === 'NBFC' || currentArchetype === 'SAAS' ? true : ocf,
      enterpriseValue,
      unrestrictedCash,
      securityAvailability !== 'Not sure yet',
      securedAssetsIdentified ? collateralType : true,
      securedAssetsIdentified ? collateralLienStatus !== 'Not sure yet' : true,
      securedAssetsIdentified ? pledgedCollateral : true,
      existingTermDebt > 0 ? existingAnnualCashInterest : true,
      existingTermDebt > 0 ? yearOnePrincipalDue >= 0 : true,
      isScoped ? cashFlowSeparation !== 'Not sure yet' : true,
      isScoped ? projectCost : true,
      isScoped ? projectSponsorEquity : true,
      isScoped ? projectCfads : true,
    ];
    const completeness = Math.round(
      (checks.filter(Boolean).length / checks.length) * 100
    );
    const liquidityBuffer =
      Number(unrestrictedCash || 0) - Number(minimumOperatingCash || 0);
    const spvDebtService =
      Number(active.waterfall?.interest || 0) +
      Number(active.schedule?.[0]?.amount || 0) +
      Number(yearOnePrincipalDue || 0);
    const spvDscr =
      isScoped && spvDebtService > 0
        ? Number(projectCfads || 0) / spvDebtService
        : null;
    const downsideSpvDscr =
      spvDscr === null
        ? null
        : spvDscr * (1 - Number(downsideCashFlowDecline || 0) / 100);
    const evidenceLevel =
      financialPeriodCoverage === 'Latest complete financial year'
        ? 'Single-period snapshot'
        : financialPeriodCoverage === 'Two financial years + latest interim'
        ? 'Comparative history'
        : 'Extended trend history';
    const operatingHistoryYears = Math.max(
      0,
      new Date().getFullYear() - Number(foundedYear || new Date().getFullYear())
    );

    let statusCode = 'POTENTIALLY_FINANCEABLE';
    let status = 'Potentially financeable';
    let conclusion =
      'The selected structure passes the current preliminary screen, subject to validation of the information and assumptions shown.';
    if (completeness < 60) {
      statusCode = 'INSUFFICIENT_INFORMATION';
      status = 'More information required';
      conclusion =
        'The information provided is sufficient for exploration but not for a transaction-specific financing conclusion.';
    } else if (
      active.executionState === 'NOT_EXECUTABLE' ||
      (spvDscr !== null && spvDscr < 1)
    ) {
      statusCode = 'DOES_NOT_PASS';
      status = 'Does not pass the preliminary screen';
      conclusion =
        active.feasibilityReason ||
        'Current debt service is not supported by the modeled repayment cash flow.';
    } else if (
      active.executionState === 'CONDITIONAL' ||
      liquidityBuffer < 0 ||
      (spvDscr !== null && spvDscr < 1.2)
    ) {
      statusCode = 'WITH_CHANGES';
      status = 'Potentially financeable with changes';
      conclusion =
        liquidityBuffer < 0
          ? 'Available cash is below the minimum operating cash requirement; facility sizing or deployment should be revised.'
          : 'The structure is workable only with limited headroom and should be improved before negotiation.';
    }

    const constraint =
      statusCode === 'DOES_NOT_PASS'
        ? active.isIcrBreached
          ? 'Repayment coverage'
          : active.isLeverageBreached
          ? 'Debt capacity'
          : active.isLiquidityBreached
          ? 'Liquidity'
          : 'Standalone financeability'
        : liquidityBuffer < 0
        ? 'Minimum operating liquidity'
        : isScoped && spvDscr !== null && spvDscr < 1.2
        ? 'SPV debt-service coverage'
        : 'Validation of assumptions';

    return {
      statusCode,
      status,
      conclusion,
      constraint,
      completeness,
      liquidityBuffer,
      fundingRoute,
      routeCode,
      routeReason,
      routeScore,
      isScoped,
      spvDscr,
      downsideSpvDscr,
      evidenceLevel,
      operatingHistoryYears,
      canSimulate:
        statusCode === 'POTENTIALLY_FINANCEABLE' ||
        statusCode === 'WITH_CHANGES',
    };
  }, [
    selectedBaseline,
    transactionScope,
    cashFlowSeparation,
    contractedRevenuePct,
    projectSponsorEquity,
    projectCost,
    projectCfads,
    sector,
    segment,
    businessModel,
    targetDebt,
    targetTenor,
    financingObjective,
    currentArchetype,
    aum,
    arr,
    revenue,
    nim,
    grossMargin,
    baseEbitda,
    ocf,
    enterpriseValue,
    pledgedCollateral,
    unrestrictedCash,
    minimumOperatingCash,
    existingTermDebt,
    existingAnnualCashInterest,
    yearOnePrincipalDue,
    downsideCashFlowDecline,
    securityAvailability,
    collateralType,
    collateralLienStatus,
    financialPeriodCoverage,
    foundedYear,
  ]);

  const financingMarketView = useMemo(() => {
    const conventionalLikely = Boolean(metrics?.conventionalDebtLikely);
    const objective = String(
      privateCreditObjective || 'Still Evaluating Financing Alternatives'
    );
    const privateCreditSpecific =
      !objective.includes('Still Evaluating') && !objective.includes('Other');
    if (conventionalLikely) {
      return {
        code: 'CONVENTIONAL_CREDIBLE',
        title: 'Conventional debt appears credible',
        summary:
          'The profile may support lower-cost conventional borrowing. Private credit should be chosen only if its flexibility, speed, certainty or bespoke structure creates enough value to justify the likely premium.',
        comparator:
          'Treat bank or conventional senior debt as the cost comparator—not as one of the three private-credit recommendations.',
        privateCreditCase: privateCreditSpecific
          ? `The stated reason to consider private credit is ${objective.toLowerCase()}. The structures below are assessed against that requirement.`
          : 'The reason to pay for private credit is not yet established. The app will show private-credit alternatives, but this is a decision point rather than an automatic recommendation.',
      };
    }
    if (decisionModel?.statusCode === 'DOES_NOT_PASS') {
      return {
        code: 'NO_CURRENT_PATH',
        title: 'Neither price nor complexity repairs the current constraint',
        summary:
          'The present request does not clear the preliminary capacity test. A higher coupon or more lender protections cannot create repayment capacity that is not present.',
        comparator:
          'Resize, stage, add equity/support or change the financing perimeter before selecting an instrument.',
        privateCreditCase:
          'Private credit may still provide flexibility, but it should not be used to disguise an unfinanceable capital structure.',
      };
    }
    return {
      code: 'PRIVATE_CREDIT_RELEVANT',
      title: 'A private-credit solution may be strategically relevant',
      summary:
        'The requirement appears to benefit from a structure designed around the borrower rather than a standard product template.',
      comparator:
        'The recommendations prioritise problem-solving, execution and downside design—not simply the lowest headline coupon.',
      privateCreditCase: privateCreditSpecific
        ? `The stated objective is ${objective.toLowerCase()}, which is explicitly reflected in the ranking.`
        : 'The borrower should still establish which private-credit benefit matters most before treating the recommendation as a mandate.',
    };
  }, [metrics, decisionModel, privateCreditObjective]);

  const executionIntelligence = useMemo(() => {
    if (!selectedBaseline || !decisionModel) return null;
    const isSpv = ['PROJECT_SPV', 'HOLDCO_SPV', 'COMPARE'].includes(
      decisionModel.routeCode
    );
    const isHybrid = Boolean(
      selectedBaseline.equityLinked || selectedBaseline.hybrid
    );
    const hasDeferred = Number(selectedBaseline.activeSecondaryDebt || 0) > 0;
    const timeline = [
      {
        stage: 'Indicative alignment',
        timing: 'Week 0–1',
        outcome:
          'Confirm structure, funding perimeter and key commercial principles.',
      },
      {
        stage: 'Lender screening',
        timing: 'Week 1–2',
        outcome:
          'Share the initial information pack and resolve threshold questions.',
      },
      {
        stage: 'Financial, legal and commercial diligence',
        timing: 'Week 2–5',
        outcome:
          'Validate earnings, cash flows, ownership, contracts, security and downside assumptions.',
      },
      {
        stage: 'Documentation and approvals',
        timing: 'Week 4–7',
        outcome:
          'Negotiate definitive documents and obtain internal, lender and shareholder approvals.',
      },
      {
        stage: 'Conditions precedent and first draw',
        timing: 'Week 6–8',
        outcome:
          'Perfect agreed security, complete closing deliverables and fund the initial tranche.',
      },
      {
        stage: 'Monitor, repay and exit',
        timing: 'Post-closing',
        outcome:
          'Track reporting and protections, manage repayments and prepare for maturity, refinance, conversion or agreed exit.',
      },
    ];
    if (hasDeferred)
      timeline.push({
        stage: 'Subsequent draw',
        timing: 'After milestone completion',
        outcome:
          'Re-test draw conditions before the deferred commitment becomes available.',
      });
    const conditions = [
      'Financial and legal diligence completed to lender satisfaction',
      'Board and required shareholder approvals delivered',
      'Definitive financing documents executed',
      'Security interests and required filings completed',
      'Funds-flow statement and drawdown notice agreed',
    ];
    if (isSpv)
      conditions.push(
        'SPV ownership, project accounts, material contracts and cash-flow waterfall verified',
        'Sponsor equity funded and agreed completion or cost-overrun support documented'
      );
    if (isHybrid)
      conditions.push(
        'Valuation, conversion mechanics and investor/shareholder consents agreed'
      );
    const risks = [
      ...(decisionModel.completeness < 80
        ? [
            'Information gaps may delay lender screening or change the indicative structure.',
          ]
        : []),
      ...(decisionModel.liquidityBuffer < 0
        ? ['Minimum operating liquidity is not yet protected.']
        : []),
      ...(isSpv && cashFlowSeparation !== 'Clearly separable'
        ? ['Cash-flow and asset ring-fencing remains incomplete.']
        : []),
      ...(isSpv && projectStage !== 'Operational / cash-generating'
        ? ['Completion, timing and cost-overrun risk require sponsor support.']
        : []),
      ...(hasDeferred
        ? ['Deferred funding is exposed to milestone and draw-condition risk.']
        : []),
    ];
    const monitoring = isSpv
      ? [
          'Quarterly project performance and DSCR review',
          'Project-account waterfall and reserve testing',
          'Construction / operating milestone reporting',
          'Drawdown eligibility and use-of-proceeds confirmation',
        ]
      : [
          'Quarterly financial reporting',
          'Leverage and coverage testing',
          'Cash-sweep and liquidity review',
          'Compliance certificate and permitted-debt monitoring',
        ];
    return {
      timeline,
      conditions,
      risks,
      monitoring,
      isSpv,
      isHybrid,
      hasDeferred,
    };
  }, [selectedBaseline, decisionModel, cashFlowSeparation, projectStage]);

  const negotiation = useMemo(() => {
    if (!metrics || !selectedBaseline) return null;

    const baseline = selectedBaseline;
    const live = liveEconomics || baseline;
    const response = lenderResponse;
    const counters =
      response?.status === 'COUNTER' && response?.terms
        ? {
            ...(response.terms.upfrontFee !== undefined
              ? { upfrontFee: response.terms.upfrontFee }
              : {}),
            ...(response.terms.oid !== undefined
              ? { oid: response.terms.oid }
              : {}),
            ...(response.terms.cashSweep !== undefined
              ? { cashSweep: response.terms.cashSweep }
              : {}),
            ...(response.terms.dsra !== undefined
              ? { dsra: response.terms.dsra }
              : {}),
            ...(response.terms.maxLeverageCov !== undefined
              ? { maxLeverageCov: response.terms.maxLeverageCov }
              : {}),
            ...(response.terms.minIcrCov !== undefined
              ? { minIcrCov: response.terms.minIcrCov }
              : {}),
            ...(response.terms.callProtection !== undefined
              ? { callProtection: response.terms.callProtection }
              : {}),
            ...(response.terms.pikPremium !== undefined
              ? { pikPremium: response.terms.pikPremium }
              : {}),
            ...(response.terms.tenor !== undefined
              ? { tenor: response.terms.tenor }
              : {}),
            ...(response.terms.conversionValuation !== undefined
              ? { conversionValuation: response.terms.conversionValuation }
              : {}),
            ...(response.terms.equityKicker !== undefined
              ? { warrantKicker: response.terms.equityKicker }
              : {}),
          }
        : {};

    let state = 'Constructive';
    let color = 'emerald';
    const observations = [];

    if (response?.status === 'REJECT') {
      state = 'Reject / No-Go';
      color = 'red';
      observations.push(response.reason);
    } else if (response?.status === 'COUNTER') {
      state = 'Counter-Offer Demanded';
      color = 'amber';
      observations.push(response.reason);
      if (response.counterLabel)
        observations.push(`Lender give/get: ${response.counterLabel}.`);
    } else if (response?.status === 'ACCEPT') {
      state = 'Accepted';
      color = 'emerald';
      observations.push(response.reason);
    } else if (baseline.executionState === 'NOT_EXECUTABLE') {
      state = 'Breach / No-Go';
      color = 'red';
      observations.push(baseline.feasibilityReason);
    } else if (baseline.executionState === 'CONDITIONAL') {
      state = 'Counter-Offer Demanded';
      color = 'amber';
      observations.push(baseline.feasibilityReason);
    } else {
      observations.push(
        'Baseline structure is within the current underwriting envelope. Move a commercial term to open a borrower proposal.'
      );
    }

    const liveHardGates = Object.entries(live.hardGates || {})
      .filter(([, v]) => v)
      .map(([k]) => k);

    if (liveHardGates.length && !response) {
      observations.push(
        `Live package has a ${liveHardGates.join(', ')} constraint.`
      );
      if (state === 'Constructive') {
        state = 'Counter-Offer Demanded';
        color = 'amber';
      }
    }

    if (
      Math.abs(Number(live.grossIrr || 0) - Number(baseline.grossIrr || 0)) >
      0.05
    ) {
      observations.push(
        `Live lender IRR is ${Number(live.grossIrr || 0).toFixed(
          2
        )}% versus a frozen baseline of ${Number(
          baseline.grossIrr || 0
        ).toFixed(2)}%.`
      );
    }

    if (Number(live.conversionValuation || 0) > 0 && baseline.equityLinked) {
      const fmtLive = (v) =>
        `${currency === 'USD' ? '$' : '₹'}${Number(v || 0).toFixed(1)}${
          currency === 'USD' ? 'M' : 'Cr'
        }`;
      observations.push(
        `Illustrative conversion ownership is ${Number(
          live.conversionOwnershipPct || 0
        ).toFixed(1)}% at a conversion valuation of ${fmtLive(
          live.conversionValuation
        )}.`
      );
    }

    const scoreBase = advisoryData?.score ?? 50;
    const score =
      response?.status === 'REJECT'
        ? Math.min(scoreBase, 39)
        : response?.status === 'COUNTER'
        ? Math.min(scoreBase, 69)
        : scoreBase;

    return {
      state,
      color,
      observations: observations.length
        ? observations
        : ['No material negotiation observation.'],
      counters,
      baseline,
      live,
      score,
    };
  }, [
    metrics,
    selectedBaseline,
    liveEconomics,
    lenderResponse,
    advisoryData,
    currency,
  ]);

  const getAdvisoryStructures = () => {
    if (!metrics?.scenarioData?.length) return [];
    return metrics.scenarioData.map((data, idx) => ({
      ...data,
      title:
        idx === 0
          ? 'Primary Recommendation'
          : idx === 1
          ? 'Strong Alternative'
          : 'Structural Fallback',
      type: data.dynamicTitle || data.type,
      rate: `${Number(data.totalCoupon || 0).toFixed(2)}%`,
      leverage: `${Number(data.leverage || 0).toFixed(2)}x`,
      irr: `${Number(data.grossIrr || 0).toFixed(2)}%`,
      executionState: data.executionState || 'EXECUTABLE',
      feasibilityReason: data.feasibilityReason || '',
      rationale: data.mdRationale || data.rationale || '',
      rankingExplanation: data.rankingExplanation || '',
      dataKey: data.type,
      primaryLabel: data.primaryLabel,
      secondaryLabel: data.secondaryLabel,
      primaryAmount: data.activePrimaryDebt,
      secondaryAmount: data.activeSecondaryDebt,
      averageY1Debt: data.averageY1Debt,
      waterfall: data.waterfall,
      bridge: data.bridge,
    }));
  };

  const formatCurrency = (value) => {
    if (value === undefined || value === null || isNaN(Number(value))) {
      return `${currency === 'USD' ? '$' : '₹'}0.0${
        currency === 'USD' ? 'M' : 'Cr'
      }`;
    }
    return `${currency === 'USD' ? '$' : '₹'}${Number(value).toFixed(1)}${
      currency === 'USD' ? 'M' : 'Cr'
    }`;
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const startRealAssessment = () => {
    setAssessmentMode('real');
    setSelectedSampleId(null);
    setFinancialEntryMode('upload');
    setFinancialFiles([]);
    setShowManualFinancials(false);
    setManualStatementConfirmed(false);
    setFinancialReviewConfirmed(false);
    setActiveInputStep('about');
    setActiveView('inputs');
    window.scrollTo(0, 0);
  };

  const loadSampleCase = (sample) => {
    const d = sample.data;
    setAssessmentMode('sample');
    setSelectedSampleId(sample.id);
    setFinancialEntryMode('sample');
    setFinancialFiles([]);
    setShowManualFinancials(true);
    setManualStatementConfirmed(true);
    setFinancialReviewConfirmed(true);
    setSector(d.sector);
    setSegment(d.segment);
    setBusinessModel(d.businessModel);
    setFoundedYear(d.foundedYear);
    setCustomerCount(d.customerCount);
    setRevenue(d.revenue);
    setOtherIncome(d.otherIncome);
    setFinanceCosts(d.financeCosts);
    setDepreciationAmortization(d.depreciation);
    setProfitBeforeTax(d.profitBeforeTax);
    setTaxExpense(d.taxExpense);
    setProfitAfterTax(d.profitAfterTax);
    setExceptionalItems(d.exceptionalItems);
    setAddBacks(0);
    setOcf(d.ocf);
    setTotalCashCapex(d.totalCashCapex);
    if (d.arr !== undefined) setArr(d.arr);
    if (d.grossMargin !== undefined) setGrossMargin(d.grossMargin);
    if (d.aum !== undefined) setAum(d.aum);
    if (d.nim !== undefined) setNim(d.nim);
    if (d.gnpa !== undefined) setGnpa(d.gnpa);
    setExistingTermDebt(d.existingTermDebt);
    setUtilizedWorkingCapital(d.utilizedWorkingCapital);
    setCashAndEquivalents(d.cashAndEquivalents);
    setOtherBankBalances(d.otherBankBalances);
    setRestrictedCash(d.restrictedCash);
    setTotalEquity(d.totalEquity ?? Math.round(d.enterpriseValue * 0.42));
    setTradeReceivables(d.tradeReceivables ?? Math.round(d.revenue * 0.16));
    setInventory(
      d.inventory ??
        (d.businessModel === 'Manufacturing / Product Sales' ||
        d.businessModel === 'Consumer / Retail'
          ? Math.round(d.revenue * 0.14)
          : 0)
    );
    setTradePayables(d.tradePayables ?? Math.round(d.revenue * 0.11));
    setPropertyPlantEquipment(
      d.propertyPlantEquipment ?? Math.round(d.pledgedCollateral * 0.72)
    );
    setExistingAnnualCashInterest(d.existingAnnualCashInterest);
    setYearOnePrincipalDue(d.yearOnePrincipalDue);
    setTargetDebt(d.targetDebt);
    setTargetTenor(d.targetTenor);
    setAllocations(d.allocations);
    setFinancingPriority(d.financingPriority);
    setShareholderPreference(d.shareholderPreference);
    setPrivateCreditObjective(
      d.privateCreditObjective || 'Still Evaluating Financing Alternatives'
    );
    setHistoricalTrend(d.historicalTrend);
    setEnterpriseValue(d.enterpriseValue);
    setSecurityAvailability(d.securityAvailability);
    setCollateralType(d.collateralType);
    setCollateralLienStatus(d.collateralLienStatus);
    setPledgedCollateral(d.pledgedCollateral);
    setTransactionScope(d.transactionScope);
    setShowFundingPerimeter(d.transactionScope !== 'Business-wide funding');
    setCashFlowSeparation(d.cashFlowSeparation || 'Not sure yet');
    setSpvStatus(d.spvStatus || 'No SPV / not decided');
    setRecoursePreference(d.recoursePreference || 'Not sure yet');
    setProjectStage(d.projectStage || 'Development / planning');
    setProjectCost(d.projectCost ?? 0);
    setProjectSponsorEquity(d.projectSponsorEquity ?? 0);
    setProjectCfads(d.projectCfads ?? 0);
    setContractedRevenuePct(d.contractedRevenuePct ?? 0);
    setExpectedCodMonths(d.expectedCodMonths ?? 0);
    setProjectLifeYears(d.projectLifeYears ?? 0);
    setNegotiationHistory([]);
    setLenderResponse(null);
    setAcceptedNegotiationTerms(null);
    setSelectedStressScenario(null);
    setSelectedStabilisation(null);
    setStructureRationale([]);
    setLearnerStructureSelected(false);
    setActiveNegotiationTerm('tenor');
    setActiveInputStep('about');
    setActiveView('inputs');
    window.scrollTo(0, 0);
  };

  const handleRunEngine = () => {
    setActiveView('calculating');
    setSelectedOptionIndex(0);
    const activeCase = SAMPLE_CASES.find(
      (item) => item.id === selectedSampleId
    );
    setWorkspaceStage(
      assessmentMode === 'sample'
        ? activeCase?.track === 'special'
          ? 'assess'
          : 'structure'
        : 'assess'
    );
    setShowFullEconomics(false);
    setSelectedStressScenario(null);
    setActiveInsight(null);
    setIsDrawerOpen(false);
    setTimeout(() => {
      setActiveView('outputs');
      window.scrollTo(0, 0);
    }, 2000);
  };
  const handleGenerateAdvisory = () => {
    setActiveView('calculating_advisory');
    window.scrollTo(0, 0);
    setTimeout(() => setActiveView('advisory'), 2000);
  };
  const handlePrint = () => window.print();

  const handleSelectStructure = (idx) => {
    if (!metrics?.scenarioData?.[idx]) return;
    setSelectedOptionIndex(idx);
    if (assessmentMode === 'sample') setLearnerStructureSelected(true);
    const baseline = metrics.scenarioData[idx];
    const t = baseline;
    setTenor(t.baselineTenor);
    setOid(t.baselineOid);
    setUpfrontFee(t.baselineUpfront);
    setPikPremium(t.activePik);
    setRedemptionPremium(t.redemptionPremium || 0);
    setAmortization(t.activeAmortization);
    setMaxLeverageCov(t.baselineLeverageCov);
    setMinIcrCov(t.baselineIcrCov);
    setDsra(t.baselineDsra);
    setCashSweep(t.baselineSweep);
    setCallProtection(t.baselineCall);
    setEquityKicker(t.equityKicker || 0);
    setConversionValuation(
      t.conversionValuation || metrics.enterpriseValue || 0
    );
    setNegotiationHistory([]);
    setLenderResponse(null);
    setSelectedStressScenario(null);
    setStructureRationale([]);
    setActiveNegotiationTerm('tenor');
  };

  const handleLearnMore = (e, type) => {
    e.stopPropagation();
    setActiveModal(type);
  };
  const openInsight = (key) => {
    if (INSIGHT_DICT[key]) {
      setActiveInsight(key);
      setIsDrawerOpen(true);
    }
  };
  const handleAutoInsight = (key) => {
    if (!key || !INSIGHT_DICT[key]) return;
    if (!seenInsights[key]) {
      setSeenInsights((prev) => {
        const next = { ...prev, [key]: true };
        localStorage.setItem('scp_seen_insights', JSON.stringify(next));
        return next;
      });
      openInsight(key);
    }
  };

  const totalVisualValue = Math.max(
    metrics?.enterpriseValue || 1,
    metrics?.totalDebt || 1
  );

  const visualEqPct =
    metrics?.enterpriseValue > metrics?.totalDebt
      ? ((metrics?.sponsorEquity || 0) / totalVisualValue) * 100
      : 0;

  // ============================================================================

  // [SECTION 7: RENDER - LANDING PAGE]
  // ============================================================================
  const renderLandingView = () => (
    <div className="w-full flex flex-col items-center justify-center pt-12 pb-24 relative overflow-hidden w-full max-w-[100vw]">
      <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[5%] w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <ScrollReveal
        delay={0}
        className="w-full max-w-4xl px-4 flex flex-col items-center text-center z-10 mb-8"
      >
        <div className="bg-white/5 backdrop-blur-md text-indigo-600 dark:text-indigo-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 border border-slate-200 dark:border-indigo-800/30 shadow-sm transition-transform hover:scale-105 cursor-default">
          Private Credit Decision & Simulation Workspace
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          Understand, structure and prepare for{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Private Credit
          </span>
        </h1>
      </ScrollReveal>

      <ScrollReveal
        delay={100}
        className="w-full overflow-hidden mb-20 relative z-0"
      >
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="flex flex-col gap-4">
          <div className="flex whitespace-nowrap animate-marquee">
            {[
              'Mezzanine Debt',
              'Warrant Kicker',
              'Original Issue Discount',
              '50% Cash Sweep',
              'Payment-In-Kind (PIK)',
              'Asset-Backed Revolver',
              'Senior Secured Term',
              'Unitranche Facility',
              'Mezzanine Debt',
              'Warrant Kicker',
              'Original Issue Discount',
              '50% Cash Sweep',
            ].map((term, i) => (
              <span
                key={i}
                className="mx-3 px-6 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-mono font-bold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm"
              >
                {term}
              </span>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[
              'DSCR Covenants',
              'Exit Redemption Premium',
              'EBITDA Add-Backs',
              'Optionally Convertible Debentures',
              'LTV Limits',
              'Bullet Amortization',
              'Tier-II Capital',
              'Revenue-Based Financing',
              'DSCR Covenants',
              'Venture Debt',
              'EBITDA Add-Backs',
              'Optionally Convertible Debentures',
            ].map((term, i) => (
              <span
                key={i}
                className="mx-3 px-6 py-3 bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm font-mono font-bold text-indigo-700 dark:text-indigo-400 shadow-sm backdrop-blur-sm"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="w-full max-w-5xl mx-auto px-4 space-y-24 mb-24 relative z-10">
        <ScrollReveal
          delay={0}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-left space-y-4">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <span className="font-bold text-slate-900 dark:text-white">
                Founders need flexible capital to scale,
              </span>{' '}
              and private credit steps in where traditional banks cannot. To
              make these deals work, lenders utilize bespoke, highly technical
              levers like Original Issue Discounts (OID), Payment-in-Kind (PIK)
              interest, and Cash Sweeps.
            </p>
          </div>
          <div className="flex-1 w-full h-64 bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="absolute w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl"></div>
            <Icons.Layers
              size={80}
              className="text-indigo-600 dark:text-indigo-400 relative z-10 drop-shadow-md"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0}
          className="flex flex-col-reverse md:flex-row items-center gap-12"
        >
          <div className="flex-1 w-full h-64 bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="absolute w-48 h-48 bg-rose-500/20 rounded-full blur-2xl"></div>
            <Icons.AlertTriangle
              size={80}
              className="text-rose-600 dark:text-rose-400 relative z-10 drop-shadow-md"
            />
          </div>
          <div className="flex-1 text-left space-y-4">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <span className="font-bold text-slate-900 dark:text-white">
                But this creates a natural communication gap.
              </span>{' '}
              It isn't about hidden agendas; it's about the density of the math.
              It is incredibly difficult to quickly visualize how institutional
              covenants impact a company's day-to-day operations, leaving
              founders overwhelmed by the term sheet.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-left space-y-4">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                That is why we built this engine.
              </span>{' '}
              We created a transparent bridge between the founder's boardroom
              and the credit committee. By turning dense financial models into
              an interactive sandbox, both sides can instantly visualize the
              true cost of capital and align expectations.
            </p>
          </div>
          <div className="flex-1 w-full h-64 bg-slate-100/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"></div>
            <Icons.ShieldCheck
              size={80}
              className="text-emerald-600 dark:text-emerald-400 relative z-10 drop-shadow-md"
            />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0} className="w-full max-w-6xl mx-auto px-4 mb-32">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          How the Engine Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800/50 shadow-sm flex flex-col items-center text-center transition-all hover:bg-white/50 dark:hover:bg-slate-800/50">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-lg text-slate-500 mb-6 border border-slate-200 dark:border-slate-700">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Input the Baseline Facts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Describe the financing need, cash generation, existing obligations
              and operating context. The app builds an indicative capacity view
              and shows which inputs still require validation.
            </p>
          </div>
          <div className="bg-indigo-50/50 dark:bg-indigo-900/10 backdrop-blur-sm p-8 rounded-3xl border border-indigo-100 dark:border-indigo-500/20 shadow-sm flex flex-col items-center text-center relative overflow-hidden transition-all hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center font-bold text-lg text-indigo-600 dark:text-indigo-400 mb-6 border border-indigo-200 dark:border-indigo-800/50 relative z-10">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 relative z-10">
              Structure & Simulate
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10">
              Act as the credit committee. Dynamically flex OID, PIK, Tenor, and
              Amortization. Watch how tweaking these levers instantly rewrites
              the Gross IRR yield and Year 1 cash sweeps.
            </p>
          </div>
          <div className="bg-emerald-50/50 dark:bg-emerald-900/10 backdrop-blur-sm p-8 rounded-3xl border border-emerald-100 dark:border-emerald-500/20 shadow-sm flex flex-col items-center text-center relative overflow-hidden transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-200 dark:border-emerald-800/50 relative z-10">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 relative z-10">
              Prepare the Process
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10">
              Turn the preliminary assessment into an advisory brief, diligence
              priorities, closing conditions, monitoring plan and execution
              roadmap.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0} className="w-full max-w-5xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Engineered for Every Side of the Table
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Icons.ShieldAlert size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
              For Founders & Borrowers
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Look beyond headline rates. Understand how mandatory amortization
              and cash sweeps impact your operating runway and true liquidity
              before negotiating.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Icons.Sliders size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
              For Credit Professionals
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              A lightweight, front-office testing ground. Instantly stress-test
              leverage covenants, tranche sizing, and yield requirements without
              opening a 100-tab Excel LBO model.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Icons.BarChart size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
              For Investment Bankers
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Visually translate opaque debt structures to clients in real-time.
              Accelerate early-stage deal momentum and align structural
              expectations before deep-dive modeling.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Icons.BookOpen size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
              For Educational Learning
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Learn the cause-and-effect of institutional deal-making. See how
              adjusting a Warrant Kicker or forcing a Bullet repayment
              mathematically engineers a fund's Gross IRR.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} className="w-full max-w-5xl px-4 mb-12">
        <div className="text-center mb-8">
          <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-indigo-500">
            Choose your route
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            Assess a company or learn through a case
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            The analytical standard stays clear: real-company recommendations
            require financial evidence; educational cases are explicitly
            illustrative.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <button
            onClick={startRealAssessment}
            className="group text-left p-7 rounded-3xl bg-slate-950 dark:bg-indigo-600 text-white shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <Icons.Briefcase size={23} />
            </div>
            <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-200">
              Financial statements required
            </div>
            <h3 className="text-2xl font-bold mt-2">Assess a real business</h3>
            <p className="text-sm text-slate-300 dark:text-indigo-100 leading-relaxed mt-3">
              Provide the financing need and use the latest financial statements
              to build an evidence-led preliminary assessment.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-bold text-sm">
              Begin assessment{' '}
              <Icons.ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>
          <button
            onClick={() => {
              setActiveView('samples');
              window.scrollTo(0, 0);
            }}
            className="group text-left p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-900 shadow-lg hover:border-indigo-400 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-5">
              <Icons.BookOpen size={23} />
            </div>
            <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
              No documents needed
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
              Explore a sample case
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
              Learn by changing a realistic company, structure and negotiation
              without presenting the result as real underwriting.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-indigo-600 dark:text-indigo-400">
              Choose a case{' '}
              <Icons.ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>
        </div>
      </ScrollReveal>
    </div>
  );

  const renderSampleLibraryViewLegacy = () => {
    const toneClasses = {
      emerald:
        'bg-emerald-50 dark:bg-emerald-900/15 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300',
      indigo:
        'bg-indigo-50 dark:bg-indigo-900/15 border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300',
      amber:
        'bg-amber-50 dark:bg-amber-900/15 border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300',
      purple:
        'bg-purple-50 dark:bg-purple-900/15 border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300',
    };
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-14 pb-24">
        <button
          onClick={() => {
            setActiveView('landing');
            window.scrollTo(0, 0);
          }}
          className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-2"
        >
          <Icons.ArrowRight size={15} className="rotate-180" />
          Back
        </button>
        <div className="max-w-3xl mt-8">
          <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-indigo-500">
            Educational simulation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Learn private credit through realistic cases
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">
            Each case contains locked fictional facts and a genuine decision
            mandate. You choose only the questions still open to the investment
            committee, then compare structures and negotiate terms.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {SAMPLE_CASES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => loadSampleCase(sample)}
              className="group text-left p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                    toneClasses[sample.tone]
                  }`}
                >
                  <Icons.BarChart size={22} />
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                  Fictional case
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-5">
                {sample.title}
              </h2>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                {sample.subtitle}
              </p>
              <div
                className={`mt-5 p-4 rounded-2xl border text-xs leading-relaxed ${
                  toneClasses[sample.tone]
                }`}
              >
                <span className="font-bold">Learning focus:</span>{' '}
                {sample.learningGoal}
              </div>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  {sample.data.businessModel}
                </span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
                  Open case{' '}
                  <Icons.ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderSampleLibraryView = () => {
    const toneClasses = {
      emerald:
        'from-emerald-500/20 to-teal-500/5 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      indigo:
        'from-indigo-500/20 to-blue-500/5 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60',
      amber:
        'from-amber-500/20 to-orange-500/5 text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
      purple:
        'from-purple-500/20 to-fuchsia-500/5 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
    };
    const renderCaseCard = (sample) => {
      const presentation = CASE_PRESENTATION_DETAILS[sample.id] || {};
      return (
        <button
          key={sample.id}
          onClick={() => loadSampleCase(sample)}
          className="group text-left rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <div
            className={`h-32 p-5 bg-gradient-to-br ${
              toneClasses[sample.tone] || toneClasses.indigo
            } relative overflow-hidden`}
          >
            <CaseIllustration
              kind={presentation.visual}
              className="absolute right-0 bottom-[-7px] w-48 h-32 opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-white/10 to-transparent"></div>
            <div className="relative flex items-start justify-between gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white/75 dark:bg-slate-950/30 border border-current/15 flex items-center justify-center">
                <Icons.Layers size={20} />
              </div>
              <div className="text-right max-w-[52%]">
                <div className="text-[9px] uppercase tracking-widest font-bold">
                  {sample.category}
                </div>
                <div className="font-mono text-lg font-bold mt-2 leading-none">
                  {formatCurrency(sample.data.targetDebt)}
                </div>
                <div className="text-[8px] uppercase tracking-widest mt-1 opacity-70">
                  Facility requirement
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {sample.title}
                </h2>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {sample.subtitle}
                </p>
              </div>
              <Icons.ArrowRight
                size={18}
                className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0"
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-5">
              {sample.teaser || sample.story}
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
              <span>{sample.difficulty}</span>
              <span>{sample.duration}</span>
              <span>{sample.data.businessModel}</span>
            </div>
          </div>
        </button>
      );
    };
    const coreCases = SAMPLE_CASES.filter((item) => item.track !== 'special');
    const specialCases = SAMPLE_CASES.filter(
      (item) => item.track === 'special'
    );
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 pb-24">
        <button
          onClick={() => {
            setActiveView('landing');
            window.scrollTo(0, 0);
          }}
          className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-2"
        >
          <Icons.ArrowRight size={15} className="rotate-180" />
          Back
        </button>
        <div className="max-w-4xl mt-9">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
            Enter the deal room
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mt-5 leading-relaxed">
            Choose a transaction, examine the case file, select a financing
            structure and negotiate a package that can survive the downside.
          </p>
        </div>
        <section className="mt-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Private credit transactions
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Growth, acquisition, working-capital, hybrid and project-finance
                mandates.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {coreCases.length} projects
            </span>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">
            {coreCases.map(renderCaseCard)}
          </div>
        </section>
        <section className="mt-20 rounded-[36px] bg-slate-950 text-white border border-slate-800 p-6 md:p-10">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-amber-300">
              Special situations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              When the original capital structure no longer works
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed mt-4">
              Triage liquidity, choose a stabilisation path and negotiate with
              stakeholders before testing recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
            {specialCases.map(renderCaseCard)}
          </div>
        </section>
      </div>
    );
  };

  // ============================================================================
  // [SECTION 8: RENDER - INPUTS PAGE]
  // ============================================================================
  const renderEducationalCaseViewLegacy = () => {
    const sample = SAMPLE_CASES.find((item) => item.id === selectedSampleId);
    if (!sample)
      return (
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Choose a case to begin
          </h2>
          <button
            onClick={() => setActiveView('samples')}
            className="mt-5 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold"
          >
            Open case library
          </button>
        </div>
      );
    const schema = sample.decisionSchema || {
      level: 'Guided',
      facilitySize: false,
      allocation: false,
      tenor: false,
      perimeter: false,
    };
    const caseAllocationTotal = allocations.reduce(
      (sum, item) => sum + Number(item.amount || 0),
      0
    );
    const allocationBalanced =
      Math.abs(caseAllocationTotal - Number(targetDebt || 0)) < 0.01;
    const amountRange = schema.amountRange || [
      Math.max(1, Math.round(sample.data.targetDebt * 0.7)),
      Math.round(sample.data.targetDebt * 1.3),
    ];
    const tenorOptions = schema.tenorOptions || [sample.data.targetTenor];
    const permittedPurposes = schema.allowedPurposes || FINANCING_OBJECTIVES;
    const updateFacilitySize = (value) => {
      const next = Math.max(
        amountRange[0],
        Math.min(amountRange[1], Number(value || 0))
      );
      setTargetDebt(next);
      if (!schema.allocation) {
        setAllocations((previous) =>
          previous.map((item, index) =>
            index === 0 ? { ...item, amount: next } : { ...item, amount: 0 }
          )
        );
      }
    };
    const updateCaseAllocation = (id, field, value) =>
      setAllocations((previous) =>
        previous.map((item) =>
          item.id === id
            ? {
                ...item,
                [field]: field === 'amount' ? Number(value || 0) : value,
              }
            : item
        )
      );
    const addCaseAllocation = () => {
      if (!schema.allocation || allocations.length >= 3) return;
      const remainder = Math.max(
        0,
        Number(targetDebt || 0) - caseAllocationTotal
      );
      setAllocations((previous) => [
        ...previous,
        {
          id: `learner-${Date.now()}`,
          purpose:
            permittedPurposes.find(
              (p) => !previous.some((x) => x.purpose === p)
            ) || permittedPurposes[0],
          amount: remainder,
        },
      ]);
    };
    const removeCaseAllocation = (id) =>
      setAllocations((previous) => previous.filter((item) => item.id !== id));
    const statementFacts = [
      ['Revenue', revenue],
      ['Profit before tax', profitBeforeTax],
      ['Finance costs', financeCosts],
      ['Depreciation & amortisation', depreciationAmortization],
      ['Operating cash flow', ocf],
      ['Cash capex', totalCashCapex],
      ['Existing term borrowings', existingTermDebt],
      ['Working-capital borrowings', utilizedWorkingCapital],
      [
        'Cash and bank balances',
        Number(cashAndEquivalents || 0) + Number(otherBankBalances || 0),
      ],
      ['Year 1 principal due', yearOnePrincipalDue],
    ];

    return (
      <div className="w-full pb-24">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <button
            onClick={() => {
              setActiveView('samples');
              window.scrollTo(0, 0);
            }}
            className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-2"
          >
            <Icons.ArrowRight size={15} className="rotate-180" />
            Case library
          </button>
          <div className="mt-8 rounded-[32px] overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-2xl">
            <div className="p-7 md:p-10 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-400/15 text-purple-200 text-[9px] uppercase tracking-widest font-bold">
                    Fictional MBA-style case
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[9px] uppercase tracking-widest font-bold">
                    {schema.level}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mt-5 tracking-tight">
                  {sample.title}
                </h1>
                <p className="text-lg text-slate-300 mt-3">{sample.subtitle}</p>
                <p className="text-sm leading-relaxed text-slate-300 mt-6 max-w-3xl">
                  {sample.story}
                </p>
              </div>
              <div className="lg:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                  Your mandate
                </div>
                <p className="text-sm font-semibold leading-relaxed mt-3">
                  {sample.mandate}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="text-[8px] uppercase tracking-widest text-slate-500">
                    Learning focus
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    {sample.learningGoal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-6">
              <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Case file
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                      What you know
                    </h2>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 inline-flex items-center gap-1.5">
                    <Icons.Lock size={12} />
                    Locked facts
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    ['Industry', `${sector} · ${segment}`],
                    ['Revenue model', businessModel],
                    ['Operating since', foundedYear],
                    [
                      'Transaction catalyst',
                      sample.data.allocations.map((x) => x.purpose).join(' + '),
                    ],
                    [
                      'Existing borrowings',
                      formatCurrency(
                        Number(existingTermDebt || 0) +
                          Number(utilizedWorkingCapital || 0)
                      ),
                    ],
                    ['Security position', securityAvailability],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-4"
                    >
                      <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                        {label}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 mt-2">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Financial evidence
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    Extract from the fictional statements
                  </h2>
                  <p className="text-xs text-slate-500 mt-2">
                    These historical facts cannot be edited. Your decisions sit
                    on top of them.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 border-slate-100 dark:border-slate-800">
                  {statementFacts.map(([label, value]) => (
                    <div
                      key={label}
                      className="px-6 py-4 flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 sm:odd:border-r"
                    >
                      <span className="text-xs text-slate-500">{label}</span>
                      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                        {formatCurrency(value)}
                      </span>
                    </div>
                  ))}
                </div>
                {currentArchetype === 'SAAS' && (
                  <div className="px-6 py-5 bg-indigo-50/60 dark:bg-indigo-900/10 text-xs text-indigo-800 dark:text-indigo-200">
                    Management information: ARR {formatCurrency(arr)} · Gross
                    margin {Number(grossMargin).toFixed(1)}%
                  </div>
                )}
                {currentArchetype === 'NBFC' && (
                  <div className="px-6 py-5 bg-indigo-50/60 dark:bg-indigo-900/10 text-xs text-indigo-800 dark:text-indigo-200">
                    Financial-services information: Loan book / AUM{' '}
                    {formatCurrency(aum)} · NIM {Number(nim).toFixed(1)}% · GNPA{' '}
                    {Number(gnpa).toFixed(1)}%
                  </div>
                )}
                {decisionModel?.isScoped && (
                  <div className="px-6 py-5 bg-indigo-50/60 dark:bg-indigo-900/10 text-xs text-indigo-800 dark:text-indigo-200">
                    Project information: cost {formatCurrency(projectCost)} ·
                    sponsor equity {formatCurrency(projectSponsorEquity)} ·
                    annual CFADS {formatCurrency(projectCfads)}
                  </div>
                )}
              </section>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-28 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-900 shadow-xl overflow-hidden">
              <div className="p-6 md:p-7 bg-indigo-50/70 dark:bg-indigo-900/15 border-b border-indigo-100 dark:border-indigo-900">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Decision room
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  You are the decision maker
                </h2>
                <p className="text-xs text-slate-500 mt-2">
                  The case facts stay fixed. Only the choices that remain open
                  are yours.
                </p>
              </div>
              <div className="p-6 md:p-7 space-y-7">
                <div>
                  <div className="flex items-center justify-between">
                    <LabelWithCoach
                      label="Facility amount"
                      insightKey="CapitalAllocation"
                      onOpenInsight={openInsight}
                      sizeClass="text-sm"
                    />
                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      {schema.facilitySize ? 'Your decision' : 'Board mandate'}
                    </span>
                  </div>
                  {schema.facilitySize ? (
                    <div className="mt-3">
                      <input
                        type="range"
                        min={amountRange[0]}
                        max={amountRange[1]}
                        step="1"
                        value={targetDebt}
                        onChange={(e) => updateFacilitySize(e.target.value)}
                        className="w-full sleek-range"
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-[9px] text-slate-400">
                          {formatCurrency(amountRange[0])}
                        </span>
                        <span className="font-mono text-lg font-bold text-indigo-600">
                          {formatCurrency(targetDebt)}
                        </span>
                        <span className="text-[9px] text-slate-400">
                          {formatCurrency(amountRange[1])}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 font-mono font-bold text-slate-900 dark:text-white">
                      {formatCurrency(targetDebt)}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <LabelWithCoach
                      label="Indicative tenor"
                      insightKey="Tenor"
                      onOpenInsight={openInsight}
                      sizeClass="text-sm"
                    />
                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      {schema.tenor ? 'Your decision' : 'Case fact'}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {tenorOptions.map((years) => (
                      <button
                        key={years}
                        disabled={!schema.tenor}
                        onClick={() => setTargetTenor(years)}
                        className={`p-3 rounded-xl border text-xs font-bold ${
                          Number(targetTenor) === years
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                        } ${!schema.tenor ? 'cursor-default opacity-80' : ''}`}
                      >
                        {years} yrs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Capital allocation
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      {schema.allocation ? 'Your decision' : 'Case fact'}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {allocations.map((item, index) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3"
                      >
                        <div className="flex gap-2 items-center">
                          {schema.allocation ? (
                            <select
                              value={item.purpose}
                              onChange={(e) =>
                                updateCaseAllocation(
                                  item.id,
                                  'purpose',
                                  e.target.value
                                )
                              }
                              className="min-w-0 flex-1 bg-transparent text-xs font-semibold outline-none"
                            >
                              {permittedPurposes.map((p) => (
                                <option key={p}>{p}</option>
                              ))}
                            </select>
                          ) : (
                            <span className="min-w-0 flex-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                              {item.purpose}
                            </span>
                          )}
                          {schema.allocation ? (
                            <input
                              type="number"
                              value={item.amount}
                              onChange={(e) =>
                                updateCaseAllocation(
                                  item.id,
                                  'amount',
                                  e.target.value
                                )
                              }
                              className="w-20 bg-transparent text-right font-mono text-xs font-bold text-indigo-600 outline-none"
                            />
                          ) : (
                            <span className="font-mono text-xs font-bold">
                              {formatCurrency(item.amount)}
                            </span>
                          )}
                          {schema.allocation && index > 0 && (
                            <button
                              onClick={() => removeCaseAllocation(item.id)}
                              className="text-slate-400 hover:text-rose-500"
                            >
                              <Icons.X size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {schema.allocation && (
                    <div className="flex items-center justify-between mt-3">
                      <button
                        disabled={allocations.length >= 3}
                        onClick={addCaseAllocation}
                        className="text-[10px] font-bold text-indigo-600 disabled:text-slate-300"
                      >
                        + Add use
                      </button>
                      <span
                        className={`text-[10px] font-bold ${
                          allocationBalanced
                            ? 'text-emerald-600'
                            : 'text-rose-500'
                        }`}
                      >
                        {allocationBalanced
                          ? 'Allocation balanced'
                          : `${formatCurrency(
                              caseAllocationTotal
                            )} of ${formatCurrency(targetDebt)}`}
                      </span>
                    </div>
                  )}
                </div>

                {schema.perimeter && (
                  <div>
                    <LabelWithCoach
                      label="Borrowing perimeter"
                      insightKey="TransactionPerimeter"
                      onOpenInsight={openInsight}
                      sizeClass="text-sm"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Would you initially assess the requirement at the
                      operating company or through a ring-fenced vehicle?
                    </p>
                    <select
                      value={transactionScope}
                      onChange={(e) => setTransactionScope(e.target.value)}
                      className="mt-3 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                    >
                      {TRANSACTION_SCOPES.map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <LabelWithCoach
                    label="What matters most?"
                    insightKey="FinancingPriority"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <select
                    value={financingPriority}
                    onChange={(e) => setFinancingPriority(e.target.value)}
                    className="mt-3 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    {FINANCING_PRIORITIES.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <LabelWithCoach
                    label="Why consider private credit?"
                    insightKey="PrivateCreditObjective"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <select
                    value={privateCreditObjective}
                    onChange={(e) => setPrivateCreditObjective(e.target.value)}
                    className="mt-3 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    {PRIVATE_CREDIT_OBJECTIVES.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <LabelWithCoach
                    label="Shareholder position"
                    insightKey="ShareholderPreference"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <select
                    value={shareholderPreference}
                    onChange={(e) => setShareholderPreference(e.target.value)}
                    className="mt-3 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    {SHAREHOLDER_PREFERENCES.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>

                <button
                  disabled={!allocationBalanced}
                  onClick={handleRunEngine}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${
                    allocationBalanced
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Submit to the committee <Icons.ArrowRight size={18} />
                </button>
                <p className="text-[9px] leading-relaxed text-slate-400 text-center">
                  Your decisions will be evaluated against the locked case
                  facts. The result remains educational and illustrative.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  };

  const renderEducationalCaseViewLegacy2 = () => {
    const sample = SAMPLE_CASES.find((item) => item.id === selectedSampleId);
    if (!sample)
      return (
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Choose a project to begin
          </h2>
          <button
            onClick={() => setActiveView('samples')}
            className="mt-5 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold"
          >
            Open deal room
          </button>
        </div>
      );
    const financials = sample.financials || [];
    const maxRevenue = Math.max(
      ...financials.map((item) => Number(item.revenue || 0)),
      1
    );
    const historicalFinancials = financials.filter((item) => !item.forecast);
    const currentYear =
      historicalFinancials[historicalFinancials.length - 1] ||
      financials[Math.max(0, financials.length - 3)] ||
      {};
    const nextYear = financials.find((item) => item.forecast) || {};
    const facilityUses = sample.data.allocations || [];
    const totalUses =
      facilityUses.reduce((sum, item) => sum + Number(item.amount || 0), 0) ||
      1;
    return (
      <div className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <button
            onClick={() => {
              setActiveView('samples');
              window.scrollTo(0, 0);
            }}
            className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-2"
          >
            <Icons.ArrowRight size={15} className="rotate-180" />
            Deal room
          </button>
          <section className="mt-8 rounded-[36px] bg-slate-950 text-white border border-slate-800 overflow-hidden shadow-2xl relative">
            <div className="absolute right-[-8%] top-[-30%] w-[420px] h-[420px] rounded-full border-[70px] border-indigo-400/10"></div>
            <div className="relative p-7 md:p-11 grid lg:grid-cols-12 gap-9 items-end">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-widest font-bold text-slate-400">
                  <span>{sample.category}</span>
                  <span>•</span>
                  <span>{sample.difficulty}</span>
                  <span>•</span>
                  <span>{sample.duration}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mt-5 tracking-tight">
                  {sample.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mt-3 max-w-3xl">
                  {sample.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-slate-400 mt-7 max-w-3xl">
                  {sample.story}
                </p>
              </div>
              <div className="lg:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                  Mandate
                </div>
                <p className="text-sm font-semibold leading-relaxed mt-3">
                  {sample.mandate}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10 flex justify-between">
                  <span className="text-xs text-slate-400">Facility</span>
                  <span className="font-mono font-bold">
                    {formatCurrency(sample.data.targetDebt)}
                  </span>
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="text-xs text-slate-400">
                    Desired horizon
                  </span>
                  <span className="font-mono font-bold">
                    {sample.data.targetTenor} years
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-7 grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-6">
              <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Company and market
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mt-4">
                      {sample.marketContext}
                    </p>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Why capital is required now
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mt-4">
                      {sample.transactionRationale}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-3">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Financial trajectory
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                      History and the operating plan
                    </h2>
                  </div>
                  <div className="text-xs text-slate-500">₹ Crore</div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sample.financialNarrative}
                  </p>
                  <div className="grid grid-cols-5 gap-3 h-48 items-end mt-8">
                    {financials.map((item) => (
                      <div
                        key={item.period}
                        className="h-full flex flex-col justify-end"
                      >
                        <div className="flex-1 flex items-end justify-center">
                          <div
                            className={`w-full max-w-14 rounded-t-xl ${
                              item.forecast
                                ? 'bg-indigo-200 dark:bg-indigo-900/60 border border-dashed border-indigo-500'
                                : 'bg-indigo-600'
                            }`}
                            style={{
                              height: `${Math.max(
                                12,
                                (Number(item.revenue || 0) / maxRevenue) * 100
                              )}%`,
                            }}
                          ></div>
                        </div>
                        <div className="text-center mt-2">
                          <div className="text-[9px] font-bold text-slate-700 dark:text-slate-200">
                            {item.period}
                          </div>
                          <div className="text-[8px] font-mono text-slate-400 mt-0.5">
                            {Number(item.revenue || 0).toFixed(0)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-x-auto mt-7">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-left text-[9px] uppercase tracking-wider text-slate-400">
                          {[
                            'Period',
                            'Revenue',
                            'EBITDA',
                            'Operating cash',
                            'Debt',
                          ].map((x) => (
                            <th key={x} className="py-3 pr-4 font-bold">
                              {x}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {financials.map((item) => (
                          <tr
                            key={item.period}
                            className="border-t border-slate-100 dark:border-slate-800"
                          >
                            <td className="py-3 pr-4 font-bold text-slate-800 dark:text-slate-200">
                              {item.period}
                            </td>
                            {['revenue', 'ebitda', 'ocf', 'debt'].map((key) => (
                              <td
                                key={key}
                                className="py-3 pr-4 font-mono text-slate-600 dark:text-slate-300"
                              >
                                {formatCurrency(item[key])}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Transaction map
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Use of funds
                    </h3>
                    <div className="h-4 rounded-full overflow-hidden flex mt-5">
                      {facilityUses.map((item, index) => (
                        <div
                          key={item.id}
                          className={
                            index % 2 ? 'bg-purple-500' : 'bg-indigo-600'
                          }
                          style={{
                            width: `${
                              (Number(item.amount || 0) / totalUses) * 100
                            }%`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="space-y-3 mt-5">
                      {facilityUses.map((item, index) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                index % 2 ? 'bg-purple-500' : 'bg-indigo-600'
                              }`}
                            ></span>
                            {item.purpose}
                          </div>
                          <span className="font-mono text-xs font-bold">
                            {formatCurrency(item.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Execution timetable
                    </h3>
                    <div className="mt-5 space-y-3">
                      {(sample.timeline || []).map((item, index) => (
                        <div key={item} className="flex gap-3 items-center">
                          <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-indigo-600 flex items-center justify-center shrink-0">
                            {index + 1}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <section className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6">
                <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-300">
                  Commercial priorities
                </div>
                <div className="mt-5 space-y-3">
                  {(sample.priorities || []).map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-400/10 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-xs leading-relaxed text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
              <section className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6">
                <div className="text-[9px] uppercase tracking-widest font-bold text-amber-600">
                  Questions the structure must answer
                </div>
                <div className="mt-5 space-y-3">
                  {(sample.tensions || []).map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="text-amber-500">◆</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section className="rounded-3xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-200 dark:border-indigo-800/50 p-6">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-300">
                  Decision mandate
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white leading-relaxed mt-3">
                  Choose the financing structure you believe best fits the
                  mandate. Understand what it solves, what it compromises and
                  what you will need to negotiate.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-5 text-center">
                  <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 p-3">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400">
                      Current revenue
                    </div>
                    <div className="font-mono text-sm font-bold mt-1">
                      {formatCurrency(currentYear.revenue || revenue)}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 p-3">
                    <div className="text-[8px] uppercase tracking-wider text-slate-400">
                      Next-year EBITDA
                    </div>
                    <div className="font-mono text-sm font-bold mt-1">
                      {formatCurrency(nextYear.ebitda || baseEbitda)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleRunEngine}
                  className="w-full mt-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center gap-2"
                >
                  {sample.track === 'special'
                    ? 'Enter the situation room'
                    : 'Compare financing structures'}{' '}
                  <Icons.ArrowRight size={18} />
                </button>
              </section>
            </aside>
          </div>
        </div>
      </div>
    );
  };

  const renderEducationalCaseView = () => {
    const sample = SAMPLE_CASES.find((item) => item.id === selectedSampleId);
    if (!sample)
      return (
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Choose a project to begin
          </h2>
          <button
            onClick={() => setActiveView('samples')}
            className="mt-5 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold"
          >
            Open deal room
          </button>
        </div>
      );
    const presentation = CASE_PRESENTATION_DETAILS[sample.id] || {
      visual: 'generic',
      products: [['Core offering', 100]],
      customer: 'Diversified customers.',
      operations: 'Established operating platform.',
      assetNote:
        'The lender will validate the available asset and cash-flow support.',
    };
    const data = sample.data || {};
    const financials = (sample.financials || []).map((item, index, array) => {
      const scale =
        Number(item.revenue || 0) /
        Math.max(1, Number(data.revenue || item.revenue || 1));
      const capex = Math.max(
        0,
        Number(data.totalCashCapex || 0) *
          Math.max(0.55, scale) *
          (item.forecast ? 1.2 : 0.85)
      );
      const cash = Math.max(
        0,
        (Number(data.cashAndEquivalents || 0) +
          Number(data.otherBankBalances || 0)) *
          Math.max(0.55, 0.72 + (index / Math.max(5, array.length)) * 0.35)
      );
      return {
        ...item,
        period: item.forecast
          ? String(item.period).replace(/E$/, '')
          : item.period,
        capex,
        freeCash: Number(item.ocf || 0) - capex,
        cash,
        ebitdaMargin:
          Number(item.revenue || 0) > 0
            ? (Number(item.ebitda || 0) / Number(item.revenue || 1)) * 100
            : 0,
      };
    });
    const maxRevenue = Math.max(
      ...financials.map((item) => Number(item.revenue || 0)),
      1
    );
    const historical = financials.filter((item) => !item.forecast);
    const currentYear =
      historical[historical.length - 1] || financials[0] || {};
    const nextYear = financials.find((item) => item.forecast) || currentYear;
    const facilityUses = data.allocations || [];
    const totalUses =
      facilityUses.reduce((sum, item) => sum + Number(item.amount || 0), 0) ||
      1;
    const grossDebt =
      Number(data.existingTermDebt || 0) +
      Number(data.utilizedWorkingCapital || 0);
    const availableCash =
      Number(data.cashAndEquivalents || 0) +
      Number(data.otherBankBalances || 0);
    const netDebt = Math.max(0, grossDebt - availableCash);
    const receivables = Math.round(
      Number(data.revenue || 0) *
        (data.businessModel === 'Lending / Financial Spread' ? 0.04 : 0.15)
    );
    const inventory = Math.round(
      Number(data.revenue || 0) *
        (['Manufacturing / Product Sales', 'Consumer / Retail'].includes(
          data.businessModel
        )
          ? 0.12
          : 0.025)
    );
    const fixedAssets = Math.round(
      Math.max(
        Number(data.pledgedCollateral || 0) * 0.72,
        Number(data.revenue || 0) * 0.28
      )
    );
    const productTotal = Math.max(
      1,
      presentation.products.reduce((sum, item) => sum + Number(item[1] || 0), 0)
    );
    const debtProfile = [
      [
        'Term borrowings',
        Number(data.existingTermDebt || 0),
        'Scheduled facilities',
        Number(data.yearOnePrincipalDue || 0) > 0
          ? `${formatCurrency(data.yearOnePrincipalDue)} due in Year 1`
          : 'No Year 1 maturity',
      ],
      [
        'Working-capital borrowings',
        Number(data.utilizedWorkingCapital || 0),
        'Revolving limits',
        'Supports seasonal operating needs',
      ],
      [
        'Annual cash interest',
        Number(data.existingAnnualCashInterest || 0),
        'Current cash cost',
        grossDebt
          ? `${(
              (Number(data.existingAnnualCashInterest || 0) / grossDebt) *
              100
            ).toFixed(1)}% of gross debt`
          : 'No existing debt',
      ],
      [
        'Cash and bank balances',
        availableCash,
        'Available liquidity',
        `${formatCurrency(data.restrictedCash || 0)} separately restricted`,
      ],
    ];
    const explainPriority = (priority) => {
      const p = String(priority).toLowerCase();
      if (p.includes('liquid') || p.includes('runway') || p.includes('working'))
        return 'Committed expenditure and debt service arrive before the full benefit of the transaction. The package must leave enough cash for ordinary operations and execution delays.';
      if (p.includes('dilut') || p.includes('equity'))
        return 'Shareholders want to retain ownership and control. Any warrant, conversion or equity-linked return must therefore earn a clear reduction in cash burden or execution risk.';
      if (
        p.includes('refinanc') ||
        p.includes('prepay') ||
        p.includes('flexib')
      )
        return 'Management expects the credit profile to improve after the plan is delivered. Excessive call protection could prevent an earlier, cheaper refinancing.';
      if (p.includes('cash') || p.includes('repay') || p.includes('amortis'))
        return 'The timing of cash generation is uneven. Scheduled principal should follow the operating ramp rather than compete with it.';
      if (p.includes('fund') || p.includes('complete'))
        return 'Partial funding would leave the company exposed to an unfinished programme. Draw certainty and availability conditions matter alongside headline pricing.';
      return 'This priority affects the company’s ability to execute the plan without creating a second financing problem elsewhere in the business.';
    };
    return (
      <div className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <button
            onClick={() => {
              setActiveView('samples');
              window.scrollTo(0, 0);
            }}
            className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-2"
          >
            <Icons.ArrowRight size={15} className="rotate-180" />
            Deal room
          </button>
          <section className="mt-8 rounded-[36px] bg-slate-950 text-white border border-slate-800 overflow-hidden shadow-2xl relative">
            <CaseIllustration
              kind={presentation.visual}
              className="absolute right-[-2%] bottom-[-5%] w-[480px] h-[300px] text-indigo-300 opacity-20"
            />
            <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-indigo-500/10 to-transparent"></div>
            <div className="relative p-7 md:p-11 grid lg:grid-cols-12 gap-9 items-end">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-widest font-bold text-slate-400">
                  <span>{sample.category}</span>
                  <span>•</span>
                  <span>{sample.difficulty}</span>
                  <span>•</span>
                  <span>{sample.duration}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mt-5 tracking-tight">
                  {sample.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mt-3 max-w-3xl">
                  {sample.subtitle}
                </p>
                <p className="text-sm md:text-base leading-7 text-slate-300 mt-7 max-w-3xl">
                  {sample.story}
                </p>
              </div>
              <div className="lg:col-span-4 rounded-2xl bg-slate-950/70 backdrop-blur-sm border border-white/15 p-5">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                  Mandate
                </div>
                <p className="text-sm font-semibold leading-relaxed mt-3">
                  {sample.mandate}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[8px] uppercase tracking-widest text-slate-500">
                      Facility
                    </div>
                    <div className="font-mono text-xl font-bold mt-1">
                      {formatCurrency(data.targetDebt)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] uppercase tracking-widest text-slate-500">
                      Desired horizon
                    </div>
                    <div className="font-mono text-xl font-bold mt-1">
                      {data.targetTenor} years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              [
                'Current revenue',
                formatCurrency(currentYear.revenue || data.revenue),
                'Scale',
              ],
              [
                'EBITDA margin',
                `${Number(currentYear.ebitdaMargin || 0).toFixed(1)}%`,
                'Profitability',
              ],
              ['Gross debt', formatCurrency(grossDebt), 'Capital structure'],
              ['Net debt', formatCurrency(netDebt), 'After available cash'],
            ].map(([label, value, note]) => (
              <div
                key={label}
                className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-5"
              >
                <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                  {note}
                </div>
                <div className="font-mono text-xl font-bold text-slate-900 dark:text-white mt-2">
                  {value}
                </div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </section>

          <div className="mt-6 space-y-6">
            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Business profile
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  What the company sells and how it operates
                </h2>
              </div>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Product and service mix
                  </h3>
                  <div className="h-4 rounded-full overflow-hidden flex mt-5">
                    {presentation.products.map((item, index) => (
                      <div
                        key={item[0]}
                        className={
                          index % 3 === 0
                            ? 'bg-indigo-600'
                            : index % 3 === 1
                            ? 'bg-purple-500'
                            : 'bg-emerald-500'
                        }
                        style={{
                          width: `${(Number(item[1]) / productTotal) * 100}%`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="space-y-3 mt-5">
                    {presentation.products.map((item, index) => (
                      <div
                        key={item[0]}
                        className="flex justify-between gap-4 text-xs"
                      >
                        <span className="text-slate-600 dark:text-slate-300">
                          <i
                            className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              index % 3 === 0
                                ? 'bg-indigo-600'
                                : index % 3 === 1
                                ? 'bg-purple-500'
                                : 'bg-emerald-500'
                            }`}
                          ></i>
                          {item[0]}
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          {item[1]}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 p-6 md:p-8 grid md:grid-cols-2 gap-7">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Customers and revenue
                    </div>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300 mt-3">
                      {presentation.customer}
                    </p>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Operating platform
                    </div>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300 mt-3">
                      {presentation.operations}
                    </p>
                  </div>
                  <div className="md:col-span-2 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Market position
                    </div>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300 mt-3">
                      {sample.marketContext}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Transaction story
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    Why the company needs capital now
                  </h2>
                  <p className="text-sm md:text-base leading-7 text-slate-700 dark:text-slate-300 mt-5">
                    {sample.transactionRationale}
                  </p>
                </div>
                <div className="lg:col-span-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/40 p-5">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    What changes if the plan succeeds
                  </div>
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-200 mt-3">
                    The financing should convert the current opportunity into a
                    stronger operating and credit profile. The learner must
                    decide whether the additional cost and lender protections
                    are proportionate to the execution certainty gained.
                  </p>
                  <div className="mt-5 pt-4 border-t border-indigo-200/60 dark:border-indigo-800/40 flex justify-between">
                    <span className="text-xs text-slate-500">
                      Next-year EBITDA
                    </span>
                    <span className="font-mono font-bold">
                      {formatCurrency(nextYear.ebitda)}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-3">
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Financial performance
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    Earnings, cash generation and leverage
                  </h2>
                  <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                    {sample.financialNarrative}
                  </p>
                </div>
                <div className="text-xs text-slate-500">₹ Crore</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-5 gap-3 h-44 items-end">
                  {financials.map((item) => (
                    <div
                      key={item.period}
                      className="h-full flex flex-col justify-end"
                    >
                      <div className="flex-1 flex items-end justify-center">
                        <div
                          className={`w-full max-w-14 rounded-t-xl ${
                            item.forecast
                              ? 'bg-indigo-100 dark:bg-indigo-900/50 border-2 border-dashed border-indigo-400'
                              : 'bg-indigo-600'
                          }`}
                          style={{
                            height: `${Math.max(
                              12,
                              (Number(item.revenue || 0) / maxRevenue) * 100
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <div className="text-[9px] font-bold text-slate-700 dark:text-slate-200">
                          {item.period}
                        </div>
                        <div className="text-[8px] font-mono text-slate-400 mt-0.5">
                          {Number(item.revenue || 0).toFixed(0)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="w-full min-w-[820px] text-xs">
                    <thead>
                      <tr className="text-left text-[9px] uppercase tracking-wider text-slate-400">
                        {[
                          'Period',
                          'Revenue',
                          'EBITDA',
                          'Margin',
                          'Operating cash flow',
                          'Capex',
                          'Free cash flow',
                          'Debt',
                        ].map((x) => (
                          <th key={x} className="py-3 pr-5 font-bold">
                            {x}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {financials.map((item) => (
                        <tr
                          key={item.period}
                          className="border-t border-slate-100 dark:border-slate-800"
                        >
                          <td className="py-3 pr-5 font-bold text-slate-800 dark:text-slate-200">
                            {item.period}
                            {item.forecast ? 'E' : ''}
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {formatCurrency(item.revenue)}
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {formatCurrency(item.ebitda)}
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {item.ebitdaMargin.toFixed(1)}%
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {formatCurrency(item.ocf)}
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {formatCurrency(item.capex)}
                          </td>
                          <td
                            className={`py-3 pr-5 font-mono font-bold ${
                              item.freeCash >= 0
                                ? 'text-emerald-600'
                                : 'text-rose-500'
                            }`}
                          >
                            {formatCurrency(item.freeCash)}
                          </td>
                          <td className="py-3 pr-5 font-mono">
                            {formatCurrency(item.debt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-12 gap-6">
              <section className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Balance-sheet position
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                  Assets available and obligations carried
                </h2>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    ['Fixed and operating assets', fixedAssets],
                    ['Receivables', receivables],
                    ['Inventory', inventory],
                    ['Cash and bank balances', availableCash],
                    ['Gross debt', grossDebt],
                    ['Net debt', netDebt],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4"
                    >
                      <div className="text-[9px] leading-relaxed text-slate-500">
                        {label}
                      </div>
                      <div className="font-mono font-bold text-slate-900 dark:text-white mt-2">
                        {formatCurrency(value)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-5 text-slate-500 mt-5">
                  {presentation.assetNote}
                </p>
              </section>
              <section className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Existing debt profile
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                    What must be serviced or refinanced
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2">
                  {debtProfile.map(([label, value, type, note], index) => (
                    <div
                      key={label}
                      className={`p-6 ${index % 2 === 0 ? 'sm:border-r' : ''} ${
                        index < 2 ? 'border-b' : ''
                      } border-slate-200 dark:border-slate-800`}
                    >
                      <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                        {type}
                      </div>
                      <div className="flex justify-between gap-3 mt-2">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          {label}
                        </div>
                        <div className="font-mono font-bold text-slate-900 dark:text-white">
                          {formatCurrency(value)}
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-2">
                        {note}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                Transaction map
              </div>
              <div className="grid lg:grid-cols-2 gap-9 mt-6">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Use of funds
                  </h3>
                  <div className="h-4 rounded-full overflow-hidden flex mt-5">
                    {facilityUses.map((item, index) => (
                      <div
                        key={item.id}
                        className={
                          index % 3 === 0
                            ? 'bg-indigo-600'
                            : index % 3 === 1
                            ? 'bg-purple-500'
                            : 'bg-emerald-500'
                        }
                        style={{
                          width: `${
                            (Number(item.amount || 0) / totalUses) * 100
                          }%`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="space-y-3 mt-5">
                    {facilityUses.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              index % 3 === 0
                                ? 'bg-indigo-600'
                                : index % 3 === 1
                                ? 'bg-purple-500'
                                : 'bg-emerald-500'
                            }`}
                          ></span>
                          {item.purpose}
                        </div>
                        <span className="font-mono text-xs font-bold">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Execution timetable
                  </h3>
                  <div className="mt-5 space-y-3">
                    {(sample.timeline || []).map((item, index) => (
                      <div key={item} className="flex gap-3 items-center">
                        <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-indigo-600 flex items-center justify-center shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-300">
                    Borrower priorities
                  </div>
                  <h2 className="text-2xl font-bold mt-2">
                    What the financing must achieve
                  </h2>
                  <p className="text-sm text-slate-400 leading-6 mt-3">
                    These priorities will guide your choice. The app will not
                    reveal how well you protected them until the Advisory
                    debrief.
                  </p>
                </div>
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-3">
                  {(sample.priorities || []).map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/5 border border-white/10 p-5"
                    >
                      <div className="flex gap-3">
                        <span className="w-7 h-7 rounded-full bg-emerald-400/10 text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-white">
                            {item}
                          </div>
                          <p className="text-xs leading-5 text-slate-400 mt-2">
                            {explainPriority(item)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-amber-600">
                    Decision questions
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    What your structure must answer
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-3">
                  {(sample.tensions || []).map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl bg-amber-50/70 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 p-4 flex gap-4"
                    >
                      <span className="font-mono text-xs font-bold text-amber-600">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {item}
                        </div>
                        <p className="text-[11px] leading-5 text-slate-500 mt-1">
                          Decide whether pricing, repayment flexibility,
                          security or execution certainty should carry the
                          greater weight.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-7 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Your mandate
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
                    Choose a defensible financing structure, understand its
                    impact on the company and negotiate the terms without being
                    shown the engine’s preferred answer.
                  </p>
                </div>
                <button
                  onClick={handleRunEngine}
                  className="shrink-0 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center gap-2"
                >
                  {sample.track === 'special'
                    ? 'Enter the situation room'
                    : 'Compare financing structures'}{' '}
                  <Icons.ArrowRight size={18} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const renderInputsView = () => {
    if (assessmentMode === 'sample') return renderEducationalCaseView();
    const INPUT_STEPS = [
      {
        id: 'about',
        label: 'Business Profile',
        icon: <Icons.Building2 size={16} />,
      },
      {
        id: 'goals',
        label: 'Financing Need',
        icon: <Icons.TrendingUp size={16} />,
      },
      {
        id: 'financials',
        label: 'Financials & Capital',
        icon: <Icons.BarChart size={16} />,
      },
      {
        id: 'security',
        label: 'Security & Confirmations',
        icon: <Icons.Layers size={16} />,
      },
      {
        id: 'review',
        label: 'Review & Confirm',
        icon: <Icons.CheckCircle size={16} />,
      },
    ];

    const customerScaleLabel =
      businessModel === 'Subscription / SaaS'
        ? 'Active Paying Customers (Optional)'
        : businessModel === 'Lending / Financial Spread'
        ? 'Active Borrowers (Optional)'
        : businessModel === 'Transaction / Marketplace'
        ? 'Active Transacting Customers (Optional)'
        : 'Active Customers (Optional)';
    const customerScaleRelevant = ![
      'Project / EPC / Concession',
      'Real Estate Development',
      'Asset Ownership / Leasing',
    ].includes(businessModel);
    const ringFencePurposes = [
      'Capacity Expansion / Equipment',
      'New Facility / Location',
      'Acquisition Financing',
      'Project Development / Construction',
    ];
    const perimeterSuggested = allocations.some((a) =>
      ringFencePurposes.includes(a.purpose)
    );
    const perimeterVisible =
      showFundingPerimeter ||
      perimeterSuggested ||
      transactionScope !== 'Business-wide funding';
    const companyAge = Math.max(
      0,
      new Date().getFullYear() - Number(foundedYear || new Date().getFullYear())
    );
    const selectedSample = SAMPLE_CASES.find(
      (sample) => sample.id === selectedSampleId
    );
    const financialReviewVisible =
      assessmentMode === 'sample' ||
      showManualFinancials ||
      financialFiles.length > 0;
    const financialEvidenceLabel =
      assessmentMode === 'sample'
        ? 'Fictional case data'
        : financialFiles.length
        ? 'Selected documents — review required'
        : 'Statements required';
    const totalExistingBorrowings =
      Number(existingTermDebt || 0) + Number(utilizedWorkingCapital || 0);
    const cashAfterCapex = Math.max(
      0,
      Number(ocf || 0) - Number(totalCashCapex || 0)
    );
    const workingCapitalPosition =
      Number(tradeReceivables || 0) +
      Number(inventory || 0) -
      Number(tradePayables || 0);
    const realEvidenceReady =
      financialEntryMode === 'manual'
        ? manualStatementConfirmed
        : financialFiles.length > 0 && financialReviewConfirmed;

    const handleFinancialFiles = (event) => {
      const files = Array.from(event.target.files || []);
      setFinancialFiles(files);
      setFinancialReviewConfirmed(false);
      if (files.length) {
        setFinancialEntryMode('upload');
        setShowManualFinancials(true);
      }
    };

    const handleAddAllocation = () => {
      if (allocations.length >= 3) return;
      setAllocations([
        ...allocations,
        {
          id: Date.now().toString(),
          purpose: 'Working Capital / Inventory',
          amount: unallocatedAmount > 0 ? unallocatedAmount : 0,
        },
      ]);
    };

    const handleUpdateAllocation = (id, field, value) => {
      setAllocations(
        allocations.map((a) => (a.id === id ? { ...a, [field]: value } : a))
      );
    };

    const handleRemoveAllocation = (id) => {
      setAllocations(allocations.filter((a) => a.id !== id));
    };

    return (
      <div className="w-full pb-24 relative z-10 overflow-visible">
        {/* Intro */}
        <div className="text-center mt-8 mb-12 max-w-5xl mx-auto px-4 animate-fade-in-up">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold mb-5 ${
              assessmentMode === 'sample'
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
            }`}
          >
            {assessmentMode === 'sample' ? (
              <Icons.BookOpen size={13} />
            ) : (
              <Icons.ShieldCheck size={13} />
            )}{' '}
            {assessmentMode === 'sample'
              ? 'Educational sample — fictional data'
              : 'Real-company assessment — financial evidence required'}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {assessmentMode === 'sample'
              ? 'Explore the case before running the engine'
              : 'Describe the business and financing need'}
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {assessmentMode === 'sample'
              ? 'Every figure is editable. Use the Coach and simulation to understand why structures and terms change.'
              : 'Answer only the business questions the statements cannot answer. The financial section uses statement-aligned facts and calculates the credit measures for you.'}
          </p>
          {assessmentMode === 'sample' && (
            <button
              onClick={() => {
                setActiveView('samples');
                window.scrollTo(0, 0);
              }}
              className="mt-4 text-xs font-bold text-indigo-600 dark:text-indigo-400"
            >
              Choose a different sample
            </button>
          )}
        </div>

        {/* Full-Width Sticky Stepper */}
        <div className="sticky top-[80px] z-[900] w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-y border-slate-200 dark:border-slate-800/80 shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-start lg:justify-between gap-4 overflow-x-auto no-scrollbar">
            {INPUT_STEPS.map((step, idx) => {
              const isActive = activeInputStep === step.id;
              const isPast =
                INPUT_STEPS.findIndex((s) => s.id === activeInputStep) > idx;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => scrollToStep(step.id)}
                    className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 shadow-sm'
                        : isPast
                        ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        : 'text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : isPast
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                      }`}
                    >
                      {isPast ? <Icons.CheckCircle size={12} /> : step.icon}
                    </div>
                    {step.label}
                  </button>
                  {idx < INPUT_STEPS.length - 1 && (
                    <div className="hidden lg:block h-px bg-slate-200 dark:bg-slate-700 flex-1 min-w-[20px]"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div
          className="w-full max-w-5xl mx-auto px-4 space-y-20 mt-16 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <div id="about" className="scroll-mt-40">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                <Icons.Building2 size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  About Your Business
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Help us understand your company's operating profile.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-sm transition-all hover:shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="md:col-span-2">
                  <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                    Industry
                  </span>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Used for sector risk and lender-fit context; it does not
                    determine the financial model by itself.
                  </p>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-shadow"
                  >
                    {Object.keys(SECTOR_DATA).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                    Operating Segment
                  </span>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Choose the closest description of the company's main
                    activity.
                  </p>
                  <select
                    value={segment || ''}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-shadow"
                  >
                    {(SECTOR_DATA[sector] || []).map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                    How does the business earn revenue?
                  </span>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Choose the dominant revenue model; this changes the
                    financial questions and analysis.
                  </p>
                  <select
                    value={businessModel}
                    onChange={(e) => setBusinessModel(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-shadow"
                  >
                    {BUSINESS_MODELS.map((bm) => (
                      <option key={bm} value={bm}>
                        {bm}
                      </option>
                    ))}
                  </select>
                </div>
                {customerScaleRelevant && (
                  <div>
                    <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                      {customerScaleLabel}
                    </span>
                    <p className="text-[11px] text-slate-500 mb-2">
                      Provides operating context only; it does not determine
                      debt capacity by itself.
                    </p>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
                      <span className="text-slate-400 font-mono mr-2">#</span>
                      <input
                        type="number"
                        value={customerCount}
                        onChange={(e) =>
                          setCustomerCount(
                            e.target.value === '' ? '' : Number(e.target.value)
                          )
                        }
                        className="w-full bg-transparent font-mono text-slate-800 dark:text-slate-200 font-semibold outline-none appearance-none"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                    Operating Since
                  </span>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Operating history informs business maturity but remains a
                    qualitative factor.
                  </p>
                  <div className="flex items-center bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
                    <Icons.Clock size={16} className="text-slate-400 mr-2" />
                    <input
                      type="number"
                      value={foundedYear}
                      onChange={(e) =>
                        setFoundedYear(
                          e.target.value === '' ? '' : Number(e.target.value)
                        )
                      }
                      className="w-full bg-transparent font-mono text-slate-800 dark:text-slate-200 font-semibold outline-none appearance-none"
                    />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1.5">
                    Approximately {companyAge} years of operating history
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="goals" className="scroll-mt-40">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                <Icons.TrendingUp size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Strategic Financing Considerations
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Help us understand what success looks like for this
                  transaction.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-sm transition-all hover:shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <FormField
                  label="Total Target Debt Facility"
                  value={targetDebt}
                  setValue={setTargetDebt}
                  prefix={currency === 'USD' ? '$' : '₹'}
                  suffix={currency === 'USD' ? 'M' : 'Cr'}
                />
                <FormField
                  label="Target Tenor (Years)"
                  value={targetTenor}
                  setValue={setTargetTenor}
                  suffix=" Yrs"
                />

                {/* NEW PHASE 3 ALLOCATION TABLE */}
                <div className="md:col-span-2 border-t border-slate-100 dark:border-slate-800/50 pt-8">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100">
                        Capital Allocation (Sources & Uses)
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Specify how the requested {formatCurrency(targetDebt)}{' '}
                        will be deployed.
                      </p>
                    </div>
                    {allocations.length < 3 && (
                      <button
                        onClick={handleAddAllocation}
                        className="text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <Icons.CheckCircle size={14} className="rotate-45" />{' '}
                        Add Objective
                      </button>
                    )}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="flex items-center px-4 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50">
                      <div className="flex-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Financing Objective
                      </div>
                      <div className="w-32 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">
                        Amount
                      </div>
                      <div className="w-10"></div>
                    </div>

                    {allocations.map((alloc, idx) => (
                      <div
                        key={alloc.id}
                        className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-700/50 last:border-none gap-4 bg-white dark:bg-transparent"
                      >
                        <div className="flex-1">
                          <select
                            value={alloc.purpose}
                            onChange={(e) =>
                              handleUpdateAllocation(
                                alloc.id,
                                'purpose',
                                e.target.value
                              )
                            }
                            className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-slate-100 outline-none cursor-pointer"
                          >
                            {FINANCING_OBJECTIVES.map((uop) => (
                              <option key={uop} value={uop}>
                                {uop}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="w-32 flex justify-end items-center">
                          <span className="text-slate-400 text-xs mr-1">
                            {currency === 'USD' ? '$' : '₹'}
                          </span>
                          <input
                            type="number"
                            value={alloc.amount}
                            onChange={(e) =>
                              handleUpdateAllocation(
                                alloc.id,
                                'amount',
                                e.target.value
                              )
                            }
                            className="w-full bg-transparent text-right font-mono font-bold text-sm text-indigo-600 dark:text-indigo-400 outline-none"
                          />
                        </div>
                        <div className="w-10 flex justify-end">
                          {idx > 0 && (
                            <button
                              onClick={() => handleRemoveAllocation(alloc.id)}
                              className="text-slate-400 hover:text-rose-500 transition-colors"
                            >
                              <Icons.X size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Summary Footer */}
                    <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                        Total Allocated:{' '}
                        <span className="font-mono text-slate-900 dark:text-slate-100 ml-1">
                          {formatCurrency(allocatedAmount)}
                        </span>
                      </div>
                      <div
                        className={`text-xs font-bold font-mono ${
                          unallocatedAmount > 0
                            ? 'text-amber-500'
                            : allocatedAmount > targetDebt
                            ? 'text-rose-500'
                            : 'text-emerald-500'
                        }`}
                      >
                        {unallocatedAmount > 0
                          ? `${formatCurrency(
                              unallocatedAmount
                            )} Unallocated (Assumed GCP)`
                          : allocatedAmount > targetDebt
                          ? `Over-allocated by ${formatCurrency(
                              allocatedAmount - targetDebt
                            )}`
                          : `Fully Allocated`}
                      </div>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 mt-2 rounded-full overflow-hidden flex">
                    {allocations.map((alloc, i) => (
                      <div
                        key={alloc.id}
                        className={`h-full ${
                          i === 0
                            ? 'bg-indigo-500'
                            : i === 1
                            ? 'bg-purple-500'
                            : 'bg-emerald-500'
                        } transition-all duration-300`}
                        style={{
                          width: `${Math.min(
                            100,
                            (Number(alloc.amount || 0) / targetDebt) * 100
                          )}%`,
                        }}
                      ></div>
                    ))}
                    {unallocatedAmount > 0 && (
                      <div
                        className="h-full bg-amber-300 dark:bg-amber-500/50 transition-all duration-300"
                        style={{
                          width: `${(unallocatedAmount / targetDebt) * 100}%`,
                        }}
                      ></div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 border-t border-slate-100 dark:border-slate-800/50 pt-8">
                  {!perimeterVisible ? (
                    <button
                      onClick={() => setShowFundingPerimeter(true)}
                      className="w-full rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-left hover:border-indigo-400 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
                            Is any funding tied to a standalone project,
                            acquisition or identifiable asset?
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1">
                            Optional check. Open only if this may affect the
                            borrowing entity or security perimeter.
                          </div>
                        </div>
                        <span className="text-xs font-bold text-indigo-600">
                          Assess perimeter
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <LabelWithCoach
                            label="Funding Perimeter Check"
                            insightKey="TransactionPerimeter"
                            onOpenInsight={openInsight}
                            sizeClass="text-sm"
                          />
                          <p className="text-[11px] text-slate-500 mt-1">
                            A conditional structuring check—not a primary
                            feature or a request to choose an SPV in advance.
                          </p>
                        </div>
                        {!perimeterSuggested && (
                          <button
                            onClick={() => {
                              setShowFundingPerimeter(false);
                              setTransactionScope('Business-wide funding');
                            }}
                            className="text-[10px] font-bold text-slate-400 hover:text-rose-500"
                          >
                            Close
                          </button>
                        )}
                      </div>
                      <SelectionGrid
                        options={TRANSACTION_SCOPES}
                        value={transactionScope}
                        onChange={setTransactionScope}
                      />
                      {transactionScope === 'Not sure yet' && (
                        <div className="mt-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                          No project-finance figures are required. The
                          preliminary assessment will use the operating company
                          and flag the funding perimeter for later review.
                        </div>
                      )}
                      {[
                        'Specific project or asset',
                        'Acquisition vehicle',
                      ].includes(transactionScope) && (
                        <div className="mt-5 p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/40 space-y-5">
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                Can the relevant ownership, cash flows and
                                assets be identified separately?
                              </span>
                              <select
                                value={cashFlowSeparation}
                                onChange={(e) =>
                                  setCashFlowSeparation(e.target.value)
                                }
                                className="mt-2 w-full p-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm"
                              >
                                {CASH_FLOW_SEPARATION.map((x) => (
                                  <option key={x}>{x}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                Is there already a separate legal vehicle?
                              </span>
                              <select
                                value={spvStatus}
                                onChange={(e) => setSpvStatus(e.target.value)}
                                className="mt-2 w-full p-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm"
                              >
                                {SPV_STATUS_OPTIONS.map((x) => (
                                  <option key={x}>{x}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {cashFlowSeparation === 'Not sure yet' && (
                            <div className="text-[10px] text-indigo-700 dark:text-indigo-300">
                              That is enough for now. Detailed project figures
                              stay hidden until separability is clearer.
                            </div>
                          )}
                          {cashFlowSeparation === 'Not separable' && (
                            <div className="text-[10px] text-amber-700 dark:text-amber-300">
                              The app will favour an operating-company
                              assessment unless sponsor or corporate support
                              changes the perimeter.
                            </div>
                          )}
                          {['Clearly separable', 'Partly separable'].includes(
                            cashFlowSeparation
                          ) && (
                            <>
                              <div className="grid md:grid-cols-2 gap-5 pt-5 border-t border-indigo-100 dark:border-indigo-800/30">
                                <div>
                                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                    Recourse preference
                                  </span>
                                  <select
                                    value={recoursePreference}
                                    onChange={(e) =>
                                      setRecoursePreference(e.target.value)
                                    }
                                    className="mt-2 w-full p-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm"
                                  >
                                    {RECOURSE_OPTIONS.map((x) => (
                                      <option key={x}>{x}</option>
                                    ))}
                                  </select>
                                </div>
                                <div>
                                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                                    Project / asset stage
                                  </span>
                                  <select
                                    value={projectStage}
                                    onChange={(e) =>
                                      setProjectStage(e.target.value)
                                    }
                                    className="mt-2 w-full p-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm"
                                  >
                                    {PROJECT_STAGES.map((x) => (
                                      <option key={x}>{x}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div className="grid md:grid-cols-3 gap-5 pt-5 border-t border-indigo-100 dark:border-indigo-800/30">
                                <FormField
                                  label="Total Project / Acquisition Cost"
                                  value={projectCost}
                                  setValue={setProjectCost}
                                  prefix={currency === 'USD' ? '$' : '₹'}
                                  suffix={currency === 'USD' ? 'M' : 'Cr'}
                                />
                                <FormField
                                  label="Sponsor Equity"
                                  value={projectSponsorEquity}
                                  setValue={setProjectSponsorEquity}
                                  prefix={currency === 'USD' ? '$' : '₹'}
                                  suffix={currency === 'USD' ? 'M' : 'Cr'}
                                />
                                <div>
                                  <LabelWithCoach
                                    label="Annual Cash Available for Debt Service"
                                    insightKey="CFADS"
                                    onOpenInsight={openInsight}
                                    sizeClass="text-sm"
                                  />
                                  <div className="mt-2">
                                    <FormField
                                      label="Project / asset CFADS"
                                      value={projectCfads}
                                      setValue={setProjectCfads}
                                      prefix={currency === 'USD' ? '$' : '₹'}
                                      suffix={currency === 'USD' ? 'M' : 'Cr'}
                                    />
                                  </div>
                                </div>
                                <FormField
                                  label="Contracted Revenue"
                                  value={contractedRevenuePct}
                                  setValue={setContractedRevenuePct}
                                  suffix="%"
                                />
                                <FormField
                                  label="Expected Operations Start"
                                  value={expectedCodMonths}
                                  setValue={setExpectedCodMonths}
                                  suffix=" Months"
                                />
                                <FormField
                                  label="Project / Contract Life"
                                  value={projectLifeYears}
                                  setValue={setProjectLifeYears}
                                  suffix=" Years"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="md:col-span-2 border-t border-slate-100 dark:border-slate-800/50 pt-6">
                  <LabelWithCoach
                    label="Financing Priority"
                    insightKey="FinancingPriority"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <p className="text-[11px] text-slate-500 mb-1">
                    What matters most to the board for this transaction?
                  </p>
                  <SelectionGrid
                    options={FINANCING_PRIORITIES}
                    value={financingPriority}
                    onChange={setFinancingPriority}
                  />
                </div>

                <div className="md:col-span-2">
                  <LabelWithCoach
                    label="Shareholder Preference"
                    insightKey="ShareholderPreference"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <p className="text-[11px] text-slate-500 mb-1">
                    This helps us evaluate whether hybrid or convertible
                    structures may be appropriate.
                  </p>
                  <SelectionGrid
                    options={SHAREHOLDER_PREFERENCES}
                    value={shareholderPreference}
                    onChange={setShareholderPreference}
                  />
                </div>

                <div className="md:col-span-2">
                  <LabelWithCoach
                    label="Private Credit Objective"
                    insightKey="PrivateCreditObjective"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <p className="text-[11px] text-slate-500 mb-3">
                    Why is institutional private credit being considered over
                    traditional bank financing?
                  </p>
                  <select
                    value={privateCreditObjective}
                    onChange={(e) => setPrivateCreditObjective(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-shadow"
                  >
                    {PRIVATE_CREDIT_OBJECTIVES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div id="financials" className="scroll-mt-40">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                <Icons.BarChart size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Financial Statements & Existing Capital
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  One evidence set supports earnings, cash-flow, leverage and
                  liquidity analysis.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-sm space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
                  <div>
                    <LabelWithCoach
                      label="Provide the latest financial statements"
                      insightKey="FinancialDocuments"
                      onOpenInsight={openInsight}
                      sizeClass="text-sm"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      A latest complete year is enough for the preliminary
                      screen. Comparative years and a recent interim period
                      improve confidence but are not required to begin.
                    </p>
                  </div>
                  <select
                    value={financialPeriodCoverage}
                    onChange={(e) => setFinancialPeriodCoverage(e.target.value)}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    {FINANCIAL_PERIOD_OPTIONS.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>

                {assessmentMode === 'sample' ? (
                  <div className="rounded-2xl border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/10 p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <Icons.BookOpen size={19} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {selectedSample?.title || 'Fictional'} statements loaded
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        This educational case includes a profit and loss
                        statement, cash-flow statement and capital position.
                        Change any reported figure and observe how the
                        assessment responds.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-900/10 p-5">
                    <label className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-white">
                          Select statements for document-assisted review
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          Complete PDF, Excel, CSV or clear statement images are
                          accepted. An auditor opinion page without the
                          statements is not sufficient.
                        </div>
                      </div>
                      <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold whitespace-nowrap">
                        Choose statements
                      </span>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.xlsx,.xls,.csv,image/*"
                        onChange={handleFinancialFiles}
                        className="hidden"
                      />
                    </label>
                    {financialFiles.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-indigo-100 dark:border-indigo-800/40 space-y-2">
                        {financialFiles.map((file, i) => (
                          <div
                            key={`${file.name}-${i}`}
                            className="flex justify-between gap-3 text-[10px]"
                          >
                            <span className="font-semibold text-slate-700 dark:text-slate-200 truncate">
                              {file.name}
                            </span>
                            <span className="text-slate-400 whitespace-nowrap">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 text-[9px] leading-relaxed text-indigo-700 dark:text-indigo-300">
                      Privacy by design: selected files stay in this browser
                      session and are not retained. Automatic PDF/Excel/OCR
                      parsing is an integration boundary in this standalone JSX
                      build; until connected, review and correct every
                      statement-aligned value shown below before confirming.
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                  {[
                    'Balance Sheet',
                    'Profit & Loss',
                    'Cash Flow',
                    'Borrowing Notes',
                  ].map((item) => (
                    <div
                      key={item}
                      className={`p-3 rounded-xl border ${
                        assessmentMode === 'sample'
                          ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/40'
                          : financialFiles.length
                          ? 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800/40'
                          : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {assessmentMode === 'sample' ? (
                          <Icons.CheckCircle
                            size={14}
                            className="text-emerald-500"
                          />
                        ) : financialFiles.length ? (
                          <Icons.Clock size={14} className="text-indigo-500" />
                        ) : (
                          <Icons.AlertTriangle
                            size={14}
                            className="text-slate-400"
                          />
                        )}
                        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">
                          {item}
                        </span>
                      </div>
                      <div className="text-[8px] text-slate-400 mt-1">
                        {assessmentMode === 'sample'
                          ? 'Available'
                          : financialFiles.length
                          ? 'Selected · verify below'
                          : 'Required'}
                      </div>
                    </div>
                  ))}
                </div>

                {assessmentMode === 'real' && !financialFiles.length && (
                  <button
                    onClick={() => {
                      setShowManualFinancials(!showManualFinancials);
                      setFinancialEntryMode(
                        showManualFinancials ? 'upload' : 'manual'
                      );
                      setManualStatementConfirmed(false);
                      setFinancialReviewConfirmed(false);
                    }}
                    className="mt-4 text-[10px] font-bold text-indigo-600 dark:text-indigo-400"
                  >
                    {showManualFinancials
                      ? 'Hide manual statement entry'
                      : 'Cannot upload? Enter line items from the statements manually'}
                  </button>
                )}
              </div>

              {financialReviewVisible && (
                <>
                  <div className="pt-7 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          Review the statement line items
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          These labels mirror the statements. Extracted and
                          manually corrected values use the same review grid.
                        </p>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500">
                        {financialEvidenceLabel}
                      </span>
                    </div>

                    <div className="space-y-7">
                      <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                          Profit and loss statement
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                          <FormField
                            label="Revenue from Operations"
                            value={revenue}
                            setValue={setRevenue}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Other Income"
                            value={otherIncome}
                            setValue={setOtherIncome}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Finance Costs"
                            value={financeCosts}
                            setValue={(v) => {
                              setFinanceCosts(v);
                              setExistingAnnualCashInterest(v);
                            }}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Depreciation and Amortisation Expense"
                            value={depreciationAmortization}
                            setValue={setDepreciationAmortization}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Profit Before Tax"
                            value={profitBeforeTax}
                            setValue={setProfitBeforeTax}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Tax Expense"
                            value={taxExpense}
                            setValue={setTaxExpense}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Profit After Tax"
                            value={profitAfterTax}
                            setValue={setProfitAfterTax}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Exceptional / One-Off Expense (if disclosed)"
                            value={exceptionalItems}
                            setValue={setExceptionalItems}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                          Cash-flow statement
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                          <FormField
                            label="Net Cash Generated from Operating Activities"
                            value={ocf}
                            setValue={setOcf}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Purchase of Property, Plant, Equipment and Intangibles"
                            value={totalCashCapex}
                            setValue={setTotalCashCapex}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                        </div>
                        <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/40">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald-300">
                            Calculated automatically
                          </div>
                          <p className="text-xs text-emerald-800 dark:text-emerald-200 mt-1">
                            Operating cash flow already reflects taxes and
                            working-capital movements. The engine deducts
                            reported cash capex once; it no longer asks you to
                            choose a cash-flow method.
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                          Balance sheet and borrowing notes
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                          <FormField
                            label="Non-current Borrowings"
                            value={existingTermDebt}
                            setValue={setExistingTermDebt}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Current Borrowings"
                            value={utilizedWorkingCapital}
                            setValue={setUtilizedWorkingCapital}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Current Maturities of Long-term Borrowings"
                            value={yearOnePrincipalDue}
                            setValue={setYearOnePrincipalDue}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Cash and Cash Equivalents"
                            value={cashAndEquivalents}
                            setValue={setCashAndEquivalents}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Other Bank Balances"
                            value={otherBankBalances}
                            setValue={setOtherBankBalances}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Restricted / Earmarked Bank Balances"
                            value={restrictedCash}
                            setValue={setRestrictedCash}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Total Equity / Net Worth"
                            value={totalEquity}
                            setValue={setTotalEquity}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Property, Plant and Equipment (Book Value)"
                            value={propertyPlantEquipment}
                            setValue={setPropertyPlantEquipment}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Trade Receivables"
                            value={tradeReceivables}
                            setValue={setTradeReceivables}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Inventories"
                            value={inventory}
                            setValue={setInventory}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                          <FormField
                            label="Trade Payables"
                            value={tradePayables}
                            setValue={setTradePayables}
                            prefix={currency === 'USD' ? '$' : '₹'}
                            suffix={currency === 'USD' ? 'M' : 'Cr'}
                          />
                        </div>
                      </div>

                      {currentArchetype === 'NBFC' && (
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                            Financial-services supplement
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <FormField
                              label="Loan Book / AUM"
                              value={aum}
                              setValue={setAum}
                              prefix={currency === 'USD' ? '$' : '₹'}
                              suffix={currency === 'USD' ? 'M' : 'Cr'}
                            />
                            <FormField
                              label="Net Interest Margin"
                              value={nim}
                              setValue={setNim}
                              suffix="%"
                            />
                            <FormField
                              label="Gross Non-Performing Assets"
                              value={gnpa}
                              setValue={setGnpa}
                              suffix="%"
                            />
                          </div>
                        </div>
                      )}
                      {currentArchetype === 'SAAS' && (
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                            Optional management metrics
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              label="Annual Recurring Revenue (ARR)"
                              value={arr}
                              setValue={setArr}
                              prefix={currency === 'USD' ? '$' : '₹'}
                              suffix={currency === 'USD' ? 'M' : 'Cr'}
                            />
                            <FormField
                              label="Gross Margin"
                              value={grossMargin}
                              setValue={setGrossMargin}
                              suffix="%"
                            />
                          </div>
                          <p className="text-[10px] text-slate-500 mt-3">
                            These may not appear in statutory statements and are
                            treated as management information.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-7 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          What the engine derives
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          Analytical measures are calculated from the reported
                          facts rather than requested from the user.
                        </p>
                      </div>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">
                        Derived
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        [
                          'Indicative EBITDA',
                          formatCurrency(baseEbitda),
                          'PBT + finance costs + D&A − other income',
                        ],
                        [
                          'Cash after reported capex',
                          formatCurrency(cashAfterCapex),
                          'Operating cash flow − cash capex',
                        ],
                        [
                          'Total existing borrowings',
                          formatCurrency(totalExistingBorrowings),
                          'Current and non-current borrowings',
                        ],
                        [
                          'Cash considered available',
                          formatCurrency(unrestrictedCash),
                          'Cash and bank balances − restricted balances',
                        ],
                        [
                          'Working-capital position',
                          formatCurrency(workingCapitalPosition),
                          'Receivables + inventory − payables',
                        ],
                        [
                          'Illustrative liquidity reserve',
                          formatCurrency(minimumOperatingCash),
                          'One month of implied cash operating costs',
                        ],
                      ].map(([label, value, note]) => (
                        <div
                          key={label}
                          className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700"
                        >
                          <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                            {label}
                          </div>
                          <div className="font-mono font-bold text-sm text-slate-900 dark:text-white mt-2">
                            {value}
                          </div>
                          <div className="text-[8px] leading-relaxed text-slate-400 mt-1.5">
                            {note}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-7 border-t border-slate-100 dark:border-slate-800/60">
                    <button
                      onClick={() =>
                        setShowAdvancedAdjustments(!showAdvancedAdjustments)
                      }
                      className="w-full flex items-center justify-between gap-4 text-left"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">
                          Advanced adjustments
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          Optional management information; not required for
                          preliminary assessment.
                        </p>
                      </div>
                      <span className="text-xs font-bold text-indigo-600">
                        {showAdvancedAdjustments ? 'Hide' : 'Open'}
                      </span>
                    </button>
                    {showAdvancedAdjustments && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                        <FormField
                          label="Supported EBITDA Add-Backs"
                          value={addBacks}
                          setValue={setAddBacks}
                          prefix={currency === 'USD' ? '$' : '₹'}
                          suffix={currency === 'USD' ? 'M' : 'Cr'}
                        />
                        <FormField
                          label="Estimated Enterprise Value"
                          value={enterpriseValue}
                          setValue={setEnterpriseValue}
                          prefix={currency === 'USD' ? '$' : '₹'}
                          suffix={currency === 'USD' ? 'M' : 'Cr'}
                        />
                        <div className="md:col-span-2 text-[10px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 rounded-xl p-4">
                          Add-backs require evidence and enterprise value is
                          used only for capital-structure or equity-linked
                          illustrations. Neither substitutes for repayment
                          capacity.
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <div id="security" className="scroll-mt-40">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                <Icons.ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Security & Credit Support
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  This helps us assess downside protection and transaction
                  support.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 shadow-sm transition-all hover:shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-4">
                    Institutional Backing
                  </span>
                  <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <Icons.CheckCircle
                        size={18}
                        className={
                          isSponsorBacked
                            ? 'text-emerald-500'
                            : 'text-slate-400'
                        }
                      />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        Sponsor Backed (PE/VC)
                      </span>
                    </div>
                    <button
                      onClick={() => setIsSponsorBacked(!isSponsorBacked)}
                      className={`w-12 h-6 rounded-full transition-colors relative flex-shrink-0 shadow-inner border border-transparent cursor-pointer ${
                        isSponsorBacked
                          ? 'bg-indigo-500'
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
                </div>
                <div>
                  <LabelWithCoach
                    label="Security Availability"
                    insightKey="CollateralType"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <select
                    value={securityAvailability}
                    onChange={(e) => setSecurityAvailability(e.target.value)}
                    className="mt-2 w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium"
                  >
                    {SECURITY_AVAILABILITY.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </div>
                {securityAvailability === 'Not sure yet' && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-800 dark:text-amber-200">
                    No collateral value will be assumed until asset availability
                    is confirmed.
                  </div>
                )}
                {[
                  'Specific assets may be available',
                  'Substantially all business assets',
                ].includes(securityAvailability) && (
                  <>
                    <div>
                      <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                        Primary Asset Type
                      </span>
                      <select
                        value={collateralType}
                        onChange={(e) => setCollateralType(e.target.value)}
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium"
                      >
                        {COLLATERAL_TYPES.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <span className="text-sm font-semibold block text-slate-900 dark:text-slate-100 mb-2">
                        Existing Lien Position
                      </span>
                      <select
                        value={collateralLienStatus}
                        onChange={(e) =>
                          setCollateralLienStatus(e.target.value)
                        }
                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium"
                      >
                        {LIEN_STATUS_OPTIONS.map((x) => (
                          <option key={x}>{x}</option>
                        ))}
                      </select>
                    </div>
                    <FormField
                      label="Appraised / Estimated Collateral Value (if known)"
                      value={pledgedCollateral}
                      setValue={setPledgedCollateral}
                      prefix={currency === 'USD' ? '$' : '₹'}
                      suffix={currency === 'USD' ? 'M' : 'Cr'}
                      rightLabel={
                        collateralLienStatus === 'Not sure yet'
                          ? 'Availability unconfirmed'
                          : `Indicative LTV: ${Number(
                              metrics?.baselineLtv || metrics?.ltv || 0
                            ).toFixed(1)}%`
                      }
                    />
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                      <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                        How the engine will treat this
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                        {collateralLienStatus === 'Unencumbered'
                          ? 'Potentially available, subject to diligence and valuation.'
                          : collateralLienStatus === 'Fully encumbered'
                          ? 'Not assumed to be freely available for the new lender.'
                          : 'Availability remains uncertain and will be flagged for validation.'}
                      </div>
                    </div>
                  </>
                )}
                <div className="md:col-span-2 border-t border-slate-100 dark:border-slate-800/50 pt-6">
                  <LabelWithCoach
                    label="Existing Lender Restrictions"
                    insightKey="LenderRestrictions"
                    onOpenInsight={openInsight}
                    sizeClass="text-sm"
                  />
                  <p className="text-[11px] text-slate-500 mb-1">
                    Do existing financing documents restrict additional
                    borrowing or security? Choose “Unsure” if the documents have
                    not been checked.
                  </p>
                  <SelectionGrid
                    options={LENDER_RESTRICTIONS}
                    value={lenderRestrictions}
                    onChange={setLenderRestrictions}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="review"
            className="scroll-mt-40 border-t border-slate-200 dark:border-slate-800 pt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Review & Confirm
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Separate the facts, calculations and assumptions supporting the
                preliminary view.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-5xl mx-auto space-y-7">
              <div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                  Business and financing
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Industry
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {sector}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Operating segment
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {segment}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Revenue model
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {businessModel}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Operating history
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {companyAge} years
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Requested facility
                    </span>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {formatCurrency(targetDebt)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Indicative tenor
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {targetTenor} years
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Largest use of funds
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {financingObjective}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                  Repayment capacity
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      {metrics?.primaryMetricLabel || 'Revenue'}
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(metrics?.primaryMetricValue)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Adjusted EBITDA
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(metrics?.adjustedEbitda)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Cash available for debt service
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(metrics?.debtServiceCash)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Existing Year 1 debt service
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(
                        Number(existingAnnualCashInterest || 0) +
                          Number(yearOnePrincipalDue || 0)
                      )}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Cash-flow basis
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Reported operating cash flow less reported cash capex
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Period coverage
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {financialPeriodCoverage}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Unrestricted cash
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(unrestrictedCash)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Minimum cash buffer
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {formatCurrency(minimumOperatingCash)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-4">
                  Security and evidence
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Security availability
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {securityAvailability}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Primary asset
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {securityAvailability ===
                      'Unsecured / no meaningful collateral'
                        ? 'None assumed'
                        : securityAvailability === 'Not sure yet'
                        ? 'Not confirmed'
                        : collateralType}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Lien status
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {[
                        'Unsecured / no meaningful collateral',
                        'Not sure yet',
                      ].includes(securityAvailability)
                        ? 'Not applicable'
                        : collateralLienStatus}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Sponsor backed
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {isSponsorBacked ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
              {transactionScope !== 'Business-wide funding' && (
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500 mb-2">
                    Conditional perimeter check
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-200">
                    {transactionScope} · {cashFlowSeparation}
                  </div>
                </div>
              )}
              <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Evidence status
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {assessmentMode === 'sample'
                      ? 'Fictional statements supplied for educational simulation.'
                      : financialFiles.length
                      ? financialReviewConfirmed
                        ? `${financialFiles.length} document${
                            financialFiles.length === 1 ? '' : 's'
                          } selected; reviewed figures confirmed by the user.`
                        : `${financialFiles.length} document${
                            financialFiles.length === 1 ? '' : 's'
                          } selected locally; figures still require review and confirmation.`
                      : manualStatementConfirmed
                      ? 'Statement figures entered manually and confirmed by the user.'
                      : 'Financial statements have not yet been provided.'}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-[9px] font-bold">
                    Engine stress: {downsideCashFlowDecline}%
                  </span>
                  {Number(addBacks) > 0 && (
                    <span className="px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 text-[9px] font-bold">
                      Add-backs require validation
                    </span>
                  )}
                  <span className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[9px] font-bold">
                    {assessmentMode === 'sample'
                      ? 'Educational—not underwriting'
                      : 'Preliminary—not lender approval'}
                  </span>
                </div>
              </div>
              {assessmentMode === 'real' &&
                financialEntryMode === 'upload' &&
                financialFiles.length > 0 && (
                  <label className="pt-5 border-t border-slate-200 dark:border-slate-800 flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={financialReviewConfirmed}
                      onChange={(e) =>
                        setFinancialReviewConfirmed(e.target.checked)
                      }
                      className="mt-0.5"
                    />
                    <span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        I reviewed and corrected the figures against the
                        selected statements
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">
                        The preliminary assessment will use the values in the
                        review grid—not the documents themselves.
                      </span>
                    </span>
                  </label>
                )}
              {assessmentMode === 'real' &&
                financialEntryMode === 'manual' &&
                showManualFinancials && (
                  <label className="pt-5 border-t border-slate-200 dark:border-slate-800 flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={manualStatementConfirmed}
                      onChange={(e) =>
                        setManualStatementConfirmed(e.target.checked)
                      }
                      className="mt-0.5"
                    />
                    <span>
                      <span className="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        I entered these figures from the company’s financial
                        statements
                      </span>
                      <span className="block text-[10px] text-slate-500 mt-1">
                        Manual entry remains evidence-led; it is not an
                        estimate-from-memory route.
                      </span>
                    </span>
                  </label>
                )}
            </div>
          </div>
          <div className="mt-12 flex justify-center w-full pt-4">
            <button
              disabled={assessmentMode === 'real' && !realEvidenceReady}
              onClick={handleRunEngine}
              className={`w-full max-w-lg py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg group ${
                assessmentMode === 'real' && !realEvidenceReady
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/30 cursor-pointer'
              }`}
            >
              {assessmentMode === 'sample'
                ? 'Run Educational Simulation'
                : 'Build Preliminary Assessment'}{' '}
              <Icons.ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          {assessmentMode === 'real' && !realEvidenceReady && (
            <p className="text-center text-[10px] text-amber-600 dark:text-amber-400 mt-3">
              Provide the statements, review the line items and confirm them to
              continue.
            </p>
          )}
        </div>
      </div>
    );
  };

  // ============================================================================
  // [SECTION 8.5: RENDER - CALCULATING VIEWS]
  // ============================================================================
  const renderCalculatingView = () => (
    <div className="w-full max-w-3xl mx-auto h-[60vh] flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
      <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center shadow-sm border border-indigo-100 dark:border-indigo-800/50">
        <Icons.Loader2
          size={40}
          className="text-indigo-600 dark:text-indigo-400 animate-spin"
        />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {assessmentMode === 'sample'
            ? 'Preparing the deal room'
            : 'Building the Preliminary Credit View'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm animate-pulse">
          {assessmentMode === 'sample'
            ? 'Loading the case structures, lender positions and downside events...'
            : 'Assessing repayment capacity, funding perimeter and viable structures...'}
        </p>
      </div>
    </div>
  );

  const renderCalculatingAdvisoryView = () => (
    <div className="w-full max-w-3xl mx-auto h-[60vh] flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
      <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center shadow-sm border border-emerald-100 dark:border-emerald-800/50">
        <Icons.Activity
          size={40}
          className="text-emerald-600 dark:text-emerald-400 animate-pulse"
        />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Generating Advisory Report
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm animate-pulse">
          Evaluating transaction readiness & holistic confidence score...
        </p>
      </div>
    </div>
  );

  // ============================================================================
  // [SECTION 9: RENDER - OUTPUTS (DASHBOARD)]
  // ============================================================================
  const TransactionEconomicsBridge = ({ metrics }) => {
    const gross = metrics?.numNewDebt || 0;
    const oidCost = metrics?.bridge?.oidCost || 0;
    const upfrontCost = metrics?.bridge?.upfrontCost || 0;
    const execCosts = metrics?.bridge?.totalExec || 0;
    const netCash = metrics?.bridge?.netCashReceived || 0;
    const interest = metrics?.bridge?.totalLifetimeInterest || 0;
    const redemption = metrics?.bridge?.redemptionCost || 0;
    const totalOutflow = metrics?.bridge?.totalLifetimeOutflow || 0;

    const maxVal = Math.max(totalOutflow, gross);
    const format = (val) => {
      if (val === 0) return '-';
      const num = Math.abs(val);
      return `${num < 1 ? '< ' : ''}${val < 0 ? '(' : ''}${num.toFixed(1)}${
        val < 0 ? ')' : ''
      }`;
    };

    const steps = [
      {
        label: 'Facility Amount',
        val: gross,
        type: 'total',
        start: 0,
        end: gross,
        fill: 'fill-slate-800 dark:fill-slate-200',
        textOffset: -8,
      },
      {
        label: 'Less: OID',
        val: -oidCost,
        type: 'decrement',
        start: gross,
        end: gross - oidCost,
        fill: 'fill-rose-400',
        textOffset: 16,
      },
      {
        label: 'Less: Upfront Fee',
        val: -upfrontCost,
        type: 'decrement',
        start: gross - oidCost,
        end: gross - oidCost - upfrontCost,
        fill: 'fill-rose-500',
        textOffset: 16,
      },
      {
        label: 'Illustrative Execution',
        val: -execCosts,
        type: 'decrement',
        start: gross - oidCost - upfrontCost,
        end: netCash,
        fill: 'fill-slate-300 dark:fill-slate-600',
        textOffset: 16,
      },
      {
        label: 'Net Cash Received',
        val: netCash,
        type: 'subtotal',
        start: 0,
        end: netCash,
        fill: 'fill-emerald-500',
        textOffset: -8,
      },
      {
        label: 'Discount & Recapture',
        val: gross - netCash,
        type: 'increment',
        start: netCash,
        end: gross,
        fill: 'fill-slate-200 dark:fill-slate-700',
        textOffset: -8,
      },
      {
        label: 'Total Cash Interest',
        val: interest,
        type: 'increment',
        start: gross,
        end: gross + interest,
        fill: 'fill-amber-400',
        textOffset: -8,
      },
      {
        label: 'Redemption Premium',
        val: redemption,
        type: 'increment',
        start: gross + interest,
        end: totalOutflow,
        fill: 'fill-purple-400',
        textOffset: -8,
      },
      {
        label: 'Total Cash Outflow',
        val: totalOutflow,
        type: 'total',
        start: 0,
        end: totalOutflow,
        fill: 'fill-indigo-500 dark:fill-indigo-600',
        textOffset: -8,
      },
    ];

    return (
      <div className="w-full overflow-x-auto pb-4 pt-12">
        <svg
          className="w-full min-w-[700px] h-[320px] font-sans"
          viewBox="0 0 1000 320"
          preserveAspectRatio="xMidYMid meet"
        >
          <line
            x1="0"
            y1="260"
            x2="1000"
            y2="260"
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="130"
            x2="1000"
            y2="130"
            className="stroke-slate-100 dark:stroke-slate-800/50"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {steps.map((step, idx) => {
            const xSpacing = 1000 / steps.length;
            const barWidth = xSpacing * 0.7;
            const xPos = idx * xSpacing + xSpacing * 0.15;
            const scaleY = (val) => 260 - (val / maxVal) * 240;
            const yStart = scaleY(Math.max(step.start, step.end));
            const height = Math.abs(scaleY(step.start) - scaleY(step.end));
            const drawHeight = Math.max(height, 2);
            const drawY =
              height < 2 && step.type === 'decrement'
                ? scaleY(step.start)
                : yStart;

            let linePath = null;
            if (idx < steps.length - 1) {
              const nextX = (idx + 1) * xSpacing + xSpacing * 0.15;
              const lineY = scaleY(step.end);
              linePath = (
                <line
                  x1={xPos + barWidth}
                  y1={lineY}
                  x2={nextX}
                  y2={lineY}
                  className="stroke-slate-300 dark:stroke-slate-700"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            }

            return (
              <g key={idx}>
                {linePath}
                <rect
                  x={xPos}
                  y={drawY}
                  width={barWidth}
                  height={drawHeight}
                  className={`${step.fill} transition-all duration-500 ease-out`}
                  rx="2"
                />
                <text
                  x={xPos + barWidth / 2}
                  y={drawY + step.textOffset}
                  textAnchor="middle"
                  className={`text-[11px] font-mono font-bold transition-all duration-500 ease-out ${
                    step.type === 'decrement'
                      ? 'fill-rose-600 dark:fill-rose-400'
                      : 'fill-slate-800 dark:fill-slate-200'
                  }`}
                >
                  {format(step.val)}
                </text>
                <foreignObject
                  x={xPos - xSpacing * 0.1}
                  y="270"
                  width={xSpacing * 1.2}
                  height="50"
                >
                  <div className="w-full text-center text-[10px] font-semibold text-slate-500 leading-tight flex items-center justify-center h-full px-1">
                    {step.label}
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  const renderOutputsView = () => {
    const baseline = selectedBaseline || {};
    const activeCase = SAMPLE_CASES.find(
      (item) => item.id === selectedSampleId
    );
    const isEducation = assessmentMode === 'sample';
    const isSpecialSituation = isEducation && activeCase?.track === 'special';
    const usesLiveEconomics =
      ['simulate', 'stress', 'prepare'].includes(workspaceStage) ||
      (isEducation &&
        workspaceStage === 'structure' &&
        learnerStructureSelected);
    const current =
      usesLiveEconomics && liveEconomics
        ? { ...baseline, ...liveEconomics }
        : baseline;
    const realStageItems = [
      {
        id: 'assess',
        route: 'assess',
        number: '01',
        label: 'Assess',
        help: 'Underwrite',
      },
      {
        id: 'structure',
        route: 'structure',
        number: '02',
        label: 'Structure',
        help: 'Financing paths',
      },
      {
        id: 'simulate',
        route: 'simulate',
        number: '03',
        label: 'Negotiate',
        help: 'Simulate terms',
      },
      {
        id: 'agree',
        route: 'simulate',
        number: '04',
        label: 'Agree',
        help: 'Package alignment',
      },
      {
        id: 'prepare',
        route: 'prepare',
        number: '05',
        label: 'Prepare',
        help: 'Advise & execute',
      },
    ];
    const educationStageItems = isSpecialSituation
      ? [
          {
            id: 'case',
            route: 'case',
            number: '01',
            label: 'Case',
            help: 'Situation file',
          },
          {
            id: 'assess',
            route: 'assess',
            number: '02',
            label: 'Triage',
            help: 'Stabilise',
          },
          {
            id: 'structure',
            route: 'structure',
            number: '03',
            label: 'Restructure',
            help: 'Choose the path',
          },
          {
            id: 'simulate',
            route: 'simulate',
            number: '04',
            label: 'Negotiate',
            help: 'Stakeholder terms',
          },
          {
            id: 'stress',
            route: 'stress',
            number: '05',
            label: 'Recovery',
            help: 'Test the plan',
          },
          {
            id: 'prepare',
            route: 'prepare',
            number: '06',
            label: 'Advisory',
            help: 'Execution',
          },
        ]
      : [
          {
            id: 'case',
            route: 'case',
            number: '01',
            label: 'Brief',
            help: 'Case file',
          },
          {
            id: 'structure',
            route: 'structure',
            number: '02',
            label: 'Structure',
            help: 'Choose the path',
          },
          {
            id: 'simulate',
            route: 'simulate',
            number: '03',
            label: 'Negotiate',
            help: 'Shape the package',
          },
          {
            id: 'stress',
            route: 'stress',
            number: '04',
            label: 'Stress test',
            help: 'Test resilience',
          },
          {
            id: 'prepare',
            route: 'prepare',
            number: '05',
            label: 'Advisory',
            help: 'Debrief & execute',
          },
        ];
    const stageItems = isEducation ? educationStageItems : realStageItems;
    const tone =
      decisionModel?.statusCode === 'DOES_NOT_PASS'
        ? 'rose'
        : decisionModel?.statusCode === 'WITH_CHANGES'
        ? 'amber'
        : decisionModel?.statusCode === 'INSUFFICIENT_INFORMATION'
        ? 'slate'
        : 'emerald';
    const toneClasses =
      tone === 'rose'
        ? 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/15 dark:text-rose-300 dark:border-rose-800/40'
        : tone === 'amber'
        ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/15 dark:text-amber-300 dark:border-amber-800/40'
        : tone === 'emerald'
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/15 dark:text-emerald-300 dark:border-emerald-800/40'
        : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700';
    const goStage = (id) => {
      if (id === 'case') {
        setActiveView('inputs');
      } else {
        setWorkspaceStage(id);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const totalFacility =
      Number(current.activePrimaryDebt || 0) +
      Number(current.activeSecondaryDebt || 0);
    const coverage = decisionModel?.isScoped
      ? Number(current.projectDscr ?? decisionModel?.spvDscr ?? 0)
      : Number(current.icr || 0);
    const coverageLabel = decisionModel?.isScoped
      ? 'Base DSCR'
      : 'Interest cover';
    const termLabels = {
      primaryAmount: 'Primary tranche',
      secondaryAmount: 'Secondary tranche',
      tenor: 'Tenor',
      oid: 'OID',
      upfrontFee: 'Upfront fee',
      cashRateAdjustment: 'Credit spread movement',
      pikPremium: 'PIK coupon',
      redemptionPremium: 'Redemption premium',
      amortization: 'Repayment profile',
      cashSweep: 'Cash sweep',
      dsra: 'Debt service reserve',
      callProtection: 'Call protection',
      maxLeverageCov: 'Maximum leverage covenant',
      minIcrCov: decisionModel?.isScoped
        ? 'Minimum DSCR covenant'
        : 'Minimum interest cover covenant',
      equityKicker: 'Equity kicker',
      conversionValuation: 'Conversion valuation',
    };
    const formatTerm = (key, value) => {
      if (value === undefined || value === null || value === '') return '—';
      if (key === 'tenor') return `${Number(value).toFixed(0)} years`;
      if (
        [
          'oid',
          'upfrontFee',
          'cashRateAdjustment',
          'pikPremium',
          'redemptionPremium',
          'cashSweep',
          'equityKicker',
        ].includes(key)
      )
        return `${
          Number(value) > 0 && key === 'cashRateAdjustment' ? '+' : ''
        }${Number(value).toFixed(2)}%`;
      if (['maxLeverageCov', 'minIcrCov'].includes(key))
        return `${Number(value).toFixed(2)}x`;
      if (['primaryAmount', 'secondaryAmount'].includes(key))
        return formatCurrency(value);
      if (key === 'conversionValuation') return formatCurrency(value);
      return String(value);
    };
    const baseTerm = (key) => baselineTerms?.[key];
    const draftTerm = (key) =>
      (draftNegotiationTerms || liveNegotiationTerms || baselineTerms || {})[
        key
      ];
    const proposalChanged = (key) => {
      const a = baseTerm(key),
        b = draftTerm(key);
      return typeof a === 'number' && typeof b === 'number'
        ? Math.abs(a - b) > 0.0001
        : String(a) !== String(b);
    };
    const priorityResult = (priority) => {
      const label = String(priority || '').toLowerCase();
      const terms =
        draftNegotiationTerms || liveNegotiationTerms || baselineTerms || {};
      const retained = Number(current?.waterfall?.retained || 0);
      const cover = Number(
        decisionModel?.isScoped ? current?.projectDscr : current?.icr || 0
      );
      const usable = Number(current?.bridge?.usableNetProceeds || 0);
      const dilution = Number(
        current?.equityLinked?.conversionOwnershipPct || terms.equityKicker || 0
      );
      let score = 1;
      if (
        label.includes('liquid') ||
        label.includes('runway') ||
        label.includes('working')
      )
        score =
          retained >= Number(targetDebt) * 0.08 ? 2 : retained >= 0 ? 1 : 0;
      else if (label.includes('dilut') || label.includes('equity'))
        score = dilution <= 3 ? 2 : dilution <= 7 ? 1 : 0;
      else if (
        label.includes('refinanc') ||
        label.includes('prepay') ||
        label.includes('flexib')
      )
        score = String(terms.callProtection).includes('Make-Whole')
          ? 0
          : String(terms.callProtection).includes('103')
          ? 1
          : 2;
      else if (
        label.includes('cash') ||
        label.includes('repay') ||
        label.includes('amortis')
      )
        score = cover >= 1.5 ? 2 : cover >= 1.15 ? 1 : 0;
      else if (
        label.includes('full') ||
        label.includes('complete') ||
        label.includes('fund')
      )
        score =
          usable >= Number(targetDebt) * 0.9
            ? 2
            : usable >= Number(targetDebt) * 0.82
            ? 1
            : 0;
      else score = cover >= 1.35 ? 2 : cover >= 1.1 ? 1 : 0;
      return {
        label: priority,
        status:
          score === 2
            ? 'Protected'
            : score === 1
            ? 'Partly protected'
            : 'At risk',
        score,
      };
    };
    const borrowerPriorityResults = (activeCase?.priorities || [])
      .slice(0, 4)
      .map(priorityResult);
    const rankedStructures = getAdvisoryStructures();
    const rotation = rankedStructures.length
      ? String(selectedSampleId || '').length % rankedStructures.length
      : 0;
    const rotatedStructures = rankedStructures
      .map((structure, index) => ({ structure, index }))
      .slice(rotation)
      .concat(
        rankedStructures
          .map((structure, index) => ({ structure, index }))
          .slice(0, rotation)
      );
    const educationalStructureOptions = rotatedStructures.map(
      (option, position) => ({
        ...option,
        structure: {
          ...option.structure,
          title: `Structure ${String.fromCharCode(65 + position)}`,
        },
      })
    );
    const rationaleChoices = [
      'Best fit for the use of funds',
      'Protects near-term liquidity',
      'Balances cost and flexibility',
      'Matches repayment to cash generation',
      'Improves execution certainty',
      'Preserves shareholder ownership',
    ];
    const toggleRationale = (item) =>
      setStructureRationale((previous) =>
        previous.includes(item)
          ? previous.filter((value) => value !== item)
          : previous.length < 2
          ? [...previous, item]
          : [previous[1], item]
      );

    const BorrowerMandateStrip = () =>
      !isEducation ? null : (
        <section className="rounded-2xl bg-slate-950 text-white border border-slate-800 px-5 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="lg:w-48 shrink-0">
              <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-indigo-300">
                Borrower mandate
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Keep these priorities in view
              </div>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-4 gap-2">
              {(activeCase?.priorities || []).slice(0, 4).map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 flex gap-2"
                >
                  <span className="text-[9px] font-mono text-indigo-300">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] leading-4 text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    const DealEconomicsPanelLegacy = ({ data, compact = false }) => {
      const schedule = data?.schedule || [];
      const waterfall = data?.waterfall || {};
      const bridge = data?.bridge || {};
      const panelCoverage = decisionModel?.isScoped
        ? Number(data?.projectDscr || 0)
        : Number(data?.icr || 0);
      const maxPayment = Math.max(
        1,
        ...schedule.map(
          (x) => Number(x.amount || 0) + Number(x.cashInterest || 0)
        )
      );
      return (
        <div className="space-y-5">
          <div
            className={`grid grid-cols-2 ${
              compact ? 'lg:grid-cols-6' : 'md:grid-cols-3 xl:grid-cols-6'
            } gap-3`}
          >
            {[
              [
                'Usable day-one proceeds',
                formatCurrency(
                  bridge.usableNetProceeds ?? bridge.netCashReceived ?? 0
                ),
                'Borrower',
              ],
              [
                'Year 1 cash interest',
                formatCurrency(waterfall.interest || 0),
                'Borrower',
              ],
              [
                'Cash retained',
                formatCurrency(waterfall.retained || 0),
                'Borrower',
              ],
              [
                'Modelled lender return',
                `${Number(data?.grossIrr || 0).toFixed(2)}%`,
                'Lender',
              ],
              [
                coverageLabel,
                `${panelCoverage.toFixed(2)}x`,
                decisionModel?.isScoped ? 'SPV' : 'Credit',
              ],
              [
                'Pro-forma leverage',
                `${Number(data?.leverage || 0).toFixed(2)}x`,
                'Credit',
              ],
            ].map(([label, value, group]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4"
              >
                <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                  {group}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">{label}</div>
                <div className="font-mono font-bold text-base text-slate-900 dark:text-white mt-1">
                  {value}
                </div>
              </div>
            ))}
          </div>
          {!compact && (
            <>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Repayment profile
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Cash interest and scheduled principal by year
                      </p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {data?.activeAmortization || 'Indicative'}
                    </span>
                  </div>
                  <div className="h-44 flex items-end gap-3 border-b border-slate-200 dark:border-slate-700 px-2">
                    {schedule.map((x, i) => {
                      const interest = Number(x.cashInterest || 0),
                        principal = Number(x.amount || 0),
                        total = interest + principal;
                      return (
                        <div
                          key={i}
                          className="flex-1 h-full flex flex-col justify-end items-center group"
                        >
                          <div className="text-[8px] font-mono text-slate-400 mb-1 opacity-0 group-hover:opacity-100">
                            {formatCurrency(total)}
                          </div>
                          <div
                            className="w-full max-w-12 flex flex-col justify-end"
                            style={{
                              height: `${Math.max(
                                4,
                                (total / maxPayment) * 125
                              )}px`,
                            }}
                          >
                            <div
                              className="bg-amber-400 w-full"
                              style={{
                                height: `${
                                  total ? (interest / total) * 100 : 0
                                }%`,
                              }}
                            ></div>
                            <div
                              className="bg-indigo-600 w-full"
                              style={{
                                height: `${
                                  total ? (principal / total) * 100 : 0
                                }%`,
                              }}
                            ></div>
                          </div>
                          <div className="text-[9px] font-bold text-slate-500 mt-2">
                            Y{i + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-4 text-[9px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <i className="w-2 h-2 bg-amber-400 rounded-sm"></i>Cash
                      interest
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="w-2 h-2 bg-indigo-600 rounded-sm"></i>
                      Principal
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="mb-5">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Year 1 cash bridge
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1">
                      From repayment cash flow to liquidity retained
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      [
                        'Cash available for debt service',
                        Number(metrics?.debtServiceCash || 0),
                        'positive',
                      ],
                      [
                        'Cash interest',
                        -Number(waterfall.interest || 0),
                        'negative',
                      ],
                      [
                        'Scheduled principal',
                        -Number(waterfall.principal || 0),
                        'negative',
                      ],
                      [
                        'Mandatory cash sweep',
                        -Number(waterfall.sweep || 0),
                        'negative',
                      ],
                      [
                        'Cash retained',
                        Number(waterfall.retained || 0),
                        'total',
                      ],
                    ].map(([label, value, kind]) => (
                      <div
                        key={label}
                        className={`flex items-center justify-between py-2.5 ${
                          kind === 'total'
                            ? 'border-t border-slate-200 dark:border-slate-700 mt-2 pt-4'
                            : ''
                        }`}
                      >
                        <span className="text-xs text-slate-600 dark:text-slate-300">
                          {label}
                        </span>
                        <span
                          className={`font-mono text-xs font-bold ${
                            value < 0
                              ? 'text-rose-500'
                              : kind === 'total'
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {value < 0 ? '− ' : ''}
                          {formatCurrency(Math.abs(value))}
                        </span>
                      </div>
                    ))}
                  </div>
                  {decisionModel?.isScoped && (
                    <div className="mt-4 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/40 text-[10px] text-indigo-800 dark:text-indigo-200">
                      SPV assessment uses the entered cash available for debt
                      service. Contract, construction and waterfall diligence
                      remain required.
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      );
    };

    const DealEconomicsPanel = ({ data, compact = false }) => {
      const schedule = data?.schedule || [];
      const waterfall = data?.waterfall || {};
      const bridge = data?.bridge || {};
      const panelCoverage = decisionModel?.isScoped
        ? Number(data?.projectDscr || 0)
        : Number(data?.icr || 0);
      const cashCoupon = Number(
        data?.blendedCashRate || data?.primaryRate || 0
      );
      const yearOneDebtService =
        Number(waterfall.interest || 0) +
        Number(waterfall.principal || 0) +
        Number(waterfall.sweep || 0);
      const maturityPrincipal = Number(
        schedule[schedule.length - 1]?.amount || 0
      );
      const headline = [
        ['Cash coupon', `${cashCoupon.toFixed(2)}%`],
        ['Indicative lender IRR', `${Number(data?.grossIrr || 0).toFixed(2)}%`],
        [coverageLabel, `${panelCoverage.toFixed(2)}x`],
        ['Pro-forma leverage', `${Number(data?.leverage || 0).toFixed(2)}x`],
      ];
      const borrowerImpact = [
        [
          'Usable day-one proceeds',
          formatCurrency(
            bridge.usableNetProceeds ?? bridge.netCashReceived ?? 0
          ),
        ],
        ['Year 1 debt service', formatCurrency(yearOneDebtService)],
        [
          'Cash retained after debt service',
          formatCurrency(waterfall.retained || 0),
        ],
        ['Principal due at maturity', formatCurrency(maturityPrincipal)],
      ];
      const existingDebt = Number(
        metrics?.originalExistingDebt ??
          Number(existingTermDebt || 0) + Number(utilizedWorkingCapital || 0)
      );
      const postDebt = Number(data?.totalDebt || 0);
      const enterpriseBase = Math.max(
        1,
        Number(metrics?.enterpriseValue || postDebt || 1)
      );
      const preEquity = Math.max(0, enterpriseBase - existingDebt);
      const postEquity = Math.max(0, enterpriseBase - postDebt);
      const maxPayment = Math.max(
        1,
        ...schedule.map(
          (x) => Number(x.amount || 0) + Number(x.cashInterest || 0)
        )
      );
      return (
        <div className="space-y-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {headline.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4"
              >
                <div className="text-[9px] text-slate-500">{label}</div>
                <div className="font-mono font-bold text-lg text-slate-900 dark:text-white mt-2">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {borrowerImpact.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-4"
              >
                <div className="text-[8px] uppercase tracking-wider font-bold text-slate-400">
                  Borrower impact
                </div>
                <div className="text-[10px] text-slate-500 mt-1">{label}</div>
                <div className="font-mono font-bold text-sm text-slate-800 dark:text-white mt-2">
                  {value}
                </div>
              </div>
            ))}
          </div>
          {!compact && (
            <>
              <div className="grid lg:grid-cols-2 gap-5">
                <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="mb-5">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Capital structure before and after
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Debt and implied equity within the current enterprise
                      value
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      ['Before transaction', existingDebt, preEquity],
                      ['After transaction', postDebt, postEquity],
                    ].map(([label, debt, equity]) => (
                      <div key={label}>
                        <div className="flex justify-between text-[10px] mb-2">
                          <span className="font-bold text-slate-600 dark:text-slate-300">
                            {label}
                          </span>
                          <span className="font-mono text-slate-400">
                            {formatCurrency(Number(debt) + Number(equity))}
                          </span>
                        </div>
                        <div className="h-8 rounded-lg overflow-hidden flex bg-slate-100 dark:bg-slate-800">
                          <div
                            className="bg-indigo-600 flex items-center px-2 text-[8px] font-bold text-white overflow-hidden"
                            style={{
                              width: `${Math.min(
                                100,
                                (Number(debt) / enterpriseBase) * 100
                              )}%`,
                            }}
                          >
                            Debt {formatCurrency(debt)}
                          </div>
                          <div className="bg-emerald-400/80 flex-1 flex items-center justify-end px-2 text-[8px] font-bold text-emerald-950 overflow-hidden">
                            Equity {formatCurrency(equity)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500">
                    The chart is an enterprise-value bridge, not an accounting
                    balance sheet. Pro-forma leverage is calculated separately
                    using the case EBITDA or project cash flow.
                  </div>
                </section>
                <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="mb-5">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Funding flow and absolute economics
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1">
                      How the committed facility converts into usable cash
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      [
                        'Gross facility',
                        Number(data?.activePrimaryDebt || 0) +
                          Number(data?.activeSecondaryDebt || 0),
                        'text-slate-900 dark:text-white',
                      ],
                      [
                        'OID and upfront fees',
                        -Number(bridge.totalDiscountFees || 0),
                        'text-rose-500',
                      ],
                      [
                        'Execution costs',
                        -Number(bridge.totalExec || 0),
                        'text-rose-500',
                      ],
                      [
                        'Reserve funding',
                        -Number(bridge.dsraFunding || 0),
                        'text-amber-600',
                      ],
                      [
                        'Usable proceeds',
                        Number(bridge.usableNetProceeds || 0),
                        'text-emerald-600',
                      ],
                      [
                        'Lifetime cash outflow',
                        Number(bridge.totalLifetimeOutflow || 0),
                        'text-indigo-600',
                      ],
                    ].map(([label, value, toneClass]) => (
                      <div
                        key={label}
                        className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3"
                      >
                        <div className="text-[9px] text-slate-500">{label}</div>
                        <div
                          className={`font-mono text-xs font-bold mt-2 ${toneClass}`}
                        >
                          {Number(value) < 0 ? '− ' : ''}
                          {formatCurrency(Math.abs(Number(value)))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {isEducation && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                      {(activeCase?.data?.allocations || []).map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between gap-3 text-[10px]"
                        >
                          <span className="text-slate-500">{item.purpose}</span>
                          <span className="font-mono font-bold text-slate-700 dark:text-slate-200">
                            {formatCurrency(item.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Repayment profile
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Cash interest and scheduled principal by year
                      </p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {data?.activeAmortization || 'Indicative'}
                    </span>
                  </div>
                  <div className="h-44 flex items-end gap-3 border-b border-slate-200 dark:border-slate-700 px-2">
                    {schedule.map((x, i) => {
                      const interest = Number(x.cashInterest || 0),
                        principal = Number(x.amount || 0),
                        total = interest + principal;
                      return (
                        <div
                          key={i}
                          className="flex-1 h-full flex flex-col justify-end items-center group"
                        >
                          <div className="text-[8px] font-mono text-slate-400 mb-1 opacity-0 group-hover:opacity-100">
                            {formatCurrency(total)}
                          </div>
                          <div
                            className="w-full max-w-12 flex flex-col justify-end"
                            style={{
                              height: `${Math.max(
                                4,
                                (total / maxPayment) * 125
                              )}px`,
                            }}
                          >
                            <div
                              className="bg-amber-400 w-full"
                              style={{
                                height: `${
                                  total ? (interest / total) * 100 : 0
                                }%`,
                              }}
                            ></div>
                            <div
                              className="bg-indigo-600 w-full"
                              style={{
                                height: `${
                                  total ? (principal / total) * 100 : 0
                                }%`,
                              }}
                            ></div>
                          </div>
                          <div className="text-[9px] font-bold text-slate-500 mt-2">
                            Y{i + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-4 text-[9px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <i className="w-2 h-2 bg-amber-400 rounded-sm"></i>Cash
                      interest
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="w-2 h-2 bg-indigo-600 rounded-sm"></i>
                      Principal
                    </span>
                  </div>
                </section>
                <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="mb-5">
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Year 1 cash bridge
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-1">
                      From operating cash flow to liquidity retained
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      [
                        'Cash available for debt service',
                        Number(metrics?.debtServiceCash || 0),
                        'positive',
                      ],
                      [
                        'Cash interest',
                        -Number(waterfall.interest || 0),
                        'negative',
                      ],
                      [
                        'Scheduled principal',
                        -Number(waterfall.principal || 0),
                        'negative',
                      ],
                      [
                        'Mandatory cash sweep',
                        -Number(waterfall.sweep || 0),
                        'negative',
                      ],
                      [
                        'Cash retained',
                        Number(waterfall.retained || 0),
                        'total',
                      ],
                    ].map(([label, value, kind]) => (
                      <div
                        key={label}
                        className={`flex items-center justify-between py-2.5 ${
                          kind === 'total'
                            ? 'border-t border-slate-200 dark:border-slate-700 mt-2 pt-4'
                            : ''
                        }`}
                      >
                        <span className="text-xs text-slate-600 dark:text-slate-300">
                          {label}
                        </span>
                        <span
                          className={`font-mono text-xs font-bold ${
                            value < 0
                              ? 'text-rose-500'
                              : kind === 'total'
                              ? 'text-emerald-600'
                              : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {value < 0 ? '− ' : ''}
                          {formatCurrency(Math.abs(value))}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      );
    };

    const WorkspaceShell = ({ children }) => (
      <div className="w-full max-w-[1400px] mx-auto pb-16 animate-fade-in-up relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-500">
              {isEducation
                ? activeCase?.category
                : 'Private Credit Decision Workspace'}
            </div>
            <div className="font-bold text-slate-900 dark:text-white mt-1">
              {isEducation ? activeCase?.title : segment} ·{' '}
              {formatCurrency(targetDebt)} requirement
            </div>
          </div>
          <button
            onClick={() => {
              setActiveView('inputs');
              window.scrollTo(0, 0);
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600"
          >
            <span className="inline-flex items-center gap-2">
              {isEducation ? (
                <Icons.BookOpen size={14} />
              ) : (
                <Icons.Edit size={14} />
              )}{' '}
              {isEducation ? 'Case file' : 'Edit inputs'}
            </span>
          </button>
        </div>
        <div className="sticky top-[80px] z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-sm mb-8">
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${stageItems.length},minmax(0,1fr))`,
            }}
          >
            {stageItems.map((item, idx) => {
              const agreed =
                lenderResponse?.status === 'ACCEPT' ||
                lenderResponse?.status === 'ACCEPTED';
              const activeId =
                !isEducation && workspaceStage === 'simulate' && agreed
                  ? 'agree'
                  : workspaceStage;
              const currentIdx = Math.max(
                0,
                stageItems.findIndex((stage) => stage.id === activeId)
              );
              const active = item.id === activeId;
              const complete = idx < currentIdx;
              const allowed = !isEducation || idx <= currentIdx;
              return (
                <button
                  key={item.id}
                  disabled={!allowed}
                  onClick={() => allowed && goStage(item.route)}
                  className={`relative rounded-xl px-2 md:px-4 py-3 text-left transition-all ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md'
                      : complete
                      ? 'hover:bg-emerald-50 dark:hover:bg-emerald-900/10 text-slate-600 dark:text-slate-300'
                      : 'text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-65'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${
                        active
                          ? 'bg-white/15 text-white'
                          : complete
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-400'
                      }`}
                    >
                      {complete ? (
                        <Icons.CheckCircle size={11} />
                      ) : (
                        item.number.replace('0', '')
                      )}
                    </span>
                    <div>
                      <div className="text-[9px] md:text-sm font-bold">
                        {item.label}
                      </div>
                      <div
                        className={`hidden lg:block text-[9px] mt-0.5 ${
                          active
                            ? 'text-indigo-100'
                            : complete
                            ? 'text-slate-400'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      >
                        {item.help}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        {children}
      </div>
    );

    if (workspaceStage === 'assess' && isSpecialSituation)
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-amber-600">
                Situation room
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                Stabilise before you restructure
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                The immediate objective is to preserve liquidity and negotiating
                control. Select the first action you would take before designing
                the longer-term capital structure.
              </p>
            </div>
            <div className="grid lg:grid-cols-12 gap-6">
              <section className="lg:col-span-7 rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-amber-300">
                  Immediate pressure points
                </div>
                <div className="mt-6 space-y-4">
                  {(activeCase?.tensions || []).map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[32px_1fr] gap-3 items-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-300 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed pt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Critical timetable
                </div>
                <div className="mt-5 space-y-4">
                  {(activeCase?.timeline || []).map((item, index) => (
                    <div key={item} className="flex gap-3 items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <section>
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Choose the stabilisation move
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  This becomes part of your final restructuring rationale.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {(activeCase?.stabilisationOptions || []).map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStabilisation(option.id)}
                    className={`text-left rounded-2xl border p-5 transition-all ${
                      selectedStabilisation === option.id
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/15 shadow-lg'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex justify-between gap-3">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {option.title}
                      </h4>
                      {selectedStabilisation === option.id && (
                        <Icons.CheckCircle
                          size={18}
                          className="text-amber-500 shrink-0"
                        />
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500 mt-3">
                      {option.detail}
                    </p>
                  </button>
                ))}
              </div>
            </section>
            <div className="flex justify-end">
              <button
                disabled={!selectedStabilisation}
                onClick={() => goStage('structure')}
                className={`px-7 py-4 rounded-xl font-bold flex items-center gap-2 ${
                  selectedStabilisation
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                Build the restructuring options <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );

    if (workspaceStage === 'assess')
      return (
        <WorkspaceShell>
          <div className="space-y-7">
            {assessmentMode === 'sample' && (
              <section className="rounded-2xl border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/10 px-5 py-4 flex items-start gap-3">
                <Icons.BookOpen
                  size={20}
                  className="text-purple-600 dark:text-purple-300 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-purple-800 dark:text-purple-200">
                    Educational committee debrief ·{' '}
                    {SAMPLE_CASES.find((x) => x.id === selectedSampleId)?.title}
                  </div>
                  <p className="text-[10px] text-purple-700 dark:text-purple-300 mt-1">
                    The committee is evaluating your chosen amount, allocation,
                    tenor and priorities against locked fictional facts.
                    Different defensible choices can produce different
                    structures.
                  </p>
                </div>
              </section>
            )}
            <section className={`rounded-3xl border p-6 md:p-8 ${toneClasses}`}>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-70">
                    Preliminary Decision Brief
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mt-3">
                    {decisionModel?.status}
                  </h2>
                  <p className="text-base leading-relaxed mt-4 max-w-3xl">
                    {decisionModel?.conclusion}
                  </p>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/60 dark:bg-slate-950/20 border border-current/10 p-4">
                    <div className="text-[8px] uppercase tracking-widest font-bold opacity-60">
                      Primary constraint
                    </div>
                    <div className="font-bold mt-2">
                      {decisionModel?.constraint}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/60 dark:bg-slate-950/20 border border-current/10 p-4">
                    <div className="text-[8px] uppercase tracking-widest font-bold opacity-60">
                      Information coverage
                    </div>
                    <div className="font-mono text-xl font-bold mt-2">
                      {decisionModel?.completeness}%
                    </div>
                    <div className="text-[8px] mt-1 opacity-60">
                      {decisionModel?.evidenceLevel}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`rounded-3xl border p-6 md:p-8 ${
                financingMarketView?.code === 'CONVENTIONAL_CREDIBLE'
                  ? 'bg-sky-50 border-sky-200 dark:bg-sky-900/10 dark:border-sky-800/40'
                  : financingMarketView?.code === 'NO_CURRENT_PATH'
                  ? 'bg-rose-50 border-rose-200 dark:bg-rose-900/10 dark:border-rose-800/40'
                  : 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800/40'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-7 items-start">
                <div className="lg:col-span-7">
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">
                    Financing-market perspective
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {financingMarketView?.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 mt-3">
                    {financingMarketView?.summary}
                  </p>
                </div>
                <div className="lg:col-span-5 space-y-3">
                  <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 border border-current/10 p-4">
                    <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                      Comparator
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200 mt-2">
                      {financingMarketView?.comparator}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 border border-current/10 p-4">
                    <div className="text-[8px] uppercase tracking-widest font-bold text-indigo-500">
                      Private-credit case
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200 mt-2">
                      {financingMarketView?.privateCreditCase}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="grid lg:grid-cols-12 gap-6">
              <section className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6">
                <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-500">
                  Funding perimeter recommendation
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  {decisionModel?.fundingRoute}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mt-3">
                  {decisionModel?.routeReason}
                </p>
                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  {[
                    [
                      'Repayment source',
                      decisionModel?.isScoped
                        ? 'Ring-fenced project / asset cash flow'
                        : 'Operating cash flow',
                    ],
                    [
                      'Recourse',
                      decisionModel?.isScoped
                        ? recoursePreference
                        : 'Operating-company balance sheet',
                    ],
                    [
                      'Vehicle status',
                      decisionModel?.isScoped
                        ? spvStatus
                        : 'Existing operating company',
                    ],
                  ].map(([l, v]) => (
                    <div
                      key={l}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                    >
                      <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                        {l}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1.5">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white p-6">
                <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-300">
                  What the current information indicates
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  {[
                    ['Requested facility', formatCurrency(targetDebt)],
                    [
                      'Repayment cash flow',
                      formatCurrency(metrics?.debtServiceCash || 0),
                    ],
                    [coverageLabel, `${Number(coverage || 0).toFixed(2)}x`],
                    [
                      'Liquidity buffer',
                      formatCurrency(decisionModel?.liquidityBuffer || 0),
                    ],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">
                        {l}
                      </div>
                      <div className="font-mono font-bold mt-1">{v}</div>
                    </div>
                  ))}
                </div>
                {decisionModel?.isScoped && (
                  <div className="mt-5 pt-4 border-t border-white/10 text-[10px] text-slate-300">
                    Downside SPV DSCR:{' '}
                    <span className="font-mono font-bold text-white">
                      {Number(decisionModel?.downsideSpvDscr || 0).toFixed(2)}x
                    </span>
                  </div>
                )}
              </section>
            </div>
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                  <Icons.Lightbulb size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    How to use this assessment
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                    The result is an initial decision aid. Pricing, covenants
                    and final capacity remain indicative until financial, legal
                    and commercial information is validated. Open the Coach for
                    a guided reading of this page.
                  </p>
                </div>
              </div>
            </section>
            <div className="flex justify-end">
              <button
                onClick={() => goStage('structure')}
                className="px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2"
              >
                Review financing structures <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );

    if (workspaceStage === 'structure' && isEducation) {
      const selectedStructure = rankedStructures[selectedOptionIndex];
      const packageData = learnerStructureSelected
        ? liveEconomics || selectedBaseline
        : null;
      const meritsFor = (structure) => [
        structure?.solutionType === 'BUNDLED_FACILITY'
          ? 'Separates revolving liquidity from longer-term capital expenditure'
          : 'Provides the full committed financing requirement at closing',
        Number(structure?.waterfall?.retained || 0) > 0
          ? 'Leaves positive cash after Year 1 debt service'
          : 'Creates a defined repayment framework for the borrower',
        structure?.equityLinked
          ? 'Uses equity-linked return to reduce reliance on cash coupon'
          : 'Avoids immediate shareholder dilution',
      ];
      const tradeoffsFor = (structure) => [
        structure?.equityLinked
          ? 'Introduces conversion or equity-participation economics'
          : String(structure?.activeAmortization || '').includes('Bullet')
          ? 'Concentrates principal repayment at maturity'
          : 'Uses cash for scheduled principal repayment',
        String(structure?.baselineCall || '').includes('Make-Whole')
          ? 'Restricts an early refinancing through call protection'
          : 'Still requires negotiated prepayment protection',
        Number(structure?.grossIrr || 0) >= 18
          ? 'Carries a relatively high all-in lender IRR'
          : 'Remains subject to financial, commercial and legal diligence',
      ];
      const structureMechanic =
        selectedStructure?.solutionType === 'BUNDLED_FACILITY'
          ? 'The facility is divided between a term-funded component and a revolving or deferred-draw component. This matches longer-term uses with committed debt while preserving flexible liquidity for shorter operating needs.'
          : selectedStructure?.equityLinked
          ? 'The company receives debt capital with an equity-linked component. Part of the lender return can be earned through PIK, redemption or conversion economics rather than entirely through current cash interest.'
          : 'The company receives a single committed debt facility. Interest is paid on the outstanding balance and principal follows the selected amortisation profile, with the remaining amount refinanced or repaid at maturity.';
      const companyEffect = packageData
        ? `The structure delivers ${formatCurrency(
            packageData.bridge?.usableNetProceeds || 0
          )} of usable proceeds. Year 1 debt service is ${formatCurrency(
            Number(packageData.waterfall?.interest || 0) +
              Number(packageData.waterfall?.principal || 0) +
              Number(packageData.waterfall?.sweep || 0)
          )}, leaving ${formatCurrency(
            packageData.waterfall?.retained || 0
          )} of modeled cash after debt service.`
        : '';
      const lenderProtection = decisionModel?.isScoped
        ? 'Repayment is supported by ring-fenced project cash flow, controlled accounts, project security and an indicative DSCR covenant. Final protections remain subject to project and legal diligence.'
        : `Repayment is supported by operating cash flow, the negotiated repayment profile and indicative leverage and interest-cover covenants. ${
            securityAvailability === 'Unsecured / no meaningful collateral'
              ? 'Enterprise value and cash-flow durability are therefore central.'
              : 'The available security provides an additional recovery route.'
          }`;
      const canContinue =
        learnerStructureSelected && structureRationale.length === 2;
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <BorrowerMandateStrip />
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                {isSpecialSituation
                  ? 'Restructuring alternatives'
                  : 'Structure decision'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                Choose the path you would defend
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                Compare how each financing path funds the mandate, uses cash and
                allocates risk. The engine’s preferred answer remains hidden
                until the Advisory debrief.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {educationalStructureOptions.map(
                ({ structure: s, index: sourceIndex }) => (
                  <button
                    key={`${s.type}-${sourceIndex}`}
                    onClick={() => handleSelectStructure(sourceIndex)}
                    className={`text-left rounded-3xl border overflow-hidden transition-all ${
                      learnerStructureSelected &&
                      selectedOptionIndex === sourceIndex
                        ? 'border-indigo-500 shadow-xl ring-2 ring-indigo-500/10'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-300'
                    }`}
                  >
                    <div
                      className={`p-6 ${
                        learnerStructureSelected &&
                        selectedOptionIndex === sourceIndex
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white dark:bg-slate-900'
                      }`}
                    >
                      <div className="flex justify-between gap-4">
                        <div
                          className={`text-[9px] uppercase tracking-widest font-bold ${
                            learnerStructureSelected &&
                            selectedOptionIndex === sourceIndex
                              ? 'text-indigo-200'
                              : 'text-indigo-500'
                          }`}
                        >
                          {s.title}
                        </div>
                        {learnerStructureSelected &&
                          selectedOptionIndex === sourceIndex && (
                            <Icons.CheckCircle size={18} />
                          )}
                      </div>
                      <h3 className="text-xl font-bold mt-3">{s.type}</h3>
                      <p
                        className={`text-sm leading-6 mt-3 ${
                          learnerStructureSelected &&
                          selectedOptionIndex === sourceIndex
                            ? 'text-indigo-100'
                            : 'text-slate-500'
                        }`}
                      >
                        {s.rationale}
                      </p>
                    </div>
                    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-6 bg-slate-50/70 dark:bg-slate-950/20">
                      <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">
                          Merits
                        </div>
                        <div className="mt-3 space-y-3">
                          {meritsFor(s).map((item) => (
                            <div
                              key={item}
                              className="flex gap-2.5 text-xs leading-5 text-slate-600 dark:text-slate-300"
                            >
                              <span className="text-emerald-500 font-bold">
                                +
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-amber-600">
                          Trade-offs
                        </div>
                        <div className="mt-3 space-y-3">
                          {tradeoffsFor(s).map((item) => (
                            <div
                              key={item}
                              className="flex gap-2.5 text-xs leading-5 text-slate-600 dark:text-slate-300"
                            >
                              <span className="text-amber-500 font-bold">
                                –
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {[
                          [
                            'Facility',
                            formatCurrency(
                              Number(s.primaryAmount || 0) +
                                Number(s.secondaryAmount || 0)
                            ),
                          ],
                          [
                            'Cash coupon',
                            `${Number(
                              s.blendedCashRate || s.primaryRate || 0
                            ).toFixed(2)}%`,
                          ],
                          [
                            decisionModel?.isScoped ? 'DSCR' : 'Interest cover',
                            `${Number(
                              decisionModel?.isScoped
                                ? s.projectDscr
                                : s.icr || 0
                            ).toFixed(2)}x`,
                          ],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <div className="text-[8px] uppercase tracking-wider text-slate-400">
                              {label}
                            </div>
                            <div className="font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </button>
                )
              )}
            </div>

            {!learnerStructureSelected ? (
              <section className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
                <Icons.Layers size={34} className="mx-auto text-slate-300" />
                <h3 className="font-bold text-slate-700 dark:text-slate-200 mt-4">
                  Select a structure to examine the transaction
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  The capital structure, funding flow, repayment profile and
                  cash impact will appear here.
                </p>
              </section>
            ) : (
              <>
                <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                      <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                          If {activeCase?.title} chooses this structure
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2">
                          {selectedStructure?.dynamicTitle ||
                            selectedStructure?.type}
                        </h3>
                        <p className="text-sm text-slate-500 mt-2">
                          {selectedStructure?.primaryLabel}
                          {selectedStructure?.secondaryLabel
                            ? ` + ${selectedStructure.secondaryLabel}`
                            : ''}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 min-w-[280px]">
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3">
                          <div className="text-[8px] uppercase tracking-widest text-slate-400">
                            Facility
                          </div>
                          <div className="font-mono font-bold text-indigo-600 mt-1">
                            {formatCurrency(totalFacility)}
                          </div>
                        </div>
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3">
                          <div className="text-[8px] uppercase tracking-widest text-slate-400">
                            Tenor
                          </div>
                          <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
                            {formatTerm('tenor', baselineTerms?.tenor)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 mt-7">
                      <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/40 p-5">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                          How it works
                        </div>
                        <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-3">
                          {structureMechanic}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 p-5">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">
                          Effect on the company
                        </div>
                        <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-3">
                          {companyEffect}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/30 p-5">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-amber-600">
                          How the lender is protected
                        </div>
                        <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-3">
                          {lenderProtection}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-950/20">
                    <DealEconomicsPanel data={packageData} />
                  </div>
                </section>

                <section className="rounded-3xl border-2 border-indigo-100 dark:border-indigo-900 bg-white dark:bg-slate-900 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                        Defend your decision
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                        Select exactly two reasons for choosing this structure
                      </h3>
                      <p className="text-sm text-slate-500 mt-2">
                        Your rationale will be revisited in the final debrief.
                        Selecting a third reason replaces the oldest selection.
                      </p>
                    </div>
                    <div
                      className={`font-mono text-sm font-bold ${
                        structureRationale.length === 2
                          ? 'text-emerald-600'
                          : 'text-indigo-600'
                      }`}
                    >
                      {structureRationale.length} of 2 selected
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {rationaleChoices.map((item) => (
                      <button
                        key={item}
                        onClick={() => toggleRationale(item)}
                        className={`px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                          structureRationale.includes(item)
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-300'
                        }`}
                      >
                        {structureRationale.includes(item) ? '✓ ' : ''}
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="mt-7 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      {canContinue
                        ? 'Your structure and rationale are ready.'
                        : 'Select two reasons to continue to negotiation.'}
                    </p>
                    <button
                      disabled={!canContinue}
                      onClick={() => goStage('simulate')}
                      className={`px-7 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${
                        canContinue
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {canContinue
                        ? 'Take this structure into negotiation'
                        : 'Select two reasons to continue'}{' '}
                      <Icons.ArrowRight size={18} />
                    </button>
                  </div>
                </section>
              </>
            )}
          </div>
        </WorkspaceShell>
      );
    }

    if (workspaceStage === 'structure' && isEducation) {
      const selectedStructure = rankedStructures[selectedOptionIndex];
      const packageData = learnerStructureSelected
        ? liveEconomics || selectedBaseline
        : null;
      const meritsFor = (structure) => [
        structure?.solutionType === 'BUNDLED_FACILITY'
          ? 'Separates revolving liquidity from term-funded uses'
          : 'Provides the full committed financing requirement',
        Number(structure?.waterfall?.retained || 0) > 0
          ? 'Leaves positive operating cash after Year 1 debt service'
          : 'Creates a defined repayment and control framework',
        structure?.equityLinked
          ? 'Reduces reliance on pure cash-pay debt'
          : 'Avoids immediate shareholder dilution',
      ];
      const tradeoffsFor = (structure) => [
        structure?.equityLinked
          ? 'Introduces conversion or equity-participation economics'
          : String(structure?.activeAmortization || '').includes('Bullet')
          ? 'Creates refinancing concentration at maturity'
          : 'Consumes cash through scheduled repayment',
        String(structure?.baselineCall || '').includes('Make-Whole')
          ? 'Restricts early refinancing'
          : 'Requires negotiated prepayment protection',
        Number(structure?.grossIrr || 0) >= 18
          ? 'Carries a high all-in lender return'
          : 'Still requires diligence and final credit approval',
      ];
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                {isSpecialSituation
                  ? 'Restructuring alternatives'
                  : 'Structure decision'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                Choose the path you would defend
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                Each option solves the mandate differently. Compare the
                trade-offs before selecting the package you want to take into
                negotiation.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {educationalStructureOptions.map(
                ({ structure: s, index: sourceIndex }) => (
                  <button
                    key={`${s.type}-${sourceIndex}`}
                    onClick={() => handleSelectStructure(sourceIndex)}
                    className={`text-left rounded-3xl border overflow-hidden transition-all ${
                      learnerStructureSelected &&
                      selectedOptionIndex === sourceIndex
                        ? 'border-indigo-500 shadow-xl ring-2 ring-indigo-500/10'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-300'
                    }`}
                  >
                    <div
                      className={`p-6 ${
                        learnerStructureSelected &&
                        selectedOptionIndex === sourceIndex
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white dark:bg-slate-900'
                      }`}
                    >
                      <div className="flex justify-between gap-4">
                        <div
                          className={`text-[9px] uppercase tracking-widest font-bold ${
                            learnerStructureSelected &&
                            selectedOptionIndex === sourceIndex
                              ? 'text-indigo-200'
                              : 'text-indigo-500'
                          }`}
                        >
                          {s.title}
                        </div>
                        {learnerStructureSelected &&
                          selectedOptionIndex === sourceIndex && (
                            <Icons.CheckCircle size={18} />
                          )}
                      </div>
                      <h3 className="text-xl font-bold mt-3">{s.type}</h3>
                      <p
                        className={`text-xs leading-relaxed mt-3 ${
                          learnerStructureSelected &&
                          selectedOptionIndex === sourceIndex
                            ? 'text-indigo-100'
                            : 'text-slate-500'
                        }`}
                      >
                        {s.rationale}
                      </p>
                    </div>
                    <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-5 bg-slate-50/70 dark:bg-slate-950/20">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest font-bold text-emerald-600">
                          Merits
                        </div>
                        <div className="mt-3 space-y-2">
                          {meritsFor(s).map((item) => (
                            <div
                              key={item}
                              className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                              <span className="text-emerald-500">+</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest font-bold text-amber-600">
                          Trade-offs
                        </div>
                        <div className="mt-3 space-y-2">
                          {tradeoffsFor(s).map((item) => (
                            <div
                              key={item}
                              className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                              <span className="text-amber-500">–</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {[
                          [
                            'Facility',
                            formatCurrency(
                              Number(s.primaryAmount || 0) +
                                Number(s.secondaryAmount || 0)
                            ),
                          ],
                          ['Cash rate', s.rate],
                          [
                            decisionModel?.isScoped ? 'DSCR' : 'Cover',
                            `${Number(
                              decisionModel?.isScoped
                                ? s.projectDscr
                                : s.icr || 0
                            ).toFixed(2)}x`,
                          ],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <div className="text-[8px] uppercase tracking-wider text-slate-400">
                              {label}
                            </div>
                            <div className="font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-1">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </button>
                )
              )}
            </div>
            {learnerStructureSelected && (
              <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
                <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="lg:col-span-7">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Your selected path
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                      {selectedStructure?.dynamicTitle ||
                        selectedStructure?.type}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2">
                      Select up to two reasons you would use to defend this
                      decision.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {rationaleChoices.map((item) => (
                        <button
                          key={item}
                          onClick={() => toggleRationale(item)}
                          className={`px-3 py-2 rounded-full border text-[10px] font-bold ${
                            structureRationale.includes(item)
                              ? 'bg-indigo-600 border-indigo-600 text-white'
                              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {borrowerPriorityResults.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3"
                      >
                        <div className="text-[9px] leading-relaxed text-slate-500">
                          {result.label}
                        </div>
                        <div
                          className={`text-[9px] font-bold mt-2 ${
                            result.score === 2
                              ? 'text-emerald-600'
                              : result.score === 1
                              ? 'text-amber-600'
                              : 'text-rose-500'
                          }`}
                        >
                          {result.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {packageData && (
                  <div className="p-6 md:p-8">
                    <DealEconomicsPanel data={packageData} />
                  </div>
                )}
              </section>
            )}
            <div className="flex justify-end">
              <button
                disabled={
                  !learnerStructureSelected || !structureRationale.length
                }
                onClick={() => goStage('simulate')}
                className={`px-7 py-4 rounded-xl text-sm font-bold flex items-center gap-2 ${
                  learnerStructureSelected && structureRationale.length
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                Take this structure into negotiation{' '}
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );
    }

    if (workspaceStage === 'structure')
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <section>
              <div className="mb-5">
                <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                  Recommended financing paths
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                  Choose the structure to examine
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                  The funding perimeter and facility are evaluated together.
                  Selecting a card updates the single economics view below.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4">
                {getAdvisoryStructures().map((s, idx) => (
                  <button
                    key={s.type}
                    onClick={() => handleSelectStructure(idx)}
                    className={`text-left rounded-2xl border p-5 transition-all ${
                      selectedOptionIndex === idx
                        ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-900/15 shadow-lg'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex justify-between gap-3">
                      <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                        {s.title}
                      </div>
                      <span
                        className={`text-[8px] uppercase tracking-wider font-bold ${
                          s.executionState === 'NOT_EXECUTABLE'
                            ? 'text-rose-500'
                            : s.executionState === 'CONDITIONAL'
                            ? 'text-amber-500'
                            : 'text-emerald-500'
                        }`}
                      >
                        {s.executionState === 'NOT_EXECUTABLE'
                          ? 'Does not pass'
                          : s.executionState === 'CONDITIONAL'
                          ? 'Limited headroom'
                          : 'Passes screen'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                      {s.type}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3">
                      {s.rationale}
                    </p>
                    <div className="mt-4 p-3 rounded-xl bg-white/70 dark:bg-slate-950/20 border border-slate-200/70 dark:border-slate-800">
                      <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">
                        {idx === 0
                          ? 'Why this ranks first'
                          : 'Why this ranks lower'}
                      </div>
                      <p className="text-[10px] leading-relaxed text-slate-600 dark:text-slate-300 mt-1.5">
                        {s.rankingExplanation}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-5">
                      {[
                        [
                          'Facility',
                          formatCurrency(
                            Number(s.primaryAmount || 0) +
                              Number(s.secondaryAmount || 0)
                          ),
                        ],
                        ['Cash cost', s.rate],
                        [
                          decisionModel?.isScoped ? 'DSCR' : 'Coverage',
                          `${Number(
                            decisionModel?.isScoped
                              ? metrics?.scenarioData?.[idx]?.projectDscr
                              : metrics?.scenarioData?.[idx]?.icr || 0
                          ).toFixed(2)}x`,
                        ],
                      ].map(([l, v]) => (
                        <div key={l}>
                          <div className="text-[8px] uppercase tracking-wider text-slate-400">
                            {l}
                          </div>
                          <div className="text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200 mt-1">
                            {v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 p-5 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                    Selected indicative package
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {baseline.dynamicTitle || baseline.type}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {decisionModel?.fundingRoute} · {baseline.primaryLabel}
                    {baseline.secondaryLabel
                      ? ` + ${baseline.secondaryLabel}`
                      : ''}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-[8px] uppercase tracking-widest text-slate-400">
                    Facility
                  </div>
                  <div className="font-mono text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                    {formatCurrency(totalFacility)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 mb-7">
                {[
                  ['tenor', baselineTerms?.tenor],
                  ['oid', baselineTerms?.oid],
                  ['upfrontFee', baselineTerms?.upfrontFee],
                  ['pikPremium', baselineTerms?.pikPremium],
                  ['amortization', baselineTerms?.amortization],
                  ['cashSweep', baselineTerms?.cashSweep],
                  ['dsra', baselineTerms?.dsra],
                  ['callProtection', baselineTerms?.callProtection],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="text-[8px] uppercase tracking-wider font-bold text-slate-400">
                      {termLabels[k]}
                    </div>
                    <div
                      className="text-[10px] font-mono font-bold text-slate-800 dark:text-white mt-1.5 truncate"
                      title={formatTerm(k, v)}
                    >
                      {formatTerm(k, v)}
                    </div>
                  </div>
                ))}
              </div>
              <DealEconomicsPanel data={baseline} />
            </section>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              {!decisionModel?.canSimulate && (
                <button
                  onClick={() => setActiveView('inputs')}
                  className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
                >
                  Revise inputs
                </button>
              )}
              <button
                onClick={() => goStage('prepare')}
                className="px-6 py-3 rounded-xl border border-indigo-200 dark:border-indigo-800 text-sm font-bold text-indigo-600 dark:text-indigo-400"
              >
                Continue without negotiation
              </button>
              <button
                disabled={!decisionModel?.canSimulate}
                onClick={() => goStage('simulate')}
                className={`px-7 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${
                  decisionModel?.canSimulate
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                Simulate negotiation <Icons.ArrowRight size={17} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );

    if (workspaceStage === 'simulate' && isEducation) {
      const responseStatus = lenderResponse?.status || 'DRAFT';
      const currentTerms =
        draftNegotiationTerms || liveNegotiationTerms || baselineTerms || {};
      const acceptedTerms = acceptedNegotiationTerms || baselineTerms || {};
      const pendingKeys = Object.keys(termLabels).filter((key) => {
        const a = acceptedTerms[key],
          b = currentTerms[key];
        return typeof a === 'number' && typeof b === 'number'
          ? Math.abs(a - b) > 0.0001
          : String(a) !== String(b);
      });
      const candidate =
        metrics?.facilityCandidates?.find(
          (item) => item.family === selectedBaseline?.family
        ) || selectedBaseline;
      const referenceEconomics =
        metrics?.evaluateScenario?.(candidate, acceptedTerms) ||
        selectedBaseline ||
        {};
      const currentCashCoupon = Number(
        current?.blendedCashRate || current?.primaryRate || 0
      );
      const modelSpread = Math.max(
        0.5,
        Number(
          selectedBaseline?.blendedCashRate ||
            selectedBaseline?.primaryRate ||
            0
        ) - Number(selectedBaseline?.baseRate || 0)
      );
      const openingSpread =
        modelSpread + Number(baselineTerms?.cashRateAdjustment || 0);
      const currentSpread = Math.max(
        0.5,
        currentCashCoupon - Number(current?.baseRate || 0)
      );
      const hybrid =
        Boolean(selectedBaseline?.equityLinked) ||
        /OCD|CCD|Mezzanine|Venture|Hybrid/i.test(
          String(selectedBaseline?.type || selectedBaseline?.dynamicTitle || '')
        );
      const convertible = Boolean(selectedBaseline?.equityLinked);
      const hasReserve =
        decisionModel?.isScoped ||
        String(currentTerms.dsra || '').toLowerCase() !== 'none';
      const yearOneService = (economics) =>
        Number(economics?.waterfall?.interest || 0) +
        Number(economics?.waterfall?.principal || 0) +
        Number(economics?.waterfall?.sweep || 0);
      const moneyDelta = (after, before) => {
        const value = Number(after || 0) - Number(before || 0);
        return `${value >= 0 ? '+' : '−'}${formatCurrency(Math.abs(value))}`;
      };
      const bpsDelta = (after, before) =>
        Math.round((Number(after || 0) - Number(before || 0)) * 100);
      const liveImpact = (() => {
        const key = activeNegotiationTerm;
        const irrBps = bpsDelta(
          current?.grossIrr,
          referenceEconomics?.grossIrr
        );
        const interestMove = moneyDelta(
          current?.waterfall?.interest,
          referenceEconomics?.waterfall?.interest
        );
        const serviceMove = moneyDelta(
          yearOneService(current),
          yearOneService(referenceEconomics)
        );
        const retainedMove = moneyDelta(
          current?.waterfall?.retained,
          referenceEconomics?.waterfall?.retained
        );
        const proceedsMove = moneyDelta(
          current?.bridge?.usableNetProceeds,
          referenceEconomics?.bridge?.usableNetProceeds
        );
        const impacts = {
          cashRateAdjustment: {
            title: 'Credit spread and cash coupon',
            borrower: `Year 1 cash interest changes by ${interestMove}; the current cash coupon is ${currentCashCoupon.toFixed(
              2
            )}%.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps versus the accepted position.`,
            trade:
              'A lower spread may be exchanged for stronger call protection, fees or faster deleveraging.',
          },
          tenor: {
            title: 'Tenor and refinancing date',
            borrower: `Year 1 debt service changes by ${serviceMove}. A longer tenor delays the final refinancing date but may leave a larger balance outstanding for longer.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps and capital remains at risk for a different duration.`,
            trade:
              'A tenor extension is often traded against OID, upfront fee, cash sweep or call protection.',
          },
          oid: {
            title: 'Original issue discount',
            borrower: `Usable day-one proceeds change by ${proceedsMove}. A lower OID means more cash reaches the company at closing.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps because OID is earned through repayment at par.`,
            trade:
              'OID can be traded against upfront fee, coupon or call protection.',
          },
          upfrontFee: {
            title: 'Upfront fee',
            borrower: `Usable day-one proceeds change by ${proceedsMove}; this fee is paid or deducted at closing.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps through immediate fee income.`,
            trade:
              'Reducing the fee may require a higher coupon, tighter protection or a lower OID.',
          },
          pikPremium: {
            title: 'PIK coupon',
            borrower: `Year 1 cash interest changes by ${interestMove}, but PIK accrues to the debt balance rather than disappearing.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps while repayment risk shifts toward maturity.`,
            trade:
              'PIK protects current liquidity but increases future principal and refinancing exposure.',
          },
          redemptionPremium: {
            title: 'Redemption premium',
            borrower: `The payment due on redemption changes without increasing current cash interest. Lifetime financing cost moves through the exit payment.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps if the facility is repaid as modeled.`,
            trade:
              'A redemption premium can substitute for part of the current coupon, but increases maturity cost.',
          },
          cashSweep: {
            title: 'Mandatory cash sweep',
            borrower: `Cash retained after Year 1 debt service changes by ${retainedMove}.`,
            lender: `Faster principal repayment changes duration and indicative IRR by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps.`,
            trade:
              'A lower sweep preserves operating flexibility; the lender may seek a tighter covenant or economic compensation.',
          },
          amortization: {
            title: 'Principal repayment profile',
            borrower: `Year 1 debt service changes by ${serviceMove}; the timing of principal now follows the selected profile.`,
            lender:
              'Earlier amortisation reduces outstanding exposure, while a bullet increases reliance on the maturity exit.',
            trade:
              'Back-ended repayment may require a cash sweep, reserve or stronger refinancing protection.',
          },
          dsra: {
            title: 'Debt service reserve',
            borrower: `Usable day-one proceeds change by ${proceedsMove} because cash is set aside rather than deployed.`,
            lender:
              'A larger reserve creates a dedicated liquidity buffer for scheduled debt service.',
            trade:
              'Reserve funding improves resilience but reduces cash available for the operating plan.',
          },
          callProtection: {
            title: 'Call protection',
            borrower:
              'Stronger call protection can make an early, cheaper refinancing more expensive.',
            lender:
              'Call protection preserves expected return if the company refinances earlier than planned.',
            trade:
              'Prepayment flexibility is commonly traded against upfront economics or coupon.',
          },
          maxLeverageCov: {
            title: 'Maximum leverage covenant',
            borrower:
              'A wider covenant provides more operating and acquisition flexibility but does not change actual leverage.',
            lender:
              'A tighter threshold provides earlier warning and negotiating control if performance weakens.',
            trade:
              'Covenant flexibility may require stronger reporting, restricted payments or additional pricing.',
          },
          minIcrCov: {
            title: decisionModel?.isScoped
              ? 'Minimum DSCR covenant'
              : 'Minimum interest cover covenant',
            borrower:
              'A lower threshold creates more headroom but does not improve the company’s actual debt-service capacity.',
            lender:
              'A tighter threshold gives the lender an earlier intervention point if cash generation deteriorates.',
            trade:
              'Covenant headroom is negotiated separately from the underlying credit metric.',
          },
          equityKicker: {
            title: 'Equity kicker',
            borrower:
              'A larger kicker increases potential shareholder dilution if the equity value grows.',
            lender: `Indicative return includes the modeled value of the equity participation and moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps.`,
            trade:
              'Equity participation should earn a lower cash burden, greater leverage or improved execution certainty.',
          },
          conversionValuation: {
            title: 'Conversion valuation',
            borrower:
              'A higher conversion valuation reduces the ownership issued to the lender on conversion.',
            lender:
              'A higher valuation reduces potential equity upside and places more reliance on contractual debt return.',
            trade:
              'Conversion valuation can be exchanged for coupon, redemption premium or downside protection.',
          },
          primaryAmount: {
            title: 'Facility composition',
            borrower: `The blended cash coupon is now ${currentCashCoupon.toFixed(
              2
            )}% and Year 1 service changes by ${serviceMove}.`,
            lender:
              'Changing the tranche mix reallocates return, repayment priority and risk between facility components.',
            trade:
              'The total commitment remains fixed; only the mix and its economics move.',
          },
        };
        return (
          impacts[key] || {
            title: 'Current draft impact',
            borrower: `Year 1 debt service changes by ${serviceMove} and retained cash changes by ${retainedMove}.`,
            lender: `Indicative lender IRR moves by ${
              irrBps >= 0 ? '+' : ''
            }${irrBps} bps.`,
            trade:
              'The committee will assess the complete package rather than a single term in isolation.',
          }
        );
      })();
      const counterChanges = lenderResponse?.terms
        ? Object.keys(termLabels).filter((key) => {
            const a = currentTerms[key],
              b = lenderResponse.terms[key];
            return typeof a === 'number' && typeof b === 'number'
              ? Math.abs(a - b) > 0.0001
              : String(a) !== String(b);
          })
        : [];
      const TermHeading = ({ children }) => (
        <div className="text-[9px] uppercase tracking-[0.18em] font-bold text-slate-400 mb-3 mt-2">
          {children}
        </div>
      );
      return (
        <WorkspaceShell>
          <div className="space-y-7">
            <BorrowerMandateStrip />
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                Negotiation room
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                Shape a package both sides can accept
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                Change the draft, understand the consequences and submit a
                complete borrower proposal. The lender responds to the
                package—not to isolated sliders.
              </p>
            </div>

            <section className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 md:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-300">
                    Current deal package
                  </div>
                  <h3 className="text-2xl font-bold mt-2">
                    {baseline.dynamicTitle || baseline.type}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      ['Facility', formatCurrency(totalFacility)],
                      ['Tenor', formatTerm('tenor', currentTerms.tenor)],
                      ['Repayment', currentTerms.amortization],
                      [
                        'Security',
                        decisionModel?.isScoped
                          ? 'Project security'
                          : securityAvailability,
                      ],
                    ].map(([label, value]) => (
                      <span
                        key={label}
                        className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[10px]"
                      >
                        <span className="text-slate-500">{label}: </span>
                        <strong className="text-slate-200">{value}</strong>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:text-right">
                  <div className="text-[8px] uppercase tracking-widest text-slate-500">
                    Negotiation status
                  </div>
                  <div
                    className={`mt-2 inline-flex px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold ${
                      responseStatus === 'REJECT'
                        ? 'bg-rose-400/15 text-rose-300'
                        : responseStatus === 'COUNTER'
                        ? 'bg-amber-400/15 text-amber-300'
                        : responseStatus === 'ACCEPT' ||
                          responseStatus === 'ACCEPTED'
                        ? 'bg-emerald-400/15 text-emerald-300'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {responseStatus === 'DRAFT'
                      ? 'Opening position'
                      : responseStatus}
                  </div>
                </div>
              </div>
              <div className="mt-6 [&>div>div>div]:bg-white/5 [&>div>div>div]:border-white/10 [&>div>div>div_div]:text-white">
                <DealEconomicsPanel data={current} compact />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4">
              <div className="grid grid-cols-4 gap-2">
                {[
                  ['Opening terms', 'Baseline', true],
                  [
                    'Borrower proposal',
                    pendingKeys.length
                      ? `${pendingKeys.length} terms changed`
                      : 'Not submitted',
                    pendingKeys.length > 0,
                  ],
                  [
                    'Lender response',
                    responseStatus === 'COUNTER'
                      ? 'Counter received'
                      : responseStatus === 'REJECT'
                      ? 'Declined'
                      : responseStatus === 'ACCEPT'
                      ? 'Accepted'
                      : 'Pending',
                    responseStatus !== 'DRAFT',
                  ],
                  [
                    'Agreed package',
                    responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                      ? 'Agreed'
                      : 'Pending',
                    responseStatus === 'ACCEPT' ||
                      responseStatus === 'ACCEPTED',
                  ],
                ].map(([label, detail, active], index) => (
                  <div
                    key={label}
                    className={`rounded-xl p-3 border ${
                      active
                        ? 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/15'
                        : 'border-transparent bg-slate-50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div
                      className={`text-[8px] uppercase tracking-widest font-bold ${
                        active ? 'text-indigo-600' : 'text-slate-400'
                      }`}
                    >
                      {index + 1}. {label}
                    </div>
                    <div className="hidden sm:block text-[9px] text-slate-500 mt-1">
                      {detail}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid xl:grid-cols-12 gap-6 items-start">
              <section className="xl:col-span-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
                <div className="px-6 md:px-8 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Borrower proposal
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      Negotiate the applicable terms
                    </h3>
                  </div>
                  <button
                    onClick={rejectLenderCounter}
                    className="text-[10px] font-bold text-slate-500 hover:text-indigo-600"
                  >
                    Restore accepted position
                  </button>
                </div>
                <div className="p-6 md:p-8 space-y-7">
                  <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-100 dark:border-indigo-800/40 p-5">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-48 shrink-0">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                          Cash pricing
                        </div>
                        <div className="mt-3">
                          <div className="text-[8px] uppercase tracking-widest text-slate-400">
                            {current?.baseRateName || 'Reference rate'}
                          </div>
                          <div className="font-mono font-bold text-slate-900 dark:text-white mt-1">
                            {Number(current?.baseRate || 0).toFixed(2)}%
                          </div>
                          <div className="text-[9px] text-slate-500 mt-1">
                            Market input · not negotiated
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <DealSlider
                          label="Credit spread"
                          insightKey="Coupon"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={Math.max(0.5, modelSpread - 2)}
                          max={modelSpread + 4}
                          step={0.25}
                          value={currentSpread}
                          onCommit={(value) =>
                            updateDraftNegotiationTerm(
                              'cashRateAdjustment',
                              value - modelSpread
                            )
                          }
                          suffix="%"
                          baseline={openingSpread}
                          counter={
                            lenderResponse?.terms
                              ? modelSpread +
                                Number(
                                  lenderResponse.terms.cashRateAdjustment || 0
                                )
                              : undefined
                          }
                        />
                        <div className="flex justify-between mt-2 text-[10px]">
                          <span className="text-slate-500">
                            Reference rate + spread
                          </span>
                          <span className="font-mono font-bold text-indigo-600">
                            Cash coupon {currentCashCoupon.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
                    <div>
                      <TermHeading>Pricing and return</TermHeading>
                      <DealSlider
                        label="OID"
                        insightKey="OID"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={90}
                        max={100}
                        step={0.5}
                        value={Number(currentTerms.oid || 98)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('oid', value)
                        }
                        suffix="%"
                        baseline={Number(baseTerm('oid') || 98)}
                        counter={lenderResponse?.terms?.oid}
                      />
                      <DealSlider
                        label="Upfront fee"
                        insightKey="UpfrontFee"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={0}
                        max={5}
                        step={0.25}
                        value={Number(currentTerms.upfrontFee || 0)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('upfrontFee', value)
                        }
                        suffix="%"
                        baseline={Number(baseTerm('upfrontFee') || 0)}
                        counter={lenderResponse?.terms?.upfrontFee}
                      />
                      {hybrid && (
                        <DealSlider
                          label="PIK coupon"
                          insightKey="PIKPremium"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={0}
                          max={10}
                          step={0.5}
                          value={Number(currentTerms.pikPremium || 0)}
                          onCommit={(value) =>
                            updateDraftNegotiationTerm('pikPremium', value)
                          }
                          suffix="%"
                          baseline={Number(baseTerm('pikPremium') || 0)}
                          counter={lenderResponse?.terms?.pikPremium}
                        />
                      )}{' '}
                      {hybrid && (
                        <DealSlider
                          label="Redemption premium"
                          insightKey="Redemption"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={0}
                          max={10}
                          step={0.5}
                          value={Number(currentTerms.redemptionPremium || 0)}
                          onCommit={(value) =>
                            updateDraftNegotiationTerm(
                              'redemptionPremium',
                              value
                            )
                          }
                          suffix="%"
                          baseline={Number(baseTerm('redemptionPremium') || 0)}
                          counter={lenderResponse?.terms?.redemptionPremium}
                        />
                      )}{' '}
                      {hybrid && (
                        <DealSlider
                          label="Equity kicker"
                          insightKey="WarrantKicker"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={0}
                          max={15}
                          step={1}
                          value={Number(currentTerms.equityKicker || 0)}
                          onCommit={(value) =>
                            updateDraftNegotiationTerm('equityKicker', value)
                          }
                          suffix="%"
                          baseline={Number(baseTerm('equityKicker') || 0)}
                          counter={lenderResponse?.terms?.equityKicker}
                        />
                      )}{' '}
                      {convertible && (
                        <DealSlider
                          label="Conversion valuation"
                          insightKey="WarrantKicker"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={Math.max(
                            50,
                            Number(metrics?.enterpriseValue || 100) * 0.5
                          )}
                          max={Math.max(
                            100,
                            Number(metrics?.enterpriseValue || 100) * 2
                          )}
                          step={5}
                          value={Number(
                            currentTerms.conversionValuation ||
                              metrics?.enterpriseValue ||
                              0
                          )}
                          onCommit={(value) =>
                            updateDraftNegotiationTerm(
                              'conversionValuation',
                              value
                            )
                          }
                          suffix={currency === 'USD' ? 'M' : ' Cr'}
                          baseline={Number(
                            baseTerm('conversionValuation') ||
                              metrics?.enterpriseValue ||
                              0
                          )}
                          counter={lenderResponse?.terms?.conversionValuation}
                        />
                      )}
                    </div>
                    <div>
                      <TermHeading>Maturity and repayment</TermHeading>
                      <DealSlider
                        label="Tenor"
                        insightKey="Tenor"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={1}
                        max={10}
                        step={1}
                        value={Number(currentTerms.tenor || 5)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('tenor', value)
                        }
                        suffix=" yrs"
                        baseline={Number(baseTerm('tenor') || 5)}
                        counter={lenderResponse?.terms?.tenor}
                      />
                      <DealSlider
                        label="Mandatory cash sweep"
                        insightKey="CashSweep"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={0}
                        max={100}
                        step={5}
                        value={Number(currentTerms.cashSweep || 0)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('cashSweep', value)
                        }
                        suffix="%"
                        baseline={Number(baseTerm('cashSweep') || 0)}
                        counter={lenderResponse?.terms?.cashSweep}
                      />
                      <div className="space-y-4 mt-4">
                        {[
                          [
                            'Repayment profile',
                            'amortization',
                            [
                              'Bullet (100% at Maturity)',
                              '1% Standard',
                              'Straight Line',
                              'Balloon (50/50)',
                              'Step-Up',
                            ],
                          ],
                          [
                            'Call protection',
                            'callProtection',
                            [
                              'Make-Whole (Hard Call)',
                              '103 / 102 / 101 (Soft Call)',
                              '101 (1-Yr Soft Call)',
                              'None (Callable Anytime)',
                            ],
                          ],
                        ].map(([label, key, options]) => (
                          <div key={key}>
                            <LabelWithCoach
                              label={label}
                              insightKey={
                                key === 'amortization'
                                  ? 'Amortization'
                                  : 'CallProtection'
                              }
                              onOpenInsight={openInsight}
                              colorClass="text-xs text-slate-600 dark:text-slate-300"
                            />
                            <select
                              value={currentTerms[key]}
                              onChange={(event) =>
                                updateDraftNegotiationTerm(
                                  key,
                                  event.target.value
                                )
                              }
                              className="mt-2 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                            >
                              {options.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <TermHeading>Lender protection</TermHeading>
                    <div className="grid md:grid-cols-2 gap-x-10">
                      <DealSlider
                        label="Maximum leverage covenant"
                        insightKey="MaxLev"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={2}
                        max={8}
                        step={0.25}
                        value={Number(currentTerms.maxLeverageCov || 4.5)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('maxLeverageCov', value)
                        }
                        suffix="x"
                        baseline={Number(baseTerm('maxLeverageCov') || 4.5)}
                        counter={lenderResponse?.terms?.maxLeverageCov}
                      />
                      <DealSlider
                        label={
                          decisionModel?.isScoped
                            ? 'Minimum DSCR covenant'
                            : 'Minimum interest cover covenant'
                        }
                        insightKey="ICR"
                        onOpenInsight={openInsight}
                        onAutoInsight={handleAutoInsight}
                        min={1}
                        max={4}
                        step={0.25}
                        value={Number(currentTerms.minIcrCov || 1)}
                        onCommit={(value) =>
                          updateDraftNegotiationTerm('minIcrCov', value)
                        }
                        suffix="x"
                        baseline={Number(baseTerm('minIcrCov') || 1)}
                        counter={lenderResponse?.terms?.minIcrCov}
                      />
                    </div>
                    {hasReserve && (
                      <div className="mt-4 max-w-md">
                        <LabelWithCoach
                          label="Debt service reserve"
                          insightKey="DSRA"
                          onOpenInsight={openInsight}
                          colorClass="text-xs text-slate-600 dark:text-slate-300"
                        />
                        <select
                          value={currentTerms.dsra}
                          onChange={(event) =>
                            updateDraftNegotiationTerm(
                              'dsra',
                              event.target.value
                            )
                          }
                          className="mt-2 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                        >
                          {[
                            'None',
                            '1-Quarter Reserve',
                            '2-Quarters Reserve',
                          ].map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  {Number(currentTerms.secondaryAmount || 0) > 0 && (
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                      <TermHeading>Facility composition</TermHeading>
                      <div className="grid md:grid-cols-[1fr_240px] gap-6 items-start">
                        <DealSlider
                          label={`${baseline.primaryLabel} allocation`}
                          insightKey="CapitalAllocation"
                          onOpenInsight={openInsight}
                          onAutoInsight={handleAutoInsight}
                          min={Math.max(1, Math.round(totalFacility * 0.2))}
                          max={Math.max(2, Math.round(totalFacility - 1))}
                          step={1}
                          value={Number(currentTerms.primaryAmount || 0)}
                          onCommit={(value) =>
                            updateDraftNegotiationTerms({
                              primaryAmount: value,
                              secondaryAmount: Math.max(
                                0,
                                totalFacility - value
                              ),
                            })
                          }
                          suffix={currency === 'USD' ? 'M' : ' Cr'}
                          baseline={Number(baseTerm('primaryAmount') || 0)}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            [
                              baseline.primaryLabel,
                              currentTerms.primaryAmount,
                              current.primaryRate,
                            ],
                            [
                              baseline.secondaryLabel,
                              currentTerms.secondaryAmount,
                              current.secondaryRate,
                            ],
                          ].map(([label, amount, rate]) => (
                            <div
                              key={label}
                              className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3"
                            >
                              <div className="text-[8px] uppercase tracking-widest text-slate-400">
                                {label}
                              </div>
                              <div className="font-mono text-xs font-bold mt-2">
                                {formatCurrency(amount)}
                              </div>
                              <div className="text-[9px] text-slate-500 mt-1">
                                {Number(rate || 0).toFixed(2)}%
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-6 md:px-8 py-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      {pendingKeys.length
                        ? `${pendingKeys.length} unsent term${
                            pendingKeys.length === 1 ? '' : 's'
                          } in the current draft`
                        : 'Draft matches the accepted position'}
                    </div>
                    <div className="text-[9px] text-slate-400 mt-1">
                      Only submission creates a formal negotiation round.
                    </div>
                  </div>
                  <button
                    disabled={!pendingKeys.length}
                    onClick={submitBorrowerProposal}
                    className={`px-6 py-3 rounded-xl font-bold text-sm ${
                      pendingKeys.length
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Submit borrower proposal
                  </button>
                </div>
              </section>

              <aside className="xl:col-span-4 space-y-5 xl:sticky xl:top-48">
                <section className="rounded-3xl bg-indigo-50 dark:bg-indigo-900/15 border border-indigo-200 dark:border-indigo-800/50 p-6">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
                    <Icons.Lightbulb size={18} />
                    <div className="text-[9px] uppercase tracking-widest font-bold">
                      Deal Coach · Live term impact
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4">
                    {liveImpact.title}
                  </h3>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 p-4">
                      <div className="text-[8px] uppercase tracking-widest font-bold text-emerald-600">
                        Borrower effect
                      </div>
                      <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-2">
                        {liveImpact.borrower}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 p-4">
                      <div className="text-[8px] uppercase tracking-widest font-bold text-indigo-600">
                        Lender effect
                      </div>
                      <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-2">
                        {liveImpact.lender}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/70 dark:bg-slate-950/20 p-4">
                      <div className="text-[8px] uppercase tracking-widest font-bold text-amber-600">
                        Likely give / get
                      </div>
                      <p className="text-xs leading-5 text-slate-700 dark:text-slate-300 mt-2">
                        {liveImpact.trade}
                      </p>
                    </div>
                  </div>
                </section>
                <section className="rounded-3xl bg-slate-950 text-white border border-slate-800 overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex justify-between gap-3">
                      <div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                          Investment committee
                        </div>
                        <h3 className="text-lg font-bold mt-2">
                          Formal response
                        </h3>
                      </div>
                      <span
                        className={`h-fit text-[9px] font-bold px-2 py-1 rounded ${
                          responseStatus === 'REJECT'
                            ? 'bg-rose-400/15 text-rose-300'
                            : responseStatus === 'COUNTER'
                            ? 'bg-amber-400/15 text-amber-300'
                            : responseStatus === 'ACCEPT' ||
                              responseStatus === 'ACCEPTED'
                            ? 'bg-emerald-400/15 text-emerald-300'
                            : 'bg-white/10 text-slate-300'
                        }`}
                      >
                        {responseStatus}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-slate-300 mt-5">
                      {lenderResponse?.reason ||
                        'Submit the complete borrower proposal to receive the committee’s acceptance, counterproposal or rejection.'}
                    </p>
                  </div>
                  {lenderResponse && (
                    <div className="p-6 space-y-3">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <div className="text-[8px] uppercase tracking-widest font-bold text-indigo-300">
                          Borrower asks
                        </div>
                        <div className="text-xs text-slate-200 mt-2">
                          {lenderResponse.borrowerAsk}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-emerald-400/10 border border-emerald-400/20 p-3">
                          <div className="text-[8px] uppercase tracking-widest font-bold text-emerald-300">
                            Committee gives
                          </div>
                          <div className="text-[10px] leading-4 text-emerald-100 mt-2">
                            {lenderResponse.lenderGive}
                          </div>
                        </div>
                        <div className="rounded-xl bg-amber-400/10 border border-amber-400/20 p-3">
                          <div className="text-[8px] uppercase tracking-widest font-bold text-amber-300">
                            Committee gets
                          </div>
                          <div className="text-[10px] leading-4 text-amber-100 mt-2">
                            {lenderResponse.lenderGet}
                          </div>
                        </div>
                      </div>
                      {responseStatus === 'COUNTER' && (
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                          <div className="text-[8px] uppercase tracking-widest font-bold text-amber-300">
                            Counterproposal
                          </div>
                          <div className="mt-3 space-y-2">
                            {counterChanges.map((key) => (
                              <div
                                key={key}
                                className="flex justify-between gap-3 text-[10px]"
                              >
                                <span className="text-slate-400">
                                  {termLabels[key]}
                                </span>
                                <span className="font-mono font-bold text-white">
                                  {formatTerm(key, lenderResponse.terms[key])}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {responseStatus === 'COUNTER' && (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={acceptLenderCounter}
                            className="px-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold"
                          >
                            Accept counter
                          </button>
                          <button
                            onClick={rejectLenderCounter}
                            className="px-3 py-3 rounded-xl border border-white/20 hover:bg-white/5 text-xs font-bold"
                          >
                            Reject / restore
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              </aside>
            </div>

            <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Live transaction impact
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  How the current draft affects {activeCase?.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Every chart below recalculates with the draft terms. These are
                  consequences, not an assessment of whether you made the right
                  choice.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <DealEconomicsPanel data={current} />
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Negotiation record
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Only submitted packages and formal decisions are recorded.
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  {negotiationHistory.length} rounds
                </span>
              </div>
              {!negotiationHistory.length ? (
                <div className="p-8 text-center text-sm text-slate-400">
                  No proposal has been submitted.
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {negotiationHistory
                    .slice()
                    .reverse()
                    .map((entry, index) => (
                      <div
                        key={`${entry.time}-${index}`}
                        className="p-4 md:px-6 grid md:grid-cols-12 gap-3"
                      >
                        <div className="md:col-span-2">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                            Round {negotiationHistory.length - index}
                          </div>
                          <div className="text-[10px] mt-1">{entry.time}</div>
                        </div>
                        <div className="md:col-span-3">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                            Borrower
                          </div>
                          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                            {entry.label}
                          </div>
                        </div>
                        <div className="md:col-span-5">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                            Committee response
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            {entry.reason}
                          </div>
                        </div>
                        <div className="md:col-span-2 md:text-right">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">
                            {entry.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>
            <div className="flex justify-end">
              <button
                disabled={
                  !(
                    responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                  )
                }
                onClick={() => goStage('stress')}
                className={`px-7 py-4 rounded-xl font-bold flex items-center gap-2 ${
                  responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                {responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                  ? isSpecialSituation
                    ? 'Test the recovery plan'
                    : 'Stress-test the agreed package'
                  : 'Reach an agreement to continue'}{' '}
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );
    }

    if (workspaceStage === 'simulate') {
      if (!isEducation && !decisionModel?.canSimulate)
        return (
          <WorkspaceShell>
            <div className="rounded-3xl border border-rose-200 dark:border-rose-800/50 bg-rose-50 dark:bg-rose-900/10 p-8 text-center">
              <Icons.AlertTriangle
                size={34}
                className="mx-auto text-rose-500"
              />
              <h2 className="text-2xl font-bold text-rose-800 dark:text-rose-200 mt-4">
                Negotiation is not available yet
              </h2>
              <p className="text-sm text-rose-700 dark:text-rose-300 mt-2 max-w-2xl mx-auto">
                A real-deal negotiation should not begin while the structure
                fails the preliminary screen or lacks critical information.
                Return to Structure to test a workable financing path.
              </p>
              <button
                onClick={() => goStage('structure')}
                className="mt-6 px-6 py-3 rounded-xl bg-rose-600 text-white font-bold"
              >
                Return to Structure
              </button>
            </div>
          </WorkspaceShell>
        );
      const responseStatus = lenderResponse?.status || 'DRAFT';
      const currentTerms =
        draftNegotiationTerms || liveNegotiationTerms || baselineTerms || {};
      const changedKeys = Object.keys(termLabels).filter(proposalChanged);
      const acceptedTerms = acceptedNegotiationTerms || baselineTerms || {};
      const pendingKeys = Object.keys(termLabels).filter((key) => {
        const a = acceptedTerms[key],
          b = currentTerms[key];
        return typeof a === 'number' && typeof b === 'number'
          ? Math.abs(a - b) > 0.0001
          : String(a) !== String(b);
      });
      return (
        <WorkspaceShell>
          <div className="space-y-7">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                Negotiation simulator
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                Test the package from both sides
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Draft changes first. Submit once you want the lender engine to
                respond and create a formal round.
              </p>
            </div>
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-3">
              <div className="grid grid-cols-4 gap-2">
                {[
                  ['Baseline', 'Opening position', true],
                  [
                    'Borrower proposal',
                    pendingKeys.length
                      ? 'Drafting'
                      : negotiationHistory.length
                      ? 'Submitted'
                      : 'Not started',
                    pendingKeys.length > 0 || negotiationHistory.length > 0,
                  ],
                  [
                    'Lender counter',
                    responseStatus === 'COUNTER'
                      ? 'Received'
                      : responseStatus === 'REJECT'
                      ? 'Declined'
                      : 'Pending',
                    responseStatus === 'COUNTER' || responseStatus === 'REJECT',
                  ],
                  [
                    'Agreed',
                    responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                      ? 'Simulated agreement'
                      : 'Not agreed',
                    responseStatus === 'ACCEPT' ||
                      responseStatus === 'ACCEPTED',
                  ],
                ].map(([label, detail, active], i) => (
                  <div
                    key={label}
                    className={`rounded-xl px-3 py-3 border ${
                      active
                        ? 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20'
                        : 'border-transparent bg-slate-50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div
                      className={`text-[8px] font-bold uppercase tracking-widest ${
                        active
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {i + 1}. {label}
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1 hidden sm:block">
                      {detail}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-5 md:p-7 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-300">
                    Current Deal Package
                  </div>
                  <h3 className="text-2xl font-bold mt-2">
                    {baseline.dynamicTitle || baseline.type}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    The one live package used by the borrower, lender and
                    transaction-impact calculations.
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-[8px] uppercase tracking-widest text-slate-500">
                    Negotiation status
                  </div>
                  <div
                    className={`mt-2 inline-flex px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold ${
                      responseStatus === 'REJECT'
                        ? 'bg-rose-400/15 text-rose-300'
                        : responseStatus === 'COUNTER'
                        ? 'bg-amber-400/15 text-amber-300'
                        : responseStatus === 'ACCEPT' ||
                          responseStatus === 'ACCEPTED'
                        ? 'bg-emerald-400/15 text-emerald-300'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {responseStatus === 'DRAFT'
                      ? 'Opening / draft'
                      : responseStatus}
                  </div>
                </div>
              </div>
              <div className="[&>div>div>div]:bg-white/5 [&>div>div>div]:border-white/10 [&>div>div>div_div]:text-white">
                <DealEconomicsPanel data={current} compact />
              </div>
            </section>
            {isEducation && (
              <section className="rounded-2xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/60 dark:bg-indigo-900/10 p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-72 shrink-0">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Headline pricing
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mt-1">
                      Negotiate the cash margin
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-2">
                      The opening package includes a lender-favourable margin
                      premium. Moving it changes cash service and lender return.
                    </p>
                  </div>
                  <div className="flex-1">
                    <DealSlider
                      label="Cash margin adjustment"
                      insightKey="Coupon"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={-4}
                      max={4}
                      step={0.25}
                      value={Number(currentTerms.cashRateAdjustment || 0)}
                      onCommit={(v) =>
                        updateDraftNegotiationTerm('cashRateAdjustment', v)
                      }
                      suffix="%"
                      baseline={Number(baseTerm('cashRateAdjustment') || 0)}
                      counter={lenderResponse?.terms?.cashRateAdjustment}
                    />
                  </div>
                </div>
              </section>
            )}
            <div className="grid xl:grid-cols-12 gap-6 items-start">
              {Number(currentTerms.secondaryAmount || 0) > 0 && (
                <section className="xl:col-span-12 rounded-2xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/60 dark:bg-indigo-900/10 p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                        Tranche-level negotiation
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white mt-1">
                        Rebalance the facility components
                      </h3>
                      <p className="text-[10px] text-slate-500 mt-1">
                        The total commitment stays fixed while the primary and
                        secondary components move together.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 min-w-[260px]">
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-800 p-3">
                        <div className="text-[8px] uppercase tracking-widest text-slate-400">
                          {baseline.primaryLabel}
                        </div>
                        <div className="font-mono text-xs font-bold mt-1">
                          {formatCurrency(currentTerms.primaryAmount)}
                        </div>
                        <div className="text-[8px] text-slate-400 mt-1">
                          {Number(current.primaryRate || 0).toFixed(2)}% cash
                          rate
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-800 p-3">
                        <div className="text-[8px] uppercase tracking-widest text-slate-400">
                          {baseline.secondaryLabel}
                        </div>
                        <div className="font-mono text-xs font-bold mt-1">
                          {formatCurrency(currentTerms.secondaryAmount)}
                        </div>
                        <div className="text-[8px] text-slate-400 mt-1">
                          {Number(current.secondaryRate || 0).toFixed(2)}% cash
                          rate
                        </div>
                      </div>
                    </div>
                  </div>
                  <DealSlider
                    label={`${baseline.primaryLabel} allocation`}
                    insightKey="CapitalAllocation"
                    onOpenInsight={openInsight}
                    onAutoInsight={handleAutoInsight}
                    min={Math.max(1, Math.round(totalFacility * 0.2))}
                    max={Math.max(2, Math.round(totalFacility - 1))}
                    step={1}
                    value={Number(currentTerms.primaryAmount || 0)}
                    onCommit={(v) =>
                      updateDraftNegotiationTerms({
                        primaryAmount: v,
                        secondaryAmount: Math.max(0, totalFacility - v),
                      })
                    }
                    suffix={currency === 'USD' ? 'M' : ' Cr'}
                    baseline={Number(baseTerm('primaryAmount') || 0)}
                  />
                </section>
              )}
              <section className="xl:col-span-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
                <div className="px-5 md:px-7 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between gap-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Borrower proposal
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mt-1">
                      {baseline.dynamicTitle || baseline.type}
                    </h3>
                  </div>
                  <button
                    onClick={rejectLenderCounter}
                    className="text-[10px] font-bold text-slate-500 hover:text-indigo-600"
                  >
                    Restore accepted position
                  </button>
                </div>
                <div className="p-5 md:p-7 grid md:grid-cols-2 gap-x-10">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-2">
                      Pricing and return
                    </div>
                    <DealSlider
                      label="Tenor"
                      insightKey="Tenor"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={1}
                      max={10}
                      step={1}
                      value={Number(currentTerms.tenor || 5)}
                      onCommit={(v) => updateDraftNegotiationTerm('tenor', v)}
                      suffix=" yrs"
                      baseline={Number(baseTerm('tenor') || 5)}
                      counter={lenderResponse?.terms?.tenor}
                    />
                    <DealSlider
                      label="OID"
                      insightKey="OID"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={90}
                      max={100}
                      step={0.5}
                      value={Number(currentTerms.oid || 98)}
                      onCommit={(v) => updateDraftNegotiationTerm('oid', v)}
                      suffix="%"
                      baseline={Number(baseTerm('oid') || 98)}
                      counter={lenderResponse?.terms?.oid}
                    />
                    <DealSlider
                      label="Upfront fee"
                      insightKey="UpfrontFee"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={0}
                      max={5}
                      step={0.25}
                      value={Number(currentTerms.upfrontFee || 0)}
                      onCommit={(v) =>
                        updateDraftNegotiationTerm('upfrontFee', v)
                      }
                      suffix="%"
                      baseline={Number(baseTerm('upfrontFee') || 0)}
                      counter={lenderResponse?.terms?.upfrontFee}
                    />
                    <DealSlider
                      label="PIK"
                      insightKey="PIKPremium"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={0}
                      max={10}
                      step={0.5}
                      value={Number(currentTerms.pikPremium || 0)}
                      onCommit={(v) =>
                        updateDraftNegotiationTerm('pikPremium', v)
                      }
                      suffix="%"
                      baseline={Number(baseTerm('pikPremium') || 0)}
                      counter={lenderResponse?.terms?.pikPremium}
                    />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-2">
                      Repayment and protection
                    </div>
                    <DealSlider
                      label="Cash sweep"
                      insightKey="CashSweep"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={0}
                      max={100}
                      step={5}
                      value={Number(currentTerms.cashSweep || 0)}
                      onCommit={(v) =>
                        updateDraftNegotiationTerm('cashSweep', v)
                      }
                      suffix="%"
                      baseline={Number(baseTerm('cashSweep') || 0)}
                      counter={lenderResponse?.terms?.cashSweep}
                    />
                    <DealSlider
                      label={
                        decisionModel?.isScoped
                          ? 'Minimum DSCR'
                          : 'Minimum interest cover'
                      }
                      insightKey="ICR"
                      onOpenInsight={openInsight}
                      onAutoInsight={handleAutoInsight}
                      min={1}
                      max={4}
                      step={0.25}
                      value={Number(currentTerms.minIcrCov || 1)}
                      onCommit={(v) =>
                        updateDraftNegotiationTerm('minIcrCov', v)
                      }
                      suffix="x"
                      baseline={Number(baseTerm('minIcrCov') || 1)}
                      counter={lenderResponse?.terms?.minIcrCov}
                    />
                    <div className="space-y-4 mt-4">
                      {[
                        [
                          'Repayment profile',
                          'amortization',
                          [
                            'Bullet (100% at Maturity)',
                            '1% Standard',
                            'Straight Line',
                            'Balloon (50/50)',
                            'Step-Up',
                          ],
                        ],
                        [
                          'Reserve account',
                          'dsra',
                          ['None', '1-Quarter Reserve', '2-Quarters Reserve'],
                        ],
                        [
                          'Call protection',
                          'callProtection',
                          [
                            'Make-Whole (Hard Call)',
                            '103 / 102 / 101 (Soft Call)',
                            '101 (1-Yr Soft Call)',
                            'None (Callable Anytime)',
                          ],
                        ],
                      ].map(([label, key, opts]) => (
                        <div key={key}>
                          <LabelWithCoach
                            label={label}
                            insightKey={
                              key === 'amortization'
                                ? 'Amortization'
                                : key === 'dsra'
                                ? 'DSRA'
                                : 'CallProtection'
                            }
                            onOpenInsight={openInsight}
                            colorClass="text-xs text-slate-600 dark:text-slate-300"
                          />
                          <select
                            value={currentTerms[key]}
                            onChange={(e) =>
                              updateDraftNegotiationTerm(key, e.target.value)
                            }
                            className="mt-2 w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                          >
                            {opts.map((x) => (
                              <option key={x}>{x}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-5 md:px-7 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-slate-500">
                      {pendingKeys.length
                        ? `${pendingKeys.length} unsent term${
                            pendingKeys.length === 1 ? '' : 's'
                          } in this draft`
                        : 'Draft matches the accepted position'}
                    </div>
                    {changedKeys.length > 0 && (
                      <div className="text-[9px] text-slate-400 mt-1">
                        {changedKeys.length} term
                        {changedKeys.length === 1 ? '' : 's'} differ from the
                        opening position
                      </div>
                    )}
                  </div>
                  <button
                    disabled={!pendingKeys.length}
                    onClick={submitBorrowerProposal}
                    className={`px-6 py-3 rounded-xl font-bold text-sm ${
                      pendingKeys.length
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Submit borrower proposal
                  </button>
                </div>
              </section>
              <aside className="xl:col-span-4 space-y-4">
                <div className="rounded-2xl bg-slate-950 text-white border border-slate-800 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                      Investment committee
                    </div>
                    <span
                      className={`text-[9px] font-bold px-2 py-1 rounded ${
                        responseStatus === 'REJECT'
                          ? 'bg-rose-400/15 text-rose-300'
                          : responseStatus === 'COUNTER'
                          ? 'bg-amber-400/15 text-amber-300'
                          : responseStatus === 'ACCEPT' ||
                            responseStatus === 'ACCEPTED'
                          ? 'bg-emerald-400/15 text-emerald-300'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {responseStatus}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200 mt-5">
                    {lenderResponse?.reason ||
                      'Submit a complete borrower proposal to receive a committee decision and its give/get rationale.'}
                  </p>
                  {lenderResponse && (
                    <div className="mt-5 space-y-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[8px] uppercase tracking-widest text-indigo-300 font-bold">
                          Borrower asks
                        </div>
                        <div className="text-[11px] text-slate-200 mt-1.5">
                          {lenderResponse.borrowerAsk}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
                          <div className="text-[8px] uppercase tracking-widest text-emerald-300 font-bold">
                            Committee gives
                          </div>
                          <div className="text-[10px] text-emerald-100 mt-1.5">
                            {lenderResponse.lenderGive}
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20">
                          <div className="text-[8px] uppercase tracking-widest text-amber-300 font-bold">
                            Committee gets
                          </div>
                          <div className="text-[10px] text-amber-100 mt-1.5">
                            {lenderResponse.lenderGet}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {lenderResponse?.status === 'COUNTER' && (
                    <div className="grid grid-cols-2 gap-2 mt-5">
                      <button
                        onClick={acceptLenderCounter}
                        className="px-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold"
                      >
                        Accept counter
                      </button>
                      <button
                        onClick={rejectLenderCounter}
                        className="px-3 py-3 rounded-xl border border-white/20 hover:bg-white/5 text-xs font-bold"
                      >
                        Reject / restore
                      </button>
                    </div>
                  )}
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                    Decision tests
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      [
                        'Modelled lender return',
                        `${Number(current.grossIrr || 0).toFixed(2)}%`,
                        Number(current.grossIrr || 0) >= lenderReturnFloor,
                      ],
                      [
                        'Internal debt capacity',
                        currentArchetype === 'NBFC'
                          ? `${Number(
                              current.internalGuardrails?.debtToEquity || 0
                            ).toFixed(2)}x debt/equity`
                          : currentArchetype === 'SAAS'
                          ? `${Number(
                              current.internalGuardrails?.debtToArr || 0
                            ).toFixed(2)}x debt/ARR`
                          : `${Number(current.leverage || 0).toFixed(2)}x`,
                        !current.isLeverageBreached,
                      ],
                      [
                        coverageLabel,
                        `${Number(coverage || 0).toFixed(2)}x`,
                        !current.isIcrBreached,
                      ],
                      [
                        'Liquidity',
                        formatCurrency(current.waterfall?.preSweep || 0),
                        !current.isLiquidityBreached,
                      ],
                      [
                        'Indicative covenants',
                        current.isCovenantBreached
                          ? 'Outside proposed terms'
                          : 'Compliant',
                        !current.isCovenantBreached,
                      ],
                    ].map(([l, v, pass]) => (
                      <div
                        key={l}
                        className="flex justify-between items-center gap-3 text-xs"
                      >
                        <span className="text-slate-500">{l}</span>
                        <span
                          className={`font-mono font-bold text-right ${
                            pass ? 'text-emerald-600' : 'text-rose-500'
                          }`}
                        >
                          {v} {pass ? '✓' : '!'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-slate-400 mt-4 leading-relaxed">
                    Internal capacity tests do not change when a borrower
                    negotiates the covenant wording.
                  </p>
                </div>
              </aside>
            </div>
            {isEducation && (
              <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Borrower priorities
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                      What the current package protects
                    </h3>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {negotiationHistory.length
                      ? `${negotiationHistory.length} formal round${
                          negotiationHistory.length === 1 ? '' : 's'
                        }`
                      : 'Opening position'}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-5">
                  {borrowerPriorityResults.map((result) => (
                    <div
                      key={result.label}
                      className={`rounded-xl border p-4 ${
                        result.score === 2
                          ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800/40'
                          : result.score === 1
                          ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/10 dark:border-amber-800/40'
                          : 'bg-rose-50 border-rose-200 dark:bg-rose-900/10 dark:border-rose-800/40'
                      }`}
                    >
                      <div className="text-[10px] leading-relaxed text-slate-700 dark:text-slate-200">
                        {result.label}
                      </div>
                      <div
                        className={`text-[9px] uppercase tracking-wider font-bold mt-3 ${
                          result.score === 2
                            ? 'text-emerald-600'
                            : result.score === 1
                            ? 'text-amber-600'
                            : 'text-rose-500'
                        }`}
                      >
                        {result.status}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
              <button
                onClick={() => setShowFullEconomics(!showFullEconomics)}
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Full transaction impact
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-1">
                    The same economics used in Structure, recalculated using the
                    current proposal.
                  </p>
                </div>
                <span className="text-xs font-bold text-indigo-600">
                  {showFullEconomics ? 'Hide' : 'View'} details
                </span>
              </button>
              {showFullEconomics && (
                <div className="p-5 md:p-7 border-t border-slate-200 dark:border-slate-800">
                  <DealEconomicsPanel data={current} />
                </div>
              )}
            </section>
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Negotiation record
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Only submitted packages and decisions are recorded.
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  {negotiationHistory.length} rounds
                </span>
              </div>
              {!negotiationHistory.length ? (
                <div className="p-8 text-center text-sm text-slate-400">
                  No proposal has been submitted.
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {negotiationHistory
                    .slice()
                    .reverse()
                    .map((entry, i) => (
                      <div
                        key={`${entry.time}-${i}`}
                        className="p-4 md:px-6 grid md:grid-cols-12 gap-3"
                      >
                        <div className="md:col-span-2">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                            Round {negotiationHistory.length - i}
                          </div>
                          <div className="text-[10px] mt-1">{entry.time}</div>
                        </div>
                        <div className="md:col-span-3">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                            Borrower
                          </div>
                          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-1">
                            {entry.label}
                          </div>
                        </div>
                        <div className="md:col-span-5">
                          <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                            Response
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                            {entry.reason}
                          </div>
                        </div>
                        <div className="md:col-span-2 md:text-right">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-slate-500">
                            {entry.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </section>
            <div className="flex justify-end">
              {isEducation ? (
                <button
                  disabled={
                    !(
                      responseStatus === 'ACCEPT' ||
                      responseStatus === 'ACCEPTED'
                    )
                  }
                  onClick={() => goStage('stress')}
                  className={`px-7 py-4 rounded-xl font-bold flex items-center gap-2 ${
                    responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {responseStatus === 'ACCEPT' || responseStatus === 'ACCEPTED'
                    ? isSpecialSituation
                      ? 'Test the recovery plan'
                      : 'Stress-test the agreed package'
                    : 'Reach an agreement to continue'}{' '}
                  <Icons.ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => goStage('prepare')}
                  className="px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2"
                >
                  Prepare transaction plan <Icons.ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </WorkspaceShell>
      );
    }

    if (workspaceStage === 'stress' && isEducation) {
      const scenarios = activeCase?.stressScenarios || [];
      const scenario =
        scenarios.find((item) => item.id === selectedStressScenario) || null;
      const baseCash = Number(metrics?.debtServiceCash || 0);
      const debtService = Math.max(
        1,
        Number(current?.waterfall?.interest || 0) +
          Number(current?.waterfall?.principal || 0)
      );
      const stressedCash = scenario
        ? Math.max(
            0,
            baseCash * (1 - Number(scenario.cashFlowDecline || 0) / 100)
          )
        : baseCash;
      const stressedCoverage = stressedCash / debtService;
      const stressedLiquidity =
        Number(current?.waterfall?.retained || 0) -
        Number(scenario?.liquidityHit || 0);
      const covenantFloor = Number(
        (
          draftNegotiationTerms ||
          acceptedNegotiationTerms ||
          baselineTerms ||
          {}
        ).minIcrCov || 1
      );
      const resilience = !scenario
        ? null
        : stressedCoverage >= covenantFloor + 0.2 && stressedLiquidity >= 0
        ? {
            label: 'Resilient',
            tone: 'emerald',
            message:
              'The package remains inside the negotiated protection envelope.',
          }
        : stressedCoverage >= 1 &&
          stressedLiquidity >= -Number(targetDebt) * 0.05
        ? {
            label: 'Under pressure',
            tone: 'amber',
            message:
              'The deal remains serviceable, but liquidity or covenant headroom requires active management.',
          }
        : {
            label: 'Breaks under stress',
            tone: 'rose',
            message:
              'The selected package does not absorb this event without a waiver, liquidity action or restructuring.',
          };
      const resilienceClasses =
        resilience?.tone === 'emerald'
          ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/15 dark:border-emerald-800/40 dark:text-emerald-200'
          : resilience?.tone === 'amber'
          ? 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/15 dark:border-amber-800/40 dark:text-amber-200'
          : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-900/15 dark:border-rose-800/40 dark:text-rose-200';
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                {isSpecialSituation ? 'Recovery test' : 'Package resilience'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
                What happens when the plan changes?
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-3xl">
                Apply a case-specific event to the agreed package. The purpose
                is not to predict the future—it is to find where the structure
                becomes fragile.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {scenarios.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedStressScenario(item.id)}
                  className={`text-left rounded-2xl border p-5 transition-all ${
                    selectedStressScenario === item.id
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/15 shadow-lg'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex justify-between gap-3">
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    {selectedStressScenario === item.id && (
                      <Icons.CheckCircle
                        size={18}
                        className="text-indigo-500 shrink-0"
                      />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mt-3">
                    {item.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[9px] font-mono text-slate-400">
                    Cash flow −{item.cashFlowDecline}% · Liquidity −
                    {formatCurrency(item.liquidityHit)}
                  </div>
                </button>
              ))}
            </div>
            {!scenario ? (
              <section className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
                <Icons.TrendingDown
                  size={34}
                  className="mx-auto text-slate-300"
                />
                <h3 className="font-bold text-slate-700 dark:text-slate-200 mt-4">
                  Choose an event to test the package
                </h3>
              </section>
            ) : (
              <>
                <section
                  className={`rounded-3xl border p-6 md:p-8 ${resilienceClasses}`}
                >
                  <div className="grid lg:grid-cols-12 gap-7 items-start">
                    <div className="lg:col-span-7">
                      <div className="text-[9px] uppercase tracking-widest font-bold opacity-70">
                        {scenario.title}
                      </div>
                      <h3 className="text-3xl font-bold mt-2">
                        {resilience.label}
                      </h3>
                      <p className="text-sm leading-relaxed mt-3">
                        {resilience.message}
                      </p>
                      <p className="text-xs leading-relaxed mt-4 opacity-80">
                        {scenario.event}
                      </p>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                      {[
                        ['Stressed cash', formatCurrency(stressedCash)],
                        ['Debt service', formatCurrency(debtService)],
                        [
                          'Stressed coverage',
                          `${stressedCoverage.toFixed(2)}x`,
                        ],
                        [
                          'Liquidity after event',
                          formatCurrency(stressedLiquidity),
                        ],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl bg-white/60 dark:bg-slate-950/20 border border-current/10 p-4"
                        >
                          <div className="text-[8px] uppercase tracking-widest opacity-60">
                            {label}
                          </div>
                          <div className="font-mono font-bold mt-2">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                      Package comparison
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                      Closing case versus downside case
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
                    {[
                      [
                        'Cash available',
                        formatCurrency(baseCash),
                        formatCurrency(stressedCash),
                      ],
                      [
                        'Coverage',
                        `${Number(coverage || 0).toFixed(2)}x`,
                        `${stressedCoverage.toFixed(2)}x`,
                      ],
                      [
                        'Retained liquidity',
                        formatCurrency(current?.waterfall?.retained || 0),
                        formatCurrency(stressedLiquidity),
                      ],
                      [
                        'Covenant floor',
                        `${covenantFloor.toFixed(2)}x`,
                        stressedCoverage >= covenantFloor
                          ? 'Inside'
                          : 'Outside',
                      ],
                    ].map(([label, baseValue, stressValue]) => (
                      <div key={label} className="p-6">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                          {label}
                        </div>
                        <div className="mt-4">
                          <div className="text-[9px] text-slate-400">
                            Agreed case
                          </div>
                          <div className="font-mono font-bold text-slate-800 dark:text-white mt-1">
                            {baseValue}
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="text-[9px] text-slate-400">
                            After event
                          </div>
                          <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                            {stressValue}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}
            <div className="flex justify-end">
              <button
                disabled={!scenario}
                onClick={() => goStage('prepare')}
                className={`px-7 py-4 rounded-xl font-bold flex items-center gap-2 ${
                  scenario
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                Open the advisory debrief <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );
    }

    if (workspaceStage === 'prepare' && isEducation) {
      const preferred = rankedStructures[0] || {};
      const chosen = rankedStructures[selectedOptionIndex] || {};
      const agreedTerms =
        acceptedNegotiationTerms || liveNegotiationTerms || baselineTerms || {};
      const changedTerms = Object.keys(termLabels).filter((key) => {
        const from = baselineTerms?.[key],
          to = agreedTerms?.[key];
        return typeof from === 'number' && typeof to === 'number'
          ? Math.abs(from - to) > 0.0001
          : String(from) !== String(to);
      });
      const scenario = (activeCase?.stressScenarios || []).find(
        (item) => item.id === selectedStressScenario
      );
      const stabilisation = (activeCase?.stabilisationOptions || []).find(
        (item) => item.id === selectedStabilisation
      );
      const readiness = [
        [
          'Financial information',
          'Ready',
          'Historical and projected case information is organised for lender review.',
        ],
        [
          'Commercial diligence',
          'Needs work',
          activeCase?.tensions?.[0] ||
            'Validate the central commercial assumption.',
        ],
        [
          'Legal and corporate',
          isSpecialSituation ? 'Critical' : 'Needs work',
          isSpecialSituation
            ? 'Confirm creditor rights, waivers and priority before execution.'
            : 'Confirm authority, consents and transaction perimeter.',
        ],
        [
          'Security package',
          decisionModel?.isScoped ? 'Critical' : 'Needs work',
          decisionModel?.isScoped
            ? 'Complete asset, contract and security diligence.'
            : 'Validate collateral ownership, ranking and release mechanics.',
        ],
        [
          'Management readiness',
          'Ready',
          'The mandate and commercial priorities are clearly defined.',
        ],
        [
          'Documentation',
          'Needs work',
          'Translate negotiated economics into a non-binding heads of terms and diligence plan.',
        ],
      ];
      return (
        <WorkspaceShell>
          <div className="space-y-8">
            <section className="rounded-[32px] bg-slate-950 text-white border border-slate-800 p-7 md:p-10">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-300">
                    Advisory debrief
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mt-3">
                    {activeCase?.title}
                  </h2>
                  <p className="text-base text-slate-300 mt-4">
                    {chosen.dynamicTitle || chosen.type} ·{' '}
                    {formatCurrency(targetDebt)} agreed package
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {structureRationale.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                  {[
                    ['Rounds', negotiationHistory.length],
                    ['Terms moved', changedTerms.length],
                    [
                      'Lender return',
                      `${Number(current.grossIrr || 0).toFixed(2)}%`,
                    ],
                    ['Stress result', scenario?.title || 'Not tested'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/5 border border-white/10 p-4"
                    >
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">
                        {label}
                      </div>
                      <div className="font-mono text-sm font-bold mt-2">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {isSpecialSituation && stabilisation && (
              <section className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-900/10 p-6">
                <div className="text-[9px] uppercase tracking-widest font-bold text-amber-700 dark:text-amber-300">
                  Stabilisation decision
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mt-2">
                  {stabilisation.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {stabilisation.detail}
                </p>
              </section>
            )}

            <div className="grid lg:grid-cols-12 gap-6">
              <section className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Commercial outcome
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  What the package achieves
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {borrowerPriorityResults.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4"
                    >
                      <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {result.label}
                      </div>
                      <div
                        className={`text-[9px] uppercase tracking-wider font-bold mt-3 ${
                          result.score === 2
                            ? 'text-emerald-600'
                            : result.score === 1
                            ? 'text-amber-600'
                            : 'text-rose-500'
                        }`}
                      >
                        {result.status}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t border-slate-200 dark:border-slate-800 grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">
                      Near term
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      The package funds the defined mandate and creates an
                      execution runway. Liquidity, deployment conditions and
                      Year 1 cash service remain the immediate focus.
                    </p>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-600">
                      Long term
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      The final maturity profile, call protection and cash sweep
                      determine refinancing optionality and how much future cash
                      remains available to the business.
                    </p>
                  </div>
                </div>
              </section>
              <section className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Judgment debrief
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                  Your choice and the engine view
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-indigo-50 dark:bg-indigo-900/15 p-4">
                    <div className="text-[8px] uppercase tracking-widest text-indigo-500">
                      You selected
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white mt-2">
                      {chosen.dynamicTitle || chosen.type}
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4">
                    <div className="text-[8px] uppercase tracking-widest text-slate-400">
                      Engine preference
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white mt-2">
                      {preferred.dynamicTitle || preferred.type}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-5">
                  {selectedOptionIndex === 0
                    ? 'Your structure matches the engine’s preferred path. The important question is whether the negotiated protections and downside resilience also support that choice.'
                    : `Your structure differs from the engine preference. That is not automatically wrong: your rationale places greater weight on ${
                        structureRationale.join(' and ').toLowerCase() ||
                        'different commercial priorities'
                      }. The trade-off is the additional risk or cost shown in the package economics.`}
                </p>
                {scenario && (
                  <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[8px] uppercase tracking-widest text-slate-400">
                      Downside examined
                    </div>
                    <div className="text-xs font-bold text-slate-800 dark:text-white mt-2">
                      {scenario.title}
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2">
                      {scenario.event}
                    </p>
                  </div>
                )}
              </section>
            </div>

            <section className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Transaction readiness
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  What must happen before funding
                </h3>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3">
                {readiness.map(([area, status, note], index) => (
                  <div
                    key={area}
                    className={`p-6 border-slate-200 dark:border-slate-800 ${
                      index % 3 !== 2 ? 'xl:border-r' : ''
                    } ${index < 3 ? 'border-b' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-bold text-sm text-slate-800 dark:text-white">
                        {area}
                      </div>
                      <span
                        className={`text-[8px] uppercase tracking-wider font-bold ${
                          status === 'Ready'
                            ? 'text-emerald-600'
                            : status === 'Critical'
                            ? 'text-rose-500'
                            : 'text-amber-600'
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed mt-3">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {executionIntelligence && (
              <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 p-6 md:p-8">
                <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                  Execution roadmap
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  From agreed package to funding
                </h3>
                <div className="grid lg:grid-cols-2 gap-4 mt-7">
                  {executionIntelligence.timeline.map((item, index) => (
                    <div
                      key={item.stage}
                      className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 grid grid-cols-[34px_1fr] gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex justify-between gap-3">
                          <div className="text-sm font-bold text-slate-800 dark:text-white">
                            {item.stage}
                          </div>
                          <div className="text-[9px] font-bold text-indigo-500">
                            {item.timing}
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-6">
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Conditions to resolve
                    </div>
                    <ul className="mt-4 space-y-2">
                      {executionIntelligence.conditions
                        .slice(0, 6)
                        .map((item) => (
                          <li
                            key={item}
                            className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                          >
                            <span className="text-indigo-500">□</span>
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Monitoring after closing
                    </div>
                    <ul className="mt-4 space-y-2">
                      {executionIntelligence.monitoring.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                        >
                          <span className="text-emerald-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}
            <div className="flex flex-col sm:flex-row justify-end gap-3 no-print">
              <button
                onClick={() => goStage('stress')}
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
              >
                Back to stress test
              </button>
              <button
                onClick={handlePrint}
                className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center justify-center gap-2"
              >
                <Icons.Download size={16} />
                Print case debrief
              </button>
            </div>
          </div>
        </WorkspaceShell>
      );
    }

    return (
      <WorkspaceShell>
        <div className="space-y-8">
          <div>
            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
              Advisory and execution preparation
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
              {decisionModel?.statusCode === 'DOES_NOT_PASS'
                ? 'Financeability Improvement Plan'
                : 'Prepare for the financing process'}
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              This stage converts the assessment and selected package into
              actions. It does not imply lender approval or completed diligence.
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-6">
            <section className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6">
              <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-500">
                Advisory summary
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                {decisionModel?.fundingRoute} ·{' '}
                {baseline.dynamicTitle || baseline.type}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                {advisoryData?.investorPerspective}
              </p>
              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-emerald-600">
                    What supports the case
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(advisoryData?.strengths || []).slice(0, 4).map((x) => (
                      <li
                        key={x}
                        className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                      >
                        <span className="text-emerald-500">✓</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest font-bold text-rose-600">
                    What needs resolution
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(advisoryData?.risks || []).slice(0, 4).map((x) => (
                      <li
                        key={x}
                        className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                      >
                        <span className="text-rose-500">!</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="lg:col-span-5 rounded-2xl bg-slate-950 text-white border border-slate-800 p-6">
              <div className="text-[9px] uppercase tracking-widest font-bold text-indigo-300">
                Indicative deal blueprint
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ['Borrowing route', decisionModel?.fundingRoute],
                  ['Structure', baseline.dynamicTitle || baseline.type],
                  ['Facility', formatCurrency(totalFacility)],
                  [
                    'Repayment source',
                    decisionModel?.isScoped
                      ? 'Project / asset CFADS'
                      : 'Operating-company cash flow',
                  ],
                  [
                    'Position',
                    lenderResponse?.status === 'ACCEPTED'
                      ? 'Accepted simulated counter'
                      : negotiationHistory.length
                      ? 'Current simulated proposal'
                      : 'Selected opening position',
                  ],
                ].map(([l, v]) => (
                  <div
                    key={l}
                    className="flex justify-between gap-4 py-2 border-b border-white/10"
                  >
                    <span className="text-[10px] text-slate-500">{l}</span>
                    <span className="text-xs font-semibold text-right">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-[9px] text-slate-400 leading-relaxed">
                Non-binding and illustrative. Final terms remain subject to
                lender review, diligence, approvals and definitive
                documentation.
              </div>
            </section>
          </div>
          {executionIntelligence && (
            <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 p-5 md:p-7">
              <div className="mb-6">
                <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-indigo-500">
                  Execution Intelligence
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  What happens after indicative alignment
                </h3>
                <p className="text-xs text-slate-500 mt-2">
                  A transaction-specific preparation map—not an execution
                  probability.
                </p>
              </div>
              <div className="grid xl:grid-cols-12 gap-6">
                <div className="xl:col-span-7 space-y-3">
                  {executionIntelligence.timeline.map((x, i) => (
                    <div
                      key={x.stage}
                      className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 grid grid-cols-[34px_1fr] gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap justify-between gap-2">
                          <div className="text-sm font-bold text-slate-800 dark:text-white">
                            {x.stage}
                          </div>
                          <div className="text-[9px] font-bold text-indigo-500">
                            {x.timing}
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">
                          {x.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="xl:col-span-5 space-y-4">
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Priority conditions
                    </div>
                    <ul className="mt-3 space-y-2">
                      {executionIntelligence.conditions.slice(0, 7).map((x) => (
                        <li
                          key={x}
                          className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                        >
                          <span className="text-indigo-500">□</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Post-closing monitoring
                    </div>
                    <ul className="mt-3 space-y-2">
                      {executionIntelligence.monitoring.map((x) => (
                        <li
                          key={x}
                          className="text-xs text-slate-600 dark:text-slate-300 flex gap-2"
                        >
                          <span className="text-emerald-500">•</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {executionIntelligence.risks.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400">
                    Execution issues to resolve first
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 mt-3">
                    {executionIntelligence.risks.map((x) => (
                      <div
                        key={x}
                        className="text-xs text-amber-900 dark:text-amber-200 flex gap-2"
                      >
                        <span>!</span>
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
          <div className="flex flex-col sm:flex-row justify-end gap-3 no-print">
            <button
              onClick={() => goStage('simulate')}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200"
            >
              Back to simulation
            </button>
            <button
              onClick={handlePrint}
              className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <Icons.Download size={16} />
              Print preparation report
            </button>
          </div>
        </div>
      </WorkspaceShell>
    );
  };

  const renderLegacyOutputsView = () => {
    const viewMetrics = liveEconomics
      ? { ...metrics, ...liveEconomics, scenarioData: metrics.scenarioData }
      : metrics;
    const viewTotalVisualValue = Math.max(
      viewMetrics?.enterpriseValue || 1,
      viewMetrics?.totalDebt || 1
    );
    const viewVisualEqPct =
      viewMetrics?.enterpriseValue > viewMetrics?.totalDebt
        ? ((viewMetrics?.sponsorEquity || 0) / viewTotalVisualValue) * 100
        : 0;
    return (
      <div className="w-full max-w-[1400px] mx-auto space-y-12 animate-fade-in-up pb-12 relative z-10">
        {assessmentMode === 'sample' && (
          <div className="rounded-2xl border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/10 px-5 py-4 flex items-start gap-3">
            <Icons.BookOpen
              size={20}
              className="text-purple-600 dark:text-purple-300 shrink-0"
            />
            <div>
              <div className="text-xs font-bold text-purple-800 dark:text-purple-200">
                Educational simulation — fictional company
              </div>
              <p className="text-[10px] text-purple-700 dark:text-purple-300 mt-1">
                Use this result to learn how credit capacity, structure and
                negotiated terms interact. It is not an assessment of a real
                borrower or an indication of lender approval.
              </p>
            </div>
          </div>
        )}

        {/* 1. UNDERWRITING COMPLETE */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-40">
          <div className="flex items-center gap-3">
            <Icons.CheckCircle size={24} className="text-emerald-500" />
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">
                {assessmentMode === 'sample'
                  ? 'Sample analysis ready'
                  : 'Preliminary assessment ready'}
              </h2>
              <p className="text-xs text-slate-500">
                Evaluating {currency} {formatCurrency(viewMetrics?.numNewDebt)}{' '}
                facility requirement for{' '}
                <span className="font-bold text-indigo-500">
                  {segment || sector}
                </span>
              </p>
            </div>
          </div>
          <div className="flex w-full sm:w-auto gap-3">
            <button
              onClick={() => setActiveView('inputs')}
              className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors flex-1 sm:flex-auto justify-center cursor-pointer border border-indigo-100 dark:border-indigo-800 shadow-sm"
            >
              <Icons.Edit size={16} /> Edit Facts
            </button>
          </div>
        </div>

        {/* DEAL WORKFLOW */}
        <div className="bg-white dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-800 px-4 md:px-6 py-4 shadow-sm">
          <div className="grid grid-cols-5 gap-1 md:gap-3">
            {[
              ['01', 'Underwrite', 'complete'],
              ['02', 'Structure', 'complete'],
              [
                '03',
                'Negotiate',
                lenderResponse?.status === 'ACCEPT' ||
                lenderResponse?.status === 'ACCEPTED'
                  ? 'complete'
                  : 'active',
              ],
              [
                '04',
                'Agree',
                lenderResponse?.status === 'ACCEPT' ||
                lenderResponse?.status === 'ACCEPTED'
                  ? 'active'
                  : 'upcoming',
              ],
              ['05', 'Advise', 'upcoming'],
            ].map(([number, label, state], index) => (
              <div key={label} className="relative min-w-0">
                {index < 4 && (
                  <div
                    className={`absolute left-[55%] right-[-45%] top-3 h-px ${
                      state === 'complete'
                        ? 'bg-emerald-400'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  ></div>
                )}
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${
                      state === 'complete'
                        ? 'bg-emerald-500 text-white'
                        : state === 'active'
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900/40'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {state === 'complete' ? '✓' : number}
                  </div>
                  <div className="min-w-0 text-center md:text-left">
                    <div
                      className={`text-[9px] md:text-[10px] uppercase tracking-wider font-bold truncate ${
                        state === 'active'
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : state === 'complete'
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {label}
                    </div>
                    <div className="hidden md:block text-[9px] text-slate-400 mt-0.5">
                      {state === 'complete'
                        ? 'Complete'
                        : state === 'active'
                        ? 'Current stage'
                        : 'Next'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentArchetype === 'TRADITIONAL' &&
          viewMetrics?.leverage < 2.5 &&
          viewMetrics?.ltv < 80 && (
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-4 md:p-5 rounded-xl flex items-start gap-3 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
              <Icons.Info
                size={20}
                className="text-indigo-500 mt-0.5 shrink-0"
              />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                <strong className="text-slate-800 dark:text-slate-100">
                  Note on Conventional Financing:
                </strong>{' '}
                Based on your highly conservative leverage (
                {Number(viewMetrics?.leverage || 0).toFixed(1)}x) and strong
                asset coverage, standard bank financing may be available at
                cheaper rates. However, assuming you are specifically exploring
                alternative capital, the recommendations below prioritize
                flexible, bespoke structures typically offered by{' '}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  private credit funds
                </span>
                .
              </p>
            </div>
          )}

        {/* 2. COMPACT COMMITTEE RECOMMENDATION */}
        <div className="bg-indigo-950 text-white rounded-2xl shadow-xl overflow-hidden border border-indigo-900">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-indigo-300 font-bold">
                Committee Recommendation
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {selectedBaseline?.dynamicTitle ||
                    getAdvisoryStructures()[selectedOptionIndex]?.type}
                </h3>
                <span className="px-2 py-1 rounded-md bg-emerald-400/15 text-emerald-300 border border-emerald-400/20 text-[9px] font-bold uppercase tracking-wider">
                  {selectedBaseline?.executionState || 'Selected'}
                </span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-indigo-100 mt-3 relative z-10">
                {selectedBaseline?.mdRationale || viewMetrics?.committeeMemo}
              </p>
              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  [
                    'Facility',
                    formatCurrency(
                      Number(selectedBaseline?.activePrimaryDebt || 0) +
                        Number(selectedBaseline?.activeSecondaryDebt || 0)
                    ),
                  ],
                  [
                    'Leverage',
                    `${Number(selectedBaseline?.leverage || 0).toFixed(2)}x`,
                  ],
                  [
                    'Gross IRR',
                    `${Number(selectedBaseline?.grossIrr || 0).toFixed(2)}%`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white/5 border border-white/10 p-2.5"
                  >
                    <div className="text-[8px] uppercase tracking-wider text-indigo-300 font-bold">
                      {label}
                    </div>
                    <div className="font-mono text-xs font-bold mt-1">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 p-4 md:p-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                    Shortlist
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Select the frozen structure to negotiate.
                  </div>
                </div>
                <span className="text-[9px] font-bold uppercase text-slate-400">
                  Top 3
                </span>
              </div>
              <div className="space-y-2">
                {getAdvisoryStructures().map((struct, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      selectedOptionIndex === idx
                        ? 'border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                        selectedOptionIndex === idx
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-bold truncate">
                          {struct.type}
                        </div>
                        <span className="text-[8px] font-mono text-slate-400">
                          {viewMetrics?.scenarioData[idx]?.fitScore || 50}/100
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-500 mt-0.5 truncate">
                        {struct.leverage} leverage · {struct.rate} blended rate
                        · {struct.irr} IRR
                      </div>
                    </div>
                    <button
                      onClick={(e) =>
                        handleLearnMore(e, struct.dataKey || struct.type)
                      }
                      className="hidden sm:block text-[9px] font-bold text-slate-500 hover:text-indigo-600"
                    >
                      Details
                    </button>
                    {selectedOptionIndex !== idx ? (
                      <button
                        onClick={() => handleSelectStructure(idx)}
                        className="px-3 py-2 rounded-lg text-[9px] uppercase tracking-wider font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400"
                      >
                        Select
                      </button>
                    ) : (
                      <span className="px-3 py-2 rounded-lg text-[9px] uppercase tracking-wider font-bold bg-indigo-600 text-white">
                        Selected
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. INDICATIVE TERM SHEET */}
        <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <LabelWithCoach
                label="Covenant Status"
                insightKey="MaxLev"
                onOpenInsight={openInsight}
                colorClass="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1"
              />
              <div
                className={`text-xl font-bold leading-tight flex items-center gap-2 ${
                  selectedBaseline?.isCovenantBreached ||
                  selectedBaseline?.isIcrBreached
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-slate-900 dark:text-white'
                }`}
              >
                {selectedBaseline?.isCovenantBreached ||
                selectedBaseline?.isIcrBreached
                  ? 'Breach Detected'
                  : 'Within Limits'}{' '}
                {selectedBaseline?.isCovenantBreached ||
                selectedBaseline?.isIcrBreached ? (
                  <Icons.AlertTriangle size={18} />
                ) : (
                  <Icons.ShieldCheck size={18} className="text-emerald-500" />
                )}
              </div>
              {!selectedBaseline?.isCovenantBreached &&
                !selectedBaseline?.isIcrBreached && (
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      <span className="uppercase">Lev Headroom:</span>
                      <span className="text-emerald-600">
                        +{Number(selectedBaseline?.headroom || 0).toFixed(2)}x
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      <span className="uppercase">ICR Headroom:</span>
                      <span className="text-emerald-600">
                        +
                        {Math.max(
                          0,
                          Number(selectedBaseline?.icr || 0) -
                            Number(selectedBaseline?.baselineIcrCov || 0)
                        ).toFixed(2)}
                        x
                      </span>
                    </div>
                  </div>
                )}
            </div>
            <div className="md:border-l md:border-r border-slate-200 dark:border-slate-700 md:px-6">
              <LabelWithCoach
                label="Total Coupon"
                insightKey="Coupon"
                onOpenInsight={openInsight}
                colorClass="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1"
              />
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 font-mono transition-all duration-300">
                {Number(selectedBaseline?.totalCoupon || 0).toFixed(2)}%
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span className="uppercase">
                    {selectedBaseline?.baseRateName}:
                  </span>
                  <span>
                    {Number(selectedBaseline?.baseRate || 0).toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span className="uppercase">Risk Spread:</span>
                  <span>
                    +{Number(selectedBaseline?.finalSpread || 0).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
            <div className="md:pl-6">
              <LabelWithCoach
                label="Gross IRR Yield"
                insightKey="GrossIRR"
                onOpenInsight={openInsight}
                colorClass="text-xs text-indigo-500 dark:text-indigo-400 uppercase font-bold tracking-wider mb-1"
              />
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-mono transition-all duration-300">
                {Number(selectedBaseline?.grossIrr || 0).toFixed(2)}%
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">
                True annualized return accounting for OID, Upfront Fees, and
                repayment schedule.
              </p>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
              <span>Frozen Baseline Term Sheet</span>
              <span className="text-[9px] px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                IC OPENING POSITION
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500 font-medium">Instrument</span>
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {getAdvisoryStructures()[selectedOptionIndex]?.type}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500 font-medium">
                  Facility Amount
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {currency} {formatCurrency(viewMetrics?.numNewDebt)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500 font-medium">
                  Primary Purpose
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {allocations[0]?.purpose || financingObjective}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Tenor"
                  insightKey="Tenor"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineTenor} Years
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Cash Coupon"
                  insightKey="Coupon"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {Number(selectedBaseline?.blendedCashRate || 0).toFixed(2)}%
                  p.a.
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="PIK Interest"
                  insightKey="PIKPremium"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {Number(selectedBaseline?.activePik || 0).toFixed(2)}% p.a.
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Original Issue Discount"
                  insightKey="OID"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineOid}%
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Upfront Fee"
                  insightKey="UpfrontFee"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineUpfront}%
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Call Protection"
                  insightKey="CallProtection"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineCall}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Repayment Profile"
                  insightKey="Amortization"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.activeAmortization}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-500 font-medium">
                  Security / Collateral
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {viewMetrics?.collateralTier?.split(' (')[0]}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="DSRA Requirement"
                  insightKey="DSRA"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineDsra}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Mandatory Cash Sweep"
                  insightKey="CashSweep"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  {selectedBaseline?.baselineSweep}% of ECF
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800/50">
                <LabelWithCoach
                  label="Maintenance Covenants"
                  insightKey="MaxLev"
                  onOpenInsight={openInsight}
                  colorClass="text-slate-500"
                  sizeClass="text-sm font-medium"
                />
                <span className="font-bold text-slate-900 dark:text-white text-right">
                  Max Lev: {selectedBaseline?.baselineLeverageCov}x | Min ICR:{' '}
                  {selectedBaseline?.baselineIcrCov}x
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. NEGOTIATION DESK — borrower proposal vs lender committee */}
        <div className="pt-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                  Deal Structuring
                </span>
                <span className="text-slate-300 dark:text-slate-700">/</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Negotiation Desk
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Negotiate the Deal
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
                The recommended package is the frozen lender baseline. Every
                committed change below is treated as a borrower proposal and
                re-underwritten as a complete package.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800/40 text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                Baseline Frozen
              </div>
              <button
                onClick={rejectLenderCounter}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-300 transition-colors"
              >
                Restore Last Accepted
              </button>
            </div>
          </div>

          {(() => {
            const base = selectedBaseline || metrics || {};
            const live = liveNegotiationTerms || baselineTerms || {};
            const response = lenderResponse;
            const baselineIRR = Number(base.grossIrr || 0);
            const liveIRR = Number((liveEconomics || base).grossIrr || 0);
            const baselineLev = Number(base.leverage || 0);
            const liveLev = Number((liveEconomics || base).leverage || 0);
            const baselineICR = Number(base.icr || 0);
            const liveICR = Number((liveEconomics || base).icr || 0);
            const baselineCash = Number(base.blendedCashRate || 0);
            const liveCash = Number(
              (liveEconomics || base).blendedCashRate || 0
            );
            const delta = (a, b) => Number(a || 0) - Number(b || 0);
            const signed = (v, digits = 2, suffix = '') =>
              `${v > 0 ? '+' : ''}${v.toFixed(digits)}${suffix}`;
            const term = (key, fallback = '') =>
              live[key] !== undefined && live[key] !== null
                ? live[key]
                : fallback;
            const baselineTerm = (key, fallback = '') =>
              baselineTerms?.[key] !== undefined &&
              baselineTerms?.[key] !== null
                ? baselineTerms[key]
                : fallback;
            const counterTerm = (key) =>
              response?.status === 'COUNTER'
                ? response?.terms?.[key]
                : undefined;
            const changed = (key) => {
              const b = baselineTerm(key);
              const v = term(key);
              if (typeof b === 'number' && typeof v === 'number')
                return Math.abs(v - b) > 0.0001;
              return String(v) !== String(b);
            };
            const status = response?.status || 'WAITING';
            const statusClasses =
              status === 'ACCEPT' || status === 'ACCEPTED'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/15 dark:border-emerald-800/40 dark:text-emerald-400'
                : status === 'COUNTER'
                ? 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/15 dark:border-amber-800/40 dark:text-amber-400'
                : status === 'REJECT'
                ? 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-900/15 dark:border-rose-800/40 dark:text-rose-400'
                : 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800/40 dark:border-slate-700 dark:text-slate-300';
            const termName = {
              tenor: 'Tenor',
              oid: 'OID',
              upfrontFee: 'Upfront Fee',
              pikPremium: 'PIK Premium',
              redemptionPremium: 'Redemption Premium',
              amortization: 'Repayment Profile',
              maxLeverageCov: 'Max Leverage Covenant',
              minIcrCov: 'Minimum ICR',
              dsra: 'DSRA',
              cashSweep: 'Cash Sweep',
              callProtection: 'Call Protection',
              equityKicker: 'Equity Kicker',
              conversionValuation: 'Conversion Valuation',
            };
            const displayTerm = (key, value) => {
              if (value === undefined || value === null) return '—';
              if (key === 'tenor') return `${Number(value).toFixed(0)} yrs`;
              if (
                [
                  'oid',
                  'upfrontFee',
                  'pikPremium',
                  'redemptionPremium',
                  'cashSweep',
                  'equityKicker',
                ].includes(key)
              )
                return `${Number(value).toFixed(2)}%`;
              if (['maxLeverageCov', 'minIcrCov'].includes(key))
                return `${Number(value).toFixed(2)}x`;
              if (key === 'conversionValuation') return formatCurrency(value);
              return String(value);
            };
            const patchEntries = (entry) =>
              Object.entries(entry?.patch || {}).filter(([k]) => termName[k]);
            const currentHistory = negotiationHistory || [];
            const agreed = acceptedNegotiationTerms || baselineTerms || {};
            const stateTermKeys = [
              'tenor',
              'oid',
              'upfrontFee',
              'pikPremium',
              'cashSweep',
              'dsra',
              'maxLeverageCov',
              'minIcrCov',
            ];
            const borrowerRequested = (key) =>
              changed(key) ? term(key) : undefined;
            const counterRequested = (key) =>
              response?.status === 'COUNTER' &&
              response?.terms &&
              String(response.terms[key]) !== String(term(key))
                ? response.terms[key]
                : undefined;
            const packageStatus =
              status === 'REJECT'
                ? 'Not Executable'
                : status === 'COUNTER'
                ? 'Negotiation Open'
                : status === 'ACCEPT' || status === 'ACCEPTED'
                ? 'Ready for Committee Approval'
                : 'Baseline Ready';
            const decisionTests = [
              {
                label: 'Lender IRR',
                baseline: baselineIRR,
                proposed: liveIRR,
                limit: lenderReturnFloor,
                suffix: '%',
                pass: liveIRR >= lenderReturnFloor,
              },
              {
                label: 'Leverage',
                baseline: baselineLev,
                proposed: liveLev,
                limit: Number(base.baselineLeverageCov || 0),
                suffix: 'x',
                pass: liveLev <= Number(base.baselineLeverageCov || 0),
              },
              {
                label: 'Interest Cover',
                baseline: baselineICR,
                proposed: liveICR,
                limit: Number(base.baselineIcrCov || 0),
                suffix: 'x',
                pass: liveICR >= Number(base.baselineIcrCov || 0),
              },
              {
                label: 'Liquidity',
                baseline: Number(base.waterfall?.preSweep || 0),
                proposed: Number(
                  (liveEconomics || base).waterfall?.preSweep || 0
                ),
                limit: 0,
                suffix: '',
                pass:
                  Number((liveEconomics || base).waterfall?.preSweep || 0) >= 0,
              },
            ];

            return (
              <div className="space-y-6">
                {/* LIVE ECONOMICS STRIP */}
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
                  {[
                    [
                      'Lender IRR',
                      `${liveIRR.toFixed(2)}%`,
                      signed(delta(liveIRR, baselineIRR), 2, ' pp'),
                      liveIRR >= baselineIRR ? 'positive' : 'negative',
                    ],
                    [
                      'Cash Yield',
                      `${liveCash.toFixed(2)}%`,
                      signed(delta(liveCash, baselineCash), 2, ' pp'),
                      liveCash <= baselineCash ? 'positive' : 'negative',
                    ],
                    [
                      'Leverage',
                      `${liveLev.toFixed(2)}x`,
                      signed(delta(liveLev, baselineLev), 2, 'x'),
                      liveLev <= baselineLev ? 'positive' : 'negative',
                    ],
                    [
                      'ICR',
                      `${liveICR.toFixed(2)}x`,
                      signed(delta(liveICR, baselineICR), 2, 'x'),
                      liveICR >= baselineICR ? 'positive' : 'negative',
                    ],
                    [
                      'Headroom',
                      `${Number((liveEconomics || base).headroom || 0).toFixed(
                        2
                      )}x`,
                      '',
                      'neutral',
                    ],
                    [
                      'Facility',
                      formatCurrency(
                        (liveEconomics || base).totalDebt || base.totalDebt || 0
                      ),
                      '',
                      'neutral',
                    ],
                    [
                      'Cash Sweep',
                      `${Number(
                        term('cashSweep', base.baselineSweep || 0)
                      ).toFixed(0)}%`,
                      '',
                      'neutral',
                    ],
                    [
                      'Status',
                      status,
                      '',
                      status === 'REJECT'
                        ? 'negative'
                        : status === 'COUNTER'
                        ? 'warning'
                        : status === 'ACCEPT' || status === 'ACCEPTED'
                        ? 'positive'
                        : 'neutral',
                    ],
                  ].map(([label, value, sub, kind]) => (
                    <div
                      key={label}
                      className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm"
                    >
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        {label}
                      </div>
                      <div
                        className={`font-mono text-base font-bold mt-1 ${
                          kind === 'positive'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : kind === 'negative'
                            ? 'text-rose-600 dark:text-rose-400'
                            : kind === 'warning'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {value}
                      </div>
                      {sub && (
                        <div
                          className={`text-[9px] font-semibold mt-0.5 ${
                            sub.startsWith('+')
                              ? 'text-rose-500'
                              : 'text-slate-400'
                          }`}
                        >
                          {sub} vs baseline
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* FOUR-STATE TERM NEGOTIATION */}
                <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-5 md:px-7 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-indigo-500 font-bold">
                        Live Term State
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                        Baseline → Borrower Proposal → Lender Counter → Agreed
                      </h4>
                    </div>
                    <div className="text-[9px] text-slate-500">
                      One source of truth across negotiation, economics and
                      advisory.
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <div className="min-w-[760px]">
                      <div className="grid grid-cols-[1.25fr_repeat(4,1fr)] px-5 md:px-7 py-2.5 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                        {[
                          'Term',
                          'Frozen Baseline',
                          'Borrower Proposal',
                          'Lender Counter',
                          'Agreed Package',
                        ].map((label, index) => (
                          <div
                            key={label}
                            className={`text-[8px] font-bold uppercase tracking-widest ${
                              index === 0
                                ? 'text-slate-400'
                                : index === 1
                                ? 'text-amber-600'
                                : index === 2
                                ? 'text-indigo-600'
                                : index === 3
                                ? 'text-rose-600'
                                : 'text-emerald-600'
                            }`}
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                      {stateTermKeys.map((key) => (
                        <div
                          key={key}
                          className="grid grid-cols-[1.25fr_repeat(4,1fr)] items-center px-5 md:px-7 py-2.5 border-b last:border-b-0 border-slate-100 dark:border-slate-800/70"
                        >
                          <div className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
                            {termName[key]}
                          </div>
                          <div className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400">
                            {displayTerm(key, baselineTerm(key))}
                          </div>
                          <div
                            className={`text-[10px] font-mono font-bold ${
                              borrowerRequested(key) !== undefined
                                ? 'text-indigo-700 dark:text-indigo-400'
                                : 'text-slate-300 dark:text-slate-700'
                            }`}
                          >
                            {borrowerRequested(key) !== undefined
                              ? displayTerm(key, borrowerRequested(key))
                              : '—'}
                          </div>
                          <div
                            className={`text-[10px] font-mono font-bold ${
                              counterRequested(key) !== undefined
                                ? 'text-rose-700 dark:text-rose-400'
                                : 'text-slate-300 dark:text-slate-700'
                            }`}
                          >
                            {counterRequested(key) !== undefined
                              ? displayTerm(key, counterRequested(key))
                              : '—'}
                          </div>
                          <div className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400">
                            {displayTerm(key, agreed[key])}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BASELINE / PROPOSAL / COMMITTEE */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                  <div className="xl:col-span-8 space-y-5">
                    {/* package header */}
                    <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                      <div className="px-5 md:px-7 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-500">
                            Borrower Proposal
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                            {base.dynamicTitle ||
                              base.type ||
                              'Selected Financing Structure'}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-1">
                            Move a term, release it, and the lender evaluates
                            the entire package — not the isolated change.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider">
                          <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                            Amber = Baseline
                          </span>
                          <span className="px-2 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                            Red = Counter
                          </span>
                        </div>
                      </div>

                      <div className="p-5 md:p-7 grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                            Pricing & Return
                          </div>
                          <DealSlider
                            label="Tenor"
                            insightKey="Tenor"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={1}
                            max={10}
                            step={1}
                            value={Number(term('tenor', tenor))}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'tenor',
                                v,
                                'Borrower proposed tenor change'
                              )
                            }
                            suffix=" yrs"
                            baseline={baselineTerm('tenor', targetTenor)}
                            counter={counterTerm('tenor')}
                          />
                          <DealSlider
                            label="OID"
                            insightKey="OID"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={90}
                            max={100}
                            step={0.5}
                            value={Number(term('oid', oid))}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'oid',
                                v,
                                'Borrower proposed OID change'
                              )
                            }
                            suffix="%"
                            baseline={baselineTerm('oid', oid)}
                            counter={counterTerm('oid')}
                          />
                          <DealSlider
                            label="Upfront Fee"
                            insightKey="UpfrontFee"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={0}
                            max={5}
                            step={0.25}
                            value={Number(term('upfrontFee', upfrontFee))}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'upfrontFee',
                                v,
                                'Borrower proposed upfront fee change'
                              )
                            }
                            suffix="%"
                            baseline={baselineTerm('upfrontFee', upfrontFee)}
                            counter={counterTerm('upfrontFee')}
                          />
                          <DealSlider
                            label="PIK Premium"
                            insightKey="PIKPremium"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={0}
                            max={10}
                            step={0.5}
                            value={Number(term('pikPremium', pikPremium))}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'pikPremium',
                                v,
                                'Borrower proposed PIK change'
                              )
                            }
                            suffix="%"
                            baseline={baselineTerm('pikPremium', pikPremium)}
                            counter={counterTerm('pikPremium')}
                            isLocked={viewMetrics?.isPikLocked}
                          />
                          <DealSlider
                            label="Redemption Premium"
                            insightKey="Redemption"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={0}
                            max={10}
                            step={0.5}
                            value={Number(
                              term('redemptionPremium', redemptionPremium)
                            )}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'redemptionPremium',
                                v,
                                'Borrower proposed redemption premium change'
                              )
                            }
                            suffix="%"
                            baseline={baselineTerm('redemptionPremium', 0)}
                            counter={counterTerm('redemptionPremium')}
                          />
                          <DealSlider
                            label="Equity Kicker"
                            insightKey="WarrantKicker"
                            onOpenInsight={openInsight}
                            onAutoInsight={handleAutoInsight}
                            min={0}
                            max={15}
                            step={1}
                            value={Number(term('equityKicker', equityKicker))}
                            onCommit={(v) =>
                              commitNegotiationTerm(
                                'equityKicker',
                                v,
                                'Borrower proposed equity kicker change'
                              )
                            }
                            suffix="%"
                            baseline={baselineTerm('equityKicker', 0)}
                            counter={counterTerm('equityKicker')}
                          />
                          {base.equityLinked && (
                            <DealSlider
                              label="Conversion Valuation"
                              insightKey="WarrantKicker"
                              onOpenInsight={openInsight}
                              onAutoInsight={handleAutoInsight}
                              min={Math.max(
                                50,
                                Number(metrics?.enterpriseValue || 100) * 0.5
                              )}
                              max={Math.max(
                                100,
                                Number(metrics?.enterpriseValue || 100) * 2
                              )}
                              step={5}
                              value={Number(
                                term('conversionValuation', conversionValuation)
                              )}
                              onCommit={(v) =>
                                commitNegotiationTerm(
                                  'conversionValuation',
                                  v,
                                  'Borrower proposed conversion valuation change'
                                )
                              }
                              suffix={currency === 'USD' ? 'M' : 'Cr'}
                              baseline={baselineTerm(
                                'conversionValuation',
                                metrics?.enterpriseValue || 0
                              )}
                              counter={counterTerm('conversionValuation')}
                            />
                          )}
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                            Structure & Protection
                          </div>
                          <div className="space-y-5">
                            <div>
                              <LabelWithCoach
                                label="Repayment Profile"
                                insightKey="Amortization"
                                onOpenInsight={openInsight}
                                colorClass="text-slate-600 dark:text-slate-300 text-xs"
                              />
                              <select
                                value={term('amortization', amortization)}
                                onChange={(e) => {
                                  commitNegotiationTerm(
                                    'amortization',
                                    e.target.value,
                                    'Borrower proposed repayment profile change'
                                  );
                                  handleAutoInsight('Amortization');
                                }}
                                className="mt-2 w-full text-xs p-3 rounded-xl border outline-none font-semibold bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:border-indigo-500"
                              >
                                {[
                                  'Bullet (100% at Maturity)',
                                  '1% Standard',
                                  'Straight Line',
                                  'Balloon (50/50)',
                                  'Step-Up',
                                  'Bespoke (50% Penultimate Year, 50% Maturity)',
                                ].map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                    {baselineTerm('amortization') === o
                                      ? '  · BASELINE'
                                      : ''}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <LabelWithCoach
                                label="Call Protection"
                                insightKey="CallProtection"
                                onOpenInsight={openInsight}
                                colorClass="text-slate-600 dark:text-slate-300 text-xs"
                              />
                              <select
                                value={term('callProtection', callProtection)}
                                onChange={(e) => {
                                  commitNegotiationTerm(
                                    'callProtection',
                                    e.target.value,
                                    'Borrower proposed call protection change'
                                  );
                                  handleAutoInsight('CallProtection');
                                }}
                                className="mt-2 w-full text-xs p-3 rounded-xl border outline-none font-semibold bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:border-indigo-500"
                              >
                                {[
                                  'Make-Whole (Hard Call)',
                                  '103 / 102 / 101 (Soft Call)',
                                  '101 (1-Yr Soft Call)',
                                  'None (Callable Anytime)',
                                ].map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                    {baselineTerm('callProtection') === o
                                      ? '  · BASELINE'
                                      : ''}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <LabelWithCoach
                                label="DSRA Requirement"
                                insightKey="DSRA"
                                onOpenInsight={openInsight}
                                colorClass="text-slate-600 dark:text-slate-300 text-xs"
                              />
                              <select
                                value={term('dsra', dsra)}
                                onChange={(e) => {
                                  commitNegotiationTerm(
                                    'dsra',
                                    e.target.value,
                                    'Borrower proposed DSRA change'
                                  );
                                  handleAutoInsight('DSRA');
                                }}
                                className="mt-2 w-full text-xs p-3 rounded-xl border outline-none font-semibold bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:border-indigo-500"
                              >
                                {[
                                  'None',
                                  '1-Quarter Reserve',
                                  '2-Quarters Reserve',
                                ].map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                    {baselineTerm('dsra') === o
                                      ? '  · BASELINE'
                                      : ''}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <DealSlider
                              label="Mandatory Cash Sweep"
                              insightKey="CashSweep"
                              onOpenInsight={openInsight}
                              onAutoInsight={handleAutoInsight}
                              min={0}
                              max={100}
                              step={5}
                              value={Number(term('cashSweep', cashSweep))}
                              onCommit={(v) =>
                                commitNegotiationTerm(
                                  'cashSweep',
                                  v,
                                  'Borrower proposed cash sweep change'
                                )
                              }
                              suffix="%"
                              baseline={baselineTerm('cashSweep', cashSweep)}
                              counter={counterTerm('cashSweep')}
                            />
                            <DealSlider
                              label="Max Leverage Covenant"
                              insightKey="MaxLev"
                              onOpenInsight={openInsight}
                              onAutoInsight={handleAutoInsight}
                              min={2}
                              max={8}
                              step={0.25}
                              value={Number(
                                term('maxLeverageCov', maxLeverageCov)
                              )}
                              onCommit={(v) =>
                                commitNegotiationTerm(
                                  'maxLeverageCov',
                                  v,
                                  'Borrower proposed max leverage covenant change'
                                )
                              }
                              suffix="x"
                              baseline={baselineTerm(
                                'maxLeverageCov',
                                maxLeverageCov
                              )}
                              counter={counterTerm('maxLeverageCov')}
                            />
                            <DealSlider
                              label="Minimum Interest Cover"
                              insightKey="ICR"
                              onOpenInsight={openInsight}
                              onAutoInsight={handleAutoInsight}
                              min={1}
                              max={4}
                              step={0.25}
                              value={Number(term('minIcrCov', minIcrCov))}
                              onCommit={(v) =>
                                commitNegotiationTerm(
                                  'minIcrCov',
                                  v,
                                  'Borrower proposed minimum ICR change'
                                )
                              }
                              suffix="x"
                              baseline={baselineTerm('minIcrCov', minIcrCov)}
                              counter={counterTerm('minIcrCov')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* step-downs retained */}
                      <div className="px-5 md:px-7 pb-6 grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <LabelWithCoach
                                label="Cash Sweep Step-Down"
                                insightKey="StepDown"
                                onOpenInsight={openInsight}
                                colorClass="text-xs font-bold text-slate-700 dark:text-slate-200"
                              />
                              <p className="text-[10px] text-slate-500 mt-1">
                                Automatically relax protection after performance
                                improves.
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setHasSweepStepDown(!hasSweepStepDown);
                                handleAutoInsight('StepDown');
                              }}
                              className={`w-10 h-5 rounded-full relative transition-colors ${
                                hasSweepStepDown
                                  ? 'bg-indigo-600'
                                  : 'bg-slate-300 dark:bg-slate-700'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                                  hasSweepStepDown
                                    ? 'translate-x-5'
                                    : 'translate-x-0.5'
                                }`}
                              ></div>
                            </button>
                          </div>
                          {hasSweepStepDown && (
                            <div className="mt-4 grid sm:grid-cols-2 gap-3">
                              <div>
                                <div className="text-[9px] font-bold uppercase text-slate-400 mb-1">
                                  Floor
                                </div>
                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="5"
                                  value={sweepStepDownTo}
                                  onChange={(e) =>
                                    setSweepStepDownTo(Number(e.target.value))
                                  }
                                  className="w-full accent-indigo-500"
                                />
                                <div className="text-right text-[10px] font-mono text-indigo-600">
                                  {sweepStepDownTo}%
                                </div>
                              </div>
                              <div>
                                <div className="text-[9px] font-bold uppercase text-slate-400 mb-1">
                                  Trigger
                                </div>
                                <select
                                  value={sweepStepDownTrigger}
                                  onChange={(e) =>
                                    setSweepStepDownTrigger(e.target.value)
                                  }
                                  className="w-full text-[10px] p-2 rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                >
                                  <option>Net Leverage &lt; 3.0x</option>
                                  <option>Net Leverage &lt; 2.5x</option>
                                  <option>Net Leverage &lt; 2.0x</option>
                                  <option>Interest Cover &gt; 2.5x</option>
                                </select>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <LabelWithCoach
                                label="DSRA Step-Down / Release"
                                insightKey="StepDown"
                                onOpenInsight={openInsight}
                                colorClass="text-xs font-bold text-slate-700 dark:text-slate-200"
                              />
                              <p className="text-[10px] text-slate-500 mt-1">
                                Release reserve after sustained credit
                                improvement.
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setHasDsraStepDown(!hasDsraStepDown);
                                handleAutoInsight('StepDown');
                              }}
                              className={`w-10 h-5 rounded-full relative transition-colors ${
                                hasDsraStepDown
                                  ? 'bg-indigo-600'
                                  : 'bg-slate-300 dark:bg-slate-700'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                                  hasDsraStepDown
                                    ? 'translate-x-5'
                                    : 'translate-x-0.5'
                                }`}
                              ></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Proposal diff */}
                    <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                      <div className="px-5 md:px-7 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            Current Package vs Baseline
                          </h4>
                          <p className="text-[10px] text-slate-500 mt-1">
                            Only changed terms are shown.
                          </p>
                        </div>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                            changed('tenor') ||
                            changed('oid') ||
                            changed('upfrontFee') ||
                            changed('cashSweep') ||
                            changed('maxLeverageCov') ||
                            changed('minIcrCov') ||
                            changed('dsra') ||
                            changed('callProtection') ||
                            changed('amortization') ||
                            changed('pikPremium') ||
                            changed('redemptionPremium') ||
                            changed('equityKicker')
                              ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                              : 'bg-slate-50 text-slate-400 border border-slate-200'
                          }`}
                        >
                          {currentHistory.length
                            ? `${currentHistory.length} proposal${
                                currentHistory.length === 1 ? '' : 's'
                              }`
                            : 'No changes yet'}
                        </span>
                      </div>
                      <div className="p-5 md:p-7">
                        {Object.keys(termName).filter((k) => changed(k))
                          .length === 0 ? (
                          <div className="flex items-center gap-3 py-2 text-sm text-slate-500">
                            <Icons.CheckCircle
                              size={17}
                              className="text-emerald-500"
                            />{' '}
                            Current live package matches the frozen baseline.
                          </div>
                        ) : (
                          <div className="grid sm:grid-cols-2 gap-2">
                            {Object.keys(termName)
                              .filter((k) => changed(k))
                              .map((k) => (
                                <div
                                  key={k}
                                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700"
                                >
                                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                                    {termName[k]}
                                  </span>
                                  <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white text-right">
                                    {displayTerm(k, baselineTerm(k))}{' '}
                                    <span className="text-slate-400">→</span>{' '}
                                    {displayTerm(k, term(k))}
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* LENDER COMMITTEE */}
                  <div className="xl:col-span-4 xl:sticky xl:top-24 space-y-5">
                    <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] uppercase tracking-[0.18em] text-indigo-300 font-bold">
                            Investment Committee
                          </div>
                          <h4 className="text-lg font-bold mt-1">
                            Lender Decision
                          </h4>
                        </div>
                        <div
                          className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest ${
                            status === 'COUNTER'
                              ? 'bg-amber-400/15 text-amber-300'
                              : status === 'REJECT'
                              ? 'bg-rose-400/15 text-rose-300'
                              : status === 'ACCEPT' || status === 'ACCEPTED'
                              ? 'bg-emerald-400/15 text-emerald-300'
                              : 'bg-white/10 text-slate-300'
                          }`}
                        >
                          {status}
                        </div>
                      </div>
                      <div className="p-5 space-y-5">
                        <div>
                          <div className="flex justify-between text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                            <span>Committee Conviction</span>
                            <span className="text-indigo-300">
                              {Number(negotiation?.score || 0).toFixed(0)}%
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-indigo-400 rounded-full transition-all"
                              style={{
                                width: `${Math.max(
                                  0,
                                  Math.min(100, Number(negotiation?.score || 0))
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                          <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2">
                            Committee View
                          </div>
                          <div className="text-sm font-semibold leading-relaxed">
                            {response?.reason ||
                              negotiation?.observations?.[0] ||
                              'No borrower proposal has been submitted. The committee is holding the frozen baseline.'}
                          </div>
                        </div>

                        {response?.status === 'COUNTER' && response?.terms && (
                          <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 space-y-4">
                            <div className="text-[9px] uppercase tracking-widest text-amber-300 font-bold">
                              Committee Give / Get
                            </div>
                            <div>
                              <div className="text-[8px] uppercase tracking-widest text-emerald-300 font-bold mb-2">
                                Committee is willing to give
                              </div>
                              <div className="space-y-1.5">
                                {(response.changes || [])
                                  .slice(0, 4)
                                  .map((change) => (
                                    <div
                                      key={change.key}
                                      className="flex justify-between gap-3 text-[10px]"
                                    >
                                      <span className="text-slate-300">
                                        {termName[change.key] || change.key}
                                      </span>
                                      <span className="font-mono font-bold text-emerald-200">
                                        {displayTerm(change.key, change.from)} →{' '}
                                        {displayTerm(change.key, change.to)}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                            <div className="pt-3 border-t border-white/10">
                              <div className="text-[8px] uppercase tracking-widest text-amber-300 font-bold mb-2">
                                In exchange for
                              </div>
                              <div className="space-y-1.5">
                                {Object.entries(response.terms)
                                  .filter(
                                    ([k]) =>
                                      termName[k] &&
                                      String(response.terms[k]) !==
                                        String(term(k))
                                  )
                                  .slice(0, 5)
                                  .map(([k, v]) => (
                                    <div
                                      key={k}
                                      className="flex justify-between gap-3 text-[10px]"
                                    >
                                      <span className="text-slate-300">
                                        {termName[k]}
                                      </span>
                                      <span className="font-mono font-bold text-amber-200 text-right">
                                        {displayTerm(k, term(k))} →{' '}
                                        {displayTerm(k, v)}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                            {response.counterLabel && (
                              <div className="pt-3 border-t border-white/10">
                                <div className="text-[8px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                                  Why this counter
                                </div>
                                <p className="text-[10px] text-amber-100/80 leading-relaxed">
                                  {response.counterLabel}. This preserves the
                                  requested commercial flexibility while
                                  restoring the committee's risk-adjusted return
                                  envelope.
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-3">
                            Decision Tests
                          </div>
                          <div className="rounded-xl border border-white/10 overflow-hidden">
                            <div className="grid grid-cols-[1.35fr_0.8fr_0.8fr_0.55fr] gap-2 px-3 py-2 bg-white/5 text-[7px] uppercase tracking-widest text-slate-500 font-bold">
                              <span>Test</span>
                              <span>Baseline</span>
                              <span>Proposed</span>
                              <span className="text-right">Decision</span>
                            </div>
                            {decisionTests.map((test) => (
                              <div
                                key={test.label}
                                className="grid grid-cols-[1.35fr_0.8fr_0.8fr_0.55fr] gap-2 items-center px-3 py-2 border-t border-white/10"
                              >
                                <span className="text-[9px] text-slate-300">
                                  {test.label}
                                </span>
                                <span className="text-[9px] font-mono text-slate-400">
                                  {test.baseline.toFixed(2)}
                                  {test.suffix}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-white">
                                  {test.proposed.toFixed(2)}
                                  {test.suffix}
                                </span>
                                <span
                                  className={`text-right text-[9px] font-bold ${
                                    test.pass
                                      ? 'text-emerald-300'
                                      : 'text-rose-300'
                                  }`}
                                >
                                  {test.pass ? 'PASS' : 'FAIL'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {response?.status === 'COUNTER' && (
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={acceptLenderCounter}
                              className="py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                            >
                              Accept Counter
                            </button>
                            <button
                              onClick={rejectLenderCounter}
                              className="py-3 rounded-xl border border-white/15 hover:bg-white/10 text-slate-200 text-[10px] font-bold uppercase tracking-widest transition-colors"
                            >
                              Reject & Restore
                            </button>
                          </div>
                        )}

                        {status === 'ACCEPTED' && (
                          <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-200 text-[10px] font-semibold">
                            Counter accepted. The accepted package is now the
                            live negotiated structure.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
                      <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                        Negotiation Rules
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          'Hard underwriting gates cannot be bought with price alone.',
                          'Commercial concessions are evaluated as whole-package give/get trades.',
                          'The amber baseline markers never move during negotiation.',
                        ].map((x, i) => (
                          <div
                            key={i}
                            className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
                          >
                            <span className="text-indigo-500 font-bold">
                              {i + 1}
                            </span>
                            <span>{x}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* FULL-WIDTH NEGOTIATION LEDGER */}
                <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="px-5 md:px-7 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Icons.Activity size={16} className="text-indigo-500" />
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                          Negotiation Ledger
                        </h4>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">
                        A chronological audit trail of borrower proposals,
                        lender responses and agreed terms.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-slate-500">
                      {currentHistory.length} round
                      {currentHistory.length === 1 ? '' : 's'}
                    </div>
                  </div>

                  {currentHistory.length === 0 ? (
                    <div className="p-8 md:p-10">
                      <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center">
                        <Icons.Briefcase
                          size={24}
                          className="mx-auto text-slate-300 dark:text-slate-600"
                        />
                        <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mt-3">
                          Negotiation has not started
                        </div>
                        <p className="text-[10px] text-slate-400 max-w-md mx-auto mt-1">
                          Move any borrower-controlled term above and release
                          it. The change will create Round 1 and the lender will
                          respond using the full credit package.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                      {currentHistory
                        .slice()
                        .reverse()
                        .map((entry, reverseIndex) => {
                          const round = currentHistory.length - reverseIndex;
                          const entries = patchEntries(entry);
                          const entryChanges =
                            entry.changes ||
                            entries.map(([key, to]) => ({
                              key,
                              from: undefined,
                              to,
                            }));
                          const counterEntries = Object.entries(
                            entry.counter || {}
                          ).filter(([k]) => termName[k]);
                          const entryColor =
                            entry.status === 'REJECT'
                              ? 'rose'
                              : entry.status === 'COUNTER'
                              ? 'amber'
                              : entry.status === 'ACCEPT' ||
                                entry.status === 'ACCEPTED COUNTER'
                              ? 'emerald'
                              : 'slate';
                          return (
                            <div
                              key={`${entry.time}-${round}-${reverseIndex}`}
                              className="p-4 md:px-6 hover:bg-slate-50/70 dark:hover:bg-slate-800/20 transition-colors"
                            >
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                <div className="lg:col-span-2">
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                    Round {String(round).padStart(2, '0')} ·{' '}
                                    {entry.time}
                                  </div>
                                  <div
                                    className={`inline-flex mt-1.5 px-2 py-1 rounded-md text-[8px] font-bold uppercase tracking-widest ${
                                      entryColor === 'rose'
                                        ? 'bg-rose-50 text-rose-600'
                                        : entryColor === 'amber'
                                        ? 'bg-amber-50 text-amber-600'
                                        : entryColor === 'emerald'
                                        ? 'bg-emerald-50 text-emerald-600'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {entry.status}
                                  </div>
                                </div>
                                <div className="lg:col-span-4">
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-500">
                                    Borrower Proposal
                                  </div>
                                  <div className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 mt-1">
                                    {entry.label}
                                  </div>
                                  <div className="mt-2 space-y-1">
                                    {entryChanges.length ? (
                                      entryChanges.map((change) => (
                                        <div
                                          key={change.key}
                                          className="flex justify-between gap-3 text-[10px]"
                                        >
                                          <span className="text-slate-500">
                                            {termName[change.key] || change.key}
                                          </span>
                                          <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                                            {change.from !== undefined
                                              ? `${displayTerm(
                                                  change.key,
                                                  change.from
                                                )} → `
                                              : ''}
                                            {displayTerm(change.key, change.to)}
                                          </span>
                                        </div>
                                      ))
                                    ) : (
                                      <span className="text-[10px] text-slate-400">
                                        Package action / restore event
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="lg:col-span-4">
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                                    Lender Response
                                  </div>
                                  <p className="text-[10px] leading-relaxed font-medium text-slate-700 dark:text-slate-300 mt-1">
                                    {entry.reason}
                                  </p>
                                  {counterEntries.length > 0 && (
                                    <div className="mt-2 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 px-3 py-2">
                                      <div className="text-[8px] uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-1">
                                        Required Give
                                      </div>
                                      <div className="space-y-1">
                                        {counterEntries.map(([k, v]) => (
                                          <div
                                            key={k}
                                            className="flex justify-between gap-2 text-[9px]"
                                          >
                                            <span className="text-slate-500">
                                              {termName[k]}
                                            </span>
                                            <span className="font-mono font-bold text-amber-700 dark:text-amber-300">
                                              {displayTerm(k, v)}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="lg:col-span-2 lg:text-right">
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                    Economics Impact
                                  </div>
                                  <div
                                    className={`font-mono text-xs font-bold mt-1 ${
                                      Number(entry.impact?.irr || 0) >= 0
                                        ? 'text-emerald-600'
                                        : 'text-rose-600'
                                    }`}
                                  >
                                    {signed(
                                      Number(entry.impact?.irr || 0),
                                      2,
                                      ' pp'
                                    )}{' '}
                                    IRR
                                  </div>
                                  <div className="font-mono text-[9px] text-slate-500 mt-1">
                                    {signed(
                                      Number(entry.impact?.retainedCash || 0),
                                      2
                                    )}{' '}
                                    retained cash
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>

                {/* CURRENT DEAL PACKAGE — canonical live state */}
                <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-5 md:px-7 py-5 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-indigo-300 font-bold">
                        Canonical Transaction State
                      </div>
                      <h4 className="text-xl font-bold mt-1">
                        Current Deal Package
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">
                        The package flowing into transaction impact and the
                        advisory report.
                      </p>
                    </div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-[9px] font-bold uppercase tracking-widest ${
                        status === 'REJECT'
                          ? 'bg-rose-400/10 border-rose-400/30 text-rose-300'
                          : status === 'COUNTER'
                          ? 'bg-amber-400/10 border-amber-400/30 text-amber-300'
                          : 'bg-emerald-400/10 border-emerald-400/30 text-emerald-300'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          status === 'REJECT'
                            ? 'bg-rose-400'
                            : status === 'COUNTER'
                            ? 'bg-amber-400'
                            : 'bg-emerald-400'
                        }`}
                      ></span>
                      {packageStatus}
                    </div>
                  </div>
                  <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-8 p-5 md:p-7 border-b xl:border-b-0 xl:border-r border-white/10">
                      <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
                        <div>
                          <div className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">
                            Structure
                          </div>
                          <div className="text-lg font-bold mt-1">
                            {base.dynamicTitle ||
                              base.type ||
                              'Selected Structure'}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">
                            Facility
                          </div>
                          <div className="text-2xl font-mono font-bold text-indigo-300 mt-1">
                            {formatCurrency(
                              Number(
                                (liveEconomics || base).activePrimaryDebt || 0
                              ) +
                                Number(
                                  (liveEconomics || base).activeSecondaryDebt ||
                                    0
                                )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                        {[
                          'tenor',
                          'oid',
                          'upfrontFee',
                          'pikPremium',
                          'amortization',
                          'cashSweep',
                          'dsra',
                          'callProtection',
                          'maxLeverageCov',
                          'minIcrCov',
                        ].map((k) => (
                          <div
                            key={k}
                            className="rounded-xl bg-white/5 border border-white/10 p-3"
                          >
                            <div className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">
                              {termName[k]}
                            </div>
                            <div
                              className="text-[10px] font-mono font-bold text-white mt-1.5 truncate"
                              title={displayTerm(k, live[k])}
                            >
                              {displayTerm(k, live[k])}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="xl:col-span-4 p-5 md:p-7 bg-white/[0.03]">
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <div className="text-[9px] uppercase tracking-[0.16em] text-indigo-300 font-bold mb-3">
                            Borrower Economics
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Net Proceeds
                              </div>
                              <div className="font-mono text-base font-bold mt-1">
                                {formatCurrency(
                                  Number(
                                    (liveEconomics || base).bridge
                                      ?.netCashReceived || 0
                                  )
                                )}
                              </div>
                            </div>
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Cash Cost
                              </div>
                              <div className="font-mono text-base font-bold mt-1">
                                {liveCash.toFixed(2)}%
                              </div>
                            </div>
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Retained Cash
                              </div>
                              <div className="font-mono text-base font-bold mt-1">
                                {formatCurrency(
                                  Number(
                                    (liveEconomics || base).waterfall
                                      ?.retained || 0
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-l border-white/10 pl-5">
                          <div className="text-[9px] uppercase tracking-[0.16em] text-emerald-300 font-bold mb-3">
                            Lender Economics
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Gross IRR
                              </div>
                              <div className="font-mono text-base font-bold text-emerald-300 mt-1">
                                {liveIRR.toFixed(2)}%
                              </div>
                            </div>
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Cash Yield
                              </div>
                              <div className="font-mono text-base font-bold mt-1">
                                {liveCash.toFixed(2)}%
                              </div>
                            </div>
                            <div>
                              <div className="text-[8px] uppercase tracking-wider text-slate-500">
                                Leverage / ICR
                              </div>
                              <div className="font-mono text-base font-bold mt-1">
                                {liveLev.toFixed(2)}x / {liveICR.toFixed(2)}x
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 5. TRANSACTION IMPACT */}
        <div className="space-y-8 w-full">
          <div className="flex items-end justify-between gap-3 pt-4 mb-6">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-indigo-500 font-bold">
                Live model linkage
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Transaction Impact
              </h3>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 px-3 py-1.5 rounded-lg">
              Updates with negotiation
            </span>
          </div>
          <div className="bg-white dark:bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative transition-all w-full">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
              Pro-Forma Capitalization
            </h4>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Enterprise Value vs. Active Tranche Breakdown
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mr-2">
                  Total Value:
                </span>
                <span className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200">
                  {formatCurrency(viewMetrics?.enterpriseValue)}
                </span>
              </div>
            </div>

            <div className="w-full h-10 md:h-12 flex rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner bg-slate-100 dark:bg-slate-800">
              {viewVisualEqPct > 0 && (
                <div
                  className="h-full bg-emerald-500 flex items-center justify-center transition-all duration-700 overflow-hidden relative group"
                  style={{ width: `${viewVisualEqPct}%` }}
                >
                  <span className="text-[10px] font-bold text-emerald-950 truncate px-2 opacity-0 md:opacity-100">
                    Equity
                  </span>
                </div>
              )}
              {((viewMetrics?.numExistTermDebt || 0) / viewTotalVisualValue) *
                100 >
                0 && (
                <div
                  className="h-full bg-slate-500 dark:bg-slate-600 flex items-center justify-center transition-all duration-700 border-l border-white/20 overflow-hidden relative group"
                  style={{
                    width: `${
                      ((viewMetrics?.numExistTermDebt || 0) /
                        viewTotalVisualValue) *
                      100
                    }%`,
                  }}
                >
                  <span className="text-[10px] font-bold text-white truncate px-2 opacity-0 md:opacity-100">
                    Term Debt
                  </span>
                </div>
              )}
              {((viewMetrics?.numUtilizedWC || 0) / viewTotalVisualValue) *
                100 >
                0 && (
                <div
                  className="h-full bg-slate-400 dark:bg-slate-400 flex items-center justify-center transition-all duration-700 border-l border-white/20 overflow-hidden relative group"
                  style={{
                    width: `${
                      ((viewMetrics?.numUtilizedWC || 0) /
                        viewTotalVisualValue) *
                      100
                    }%`,
                  }}
                >
                  <span className="text-[10px] font-bold text-slate-900 truncate px-2 opacity-0 md:opacity-100">
                    WC
                  </span>
                </div>
              )}

              {viewMetrics?.numNewDebt > 0 && (
                <>
                  {viewMetrics?.activePrimaryDebt > 0 && (
                    <div
                      className="h-full bg-indigo-600 flex items-center justify-center transition-all duration-700 border-l border-white/20 overflow-hidden relative group"
                      style={{
                        width: `${
                          (viewMetrics.activePrimaryDebt /
                            viewTotalVisualValue) *
                          100
                        }%`,
                      }}
                    >
                      <span className="text-[10px] font-bold text-white truncate px-2 opacity-0 md:opacity-100">
                        {viewMetrics.primaryLabel}
                      </span>
                    </div>
                  )}
                  {viewMetrics?.activeSecondaryDebt > 0 && (
                    <div
                      className="h-full bg-purple-500 flex items-center justify-center transition-all duration-700 border-l border-white/20 overflow-hidden relative group"
                      style={{
                        width: `${
                          (viewMetrics.activeSecondaryDebt /
                            viewTotalVisualValue) *
                          100
                        }%`,
                      }}
                    >
                      <span className="text-[10px] font-bold text-white truncate px-2 opacity-0 md:opacity-100">
                        {viewMetrics.secondaryLabel}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4 w-full">
              <div className="flex flex-col justify-between p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50">
                <div className="text-[10px] text-indigo-700 dark:text-indigo-400 uppercase flex items-center gap-1.5 font-bold">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#4f46e5' }}
                  ></div>
                  {viewMetrics?.primaryLabel || 'Senior'}
                </div>
                <div className="font-mono font-bold text-sm text-indigo-800 dark:text-indigo-300 mt-1">
                  {formatCurrency(viewMetrics?.activePrimaryDebt)}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2.5 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/50">
                <div className="text-[10px] text-purple-700 dark:text-purple-400 uppercase flex items-center gap-1.5 font-bold">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#a855f7' }}
                  ></div>
                  {viewMetrics?.secondaryLabel || 'Sub-Debt'}
                </div>
                <div className="font-mono font-bold text-sm text-purple-800 dark:text-purple-300 mt-1">
                  {formatCurrency(viewMetrics?.activeSecondaryDebt)}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1.5 font-bold">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#64748b' }}
                  ></div>
                  Term Debt
                </div>
                <div className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200 mt-1">
                  {formatCurrency(viewMetrics?.numExistTermDebt)}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="text-[10px] text-slate-500 uppercase flex items-center gap-1.5 font-bold">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#94a3b8' }}
                  ></div>
                  Utilized WC
                </div>
                <div className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200 mt-1">
                  {formatCurrency(viewMetrics?.numUtilizedWC)}
                </div>
              </div>
              <div className="flex flex-col justify-between p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50">
                <div className="text-[10px] text-emerald-700 dark:text-emerald-500 uppercase flex items-center gap-1.5 font-bold">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#10b981' }}
                  ></div>
                  Implied Equity
                </div>
                <div className="font-mono font-bold text-sm text-slate-800 dark:text-slate-200 mt-1">
                  {formatCurrency(viewMetrics?.sponsorEquity)}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all w-full">
              <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
                Repayment Schedule
                <span className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-widest">
                  {viewMetrics?.activeAmortization || 'Bullet'}
                </span>
              </h4>
              <div className="h-40 w-full flex items-end gap-2 sm:gap-4 border-b border-slate-300 dark:border-slate-700 pb-1 relative mt-12 px-2">
                {(viewMetrics?.schedule || []).map((pmt, idx) => (
                  <div
                    key={idx}
                    className="flex-1 h-full flex flex-col justify-end items-center relative group"
                  >
                    {pmt.principalPct > 0 && (
                      <div className="absolute bottom-full mb-2 flex flex-col items-center w-full opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">
                          {Number(pmt.principalPct * 100).toFixed(0)}%
                        </span>
                        <span className="text-[9px] font-mono font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded shadow-sm border border-indigo-100 dark:border-indigo-800/50 hidden sm:block">
                          {formatCurrency(pmt.amount)}
                        </span>
                      </div>
                    )}
                    <div
                      className="w-full max-w-[80px] bg-indigo-500 dark:bg-indigo-600 rounded-t-sm transition-all duration-700 hover:bg-indigo-400 dark:hover:bg-indigo-500 cursor-pointer shadow-sm"
                      style={{
                        height: `${Math.max(pmt.principalPct * 100, 1)}%`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="w-full flex gap-2 sm:gap-4 pt-2 px-2 text-[10px] font-bold text-slate-500 font-mono">
                {(viewMetrics?.schedule || []).map((pmt, idx) => (
                  <div
                    key={idx}
                    className="flex-1 text-center truncate uppercase tracking-widest"
                  >
                    Y{pmt.year}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all flex flex-col w-full">
              <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
                Year 1 Cash Sweep Mechanism
              </h4>
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="relative">
                  <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    <span>1. Operating Cash Flow (OCF)</span>
                    <span className="font-mono">
                      {formatCurrency(viewMetrics?.waterfall?.ocf)}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    <span>
                      Less: Cash Interest (
                      {Number(viewMetrics?.blendedCashRate || 0).toFixed(1)}%)
                    </span>
                    <span className="font-mono text-rose-500">
                      ({formatCurrency(viewMetrics?.waterfall?.interest)})
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-end">
                    <div
                      className="h-full bg-rose-400"
                      style={{
                        width: `${Math.min(
                          100,
                          ((viewMetrics?.waterfall?.interest || 0) /
                            (viewMetrics?.waterfall?.ocf || 1)) *
                            100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    <span>Less: Scheduled Principal (Y1)</span>
                    <span className="font-mono text-rose-500">
                      ({formatCurrency(viewMetrics?.waterfall?.principal)})
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex justify-end">
                    <div
                      className="h-full bg-rose-500"
                      style={{
                        width: `${Math.min(
                          100,
                          ((viewMetrics?.waterfall?.principal || 0) /
                            (viewMetrics?.waterfall?.ocf || 1)) *
                            100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
                <div className="relative">
                  <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    <span>2. Excess Cash Flow (ECF)</span>
                    <span className="font-mono">
                      {formatCurrency(viewMetrics?.waterfall?.preSweep)}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex gap-4 items-center">
                  <div className="flex-1 text-center border-r border-slate-200 dark:border-slate-700">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {cashSweep}% Mandatory Sweep
                    </span>
                    <span
                      className={`block font-mono font-bold text-sm ${
                        (viewMetrics?.waterfall?.sweep || 0) > 0
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {formatCurrency(viewMetrics?.waterfall?.sweep)}
                    </span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Retained Liquidity
                    </span>
                    <span
                      className={`block font-mono font-bold text-sm ${
                        (viewMetrics?.waterfall?.retained || 0) > 0
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {formatCurrency(viewMetrics?.waterfall?.retained)}
                    </span>
                  </div>
                </div>
                {(viewMetrics?.waterfall?.preSweep || 0) <= 0 && (
                  <p className="text-[10px] text-rose-500 font-semibold text-center mt-1">
                    Warning: Operating cash flow does not cover base debt
                    service.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden w-full relative">
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-slate-800">
              <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Transaction Economics Bridge
              </h4>
            </div>
            {bridgeToast && (
              <div
                className={`absolute top-24 right-8 px-4 py-2 rounded-lg shadow-lg text-xs font-bold z-50 transition-opacity duration-300 animate-in fade-in slide-in-from-top-4 ${
                  bridgeToast.type === 'positive'
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'bg-rose-100 text-rose-700 border border-rose-200'
                }`}
              >
                {bridgeToast.message}
              </div>
            )}
            <div className="grid grid-cols-1 xl:grid-cols-12">
              <div className="xl:col-span-8 p-6 md:p-8 overflow-x-auto relative">
                <TransactionEconomicsBridge metrics={viewMetrics} />
              </div>
              <div className="xl:col-span-4 bg-slate-50 dark:bg-slate-900/50 border-t xl:border-t-0 xl:border-l border-slate-200 dark:border-slate-800 p-6 md:p-8">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-6">
                  Detailed Cost Breakdown
                </h4>
                <div className="space-y-4">
                  <details className="group border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                    <summary className="p-3.5 font-bold text-xs text-slate-800 dark:text-slate-200 cursor-pointer list-none flex justify-between items-center outline-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Icons.ArrowRight
                          size={14}
                          className="text-slate-400 group-open:rotate-90 transition-transform duration-300"
                        />
                        <span className="text-[10px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                          Commercial Pricing
                        </span>
                      </div>
                      <span className="font-mono text-rose-600 dark:text-rose-400">
                        -{' '}
                        {formatCurrency(
                          (viewMetrics?.bridge?.oidCost || 0) +
                            (viewMetrics?.bridge?.upfrontCost || 0) +
                            (viewMetrics?.bridge?.totalLifetimeInterest || 0) +
                            (viewMetrics?.bridge?.redemptionCost || 0)
                        )}
                      </span>
                    </summary>
                    <div className="p-4 pt-2 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithCoach
                          label="Original Issue Discount"
                          insightKey="OID"
                          onOpenInsight={openInsight}
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-rose-500">
                          - {formatCurrency(viewMetrics?.bridge?.oidCost || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithCoach
                          label="Upfront Processing Fee"
                          insightKey="UpfrontFee"
                          onOpenInsight={openInsight}
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-rose-500">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.upfrontCost || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700/50">
                        <LabelWithCoach
                          label="Total Cash Interest"
                          insightKey="Coupon"
                          onOpenInsight={openInsight}
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-amber-600">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.totalLifetimeInterest || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithCoach
                          label="Redemption Premium"
                          insightKey="Redemption"
                          onOpenInsight={openInsight}
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-purple-600">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.redemptionCost || 0
                          )}
                        </span>
                      </div>
                    </div>
                  </details>
                  <details className="group border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                    <summary className="p-3.5 font-bold text-xs text-slate-800 dark:text-slate-200 cursor-pointer list-none flex justify-between items-center outline-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Icons.ArrowRight
                          size={14}
                          className="text-slate-400 group-open:rotate-90 transition-transform duration-300"
                        />
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">
                          Other Transaction Costs
                        </span>
                      </div>
                      <span className="font-mono text-slate-600 dark:text-slate-400">
                        - {formatCurrency(viewMetrics?.bridge?.totalExec || 0)}
                      </span>
                    </summary>
                    <div className="p-4 pt-2 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 space-y-3">
                      <p className="text-[9px] text-slate-500 italic mb-2">
                        These are non-negotiated estimates.
                      </p>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithTooltip
                          label="Legal Documentation"
                          tooltip="Counsel for lender and borrower"
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-slate-500">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.execCosts?.legal || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithTooltip
                          label="Financial Due Diligence"
                          tooltip="Big 4 accounting DD report"
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-slate-500">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.execCosts?.fdd || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithTooltip
                          label="Trustee & Agency Fees"
                          tooltip="Security trustee and facility agent"
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-slate-500">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.execCosts?.trustee || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        <LabelWithTooltip
                          label="Stamp Duty & Registration"
                          tooltip="State stamp duty and ROC filing fees"
                          colorClass="text-slate-600 dark:text-slate-400"
                          sizeClass="text-[11px] font-medium"
                        />
                        <span className="font-mono text-slate-500">
                          -{' '}
                          {formatCurrency(
                            viewMetrics?.bridge?.execCosts?.stamp || 0
                          )}
                        </span>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center w-full pt-4 pb-12">
          <button
            onClick={handleGenerateAdvisory}
            className="w-full max-w-4xl bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-indigo-500/30 cursor-pointer group"
          >
            Confirm Structure & Generate Advisory Report{' '}
            <Icons.ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    );
  };

  // ============================================================================
  // [SECTION 10: RENDER - ADVISORY REPORT]
  // ============================================================================
  const renderAdvisoryView = () => (
    <div className="w-full max-w-[1400px] mx-auto space-y-8 animate-fade-in-up pb-12 relative z-10 print-container">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative z-50 no-print">
        <div className="flex items-center gap-3">
          <Icons.Briefcase size={24} className="text-indigo-500" />
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">
              {assessmentMode === 'sample'
                ? 'Educational Advisory Walkthrough'
                : 'Transaction Advisory Report'}
            </h2>
            <p className="text-xs text-slate-500">
              {assessmentMode === 'sample'
                ? 'Fictional case — learning use only'
                : `Readiness assessment for ${segment || sector} facility`}
            </p>
          </div>
        </div>
        <div className="flex w-full sm:w-auto gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-1 sm:flex-auto justify-center cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <Icons.Download size={16} /> Print Report
          </button>
          <button
            onClick={() => {
              setActiveView('outputs');
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors flex-1 sm:flex-auto justify-center cursor-pointer border border-indigo-100 dark:border-indigo-800 shadow-sm"
          >
            <Icons.ArrowRight size={16} className="rotate-180" /> Back to
            Structuring
          </button>
        </div>
      </div>
      <div className="hidden print:block mb-8 pb-4 border-b border-slate-300">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h1 className="text-3xl font-bold text-black tracking-tight">
              Investment Memorandum & Advisory
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Holistic risk & readiness assessment for {segment} operations.
              Confidential.
            </p>
          </div>
          <div className="text-right">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white ml-auto mb-2">
              <Icons.Activity size={24} />
            </div>
            <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
              Structured Credit Pricer
            </div>
          </div>
        </div>
      </div>
      {advisoryData && (
        <div className="space-y-8 w-full print-avoid-break">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full print:grid-cols-12">
            <div className="md:col-span-4 bg-white dark:bg-slate-900/80 print:bg-white p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none no-print"></div>
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-500 mb-6 flex items-center gap-2">
                  <Icons.Activity size={18} /> Credit Confidence Score
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-7xl font-black tracking-tighter ${
                      advisoryData.score >= 80
                        ? 'text-emerald-500 print:text-emerald-600'
                        : advisoryData.score >= 60
                        ? 'text-indigo-500 print:text-indigo-600'
                        : advisoryData.score >= 40
                        ? 'text-amber-500 print:text-amber-600'
                        : 'text-red-500 print:text-red-600'
                    }`}
                  >
                    {advisoryData.score}
                  </span>
                  <span className="text-2xl text-slate-400 font-bold">
                    / 100
                  </span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 print:text-slate-500 uppercase tracking-wider">
                  Execution Likelihood
                </span>
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-lg ${
                    advisoryData.score >= 80
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 print:bg-emerald-100 print:text-emerald-700'
                      : advisoryData.score >= 60
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 print:bg-indigo-100 print:text-indigo-700'
                      : advisoryData.score >= 40
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 print:bg-amber-100 print:text-amber-700'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 print:bg-red-100 print:text-red-700'
                  }`}
                >
                  {advisoryData.likelihood}
                </span>
              </div>
            </div>
            <div className="md:col-span-8 bg-slate-900 dark:bg-slate-950 print:bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-800 dark:border-slate-900 print:border-slate-200 shadow-xl print:shadow-sm text-white print:text-slate-900 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 print:text-slate-500 mb-6 flex items-center gap-2">
                  <Icons.Briefcase size={16} /> The Investor Perspective
                </div>
                <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-200 print:text-slate-800">
                  "{advisoryData.investorPerspective}"
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 w-full">
                <div className="bg-slate-800 dark:bg-slate-900 print:bg-white px-5 py-3 rounded-xl border border-slate-700 dark:border-slate-800 print:border-slate-200 flex-1">
                  <div className="text-[10px] text-slate-400 print:text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                    Target Facility
                  </div>
                  <div className="font-mono font-bold text-indigo-400 print:text-indigo-600 text-lg">
                    {formatCurrency(metrics?.numNewDebt)}
                  </div>
                </div>
                <div className="bg-slate-800 dark:bg-slate-900 print:bg-white px-5 py-3 rounded-xl border border-slate-700 dark:border-slate-800 print:border-slate-200 flex-1">
                  <div className="text-[10px] text-slate-400 print:text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                    Selected Structure
                  </div>
                  <div
                    className="font-bold text-indigo-400 print:text-indigo-600 text-lg truncate"
                    title={getAdvisoryStructures()[selectedOptionIndex]?.type}
                  >
                    {getAdvisoryStructures()[selectedOptionIndex]?.type}
                  </div>
                </div>
                <div className="bg-slate-800 dark:bg-slate-900 print:bg-white px-5 py-3 rounded-xl border border-slate-700 dark:border-slate-800 print:border-slate-200 flex-1">
                  <div className="text-[10px] text-slate-400 print:text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                    Base Rating
                  </div>
                  <div className="font-bold text-indigo-400 print:text-indigo-600 text-lg">
                    {advisoryData.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/80 print:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm w-full print-avoid-break">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Industry & Vintage
                </div>
                <div className="font-semibold text-slate-900 dark:text-white print:text-slate-900 text-sm">
                  {sector}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  Founded {foundedYear || 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Scale & Model
                </div>
                <div className="font-semibold text-slate-900 dark:text-white print:text-slate-900 text-sm">
                  {businessModel}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {customerCount ? customerCount.toLocaleString() : '0'} Active
                  Customers
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Cash Flow Trend
                </div>
                <div className="font-semibold text-slate-900 dark:text-white print:text-slate-900 text-sm">
                  {historicalTrend.split(' (')[0]}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  Leverage:{' '}
                  {Number((liveEconomics || metrics)?.leverage || 0).toFixed(2)}
                  x
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  Deal Dynamics
                </div>
                <div className="font-semibold text-slate-900 dark:text-white print:text-slate-900 text-sm">
                  {financingObjective}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {fundingUrgency}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full print-avoid-break">
            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 print:bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 print:border-emerald-200 h-full">
              <h3 className="text-base font-bold text-emerald-800 dark:text-emerald-400 print:text-emerald-800 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-emerald-200/50 dark:border-emerald-900/50 print:border-emerald-200 pb-3">
                <Icons.ShieldCheck size={20} /> Key Credit Strengths
              </h3>
              <ul className="space-y-5">
                {advisoryData.strengths.map((str, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 print:bg-emerald-100 flex items-center justify-center shrink-0">
                      <Icons.CheckCircle
                        size={14}
                        className="text-emerald-600 dark:text-emerald-400 print:text-emerald-600"
                      />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 print:text-slate-800 font-medium leading-relaxed">
                      {str}
                    </span>
                  </li>
                ))}
                {advisoryData.strengths.length === 0 && (
                  <li className="text-sm text-slate-500 italic p-4 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                    No significant outperforming strengths detected.
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-rose-50/50 dark:bg-rose-900/10 print:bg-rose-50/50 p-6 md:p-8 rounded-2xl border border-rose-100 dark:border-rose-900/30 print:border-rose-200 h-full">
              <h3 className="text-base font-bold text-rose-800 dark:text-rose-400 print:text-rose-800 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-rose-200/50 dark:border-rose-900/50 print:border-rose-200 pb-3">
                <Icons.AlertTriangle size={20} /> Concerns & Red Flags
              </h3>
              <ul className="space-y-5">
                {advisoryData.risks.map((risk, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 print:bg-rose-100 flex items-center justify-center shrink-0">
                      <Icons.X
                        size={14}
                        className="text-rose-600 dark:text-rose-400 print:text-rose-600"
                      />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 print:text-slate-800 font-medium leading-relaxed">
                      {risk}
                    </span>
                  </li>
                ))}
                {advisoryData.risks.length === 0 && (
                  <li className="text-sm text-slate-500 italic p-4 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                    No major red flags detected. Clean institutional profile.
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/80 print:bg-white p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm w-full print-avoid-break">
            <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Icons.TrendingUp
                size={20}
                className="text-indigo-600 dark:text-indigo-400 print:text-indigo-600"
              />{' '}
              Actionable Strategic Improvements
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 print:text-slate-500 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 print:border-slate-200">
              Executing these specific optimizations will immediately bolster
              transaction readiness and compress your ultimate cost of capital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {advisoryData.improvements.map((imp, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 print:bg-slate-50 border border-slate-100 dark:border-slate-700 print:border-slate-200 rounded-xl hover:border-indigo-200 transition-colors w-full"
                >
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 print:text-slate-800">
                    {imp.desc}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 print:text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 print:bg-emerald-100 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-sm border border-emerald-200/50 dark:border-emerald-800/50 print:border-emerald-200 ml-4 flex-shrink-0">
                    +{imp.bump} Pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // ============================================================================
  // [SECTION 11: MAIN RENDER & APP EXPORT]
  // ============================================================================
  return (
    <>
      <div
        className={`${theme} min-h-screen font-inter print:bg-white flex flex-col relative z-0`}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
          
          /* FORCE OVERRIDE STACKBLITZ/VITE WRAPPERS TO FIX FIXED POSITIONING */
          #root {
            max-width: 100vw !important;
            width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
            filter: none !important;
            overflow-x: clip !important;
          }

          .font-inter { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'JetBrains Mono', monospace !important; }
          .sleek-range { -webkit-appearance: none; appearance: none; background: transparent; cursor: pointer; outline: none; }
          .sleek-range::-webkit-slider-runnable-track { background: #e2e8f0; height: 4px; border-radius: 2px; transition: background 0.3s ease; }
          .dark .sleek-range::-webkit-slider-runnable-track { background: #334155; }
          .sleek-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 16px; width: 4px; background: #6366f1; border-radius: 4px; margin-top: -6px; transition: transform 0.1s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
          .sleek-range:active::-webkit-slider-thumb { transform: scaleY(1.3); }
          .sleek-range:disabled::-webkit-slider-thumb { background: #94a3b8; cursor: not-allowed; }
          .sleek-range.red-thumb::-webkit-slider-runnable-track { background: linear-gradient(to right, #f43f5e 0%, #e2e8f0 100%); }
          .dark .sleek-range.red-thumb::-webkit-slider-runnable-track { background: linear-gradient(to right, #e11d48 0%, #334155 100%); }
          .sleek-range.red-thumb::-webkit-slider-thumb { background: #e11d48; }
          .no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          .animate-marquee { animation: marquee 30s linear infinite; display: inline-flex; width: max-content; }
          .animate-marquee-reverse { animation: marquee-reverse 35s linear infinite; display: inline-flex; width: max-content; }
          .custom-scrollbar::-webkit-scrollbar { width: 6px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; } .dark .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #475569; }
          @media print {
            @page { size: portrait; margin: 0.5in; }
            body, html { background-color: white !important; color: black !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; padding: 0; }
            .no-print { display: none !important; } .print\\:block { display: block !important; } .print\\:flex { display: flex !important; } .print\\:grid { display: grid !important; } .print\\:hidden { display: none !important; }
            .print-container { zoom: 0.70; margin: 0 auto; width: 100%; max-width: 100%; overflow: visible; }
            .print\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } .print\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; } .print-col-span-12 { grid-column: span 12 / span 12 !important; }
            .print-avoid-break { page-break-inside: avoid; break-inside: avoid; }
            .shadow-xl, .shadow-lg, .shadow-sm, .shadow-md { box-shadow: none !important; border: 1px solid #e2e8f0 !important; }
            .dark\\:bg-slate-900\\/80, .dark\\:bg-slate-900, .bg-slate-900\\/80, .bg-slate-900 { background-color: white !important; }
            .dark\\:text-white, .text-white { color: #0f172a !important; } .dark\\:text-slate-200 { color: #1e293b !important; } .dark\\:text-slate-400 { color: #64748b !important; }
            .dark\\:border-slate-800, .dark\\:border-slate-700 { border-color: #e2e8f0 !important; } .dark\\:bg-slate-800\\/50 { background-color: #f8fafc !important; }
          }
        `,
          }}
        />

        <div className="flex-1 w-full min-w-0 flex flex-col relative z-0">
          <div className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-[1000] backdrop-blur-md shadow-sm no-print w-full">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
              <div
                className="cursor-pointer"
                onClick={() => setActiveView('landing')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Icons.Activity size={18} />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                      Private Credit Decision Lab
                    </h1>
                    <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mt-0.5">
                      Assess · Structure · Simulate · Prepare
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto justify-between md:justify-end">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
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
                    className={`px-4 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      currency === 'USD'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                  >
                    $ USD
                  </button>
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-4 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
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

          <div className="w-full mx-auto print:p-0 print:pt-0">
            {activeView === 'landing' && renderLandingView()}
            {activeView === 'samples' && renderSampleLibraryView()}
            {activeView === 'inputs' && (
              <div className="p-4 md:p-8 pt-0 w-full">{renderInputsView()}</div>
            )}
            {activeView === 'calculating' && (
              <div className="p-4 md:p-8 pt-8 w-full">
                {renderCalculatingView()}
              </div>
            )}
            {activeView === 'outputs' && (
              <div className="p-4 md:p-8 pt-8 w-full">
                {renderOutputsView()}
              </div>
            )}
            {activeView === 'calculating_advisory' && (
              <div className="p-4 md:p-8 pt-8 w-full">
                {renderCalculatingAdvisoryView()}
              </div>
            )}
            {activeView === 'advisory' && (
              <div className="p-4 md:p-8 pt-8 w-full">
                {renderAdvisoryView()}
              </div>
            )}
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 pt-12 pb-24 mt-auto relative z-0 no-print w-full">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
              <div className="bg-white dark:bg-slate-900 px-6 py-4 rounded-full border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors flex-wrap justify-center shadow-sm">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
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
              <p className="text-center mt-8 text-xs text-slate-400 dark:text-slate-600 max-w-2xl leading-relaxed">
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

      <InsightDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
        insightKey={activeInsight}
        context={activeView === 'outputs' ? workspaceStage : 'inputs'}
        visible={
          activeView === 'inputs' ||
          (activeView === 'outputs' &&
            (assessmentMode === 'sample' ||
              ['assess', 'simulate'].includes(workspaceStage)))
        }
      />

      {activeModal && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 no-print w-full"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 rounded-full transition-all cursor-pointer"
            >
              <Icons.X size={20} />
            </button>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                {MODAL_DICT[activeModal]?.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {MODAL_DICT[activeModal]?.title || activeModal}
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  The Concept
                </h4>
                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {MODAL_DICT[activeModal]?.desc}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  How It Works
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {MODAL_DICT[activeModal]?.mechanism}
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 p-4 rounded-xl mt-4">
                <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-2">
                  When To Use It
                </h4>
                <p className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
                  {MODAL_DICT[activeModal]?.scenario}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-8 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white rounded-xl font-bold transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
