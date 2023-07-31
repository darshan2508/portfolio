import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtype, setJobtype] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtype,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        setName("");
        setEmail("");
        setJobtype("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <div className="container contact-section" id="contact">
    //   <div className="row">
    //     <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
    //       {
    //         <div className="contact-form-image">
    //           <img
    //             src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600"
    //             alt="contact form"
    //           />
    //         </div> }
    //     </div>
    //     <Fade right>
    //       <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
    //         <div className="contact-form-design">
    //           <div className="text-center">
    //             <h3>Contact Me</h3>
    //           </div>
    //           <form>
    //             <div className="contact-form">
    //               <label className="form-label">Name</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //               />
    //             </div>

    //             <div className="contact-form">
    //               <label className="form-label">E-mail</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //             </div>

    //             <div className="contact-form">
    //               <label className="form-label">Job Types</label>
    //               <select
    //                 className="custom-select-tag"
    //                 value={jobtype}
    //                 onChange={(e) => setJobtype(e.target.value)}
    //               >
    //                 <option>Full-time</option>

    //                 <option>Working student</option>

    //                 <option>Part-time</option>

    //                 <option>Contract</option>
    //               </select>
    //             </div>

    //             <div className="contact-form">
    //               <label className="form-label">Message</label>
    //               <textarea
    //                 rows="4"
    //                 type="text"
    //                 className="form-control"
    //                 value={message}
    //                 onChange={(e) => setMessage(e.target.value)}
    //               />
    //             </div>

    //             <div className="button-submit" onClick={sendemailInfo}>
    //               <p>
    //                 Send <RiSendPlaneFill size={20} />
    //               </p>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </Fade>
    //   </div>

    //   <ToastContainer autoClose={8000} />
    // </div>
    <Fade right>
      <div className="container contact-section" id="contact">
        <div className="text-center">
          <h2>Contact Me</h2>
        </div>
        <form>
          <div className="contact-form">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="contact-form">
            <label className="form-label">E-mail</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contact-form">
            <label className="form-label">Job Types</label>
            <select
              className="custom-select-tag"
              value={jobtype}
              onChange={(e) => setJobtype(e.target.value)}
            >
              <option>Full-time</option>

              <option>Working student</option>

              <option>Part-time</option>

              <option>Contract</option>
            </select>
          </div>

          <div className="contact-form">
            <label className="form-label">Message</label>
            <textarea
              rows="4"
              type="text"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="button-submit" onClick={sendemailInfo}>
            <p>
              Send <RiSendPlaneFill size={20} />
            </p>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={8000} />
    </Fade>
  );
};

export default Contact;
