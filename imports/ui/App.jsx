import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Require Editor JS files.
require('froala-editor/js/froala_editor.pkgd.min.js')($)
import 'froala-editor/css/froala_editor.pkgd.min.css'

import FroalaEditor from 'react-froala-wysiwyg'

const styles = {
  button: {
    margin: '1em',
    padding: '1em',
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
    width: '300px'
  }
}
// App component - represents the whole app
export default class App extends Component {
  getContent() {
    let content = $('textarea').froalaEditor('html.get')
    if (content) {
      console.log('content in \'textarea\' is ' + content)
    } else {
      console.log('nothing found; did you actually type something?')
    }
  }
  render() {
    return (
      <div className='mainApp'>
        <h1>Hello Froala!</h1>
        <FroalaEditor
          tag='textarea'
        />
        <div style={styles.button} onClick={this.getContent.bind(this)}>
          click here to log content of editor to console
        </div>
      </div>
    )
  }
}
