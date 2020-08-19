import React, {useState} from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    msg : ""
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value
      };
    });
  };

const formSubmit = (e) => {
  e.preventDefault();
  alert(`full name is ${data.fullname}`)

}

  return (
   <>
   <div className="my-5">
     <h1 className="text-center"> Contact Us </h1>

   </div>
   <div className="container contact_div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
       <div className="mb-3">
       <label  className="form-label">Full Name</label>
       <input type="text" className="form-control"  
       name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter full name" />
       </div>

       <div className="mb-3">
       <label  className="form-label">Phone No.</label>
       <input type="number" className="form-control"  
       name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter phone no." />
       </div>

       <div className="mb-3">
       <label  className="form-label">Email address</label>
       <input type="email" className="form-control"  
       name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
       </div>

       <div className="mb-3">
       <label  className="form-label">Example textarea</label>
       <textarea className="form-control"  
       name="exaple" value={data.msg} onChange={InputEvent} rows="3"></textarea>
       </div>

       <div className="col-12">
       <button className="btn btn-outline-primary" type="submit" onClick={formSubmit}>Submit form</button>
       </div> 

       </div>
     </div>
   </div>
 
   </>
  );
}

export default Contact;
