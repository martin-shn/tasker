import React from 'react';
import { AddTask } from '../cmps/Add-task';
import { Header } from '../cmps/Header';
import { taskService } from '../services/task.service';
import { TaskList } from '../Task-list';

import { socketService } from '../services/socket.service';

export class TaskApp extends React.Component {
    state={
        tasks: null
    }

    componentDidMount() {
        this.loadTasks()
        // socketService.setup();
        // socketService.on('task-done', this.loadTasks)
    }
    

    loadTasks = async () => {
        this.setState({tasks: await taskService.query()})
    }

    onAddTask = async (task) => {
        console.log('task : ', task);
        await taskService.add(task)
        this.loadTasks()
    }

    onStart = async (taskId, idx) => {
        await taskService.startTask(taskId)
        this.loadTasks()
    }

    render() {
        console.log('tasks : ', this.state.tasks);
        if (!this.state.tasks) return <></>
        return (
            <div className='App'>
                <Header/>
                <div>
                    <AddTask onAddTask={this.onAddTask}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Importance</th>
                                <th>Status</th>
                                <th>Tries</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TaskList tasks={this.state.tasks} onStart={this.onStart} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
