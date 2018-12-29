/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * TooltipWrapper
 * @type div
 */
export const TooltipWrapper = styled.div`
	position: absolute;
	top: ${(props) => `calc(${props.top}px + 15px)`};
	left: ${(props) => `calc(${props.left}px - 250px)`};
	background: #FFFFFF;
	box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	padding: 0.75rem;
`;

/**
 * TooltipGif
 * @type div
 */
export const TooltipGif = styled.img`
	min-width: 500px;
	max-width: 500px;
`;