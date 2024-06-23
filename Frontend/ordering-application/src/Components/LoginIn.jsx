import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function LoginIn() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    setError(null)
    setSuccess(false)

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email: data.email,
        password: data.password,
      },{
        withCredentials: true
      })
      console.log('Login successful:', response.data)
      setSuccess(true)
      // localStorage.setItem('token', response.data.token)
      //###
      //This approach of using headers ensures that the token is
      //automatically included in all Axios requests after it has been set.
      // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    } catch (err) {
      console.error('Error during login:', err)
      setError('Login failed. Please check your credentials.')
    }
  }

  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true });
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <div style={{ margin: '2vw 5vw' }}>
      <h1>Login</h1>
      <div className="mainForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {success && <p className="success">Login Successful</p>}
            {error && <p className="error-msg">{error}</p>}
          </div>
          <div className="form-grid">
            <div className="input-element flex">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="error-msg">Email is required</p>}
            </div>

            <div className="input-element flex">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="error-msg">Password is required</p>}
            </div>
          </div>
          <div className="input-element registerbtn">
            <button className="register" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LoginIn