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

var App = React.createClass({
    $this:null,
    statics: {
        get: function() {
            return $this.state.userInput;
        },
        set: function(data) {
            $this.setState({userInput: data});
        }
    },
    componentWillMount: function(){
        $this=this;
    },
    getInitialState: function() {
        return {userInput: ''};
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

var FilteredList = React.createClass({
    getInitialState: function(){
        return {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items: []
        }
    },
    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },
    filterList: function(event){
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    render: function(){
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        );
    }
});

var List = React.createClass({
    render: function(){
        return (
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

React.render(<FilteredList/>, document.getElementById('mount-point'));
React.render(<App/>, document.getElementById('app'));