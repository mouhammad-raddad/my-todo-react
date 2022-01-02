


const Task = ({ task, onDelete }) => {
  return (
    <div className={'task'}>
      <h3>
        {task.text}
        <i className="del" onClick={() => onDelete(task.id)}>
          X
        </i>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
