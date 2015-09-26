/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.09.2015
 * Time: 13:28
 */

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
        console.log('Render event');
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

if(typeof FilteredList != 'undefined') {
    React.render(
        React.createElement(FilteredList, {}),
        document.getElementById('mount-point')
    );
}

// React.render(<FilteredList/>, document.getElementById('mount-point'));
