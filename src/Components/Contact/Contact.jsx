import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();
  const messageSent = ()=>{
    toast.success("Messsage has Sent!!")
    setTimeout(()=>{
      navigate('/',{replace:true});
    },3000);
  }
  return (
<>
<div className="hero bg-[#9538E2] text-white flex flex-col pb-4">
            <div className="max-w-5xl space-y-2 text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mt-12">Contact Page</h1>
              <p className="py-4 lg:max-w-3xl mx-auto">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
            </div>
      </div>
  <div className="max-w-4xl mx-auto mt-[-10px]">
    <div className="card bg-[#9538E2] w-full mx-auto shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
        <label className="fieldset-label text-white">Name</label>
        <input type="text" className="input w-full" placeholder="Name" />
          <label className="fieldset-label text-white">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          
          <label className="fieldset-label text-white">Message type</label>
          <select defaultValue="Pick a color" className="select w-full">
          <option disabled={false}>Message Type</option>
          <option>Report</option>
          <option>Feedback</option>
          <option>Application</option>
        </select>
          <label className="fieldset-label text-white">Message</label>
          <textarea className="textarea w-full" placeholder="Message"></textarea>
          
          <button className="btn btn-outline  btn-neutral mt-4" onClick={messageSent}>Sent</button>
        </fieldset>
      </div>
    </div>
  </div>

</>
  )
}

export default Contact
