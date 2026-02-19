import { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskList, deleteTask } from '../../store/reducers/taskSlice';
import IconUp from '../Icons/IconUp';
import IconDown from '../Icons/IconDown';
import { ASCENDING, DESCENDING, DEFAULT } from '../../constant';
import {  useNavigate } from 'react-router-dom';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const { tasksList, status, error } = useSelector((state: any) => state.tasks);
  const [confirmDialog, setConfirmDialog] = useState({open:false,id:"",user:"",todo:""});
  const [task, setTask] = useState(tasksList);
  useEffect(() => {
    setTask(tasksList);
  }, [tasksList]);

  const sort = (property: string, order?: string) => {
    if(order===DEFAULT){
      setTask(tasksList)
      return 0;
    }else{
      const arrayForSort = [...task];
      arrayForSort.sort((a: any, b: any) => {
        const itemA = a[property]?.toUpperCase();
        const itemB = b[property]?.toUpperCase();
        if (order === ASCENDING) {
          if (itemA < itemB) {
            return -1;
          }
          if (itemA > itemB) {
            return 1;
          }
        } else if (order === DESCENDING) {
          if (itemA > itemB) return -1;
          if (itemA < itemB) return 1;
        }
        return 0;
      });
      setTask(arrayForSort);  
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTaskList());
    }
  }, [dispatch, status]);


  const editTask=(id:string,e:MouseEvent<HTMLButtonElement>)=>{
    e.stopPropagation();
    navigate(`/edit/${id}`)
  }
  const deleteWork=(id:string,user:string,todo:string,e:MouseEvent<HTMLButtonElement>)=>{
    e.stopPropagation()
    setConfirmDialog({
      open:true,
      id:id,
      user:user,
      todo:todo
    })
  }

  const isConfirmed=(confirmed:boolean)=>{
    setConfirmDialog({ ...confirmDialog, open: false });
    if(confirmed){
      dispatch(deleteTask(confirmDialog.id))
    }
  }


  const goToDetail=(id:string)=>{
    navigate(`/detail/${id}`)
  }
  

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      
      <h1 className='heading1'>Task List</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col" className="flex align-middle justify-center">
              Title
              <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('todo', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('todo', DESCENDING)}  />
                </span>
              <button onClick={() => sort('todo', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Default Sort</button>
            </th>
            <th scope="col">
              <div
                className="flex align-middle justify-center"
                
              >
                Assigned To 
                         
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('user', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('user', DESCENDING)}  />
                </span>
                <button onClick={() => sort('user', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Default Sort</button>
              </div>
            </th>
            <th scope="col">
              <div className="flex align-middle justify-center">
                Status
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('status', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('status', DESCENDING)}  />
                </span>
                <button onClick={() => sort('status', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Default Sort</button>
              </div>
            </th>
            <th scope="col">
              <div className="flex align-middle justify-center">
                Priority
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('priority', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('priority', DESCENDING)}  />
                </span>
                <button onClick={() => sort('priority', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Default Sort</button>
              </div>
            </th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task: any) => (
            <tr key={task.id} onClick={()=>goToDetail(task.id)}>
              <td className='text-red-800 font-bold'>{task.id}</td>
              <td>{task.todo}</td>
              <td className='text-red-800 font-bold'>{task.email}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>
                <button className="mr-2" onClick={(e)=>editTask(task.id,e)}>Edit</button>
                <button  onClick={(e)=>deleteWork(task.id,task.user,task.todo,e)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        confirmDialog.open && <ConfirmDialog id={confirmDialog.id} user={confirmDialog.user} todo={confirmDialog.todo} onClick={isConfirmed} />
      }
    </>
  );
};

export default DashBoard;
