import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import AddTask from './AddTask'
import axios from 'axios';
export default function Layout() {

    // fetch all task here
    const[data,setData]=useState([]); 
    useEffect(()=>{

        // call fetch api using axios
        axios.get(`http://localhost:4000/add-task`).then((response)=>{
            setData(response.data);
        });

    },[data]);

  return (
    <Container className='p-5 bg-white border border-success border-3 w-50 mx-auto mt-5 anim'>
    <h1>
    To do List <button type='button' className='btn btn-dark text-white '>Total Task is  <span className='badge badge-danger bg-danger text-white'>{data.length}</span></button>



    <button type='button' className='btn btn-dark text-white  mt-0 ms-5' data-bs-toggle="modal" data-bs-target="#add-tsk">Add Task <span className='bi bi-list-task'></span></button>
    
    </h1>
    <hr />

    {/* reused add task modal */}
    <AddTask />

    {/* display all Task */}


     {data && data.map((row)=>{
       return (
        <>
    <Container  className='shadow mt-3 p-4'>
    <table className='table'>
        <tr>
            <td>{row.id}</td>
            <td>{row.taskname}</td>
            <td>{row.priority}</td>
            <td>{row.adddate}</td>
            <td><button type='button' className='btn btn-danger bg-danger text-white btn-sm'><span className='bi bi-trash'></span></button>  |  <button type='button' className='btn btn-primary bg-primary text-white btn-sm'><span className='bi bi-pencil'></span></button></td>
        </tr>
    </table>
    </Container>

        </>
       )         
     })}
   

    </Container>
  )
}
