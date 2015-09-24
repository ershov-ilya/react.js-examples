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

var InputApp = React.createClass({
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
            <div>
                <div onClick={this.clearAndFocusInput}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
});

if(typeof InputApp != 'undefined') React.render(<InputApp/>, document.getElementById('app'));