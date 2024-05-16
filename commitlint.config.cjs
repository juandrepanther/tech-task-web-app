module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [2, 'always', ['feat', 'remove', 'fix', 'refactor', 'cleanup', 'docs']],
  },
}
