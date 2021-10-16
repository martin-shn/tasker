import React from 'react';

export class AddTask extends React.Component {
    state = {
        title: '',
        description: '',
        importance: 1,
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onAddTask = () => {
        this.props.onAddTask(this.state)
        this.setState({title:'', description:'', importance:1})
    }

    render() {
        return (
            <div className='add-task'>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input type='text' name='title' value={this.state.title} placeholder="Title" onChange={this.handleChange} />
                        </td>
                        <td>
                            <input type='text' name='description' value={this.state.description} placeholder="Description" onChange={this.handleChange} />
                        </td>
                        <td>
                            <select name='importance' value={this.state.importance} onChange={this.handleChange}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                        </td>
                        <td>
                            <input type='text' name='status' value='New' disabled />
                        </td>
                        <td></td>
                        <td>
                            <button onClick={this.onAddTask}>Add task</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
