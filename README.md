# Giphy Grammarly
This was actually really fun. Learning how to use the `getSelection()` method from the `window` global object was exciting and something new. This is definitely work in progress.

This was a challenge by Grammarly.

![Grammarly Popup Screenshot GIF](https://i.imgur.com/7vGVncY.gif)

## Logic

```js
// src/Textarea/index.tsx
public onMouseUp = async (e: React.MouseEvent) => {
  // To use clientX & clientY
  e.persist();

  // If there is an active element
  if (document.activeElement) {
    // get class of active & textarea element
    const activeClassName = document.activeElement.className;
    const textarClassName = this.textarea.props.className;

    // If this textarea is active element, get text
    if (activeClassName === textarClassName) {
      const selection = window.getSelection;
      if (selection) {
        // if something is selected in windows, set that
        // as the [selected] in state.
        await this.setState({
          selected: selection().toString()
        });
    
        // set term & set coordinates
        this.props.setTerm(this.state.selected);
        this.props.setCoordinates(e.clientX, e.clientY);
      }
    } else {
      this.props.setTerm('');
    }
  }
}
```
