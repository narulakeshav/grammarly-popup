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
	gifId: string;
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

			if (res.status === 200) {
				this.setState({
					gifId: res.data.data[0].id
				});
			}
		}
	}

	// Render
	public render() {
		const { term, x, y } = this.props;
		const { gifId } = this.state;
		const SRC = `https://media.giphy.com/media/${gifId}/giphy.gif`;

		return (
			// @ts-ignore
			<TooltipWrapper top={y} left={x}>
				<TooltipGif src={SRC} alt={term} />
			</TooltipWrapper>
		);
	}
}

// Export <Tooltip>
export default Tooltip;