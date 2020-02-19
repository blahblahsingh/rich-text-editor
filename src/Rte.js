import React, {Component} from 'react';
import RichTextEditor from 'react-rte';

class MyStatefulEditor extends Component {
//   static propTypes = {
//     onChange: React.PropTypes.func
//   };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    console.log("Outside If", value.toString('html'));
    
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
        <section>
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChange}
            />
            <div>{this.state.value.toString('html')}</div>
        </section>

      
    );
  }
}

export default MyStatefulEditor;