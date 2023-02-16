export default {
    "appearanceTools": true,
    "layout": {
        "contentSize": "840px",
        "wideSize": "1100px"
    },
    color: {
        custom: false,
        customGradient: false,
        defaultPalette: false,
        palette: [
            {
                slug: 'primary',
                color: '#0d3b66',
                name: 'Primary Blue',
            },
            {
                slug: 'secondary',
                color: '#ee964b',
                name: 'Secondary',
            },
            {
                slug: 'white',
                color: '#ffffff',
                name: 'White',
            },
            {
                slug: 'black',
                color: '#333333',
                name: 'Black',
            },
        ],
        gradients: [
            {
                slug: 'gradient',
                gradient: 'linear-gradient(45deg, var(--wp--preset--color--secondary), var(--wp--preset--color--primary))',
                name: 'Gradient',
            },
        ],
    },
    typography: {
        customFontSize: false,
        dropCap: false,
        fontWeight: false,
        fontStyle: false,
        textTransform: false,
        textDecoration: false,
        fontFamilies: [
            {
                fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell, "Helvetica Neue",sans-serif',
                slug: 'sans-serif',
                name: 'Sans Serif',
            },
            {
                fontFamily: '"Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", "Droid Serif", Times, "Source Serif Pro", serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                slug: 'serif',
                name: 'Serif',
            },
            {
                fontFamily: 'Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace',
                slug: 'mono',
                name: 'Monospace',
            },
        ],
        fontSizes: [
            {
                slug: 'base',
                size: '1rem',
                name: 'base',
            },
            {
                slug: 'lg',
                size: '1.125rem',
                name: 'lg',
            },
            {
                slug: 'xl',
                size: '1.25rem',
                name: 'xl',
            },
            {
                slug: '2xl',
                size: '1.5rem',
                name: '2xl',
            },
            {
                slug: '3xl',
                size: '1.875rem',
                name: '3xl',
            },
            {
                slug: '4xl',
                size: '2.25rem',
                name: '4xl',
            },
            {
                slug: '5xl',
                size: '3rem',
                name: '5xl',
            },
            {
                slug: '6xl',
                size: '3.75rem',
                name: '6xl',
            },
            {
                slug: '7xl',
                size: '4rem',
                name: '7xl',
            },
        ],
    },
    custom: {
        typography: {
            'line-height': {
                none: 1,
                tight: 1.25,
                snug: 1.375,
                normal: 1.75,
                relaxed: 1.625,
                loose: 2,
            },
        },
    },
    blocks: {
        'core/button': {
            border: {
                color: false,
                radius: false,
                style: false,
                width: false,
            },
            color: {
                text: false,
                background: false,
                customDuotone: false,
                customGradient: false,
                defaultDuotone: false,
                defaultGradients: false,
                duotone: [],
                gradients: [],
                palette: [],
            },
            typography: {
                fontSizes: [],
                fontFamilies: [],
            },
        },
        'core/heading': {
            color: {
                text: false,
                background: false,
            },
            typography: {
                fontSizes: [],
                fontFamilies: [],
                letterSpacing: false,
            },
        },
    },
};
