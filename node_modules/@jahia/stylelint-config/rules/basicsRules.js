module.exports = {
    indentation: 4,
    // Is Disabled to allow scss at-rules (@include, @if, @else ...)
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: [
                'blockless-after-same-name-blockless',
                'after-comment'
            ],
            ignoreAtRules: ['if', 'else']
        }
    ],
    // Mandatory to be used with order/oder
    'declaration-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: [
                'after-comment',
                'after-declaration',
                'inside-single-line-block'
            ]
        }
    ],
    'font-family-name-quotes': 'always-unless-keyword',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'value-keyword-case': 'lower',
    'comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands']
        }
    ],
    'max-nesting-depth': 3
};
