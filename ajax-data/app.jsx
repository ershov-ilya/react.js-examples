/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.09.2015
 * Time: 13:28
 */

var App = React.createClass({
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
        return {
            userInput: '',
            items: []
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(response) {
            if (this.isMounted()) {
                this.setState({
                    items: response
                });
            }
        }.bind(this));
    },

    LoadMore: function(){
        $.get('second.json', function(response) {
            if (this.isMounted()) {
                this.setState({
                    items: $.merge(this.state.items,response)
                });
            }
        }.bind(this));
    },

    render: function() {
        console.log(this.state.items);
        return (
            <div>
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

