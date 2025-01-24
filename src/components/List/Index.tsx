import React from "react";


function List() {
    // Lista
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'JavaScript',
        time: '01:00:00'
    },
    {
        task: 'TypeScript',
        time: '03:00:00'
    }
]

    return (
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((item, i) => (
                    <li key={i}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
};

export default List;