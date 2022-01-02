import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'docttor apointment',
      date: 'feb 7th at 2:30pm',
    },
    {
      id: 2,
      text: 'sdafs apointment',
      date: 'feb 4th at 2:30pm',
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} onDelete={deleteTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <div className='notasks' >No Tasks To Show</div>
      )}
    </div>
  );
}

export default App;
