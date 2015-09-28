/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.09.2015
 * Time: 13:28
 */

'use strict';

var App = React.createClass({
    displayName: 'App',

    $this: null,
    componentWillMount: function componentWillMount() {
        $this = this;
    },
    statics: {
        get: function get() {
            return $this.state.userInput;
        },
        set: function set(data) {
            $this.setState({ userInput: data });
        }
    },

    getInitialState: function getInitialState() {
        return {
            userInput: '',
            items: []
        };
    },

    componentDidMount: function componentDidMount() {
        $.get(this.props.source, (function (response) {
            if (this.isMounted()) {
                this.setState({
                    items: response
                });
            }
        }).bind(this));
    },

    LoadMore: function LoadMore() {
        $.get('second.json', (function (response) {
            if (this.isMounted()) {
                this.setState({
                    items: $.merge(this.state.items, response)
                });
            }
        }).bind(this));
    },

    render: function render() {
        console.log(this.state.items);
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                { id: 'List' },
                this.state.items.map(function (item) {
                    return React.createElement(
                        'li',
                        null,
                        item.title,
                        ' ',
                        item.description,
                        ' ',
                        item.img
                    );
                })
            ),
            React.createElement(
                'button',
                { id: 'LoadMore', onClick: this.LoadMore },
                'Load More'
            )
        );
    }
});

// Mounting
if (typeof App != 'undefined') React.render(React.createElement(App, { source: 'first.json' }), document.getElementById('app'));

//# sourceMappingURL=app-compiled.js.map