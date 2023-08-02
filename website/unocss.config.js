import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
  rules: [
    ['bg-pane', { 'background-color': '#0B122B' }],
    [
      /^h-lh(\d+)$/,
      ([, d]) => ({ height: `${d / 4}rem`, 'line-height': `${d / 4}rem` })
    ]
  ],
  shortcuts: [
    {
      // shortcuts to multiple utilities
      'box-unocss':
        'w-300px h-300px text-size-40px border-solid border-10 border-red-8 flex items-center justify-center'
    },
    [/^b-(.*)$/, ([, c]) => `border-${c} border-1 border-solid`],
    // dynamic shortcuts
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
  ]
});
