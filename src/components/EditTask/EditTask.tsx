import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTaskList, editTask } from '../../store/reducers/taskSlice';
interface TaskRecord {
  id: string;
  todo: string;
  user: string;
  email:string,
  status: string;
  priority: string;
  startDate: string;
  endDate: string;
}


const EditTask = () => {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch<any>();
  //const { tasksList, status, error } = useSelector((state: RootState) => state.tasks);
  const { tasksList, status } = useSelector((state: any) => state.tasks);
  const [record, setRecord] = useState<TaskRecord>({
    id: '',
    todo: '',
    user: ' ',
    email:'',
    status: '',
    priority: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTaskList());
    }
  }, [dispatch, status]);

  // set specific record
  // console.log(tasksList)
  useEffect(() => {
    const singleRecord = tasksList.find((task: TaskRecord) => {
      return String(task.id) === String(param.id);
    });
    if (singleRecord) {
      setRecord(singleRecord);
    }
  }, [tasksList]);
//   console.log(record);

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    dispatch(editTask(record))
    navigate("/")
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const {name, value} = event.target;
    setRecord((prevData:TaskRecord) => ({
        ...prevData,
        [name]: value,
    }));
  };
  return (
    <>
      <h1 className="heading1">Edit Task</h1>
      <form
        className="form-horizontal"
        name="taskAddEditForm"
        onSubmit={handleFormSubmit}
      >
        <div className="row">
          <div className="col">
            <label>Task Title</label>
            <input
              type="text"
              name="todo"
              id="todo"
              value={record?.todo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>User</label>
            <input
              type="text"
              name="user"
              id="user"
              value={record?.user}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={record?.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Status</label>
            <select name='status' id='status'
              onChange={handleChange}
              value={record?.status}
            >
              <option value="In-progress">In-progress</option>
              <option value="Under-review">Under-review</option>
              <option value="Done">Done</option>
              <option value="Open">Open</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Priority</label>
            <select
                name='priority'
                id='priority'
              onChange={handleChange}
              value={record.priority}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              defaultValue={record?.startDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Start Date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              defaultValue={record?.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditTask;
