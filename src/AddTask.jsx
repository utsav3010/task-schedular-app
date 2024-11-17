import React,{useRef} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function AddTask() {
    // add task call api 
    const taskname=useRef("");
    const priority=useRef("");
    const adddate=useRef("");
    const Navigate=useNavigate();
    // create a addEvent Handeler Form to add data
    const addTaskFormData=(e)=>{
        e.preventDefault();
        var insert={
            taskname:taskname.current.value,
            priority:priority.current.value,
            adddate:adddate.current.value
            
        }

        // call api to add data in data.json 
        axios.post(`http://localhost:4000/add-task`,insert).then(()=>{
            Swal.fire({
                title: "Good job!",
                text: "Your task succesfully Addedd!",
                icon: "success"
              });

              Navigate('/');
        });

        e.target.reset();
    } 
  return (
    <div>
      
      <div className='modal fade' role='dialog' id='add-tsk'>
        <div className='modal-dialog'>
            <div className='modal-content p-5 bg-white'>
              <h2>Add task here</h2>
              <hr />
                <form onSubmit={addTaskFormData}>
                    <div className='form-group mt-4'>
                        <input type='text' ref={taskname} placeholder='Enter Task Name *' className='form-control' />
                    </div>

                    
                    <div className='form-group mt-4'>
                        <select ref={priority}  placeholder='Enter Task Priority *' className='form-control'>
                            <option value="">-select priority-</option>
                            <option value="Top priority">Top priority</option>
                            <option value="Low priority">Low priority</option>
                        </select>
                    </div>

                    <div className='form-group mt-4'>
                        <input type='date' ref={adddate} placeholder='Enter Date *' className='form-control' />
                    </div>

                    <div className='form-group mt-4'>
                        <input type='submit' className='btn btn-dark bg-dark text-white' value="AddTask" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
