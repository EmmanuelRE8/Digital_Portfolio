import { useState } from 'react';

// Mood + tips per node. Unknown paths fall back to the hub greeting.
const GUIDE = {
  '/': {
    mood: 'welcome',
    greeting: 'Ready to explore?',
    tips: [
      'Each card is a node in my neural network. Pick one to jump in.',
      'Those counters are live. Watch the DB streak keep climbing.',
      'Move your cursor across the background to light up the stars.',
    ],
  },
  '/project-lab': {
    mood: 'excited',
    greeting: 'Awesome projects here!',
    tips: [
      'Open any project to see its impact metrics.',
      'The BEATS system took BI effectiveness from 80% to 98%.',
      'Look for the academic projects below the professional ones.',
    ],
  },
  '/trophy-room': {
    mood: 'proud',
    greeting: 'Check out these achievements!',
    tips: [
      'Three degrees, three languages and a growing skill tree.',
      'Hover a trophy to make it glow.',
    ],
  },
  '/character-card': {
    mood: 'thinking',
    greeting: "That's the main character!",
    tips: [
      'Class: BI & Analytics Leader. Main stat: problem solving.',
      'Special abilities are the soft skills that unlock teams.',
    ],
  },
  '/comms': {
    mood: 'friendly',
    greeting: "Let's connect!",
    tips: [
      'Email is the fastest channel.',
      'Open to Data Analytics, BI and Data Science roles in Canada.',
    ],
  },
  '/neural-core': {
    mood: 'genius',
    greeting: 'Ask me anything!',
    tips: ['My full chat brain is still booting up. Phase 2 is coming.'],
  },
};

// Mouth shapes per mood (head is centered at 60,60)
const MOUTHS = {
  welcome: 'M48 70 Q60 80 72 70',
  excited: 'M46 68 Q60 86 74 68 Z',
  proud: 'M50 72 Q62 78 72 68',
  thinking: 'M52 73 L68 71',
  friendly: 'M47 69 Q60 82 73 69',
  genius: 'M48 70 Q60 78 72 70',
};

// DNA helix rungs around the avatar
const HELIX = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  const inner = 46;
  const outer = 56;
  const twist = Math.sin(i * 1.3) * 3;
  return {
    x1: 60 + (inner + twist) * Math.cos(angle),
    y1: 60 + (inner + twist) * Math.sin(angle),
    x2: 60 + (outer - twist) * Math.cos(angle),
    y2: 60 + (outer - twist) * Math.sin(angle),
  };
});

export default function MrCodeGuide({ currentPath = '/' }) {
  const guide = GUIDE[currentPath] ?? GUIDE['/'];
  const [tipIndex, setTipIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const tip = guide.tips[tipIndex % guide.tips.length];

  return (
    <div className={`mr-code-container${open ? ' open' : ''}`}>
      <button
        type="button"
        className="mr-code-fab"
        aria-expanded={open}
        aria-controls="mr-code-panel"
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">🧬</span>
        <span className="visually-hidden">{open ? 'Close Mr Code' : 'Open Mr Code'}</span>
      </button>

      <div id="mr-code-panel" className="mr-code-panel">
        <p className="map-title">// guide online</p>

        <svg
          className={`mr-code-sprite mood-${guide.mood}`}
          viewBox="0 0 120 120"
          role="img"
          aria-label={`Mr Code looking ${guide.mood}`}
        >
          <defs>
            <radialGradient id="mrcode-head" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1f2a4d" />
              <stop offset="100%" stopColor="#0d1330" />
            </radialGradient>
          </defs>
          <g className="mr-code-helix">
            <circle cx="60" cy="60" r="46" className="helix-strand helix-strand--a" />
            <circle cx="60" cy="60" r="56" className="helix-strand helix-strand--b" />
            {HELIX.map((rung, i) => (
              <line key={i} {...rung} className="helix-rung" />
            ))}
          </g>
          <circle cx="60" cy="60" r="36" fill="url(#mrcode-head)" className="mr-code-head" />
          <g className="mr-code-eyes">
            <ellipse cx="48" cy="54" rx="5" ry="6" />
            <ellipse cx="72" cy="54" rx="5" ry="6" />
          </g>
          {guide.mood === 'proud' && <path d="M66 44 L78 42" className="mr-code-brow" />}
          {guide.mood === 'thinking' && <path d="M42 45 L54 47" className="mr-code-brow" />}
          <path d={MOUTHS[guide.mood]} className="mr-code-mouth" />
          {guide.mood === 'genius' && <text x="60" y="30" textAnchor="middle" className="mr-code-spark">✦</text>}
        </svg>

        <h2 className="mr-code-name">Mr Code</h2>
        <p className="mr-code-greeting">{guide.greeting}</p>

        <div className="mr-code-tip" aria-live="polite">
          {tip}
        </div>

        <div className="mr-code-actions">
          {guide.tips.length > 1 && (
            <button type="button" className="mr-code-btn" onClick={() => setTipIndex(tipIndex + 1)}>
              Next tip →
            </button>
          )}
          <a href="/neural-core" className="mr-code-btn mr-code-btn--primary">
            Open chat
          </a>
        </div>
      </div>
    </div>
  );
}
