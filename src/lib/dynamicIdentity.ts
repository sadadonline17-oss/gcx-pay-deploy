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
    root.style.setProperty('--dynamic-primary-h', `${h}`);
    root.style.setProperty('--dynamic-primary-s', `${s}%`);
    root.style.setProperty('--dynamic-primary-l', `${l}%`);
    root.style.setProperty('--dynamic-primary-hsl', `${h} ${s}% ${l}%`);
    root.style.setProperty('--dynamic-primary', `hsl(${h} ${s}% ${l}%)`);
    root.style.setProperty('--dynamic-primary-hover', `hsl(${h} ${s}% ${Math.max(l - 8, 0)}%)`);
    root.style.setProperty('--dynamic-primary-active', `hsl(${h} ${s}% ${Math.max(l - 16, 0)}%)`);
    root.style.setProperty('--dynamic-primary-highlight', `hsl(${h} ${Math.round(s * 0.3)}% ${Math.min(l + 38, 96)}%)`);
    console.log(`✅ Identity applied: hsl(${h}, ${s}%, ${l}%)`);
  } catch (err) {
    console.error('❌ HSL injection failed:', err);
  }
}

export function resetDynamicIdentity(): void {
  const props = [
    '--dynamic-primary-h','--dynamic-primary-s','--dynamic-primary-l',
    '--dynamic-primary-hsl','--dynamic-primary','--dynamic-primary-hover',
    '--dynamic-primary-active','--dynamic-primary-highlight',
  ];
  props.forEach(p => document.documentElement.style.removeProperty(p));
}
