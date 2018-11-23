import React from 'react'
import Task from './Task'


const List = (props) => (
    <div>
        {
            props.tasksList &&
            props.tasksList.map &&
            props.tasksList.map(
                task => (
                    <Task
                        key={task.key}
                        task={task}
                    />

                )
            )

        }

    </div>
)

export default List