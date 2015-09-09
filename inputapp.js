/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.09.2015
 * Time: 13:28
 */

/** @jsx React.DOM */

var InputApp = React.createClass({displayName: "InputApp",
    $this:null,
    componentWillMount: function(){
        $this=this;
    },
    statics: {
        get: function() {
            return $this.state.userInput;
        },
        set: function(data) {
            $this.setState({userInput: data});
        }
    },

    getInitialState: function() {
        return {userInput: 'paste here'};
    },
    handleChange: function(e) {
        this.setState({userInput: e.target.value});
    },
    clearAndFocusInput: function() {
        // Clear the input
        this.setState({userInput: ''}, function() {
            // This code executes after the component is re-rendered
            React.findDOMNode(this.refs.theInput).focus();   // Boom! Focused!
        });
    },
    render: function() {
        return (
            React.createElement("div", null,
                React.createElement("div", {onClick: this.clearAndFocusInput},
                    "Click to Focus and Reset"
                ),
                React.createElement("input", {
                        ref: "theInput",
                        value: this.state.userInput,
                        onChange: this.handleChange}
                )
            )
        );
    }
});

if(typeof InputApp != 'undefined') React.render(React.createElement(InputApp, null), document.getElementById('app'));