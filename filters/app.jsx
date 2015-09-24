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
        switch(this.props.name){
            case 'theme':
                items=['managment', 'leadership'];
                break;
            case 'month':
                items=['jan', 'feb', 'mar'];
                break;
            case 'year':
                items=['2015','2016'];
                break;
        }

        return {
            id:'filter-'+this.props.name,
            items:items
        };
    },

    componentDidMount: function() {
        var $this=$(this);
        $this.addClass('test');
    },

    render: function() {
        var classBlock='filter-select col-xs-4',
            classSelect='form-control';

        return (
            <div className={classBlock}>
                <label>{this.state.id}</label>
                <select id={this.state.id} className={classSelect}>
                    {
                        this.state.items.map(function(item) {
                            return <option>{item}</option>
                        })
                    }
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
        var filterClass='',
            rowClass='row',
            btnClass='btn btn-primary';

        return (
            <div id="SmartFilter" className={filterClass}>
                <div className={rowClass}>
                    <Select name="theme" />
                    <Select name="month" />
                    <Select name="year" />
                </div>
                <div className={rowClass}>
                    <ul id="List">
                        {
                            this.state.items.map(function(item) {
                                return <li>{item.title} {item.description} {item.img}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={rowClass}>
                    <div className='col-xs-12 text-center'>
                        <button id="LoadMore" className={btnClass+' btn-lg'} onClick={this.LoadMore}>
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>&nbsp;
                             Load More
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

// Mounting
if(typeof App != 'undefined') React.render(<App source="first.json" />, document.getElementById('app'));

