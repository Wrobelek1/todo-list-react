import "./style.css"

const Tasks = ({tasks, hideDone, removeTask }) => (
    <ul className="tasks ">
        {tasks.map(task => (
            <li 
            className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}
            key={task.id}>
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
            </button>
               <span className={`"tasks__content${task.done ?
                 " tasks__item--done" : ""}`}>
                 {task.content}
                </span>
            <button 
            className="tasks__button tasks__button--remove"
            onClick={() => removeTask(task.id)}
            >
                🗑
            </button>
            </li>
        ))}
    </ul>
);

export default Tasks;