import { extendTheme } from "native-base";

export const theme = extendTheme({
    colors: {
        // Basic Colors
        white: '#FFFFFF',
        black: '#000000',

        primary: {
            50: '#E0F1FF',
            100: '#B3DBFF',
            200: '#80C4FF',
            300: '#4DACFF',
            400: '#269AFF',
            500: '#0088FF',
            600: '#0D7BFE',
            700: '#0075FF',
            800: '#006BFF',
            900: '#0058FF',
        },
        secondary: {
            50: '#E0F1FF',
            100: '#B3DBFF',
            200: '#80C4FF',
            300: '#4DACFF',
            400: '#269AFF',
            500: '#0088FF',
            600: '#0D7BFE',
            700: '#0075FF',
            800: '#006BFF',
            900: '#0058FF',
        },
        success: {
            50: '#E4F9E3',
            100: '#BCDABA',
            200: '#90C18C',
            300: '#63A85D',
            400: '#41953B',
            500: '#208218',
            600: '#1C7A15',
            700: '#186F11',
            800: '#13650E',
            900: '#0B5208',
        },
        info: {
            50: '#F2F9FF',
            100: '#E0F0FF',
            200: '#CBE7FF',
            300: '#B6DDFF',
            400: '#A6D5FF',
            500: '#96CEFF',
            600: '#8EC9FF',
            700: '#83C2FF',
            800: '#79BCFF',
            900: '#68B0FF',
        },
        warning: {
            50: '#FFF9EB',
            100: '#FEF1CE',
            200: '#FDE8AD',
            300: '#FCDF8C',
            400: '#FCD874',
            500: '#FBD15B',
            600: '#FACC53',
            700: '#FAC649',
            800: '#F9C040',
            900: '#F9B52F',
        },
        error: {
            50: '#FFE0E0',
            100: '#F9DEDD',
            200: '#FD8080',
            300: '#FC4D4D',
            400: '#FC2626',
            500: '#FB0000',
            600: '#FA0000',
            700: '#EE0202',
            800: '#E00202',
            900: '#D50000',
        },

        gray: {
            50: '#F1F1F1',
            100: '#EEEEEE',
            200: '#E4E4E4',
            300: '#E0E0E0',
            400: '#CCCCCC',
            600: '#BCBCBC',
            800: '#5B5B5B',
        }
    },

    sizes: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px',
        '16': '68px',
        '20': '80px',
        '24': '94px',
        '32': '110px',
        '40': '160px',
        '48': '192px',
        '56': '224px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
        'px': '1px',
        '0.5': '2px',
        '1.5': '6px',
        '2.5': '10px',
        '3.5': '14px',
        '3xs': '224px',
        '2xs': '256px',
        'xs': '320px',
        'sm': '384px',
        'md': '448px',
        'lg': '512px',
        'xl': '576px',
        '2xl': '672px',
    },

    fontConfig: {
        Raleway: {
            100: {
                normal: 'Raleway-Regular'
            },
            200: {
                normal: 'Raleway-Regular',
            },
            300: {
                normal: 'Raleway-Regular',
            },
            400: {
                normal: 'Raleway-Regular',
            },
            500: {
                normal: 'Raleway-Medium',
            },
            600: {
                normal: 'Raleway-Bold',
            },
        },
    },
    fonts: {
        heading: 'Raleway',
        body: 'Raleway',
        mono: 'Raleway',
    },

    fontSizes: {
        'xxs': 10,
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
    },
    fontWeights: {
        thinner: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 600
    },
    components: {
        Text: {
            baseStyle: {
                color: 'black',
                fontWeight: 'normal',
                fontSize: 'md',
                lineHeight: '24px'
            },
        },
    },
});