/**
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import Textarea from './components/Textarea';
import Tooltip from './components/Tooltip';

// ICoordinate interface
interface ICoordinate {
  x: number;
  y: number;
}

// State
interface IState {
  selected: string;
  coords: ICoordinate;
}

/**
 * App Component
 */
class App extends React.Component<{}, IState> {
  public state: IState = {
    coords: { x: -1, y: -1 },
    selected: '',
  }

  /**
   * Sets the selected term from the textarea
   * @type {string} term
   */
  public setSelectedTerm = (term: string): void => {
    this.setState({
      selected: term
    });
  }
  
  /**
   * Sets the coordinates for the Tooltip positioning
   * @param {number} x
   * @param {number} y
   */
  public setCoordinates = (x: number, y: number): void => {
    this.setState({
      coords: { x, y }
    });
  }

  // Render
  public render() {
    const { selected, coords: { x, y } } = this.state;
    return (
      <div className="Text__Box">
        <h1>Giphy Tooltip Demo</h1>
        <Textarea setTerm={this.setSelectedTerm} setCoordinates={this.setCoordinates} />
        {(selected.trim().length > 0)
          ? <Tooltip term={selected} x={x} y={y} />
          : ''
        }
      </div>
    );
  }
}

// Render <App>
export default App;
