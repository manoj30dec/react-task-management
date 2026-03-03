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


  const editTask=(id:string,e:MouseEvent<HTMLElement>)=>{
    e.stopPropagation();
    navigate(`/edit/${id}`)
  }
  const deleteWork=(id:string,user:string,todo:string,e:MouseEvent<HTMLElement>)=>{
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

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"  style={{ width: "4%" }}  className='text-center'>Sr. No.</th>
            <th scope="col" className="flex align-middle justify-center">
              Title
              <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('todo', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('todo', DESCENDING)}  />
                </span>
              <button onClick={() => sort('todo', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Reset</button>
            </th>
            <th scope="col" style={{ width: "12%" }}>
              <div
                className="flex align-middle justify-center"
              >
                Assigned                         
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('user', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('user', DESCENDING)}  />
                </span>
                <button onClick={() => sort('user', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Reset</button>
              </div>
            </th>
            <th scope="col" style={{ width: "12%" }}>
              <div className="flex align-middle justify-center">
                Status
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('status', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('status', DESCENDING)}  />
                </span>
                <button onClick={() => sort('status', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Reset</button>
              </div>
            </th>
            <th scope="col" style={{ width: "12%" }}>
              <div className="flex align-middle justify-center">
                Priority
                <span className="ml-1">
                  <IconUp width="14" height="14" className="cursor-pointer"  onClick={() => sort('priority', ASCENDING)}/>
                  <IconDown width="14" height="14" className="cursor-pointer" onClick={() => sort('priority', DESCENDING)}  />
                </span>
                <button onClick={() => sort('priority', DEFAULT)} className="ml-2 p-1 text-[10px] bg-gray-700">Reset</button>
              </div>
            </th>
            <th scope="col" style={{ width: "12%" }} className='text-center'>Start Date</th>
            <th scope="col" style={{ width: "12%" }} className='text-center'>End Date</th>
            <th scope="col" style={{ width: "12%" }} className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task: any) => (
            <tr key={task.id} onClick={()=>goToDetail(task.id)}>
              <td className='text-center'>{task.id}</td>
              <td>{task.todo}</td>
              <td>{task.user}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td className='text-center'>{task.startDate}</td>
              <td className='text-center'>{task.endDate}</td>
              <td>
                <div className='d-flex gap-4 justify-center'>
                  <img className='cursor-pointer' src="/edit_icon.svg" alt="Edit" title='Edit' onClick={(e)=>editTask(task.id,e)}  />
                  <img className='cursor-pointer' src="/delete_icon.svg" alt="Delete" title='Delete'  onClick={(e)=>deleteWork(task.id,task.user,task.todo,e)} />
                </div>

                {/* <button className="me-2" onClick={(e)=>editTask(task.id,e)}>Edit</button>
                <button  onClick={(e)=>deleteWork(task.id,task.user,task.todo,e)}>Delete</button> */}
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
