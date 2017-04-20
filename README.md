
### Using Froala Editor with Meteor and React

#### Installation

    $ meteor create --bare MeteorReactFroala
    $ cd MeteorReactFroala/
    $ meteor npm install
    $ meteor npm install --save react react-dom
    $ meteor npm install --save react-froala-wysiwyg
    $ meteor add fortawesome:fontawesome

### Usage

Require and use Froala Editor component inside your application almost as described in the <a href="https://www.froala.com/wysiwyg-editor/docs/framework-plugins/react">Froala documentation</a>:

	import React, { Component } from 'react'
	import ReactDOM from 'react-dom'
	
	// Require Editor JS files.
	require('froala-editor/js/froala_editor.pkgd.min.js')($)
	import 'froala-editor/css/froala_editor.pkgd.min.css'
	
	import FroalaEditor from 'react-froala-wysiwyg'
	
	export default class App extends Component {
	  render() {
   		return (
        <div className='mainApp'>
          <FroalaEditor
            tag='textarea'
          />
        </div>
    	)   
    }
	}

Note two things:

1. you don't need require fontawesome, as we've added this as meteor package
2. `froala_editor.pkgd.min.js` needs the jQuery variable `($)` as argument when being required! Without this you'll get the infamous error message _Uncaught TypeError: this.$element.froalaEditor is not a function_. For more see <a href="https://github.com/froala/wysiwyg-editor/issues/931">issue 931</a>
