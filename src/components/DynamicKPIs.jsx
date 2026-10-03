import { useEffect, useState } from 'react';

// All reference dates are fixed instants in UTC so every visitor sees the same counters.
const BIRTH_DATE = new Date(Date.UTC(1990, 4, 2, 11, 30, 0)); // May 2, 1990 @ 11:30 AM
const FIRST_JOB = new Date(Date.UTC(2015, 3, 20)); // April 20, 2015 — Kauli
const DB_BREAK = new Date(Date.UTC(2021, 10, 12, 15, 0, 0)); // Nov 12, 2021 @ 3 PM

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_YEAR = MS_PER_DAY * 365.25;
const SCHOOL_START_AGE = 7;
const LEARNING_HOURS_PER_DAY = 8;

// Calendar difference broken into components (handles month lengths and leap years)
function calendarDiff(from, now) {
  let years = now.getUTCFullYear() - from.getUTCFullYear();
  let months = now.getUTCMonth() - from.getUTCMonth();
  let days = now.getUTCDate() - from.getUTCDate();
  let hours = now.getUTCHours() - from.getUTCHours();
  let minutes = now.getUTCMinutes() - from.getUTCMinutes();
  let seconds = now.getUTCSeconds() - from.getUTCSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const daysInPrevMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0)).getUTCDate();
    days += daysInPrevMonth;
    months--;
  }
  if (months < 0) { months += 12; years--; }

  return { years, months, days, hours, minutes, seconds };
}

function calculateLifePercent(now) {
  const ageInYears = (now - BIRTH_DATE) / MS_PER_YEAR;
  const yearsOfLearning = Math.max(0, ageInYears - SCHOOL_START_AGE);
  return ((yearsOfLearning * LEARNING_HOURS_PER_DAY) / (ageInYears * 24)) * 100;
}

function calculateDBStreak(now) {
  let diff = now - DB_BREAK;
  const days = Math.floor(diff / MS_PER_DAY);
  diff %= MS_PER_DAY;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function computeAll() {
  const now = new Date();
  return {
    age: calendarDiff(BIRTH_DATE, now),
    work: calendarDiff(FIRST_JOB, now),
    lifePercent: calculateLifePercent(now),
    dbStreak: calculateDBStreak(now),
  };
}

const pad = (n) => String(n).padStart(2, '0');

const LABELS = ['Time played (IRL)', 'Professional experience', 'Life spent learning & working', 'Days without breaking prod'];

export default function DynamicKPIs() {
  // Start empty so the static HTML matches the first client render (no hydration mismatch)
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    setKpis(computeAll());
    const interval = setInterval(() => setKpis(computeAll()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!kpis) {
    return (
      <div className="kpi-container" aria-busy="true">
        {LABELS.map((label) => (
          <div className="kpi-card" key={label}>
            <div className="kpi-label">{label}</div>
            <div className="kpi-value kpi-loading">--</div>
          </div>
        ))}
      </div>
    );
  }

  const { age, work, lifePercent, dbStreak } = kpis;

  return (
    <div className="kpi-container">
      <div className="kpi-card">
        <div className="kpi-label">⏱️ Time played (IRL)</div>
        <div className="kpi-value">
          {age.years}<span className="kpi-unit">y</span> {age.months}<span className="kpi-unit">m</span>{' '}
          {age.days}<span className="kpi-unit">d</span>
        </div>
        <div className="kpi-sub">
          {pad(age.hours)}:{pad(age.minutes)}:{pad(age.seconds)}
        </div>
      </div>

      <div className="kpi-card">
        <div className="kpi-label">💼 Professional experience</div>
        <div className="kpi-value">
          {work.years}<span className="kpi-unit">y</span> {work.months}<span className="kpi-unit">m</span>
        </div>
        <div className="kpi-sub">since Apr 2015 · Kauli</div>
      </div>

      <div className="kpi-card">
        <div className="kpi-label">🧠 Life spent learning &amp; working</div>
        <div className="kpi-value">
          {lifePercent.toFixed(1)}
          <span className="kpi-unit">%</span>
        </div>
        <div className="kpi-sub">8 h/day since age 7</div>
      </div>

      <div className="kpi-card kpi-card--achievement">
        <div className="kpi-label">🛡️ Days without breaking <code>prod</code></div>
        <div className="kpi-value">{dbStreak.days}</div>
        <div className="kpi-sub">
          +{pad(dbStreak.hours)}:{pad(dbStreak.minutes)}:{pad(dbStreak.seconds)} · zero rollbacks, no hotfix at 3 AM
        </div>
      </div>
    </div>
  );
}
