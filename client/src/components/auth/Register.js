import React, { useState } from 'react';

const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Register submit');
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name </label>
					<input type='text' nane='name' value={name} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email Address </label>
					<input type='email' nane='email' value={email} onChange={onChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password </label>
					<input
						type='password'
						nane='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Password </label>
					<input
						type='password'
						nane='password2'
						value={password2}
						onChange={onChange}
					/>
				</div>
				<input type='submit' value='Register' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default Register;