module.exports = {
    'scss/at-rule-no-unknown': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
        'always',
        {
            except: [
                'first-nested',
                'after-comment',
                'after-dollar-variable'
            ]
        }
    ],
    'scss/double-slash-comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands']
        }
    ],
    'scss/declaration-nested-properties': 'never',
    'scss/no-duplicate-dollar-variables': [
        true,
        {
            ignoreInsideAtRules: ['if', 'else', 'each', 'at-rule']
        }
    ],
    'scss/operator-no-unspaced': true,
    'scss/selector-no-union-class-name': true
};
