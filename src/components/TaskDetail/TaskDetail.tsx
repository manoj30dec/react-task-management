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


<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-lg rounded-lg font-[sans-serif] overflow-hidden mt-4">
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
<Link to="/" className=" px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700">Back to Dashboard</Link>




    </>
  );
};

export default TaskDetail;
