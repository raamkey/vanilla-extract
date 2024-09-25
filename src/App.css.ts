import { globalStyle, style } from '@vanilla-extract/css';
import { sprinkles } from './sprinkles.css.ts';

globalStyle('html, body', {
	margin: 0,
	color: '#fff',
	fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
	backgroundImage: 'linear-gradient(to bottom, #020917, #101725)'
});

export const contentStyle = style({
	display: 'flex',
	minHeight: '100vh',
	lineHeight: 1.1,
	textAlign: 'center',
	flexDirection: 'column',
	justifyContent: 'center'
});

export const headingStyle = style({
	fontSize: '3.6rem',
	fontWeight: 700
});

export const paragraphStyle = sprinkles({
	fontSize: '1.2rem',
	fontWeight: 400,
	opacity: 0.5
});
