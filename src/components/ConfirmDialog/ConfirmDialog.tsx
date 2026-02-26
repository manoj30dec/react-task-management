interface iConfirm {
    id?: string;
    user?:string;
    todo?:string;
    onClick?: (isConfirmed:boolean) => void;
  }
const ConfirmDialog: React.FC<iConfirm>= ({id,user,onClick}) => {
  return (
    <>
<div className="modal fade show" id="exampleModal" style={{display:'block'}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
        <button type="button" className="btn-close" onClick={() => onClick && onClick(false)} ></button>
      </div>
      <div className="modal-body">
        <h5 style={{lineHeight:'38px'}}>Are you sure you want to delete task of <span className="hightlight-red">{user}</span> task id <span className="text-red-700">{id}</span>?</h5>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => onClick && onClick(false)} >Cancel</button>
        <button type="button" className="btn btn-primary" onClick={() => onClick && onClick(true)}>Confirm Delete</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ConfirmDialog