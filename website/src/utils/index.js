// locale为md的路径文件名称 例如：about/about.md
export function importLocale(locale) {
  let modules = import.meta.glob('@/pages/*/*.md', {
    as: 'raw',
    eager: true
  });
  let content = modules[`/src/pages/${locale}`];
  return content;
}
