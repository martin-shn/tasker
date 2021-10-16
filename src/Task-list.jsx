export function TaskList({tasks, onStart}) {
    return (
        tasks.map((task,idx)=><tr key={task._id}>
            <td>{task.title}, {task.description}</td>
            <td>{task.importance}</td>
            <td>{task.doneAt?'Finished':task.triesCount>0?'Failed, Running':'New'}</td>
            <td>{task.triesCount}</td>
            <td>
                {(task.doneAt||task.triesCount===0)&&<button onClick={()=>{onStart(task._id,idx)}}>{task.doneAt||task.triesCount>0?'Restart':'Start'}</button>}
            </td>
        </tr>)
    );
}
