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

var Select = React.createClass({
    getInitialState: function() {
        return {
            id:'filter-'+this.props.name
        };
    },

    render: function() {
        return (
            <div class="filter-select">
                <label>{this.state.id}</label>
                <select id="{this.state.id}" class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            userInput: '',
            items: []
        };
    },

    componentDidMount: function() {
        //$.get(this.props.source, function(response) {
        //    if (this.isMounted()) {
        //        this.setState({
        //            items: response
        //        });
        //    }
        //}.bind(this));
    },

    LoadMore: function(){
        //$.get('second.json', function(response) {
        //    if (this.isMounted()) {
        //        this.setState({
        //            items: $.merge(this.state.items,response)
        //        });
        //    }
        //}.bind(this));
    },

    render: function() {
        //console.log(this.state.items);
        return (
            <div id="SmartFilter">
                <Select name="theme" />
                <Select name="month" />
                <Select name="year" />
                <ul id="List">
                    {
                        this.state.items.map(function(item) {
                            return <li>{item.title} {item.description} {item.img}</li>
                        })
                    }
                </ul>
                <button id="LoadMore" onClick={this.LoadMore}>Load More</button>
            </div>
        );
    }
});

// Mounting
if(typeof App != 'undefined') React.render(<App source="first.json" />, document.getElementById('app'));

