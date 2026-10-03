import { useState } from 'react';
import { NODES } from '../data/nodes.js';

const SIZE = 220;
const CENTER = SIZE / 2;
const RADIUS = 78;

// Nodes sit on a hexagon around the hub, starting at the top and going clockwise
const POSITIONS = NODES.map((_, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  return { x: CENTER + RADIUS * Math.cos(angle), y: CENTER + RADIUS * Math.sin(angle) };
});

// Ring connections + a few cross synapses for the neural-network look
const LINKS = [
  ...NODES.map((_, i) => [i, (i + 1) % NODES.length]),
  [0, 3],
  [1, 4],
];

export default function InteractiveMap({ currentPath = '/' }) {
  const [hovered, setHovered] = useState(null);
  const activeIndex = NODES.findIndex((node) => node.href === currentPath);
  const isHub = currentPath === '/';
  const focusIndex = hovered ?? activeIndex;

  const isLit = (a, b) => focusIndex !== -1 && (a === focusIndex || b === focusIndex);

  return (
    <nav className="interactive-map" aria-label="Neural network map">
      <p className="map-title">// neural map</p>

      <svg
        className="map-svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="group"
        aria-label="Network of nodes"
      >
        <g className="map-links">
          {POSITIONS.map((pos, i) => (
            <line
              key={`hub-${i}`}
              x1={CENTER}
              y1={CENTER}
              x2={pos.x}
              y2={pos.y}
              className={`map-line map-line--spoke${focusIndex === i ? ' lit' : ''}`}
            />
          ))}
          {LINKS.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={POSITIONS[a].x}
              y1={POSITIONS[a].y}
              x2={POSITIONS[b].x}
              y2={POSITIONS[b].y}
              className={`map-line${isLit(a, b) ? ' lit' : ''}`}
            />
          ))}
        </g>

        <a href="/" aria-label="Hub" aria-current={isHub ? 'page' : undefined}>
          <circle cx={CENTER} cy={CENTER} r="18" className={`map-hub${isHub ? ' active' : ''}`} />
          <text x={CENTER} y={CENTER + 3.5} textAnchor="middle" className="map-hub-label">
            HUB
          </text>
        </a>

        {NODES.map((node, i) => {
          const { x, y } = POSITIONS[i];
          const classes = [
            'map-node',
            i === activeIndex && 'active',
            i === hovered && 'hovered',
            !node.href && 'locked',
          ]
            .filter(Boolean)
            .join(' ');
          const content = (
            <g
              className={classes}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              <circle cx={x} cy={y} r="15" className="map-node-ring" />
              <text x={x} y={y + 5} textAnchor="middle" className="map-node-icon">
                {node.icon}
              </text>
              <title>{`Node ${node.id}: ${node.name}`}</title>
            </g>
          );
          return node.href ? (
            <a
              key={node.id}
              href={node.href}
              aria-label={`Node ${node.id}: ${node.name}`}
              aria-current={i === activeIndex ? 'page' : undefined}
            >
              {content}
            </a>
          ) : (
            <g key={node.id} aria-label={`Node ${node.id}: ${node.name} (locked)`}>
              {content}
            </g>
          );
        })}
      </svg>

      <p className="map-tooltip" aria-live="polite">
        {hovered !== null
          ? `Node ${NODES[hovered].id} · ${NODES[hovered].name}`
          : isHub
            ? 'You are at the hub'
            : activeIndex !== -1
              ? `You are in ${NODES[activeIndex].name}`
              : ' '}
      </p>

      <ul className="node-list">
        <li>
          <a href="/" className={`node-link${isHub ? ' active' : ''}`}>
            <span className="node-link-id">00</span> Hub
          </a>
        </li>
        {NODES.map((node, i) => (
          <li key={node.id}>
            {node.href ? (
              <a
                href={node.href}
                className={`node-link${i === activeIndex ? ' active' : ''}`}
                aria-current={i === activeIndex ? 'page' : undefined}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="node-link-id">{node.id}</span> {node.name}
              </a>
            ) : (
              <span className="node-link locked">
                <span className="node-link-id">{node.id}</span> {node.name} 🔒
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
