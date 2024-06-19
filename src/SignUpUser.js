import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const SignUpUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    const password = watch("password");

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName", { required: true })}
                        aria-label="First Name"
                    />
                    {errors.firstName && <span className="error" role="alert">First name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName", { required: true })}
                        aria-label="Last Name"
                    />
                    {errors.lastName && <span className="error" role="alert">Last name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        {...register("userName", { required: true })}
                        aria-label="Username"
                    />
                    {errors.userName && <span className="error" role="alert">Username is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        aria-label="Email"
                    />
                    {errors.email && <span className="error" role="alert">Enter a valid email</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                        aria-label="Password"
                    />
                    {errors.password && <span className="error" role="alert">Password is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: true,
                            validate: value => value === password || "Passwords do not match"
                        })}
                        aria-label="Confirm Password"
                    />
                    {errors.confirmPassword && <span className="error" role="alert">{errors.confirmPassword.message}</span>}
                </div>
                <div className="form-buttons">
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpUser;
