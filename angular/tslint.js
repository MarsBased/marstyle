module.exports = {
  extends: ['@marsbased/marstyle-typescript'],
  rulesDirectory: ['codelyzer'],
  rules: {
    // Codelyzer
    'no-output-on-prefix': true,
    'no-inputs-metadata-property': true,
    'no-outputs-metadata-property': true,
    'no-host-metadata-property': true,
    'no-input-rename': true,
    'no-output-rename': true,
    'use-life-cycle-interface': true,
    'use-pipe-transform-interface': true,
    'component-class-suffix': true,
    'directive-class-suffix': true
  }
};
