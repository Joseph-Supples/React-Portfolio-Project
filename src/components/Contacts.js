import React , {useRef, useState} from 'react'
import emailjs from "emailjs-com"
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const [successMessage, setSuccessMessage] = useState("");

    const service_id = "service_3o99lno";
    const template_id = "template_82nb0ti";
    const user_id = "user_DdlVVjHUZ56P1WQ8KczxQ";
    const form = useRef();

    const onSubmit = (data, r) => {
        sendEmail(
            service_id,
            template_id,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            user_id
            )
            r.target.reset();

    } 
    

    const sendEmail = (service_id, template_id, variables, user_id) => {
    
        emailjs.send(service_id, template_id, variables, user_id)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.")
          }).catch(err => console.error(`Something went wrong ${err}`));
      };


    return (
        <div id="contactme" className="contacts">
            <div className="text-center">

            <h1>contact me</h1>
            <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible</p>
            <span className="success">{successMessage}</span>
            </div>
            <div className="container">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
               <div className="row">
                   <div className="col-md-6 col-xs-12">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                        required: "Please enter your Name",
                        maxLength: {
                          value: 20,
                          message:
                            "Please enter a name with fewer than 20 characters",
                        },
                      })}
                    />
                    <div className="line"></div>
                    {errors.name && (
                        <span className="error-message">{errors.name.message} </span>
                    )}
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    {...register("phone", {
                        required: "Please enter your phone",
                      })}
                    />
                    <div className="line"></div>
                    {errors.phone && (
                        <span className="error-message">{errors.phone.message} </span>
                    )}
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid Email"
                        }
                      })}
                    />
                    <div className="line"></div>
                    {errors.email && (
                        <span className="error-message">{errors.email.message} </span>
                    )}
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    {...register("subject", {
                        required: "OOPS! You forgot to enter the subject",
                      })}
                    />
                    <div className="line"></div>
                    {errors.subject && (
                        <span className="error-message">{errors.subject.message} </span>
                    )}

                   </div>
                   <div className="col-md-6 col-xs-12">
                    <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    {...register("description", {
                        required: "Please describe your project",
                      })}
                    ></textarea>
                    <div className="line"></div>
                    {errors.description && (
                        <span className="error-message">{errors.description.message} </span>
                    )}
                    <button className="btn-main-offer contact-btn" type="submit">
                        Contact me
                    </button>
                   </div>
                </div> 
                </form>
            </div>
        </div>
        

    )
}

export default Contacts
