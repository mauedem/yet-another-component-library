module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: [2, 4],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': [0],
        'no-restricted-syntax': [0],
        'no-useless-computed-key': [0],
        'no-underscore-dangle': [0],
        'prefer-rest-params': [0],
        'object-curly-newline': [0],
        'no-continue': [0],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],
};
