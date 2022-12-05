module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [`standard`, `eslint:recommended`],
    overrides: [],
    parserOptions: {
        ecmaVersion: `latest`,
        sourceType: `module`
    },
    rules: {
        indent: [`error`, 4, { SwitchCase: 1 }],
        quotes: [`error`, `single`, { allowTemplateLiterals: true }],
        'no-useless-catch': 0
    }
}
