import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {Link} from 'react-router-dom'
import "./SignIn.css";

function SignIn() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSub = (info) => {
    console.log(info);
    setSuccess(true);
  };

  return (
    <div style={{margin: '2vw 5vw'}}>
        <h1>Sign In</h1>
        <div className="mainForm">
            <form onSubmit={handleSubmit(onSub)}>
                <div>
                {success && <p className="success">Registration Successful</p>}
                </div>
                <div className="form-grid">
                    <div className="input-element">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        {...register("firstname", {
                        required: true,
                        })}
                    />
                    {errors.firstname && errors.firstname.type === "required" && (
                        <p className="error-msg">First Name is required</p>
                    )}
                    </div>

                    <div className="input-element">
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        {...register("lastname", {
                        required: true,
                        })}
                    />
                    {errors.lastname && errors.lastname.type === "required" && (
                        <p className="error-msg">Last Name is required</p>
                    )}
                    </div>

                    <div className="input-element">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        {...register("email", {
                        required: true,
                        pattern: {
                            value: /@gmail.com/,
                            message: "Email is not valid",
                        },
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="error-msg">Email is required</p>
                    )}
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
                    </div>

                    <div className="input-element">
                    <input
                        type="text"
                        name="number"
                        placeholder="Phone Number"
                        {...register("number", {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                        })}
                    />
                    {errors.number && errors.number.type === "required" && (
                        <p className="error-msg">Number is required.</p>
                    )}
                    {errors.number && errors.number.type === "maxLength" && (
                        <p className="error-msg">Number should be of 10 digits.</p>
                    )}
                    {errors.number && errors.number.type === "minLength" && (
                        <p className="error-msg">Number should be of 10 digits.</p>
                    )}
                    </div>
                </div>
                <div className="input-element registerbtn">
                <label></label>
                <button className="register" type="submit">
                    Register
                </button>
                </div>
                <p style={{fontSize: '1.2rem', textDecoration: 'none', color:'#333', textAlign:'center'}}>Already a user? <Link style={{textDecoration: 'underline', color:'grey'}} to='/login'>Login </Link></p>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
