/**
 * External Dependencies
 */
import * as React from 'react';
import ReactTextarea from 'react-textarea-autosize';

/**
 * Internal Dependencies
 */
import { TextareaEl } from './styles';

// Props
interface IProps {
	setTerm: (term: string) => void;
	setCoordinates: (x: number, y: number) => void;
}

// State
interface IState {
	selected: string;
	value: string;
};

const INIT_VALUE = `Shakespeare Sonnet IV (4)\n
Unthrifty loveliness, why dost thou spend
Upon thyself thy beauty's legacy?
Nature's bequest gives nothing but doth lend,
And being frank she lends to those are free.
Then, beauteous niggard, why dost thou abuse
The bounteous largess given thee to give?
Profitless usurer, why dost thou use
So great a sum of sums, yet canst not live?
For having traffic with thyself alone,
Thou of thyself thy sweet self dost deceive.
Then how, when nature calls thee to be gone,
What acceptable audit canst thou leave?
Thy unused beauty must be tomb'd with thee,
Which, used, lives th' executor to be.`;

/**
 * Textarea Component
 */
class Textarea extends React.Component<IProps, IState> {
	public state: IState = {
		selected: '',
		value: INIT_VALUE,
	};

	// Ref
	public textarea: ReactTextarea;
	
	/**
	 * Set the value on change. Also, set term to empty string
	 * so that when a user is typing, the giphy tooltip is not
	 * shown.
	 * 
	 * @param e
	 */
	public onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		this.props.setTerm('');
		const { value } = e.currentTarget;
		this.setState({
			value
		});
	};

	/**
	 * On mouse [click] up, determine if the current textarea
	 * is the active element. If it is, get the selected string
	 * and set that as a term to the prop (setTerm). Also, grab
	 * x & y coordinate (of the cursor) to get idea about the 
	 * Tooltip positioning.
	 * @param e
	 */
	public onMouseUp = async (e: React.MouseEvent) => {
		// To use clientX & clientY
		e.persist();

		// If there is an active element
		if (document.activeElement) {
			const activeClassName = document.activeElement.className;
			const textarClassName = this.textarea.props.className;

			// If this textarea is active element, get text
			if (activeClassName === textarClassName) {
				const selection = window.getSelection;
				if (selection) {
					await this.setState({
						selected: selection().toString()
					});

					this.props.setTerm(this.state.selected);
					this.props.setCoordinates(e.clientX, e.clientY);
				}
			} else {
				this.props.setTerm('');
			}
		}
	}

	// Render
	public render() {
		return (
			<TextareaEl
				innerRef={(t: ReactTextarea) => this.textarea = t}
				placeholder="Add something here..."
				value={this.state.value}
				onChange={this.onChange}
				onMouseUp={this.onMouseUp}
			/>
		)
	}
};

// Export <Textarea>
export default Textarea;