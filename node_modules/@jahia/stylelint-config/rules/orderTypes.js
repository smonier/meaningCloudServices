module.exports = {
    'order/order': [
        {
            type: 'at-rule',
            name: 'include'
        },
        {
            type: 'at-rule',
            name: 'extend'
        },
        {
            type: 'at-rule',
            selector: '^/(?!@if$)(?!@else$)[a-z0-9]+$/'
        },
        'custom-properties',
        'dollar-variables',
        'declarations',
        {
            type: 'rule',
            selector: '/^&:[w-]+$/'
        },
        {
            type: 'rule',
            selector: '/^&::[w-]+$/'
        },
        {
            type: 'rule',
            selector: '/^&/'
        },
        {
            type: 'rule',
            selector: '/^./'
        },
        {
            type: 'rule'
        }
    ]
};
