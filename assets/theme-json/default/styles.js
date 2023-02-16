export default {
    typography: {
        fontSize: 'var(--wp--preset--font-size--base)',
        fontFamily: 'var(--var(--wp--preset--font-family--sans-serif))'
    },
    elements: {
        h1: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--6-xl)',
                fontFamily: 'var(--wp--preset--font-family--sans-serif)',
                fontWeight: '700',
                lineHeight: 'var(--wp--custom--typography--line-height--tight)',
            },
        },
        h2: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--5-xl)',
                fontFamily: 'var(--wp--preset--font-family--sans-serif)',
                fontWeight: '700',
                lineHeight: 'var(--wp--custom--typography--line-height--tight)',
            },
        },
        h3: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--4-xl)',
                fontFamily: 'var(--wp--preset--font-family--sans-serif)',
                fontWeight: '300',
                lineHeight: 'var(--wp--custom--typography--line-height--tight)',
            },
        },
        h4: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--3-xl)',
                fontFamily: 'var(--wp--preset--font-family--serif)',
                fontWeight: '700',
                lineHeight: 'var(--wp--custom--typography--line-height--snug)',
            },
        },
        h5: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--2-xl)',
                fontFamily: 'var(--wp--preset--font-family--serif)',
                fontWeight: '700',
                lineHeight: 'var(--wp--custom--typography--line-height--snug)',
            },
        },
        h6: {
            typography: {
                fontSize: 'var(--wp--preset--font-size--1-xl)',
                fontFamily: 'var(--wp--preset--font-family--sans-serif)',
                fontWeight: '300',
                lineHeight: 'var(--wp--custom--typography--line-height--normal)',
            },
        },
    },
    link: {
        color: {
            text: 'var(--wp--preset--color--primary)',
        },
        ':hover': {
            color: {
                text: 'var(--wp--preset--color--secondary)',
            },
        },
    },
    blocks: {
        'core/button': {
            color: {
                text: 'var(--wp--preset--color--white)',
                background: 'var(--wp--preset--color--primary)',
            },
        },
        'core/post-content': {
            typography: {
                fontFamily: 'var(--wp--preset--font-family--sans-serif)'
            }
        },
        'core/site-title': {
            typography: {
                fontSize: 'var(--wp--preset--font-size--3-xl)'
            }
        }
    },
};
