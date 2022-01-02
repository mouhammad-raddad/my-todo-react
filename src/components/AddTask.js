import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

const AddTask = ({ onAdd }) => {
	  const [text, setText] = useState('');
  const [date, onChange] = useState(new Date());

	  const onSubmit = (e) => {
      e.preventDefault();
      if (!text) {
        alert('please add a task');
        return;
      }
      onAdd({ text, date });

      setText('');
      onChange('');
    };
	
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <DateTimePicker  onChange={onChange} date={date} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask
