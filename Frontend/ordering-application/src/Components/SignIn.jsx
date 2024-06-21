import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./SignIn.css";

function SignIn() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null) 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSub = async (info) => {
    console.log(info)

    try {
      const response = await axios.post('http://localhost:3000/api/loginData', {
        name: `${info.firstname} ${info.lastname}`,
        phone: info.number,
        email: info.email,
        password: info.password
      })
      console.log(response.data)
      setSuccess(true)
      setError(null)
    } catch (err) {
      console.error('Error:', err)
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <div style={{ margin: '2vw 5vw' }}>
      <h1>Sign In</h1>
      <div className="mainForm">
        <form onSubmit={handleSubmit(onSub)}>
          <div>
            {success && <p className="success">Registration Successful</p>}
            {error && <p className="error-msg">{error}</p>}
          </div>
          <div className="form-grid">
            <div className="input-element flex">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
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

            <div className="input-element flex">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
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

            <div className="input-element flex">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
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

            <div className="input-element flex">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
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

            <div className="input-element flex">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="error-msg">Password is required</p>
              )}
            </div>
          </div>
          <div className="input-element registerbtn">
            <button className="register" type="submit">
              Register
            </button>
          </div>
          <p style={{ fontSize: '1.2rem', textDecoration: 'none', color: '#333', textAlign: 'center' }}>
            Already a user? <Link style={{ textDecoration: 'underline', color: 'grey' }} to='/login'>Login </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
