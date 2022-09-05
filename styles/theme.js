import { getContrast, readableColor, setLightness, shade } from "polished";
import { DefaultTheme } from "styled-components";

const theme = {
	colors: {
		gray: {
			main: '#565656',
			hover: setLightness(.4, '#565656'),
			text: '#FFF'
		},
		danger: {
			main: '#BA1F24',
			hover: setLightness(.5, '#BA1F24'),
			text: '#FFF'
		},
		error: {
			main: '#FF0F3A',
			hover: setLightness(.5, '#FF0F3A'),
			text: '#FFF'
		},
		jacksonsPurple: {
			main: '#233E94',
			hover: setLightness(.5, '#233E94'),
			text: '#FFF'
		},
		cyan: {
			main: '#00AAAC',
			hover: setLightness(.5, '#00AAAC'),
			text: '#FFF'
		},
		white: {
			main: '#FFF',
			hover: shade(.2, '#FFF'),
			text: '#565656'
		},
		eggYolk: {
			main: '#FEC210',
			hover: setLightness(.5, '#FEC210'),
			text: '#FFF'
		},
		blackPearl: {
			main: '#06131C',
			hover: setLightness(.5, '#06131C'),
			text: '#FFF'
		},
		black: {
			main: '#151515',
			hover: setLightness(.5, '#151515'),
			text: '#FFF'
		},
		purple: {
			main: '#8647AD',
			hover: setLightness(.5, '#8E37C4'),
			text: '#FFF'
		},
		veryDarkBlue: {
			main: '#0D1228',
			hover: setLightness(.5, '#0D1228'),
			text: '#FFF'
		},
		veryDarkViolet: {
			main: '#1e192c',
			hover: setLightness(.5, '#1e192c'),
			text: '#FFF'
		},
		magenta: {
			main: '#E4105D',
			hover: setLightness(.5, '#E4105D'),
			text: '#FFF'
		},
		martinique: {
			main: '#3B3450',
			hover: setLightness(.5, '#3B3450'),
			text: '#FFF'
		},
		mountainMeadow: {
			main: '#23DD7A',
			hover: setLightness(.5, '#23DD7A'),
			text: '#000'
		},
		wattle: {
			main: '#E5E044',
			hover: setLightness(.5, '#E5E044'),
			text: '#000'
		},
		java: {
			main: '#20d8d8',
			hover: setLightness(.5, '#20d8d8'),
			text: '#FFF'
		},
		grape: {
			main: '#421F65',
			hover: setLightness(.5, '#421F65'),
			text: '#FFF'
		},
		confettiYellow: {
			main: '#E5E145',
			hover: setLightness(.5, '#E5E145'),
			text: '#000'
		},
		starshipYellow: {
			main: '#F3EE4B',
			hover: setLightness(.5, '#F3EE4B'),
			text: '#000'
		},
		taupe: {
			main: '#373029',
			hover: setLightness(.5, '#373029'),
			text: '#FFF'
		},
		topaz: {
			main: '#8B8795',
			hover: setLightness(.5, '#8B8795'),
			text: '#000'
		},
		linkedin: {
			main: '#2867B2',
			hover: setLightness(.5, '#2867B2'),
			text: '#FFF'
		},
		facebook: {
			main: '#1877F2',
			hover: setLightness(.5, '#1877F2'),
			text: '#FFF'
		},
		twitter: {
			main: '#1DA1F2',
			hover: setLightness(.5, '#1DA1F2'),
			text: '#FFF'
		},
		youtube: {
			main: '#FF0000',
			hover: setLightness(.5, '#FF0000'),
			text: '#FFF'
		},
		instagram: {
			main: '#F00073',
			hover: setLightness(.5, '#F00073'),
			text: '#FFF'
		},
		whatsapp: {
			main: '#25D366',
			hover: setLightness(.5, '#25D366'),
			text: '#FFF'
		},
		email: {
			main: '#575364',
			hover: setLightness(.5, '#575364'),
			text: '#FFF'
		},
		codGray: {
			main: '#1D1D1D',
			hover: setLightness(.5, '#1D1D1D'),
			text: '#FFF'
		},
		pureBlack: {
			main: '#000',
			hover: setLightness(.5, '#000'),
			text: '#FFF'
		},
		carnation: {
			main: '#F34C5D',
			hover: setLightness(.5, '#F34C5D'),
			text: '#000'
		},
		tuna: {
			main: '#35353B',
			hover: setLightness(.5, '#35353B'),
			text: '#000'
		},
		charade: {
			main: '#282c35',
			hover: setLightness(.5, '#282c35'),
			text: '#000'
		},
		paleSky: {
			main: '#6C7381',
			hover: setLightness(.5, '#6C7381'),
			text: '#000'
		},
		shark: {
			main: '#19191E',
			hover: setLightness(.5, '#19191E'),
			text: '#000'
		},
		balticSea: {
			main: '#2E2C32',
			hover: setLightness(.5, '#2E2C32'),
			text: '#000'
		}
	},
	linearGradients: {
		darkPurpleToPurple: 'linear-gradient(270deg, #32214E -3.55%, #8747AF 100.21%)',
		verticalDaisyBush: 'linear-gradient(0deg, #1E192C 75%, #561B85 85%, #B873D9 95%)',
		veryDarkVioletToLightGreen: 'linear-gradient(270deg, #1E192C -2.26%, #40D3A1 104.14%)',
		magentaToVeryDarkPurple: 'linear-gradient(90deg, #E4105D -3.55%, #E4105D -3.54%, #2A2241 100.21%)',
		horizontalMagentaToWhite: 'linear-gradient(90deg, #E4105D -3.55%, #E4105D -3.54%, rgba(255, 255, 255, 0) 100.21%);',
		darkPurpleToYellow: 'linear-gradient(90deg, #2A2241 -2.26%, #E5E145 104.14%)',
		veryDarkVioletToCyan: 'linear-gradient(90deg, #1E192C -2.26%, #00FFFF 104.14%);',
		verticalVeryDarkVioletToLavender: 'linear-gradient(180deg, #1E192C 19.52%, #561B85 56.74%, #B873D9 95.58%)',
		verticalWattleToTransparentWattle: 'linear-gradient(0deg, #E5E044 0%, rgba(229, 224, 68, 0.63) 111.1%)',
		horizontalGrapeToDeluge: 'linear-gradient(90deg, #421F65 -2.26%, #B1A3D8 63.68%, #7160A0 104.14%)',
		verticalBlackToShark: 'linear-gradient(180deg,#010101 46.5%,#1E2128 182%)',
	},
	transforming: {
		elevation: `0 5px 10px rgba(0,0,0,0.20), 0 5px 6px rgba(0,0,0,0.10)`
	},
	typography: {
		strong: {
			color: '#0b0f21'
		},
		regular: {
			color: '#565656'
		}
	}
};

export default theme;


const getTexColor = (color) => {
	if (getContrast(color, '#FFF') > 2.5) { return '#FFF' };
	return readableColor(color);
}

export const getColor = (color) => {
	if (Object.keys(theme.colors).some((colorName) => colorName === color)) {
		return theme.colors[color];
	}

	return {
		main: color,
		hover: setLightness(0.6, color),
		text: getTexColor(color),
	};
}
