import './App.css';
import React from 'react'
import { TaskApp } from './views/Task-app'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <TaskApp/>
            </div>
        )
    }
}


