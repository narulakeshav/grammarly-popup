/**
 * External Dependencies
 */
import styled from 'styled-components';
import ReactTextrea from 'react-textarea-autosize';

/**
 * TextareaEl
 * @type ReactTextarea
 */
export const TextareaEl = styled(ReactTextrea)`
	background: white;
	resize: none;
	width: 100%;
	border-radius: 4px;
	box-shadow: none;
	border: none;
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	padding: 1rem;
	font: 400 16px 'SF Pro Text';
	line-height: 145%;

	&:focus {
		outline: 0;
	}
`;