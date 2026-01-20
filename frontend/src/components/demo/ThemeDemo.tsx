"use client";

/**
 * Theme Demo Component
 * Demonstrates the new theme system with CSS variables
 */

export function ThemeDemo() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-(--text-primary)">
          Theme System Demo
        </h1>
        <p className="text-(--text-secondary)">
          This component demonstrates the new CSS variable-based theme system.
          Toggle dark mode to see automatic color changes.
        </p>
      </div>

      {/* Text Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Text Colors</h2>
        <div className="space-y-2">
          <p className="text-(--text-primary)">
            Primary Text - Used for headings and important content
          </p>
          <p className="text-(--text-secondary)">
            Secondary Text - Used for body text and descriptions
          </p>
          <p className="text-(--text-tertiary)">
            Tertiary Text - Used for muted text and placeholders
          </p>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Brand Colors</h2>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-(--brand-primary) hover:bg-(--brand-primary-hover) text-white rounded-lg font-bold transition-colors">
            Primary Button
          </button>
          <div className="px-6 py-3 bg-(--brand-accent) text-white rounded-lg font-bold">
            Accent Color
          </div>
        </div>
      </section>

      {/* Surface Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Surface Colors</h2>
        <div className="space-y-4">
          <div className="p-6 bg-(--surface-primary) border border-(--surface-border) rounded-lg">
            <p className="text-(--text-primary) font-bold">Primary Surface</p>
            <p className="text-(--text-secondary)">Used for cards and containers</p>
          </div>
          <div className="p-6 bg-(--surface-secondary) border border-(--surface-border) rounded-lg">
            <p className="text-(--text-primary) font-bold">Secondary Surface</p>
            <p className="text-(--text-secondary)">Used for nested containers</p>
          </div>
        </div>
      </section>

      {/* Glass Effect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Glass Effect</h2>
        <div className="p-6 bg-(--glass-bg) backdrop-blur-xl border border-(--glass-border) rounded-lg">
          <p className="text-(--text-primary) font-bold">Glass Effect Card</p>
          <p className="text-(--text-secondary)">
            Automatically adapts to light/dark mode
          </p>
        </div>
      </section>

      {/* Status Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Status Colors</h2>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-(--status-success-bg) border border-(--status-success-border) rounded-lg">
            <p className="text-(--status-success-text) font-bold">Success</p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Usage Example</h2>
        <div className="p-6 bg-(--surface-primary) border border-(--surface-border) rounded-lg">
          <pre className="text-(--text-secondary) text-sm overflow-x-auto">
{`// ❌ Old way (not optimal)
<div className="text-slate-900 dark:text-slate-100">
  <p className="text-slate-500 dark:text-slate-400">...</p>
</div>

// ✅ New way (optimal)
<div className="text-(--text-primary)">
  <p className="text-(--text-secondary)">...</p>
</div>`}
          </pre>
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-(--text-primary)">Benefits</h2>
        <ul className="space-y-2 text-(--text-secondary)">
          <li>✅ No need to write <code className="text-(--brand-accent)">dark:</code> for every class</li>
          <li>✅ Automatic theme switching</li>
          <li>✅ Consistent design system</li>
          <li>✅ Easy to maintain and scale</li>
          <li>✅ Better performance (fewer classes)</li>
        </ul>
      </section>
    </div>
  );
}

