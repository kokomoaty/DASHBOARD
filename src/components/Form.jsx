import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'
import Spinner from './Spinner';
function Form() {
    const [loading,setLoading]=useState(false);
    const initialState={
        email:"",
        password:""
    };
    const [formData,setFormData]=useState(initialState)
    const {logInHandler,err}=useContext(userContext);
    const formHandler=()=>{
        setLoading(true);
        logInHandler(formData).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false);
        });
    }
  return (
    <div className='form'>
        <h2>Log In</h2>
        <form onSubmit={(e)=>{
            e.preventDefault();
            formHandler();
        }}>
            <div className="form-control">
                <label htmlFor="email">
                    email
                </label>
                <input type="email" id='email' name='email' onChange={(e)=>{setFormData({
                    ...formData,email:e.target.value
                })}}/>
            </div>
            <div className="form-control">
                <label htmlFor="password">password</label>
                <input type="password" id='password' name='password' 
                onChange={(e)=>{setFormData({
                    ...formData,password:e.target.value
                })}}/>
            </div>
            <div className="form-control">
                {
                    loading? <Spinner/> :
                    <input type="submit" value="Log In" className='submit-btn'/>
                }
            </div>
            {
                err?<p className='log-in-err'>{err}</p>:<></>
            }
        </form>
    </div>
  )
}

export default Form