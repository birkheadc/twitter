import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <span>Nothin here but us what was the meme again?</span>
        }
        return (
            <ul>
                { this.state.tags.map(tag =>
                    <li key={tag}>
                        {tag}
                    </li>
                    )}
            </ul>
        );
    }
    
    render() { 
         return (
        <div>
            {this.renderTags()}
            <button onClick={this.handleIncrement} className="btn bg-secondary text-light">Increment</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const count = this.state.count;
        return count === 0 ? 'Empty' : count;
    }
}
 
export default Counter;