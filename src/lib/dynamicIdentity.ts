import { hexToHsl } from './colorUtils';

export interface DynamicIdentity {
  primaryColor: string;
  name?: string;
}

export function applyDynamicIdentity(identity: DynamicIdentity): void {
  const root = document.documentElement;
  const { primaryColor } = identity;
  try {
    const { h, s, l } = hexToHsl(primaryColor);
    root.style.setProperty('--color-primary-h',        `${h}`);
    root.style.setProperty('--color-primary-s',        `${s}%`);
    root.style.setProperty('--color-primary-l',        `${l}%`);
    root.style.setProperty('--color-primary-hsl',      `${h} ${s}% ${l}%`);
    root.style.setProperty('--color-primary',          `hsl(${h} ${s}% ${l}%)`);
    root.style.setProperty('--color-primary-hover',    `hsl(${h} ${s}% ${Math.max(l - 8, 0)}%)`);
    root.style.setProperty('--color-primary-active',   `hsl(${h} ${s}% ${Math.max(l - 16, 0)}%)`);
    root.style.setProperty('--color-primary-highlight',`hsl(${h} ${Math.round(s * 0.3)}% ${Math.min(l + 38, 96)}%)`);
    console.log(`✅ Identity applied: hsl(${h}, ${s}%, ${l}%)`);
  } catch (err) {
    console.error('❌ HSL injection failed:', err);
  }
}

export function resetDynamicIdentity(): void {
  const props = [
    '--color-primary-h','--color-primary-s','--color-primary-l',
    '--color-primary-hsl','--color-primary','--color-primary-hover',
    '--color-primary-active','--color-primary-highlight',
  ];
  props.forEach(p => document.documentElement.style.removeProperty(p));
}
