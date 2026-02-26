import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchTaskList, } from '../../store/reducers/taskSlice';
interface TaskRecord {
  id: string;
  todo: string;
  user: string;
  email:string,
  status: boolean;
  priority: string;
  startDate: string;
  endDate: string;
}


const TaskDetail = () => {
  const param = useParams();
  const dispatch = useDispatch<any>();
  const { tasksList, status } = useSelector((state: any) => state.tasks);
  const [record, setRecord] = useState<TaskRecord>({
    id: '',
    todo: '',
    user: ' ',
    email:'',
    status: false,
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
  useEffect(() => {
    const singleRecord = tasksList.find((task: TaskRecord) => {
      return String(task.id) === String(param.id);
    });
    if (singleRecord) {
      setRecord(singleRecord);
    }
  }, [tasksList]);




  return (
    <>
      <h1 className="heading1">Task Detail</h1>


<div className="card p-4">
  <div className="flex items-center gap-2 px-6">
    <h3 className="text-xl text-gray-800 font-bold flex-1">Assigned  to : {record.user}</h3>
  </div>
  <div className="px-6">
    <h3 className="text-xl text-gray-800 font-bold flex-1">Task : {record.todo}</h3>
    <h3 className="text-xl text-gray-800 font-bold flex-1">Status : {record.status?"Completed":"Pending"}</h3>
    <p>Prority : {record.priority}</p>
    <p>User email : <Link to={`mailto:${record.email}`}>{record.email}</Link></p>
    <p>Start date : {record.startDate}</p>
    <p>End Date : {record.endDate}</p>
  </div>
</div>
<br></br>
<Link to="/" className="btn btn-primary">Back to Dashboard</Link>




    </>
  );
};

export default TaskDetail;
