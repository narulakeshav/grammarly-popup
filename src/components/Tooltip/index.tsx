/**
 * External Dependencies
 */
import axios from 'axios';
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { TooltipGif, TooltipWrapper } from './styles';

// Props
interface IProps {
	term: string;
	x: number;
	y: number
}

// State
interface IState {
	readonly apiKey: string;
	gifId?: string;
}

// GIPHY ENDPOINT
const ENDPOINT = '//api.giphy.com/v1/gifs/search';

/**
 * Tooltip Component
 */
class Tooltip extends React.PureComponent<IProps, IState> {
	public state: IState = {
		/* @TODO: Put [apiKey] in an .env file */
		apiKey: '8wQhCgonOEIzjUTlQwRYx36u1MUl5TEU',
		gifId: '',
	};

	/**
	 * On mount, if props has a term, make a GET
	 * request to Giphy and fetch the id of the
	 * first gif. Set id to state.
	 */
	public componentDidMount = async () => {
		const { apiKey } = this.state;
		const { term } = this.props;

		if (term !== '') {
			const URL = `${ENDPOINT}?q=${term}&api_key=${apiKey}`;
			const res = await axios.get(URL);

			const gifId = (res.status === 200 && res.data.data[0])
				? res.data.data[Math.floor(Math.random() * res.data.data.length)].id
				: 'mq5y2jHRCAqMo'; // window xp error dialog :p
			
			this.setState({
				gifId
			});
		}
	}

	/**
	 * Sets Tooltip image
	 * @param {string} term
	 */
	public setTooltip = (term: string): React.ReactElement<HTMLImageElement> => {
		const { gifId } = this.state;
		const SRC = `https://media.giphy.com/media/${gifId}/giphy.gif`;
		// @ts-ignore
		return <TooltipGif src={SRC} alt={term} />;
	}

	// Render
	public render() {
		const { term, x, y } = this.props;

		return (this.state.gifId !== '')
			? <TooltipWrapper top={y} left={x}>{this.setTooltip(term)}</TooltipWrapper>
			: null;
	}
}

// Export <Tooltip>
export default Tooltip;