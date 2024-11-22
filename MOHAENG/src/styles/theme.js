const defaultTheme = {
    color: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#0A70C9',
        primary2: '#1650A9',
        primary3: '#00ADEE',
        blue1: '#BDE5FF',
        blue2: '#17A1FA',
        gray1: '#F3F3F3',
        gray2: '#6E6E6E',
        gray3: '#DFDFDF',
        gray4: '#595959',
        gray5: '#D9D9D9',
        gray6: '#E3E3E3',
        gray7: '#676767',
        gray8: '#858585',
        gray9: '#2E2E2E',
        gray10: '#f1f1f1',
        gray11: '#F0F0F0',
        gray12: '#525252',
        gray13: '#949494',
    },
    font: {
        pretendard: `'Pretendard', sans-serif`,
    },
};

const highContrastTheme = {
    color: {
        white: '#000000', // 흰색 -> 검은색
        black: '#00FFFF', // 검은색 -> 청록색
        primary: '#00FFFF', // primary 색상도 청록색
        primary2: '#00AAAA',
        primary3: '#00EEEE',
        blue1: '#005555',
        blue2: '#00BBBB',
        gray1: '#222222',
        gray2: '#EEEEEE',
        gray3: '#111111',
        gray4: '#CCCCCC',
        gray5: '#BBBBBB',
        gray6: '#AAAAAA',
        gray7: '#DDDDDD',
        gray8: '#FFFFFF',
        gray9: '#FFFFFF',
        gray10: '#444444',
        gray11: '#555555',
        gray12: '#FFFFFF',
        gray13: '#FFFFFF',
    },
    font: {
        pretendard: `'Pretendard', sans-serif`,
    },
};

const themes = {
    default: defaultTheme,
    highContrast: highContrastTheme,
};

export default themes;
