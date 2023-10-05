import '@reach/dialog/styles.css';
import React from 'react';
import { Dialog } from '@reach/dialog';
import Logo from 'components/Logo';

type FormDataType = { username: string, password: string };

interface Props {
  buttonText: string;
  onSubmit: ({ username, password }: FormDataType) => void;
}

const LoginForm = ({ buttonText, onSubmit }: Props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

function App() {
  const [openModal, setOpenModal] = React.useState('none');

  const login = (data: FormDataType) => {
    console.log('login', data);
  };

  const register = (data: FormDataType) => {
    console.log('register', data);
  };

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm buttonText="Register" onSubmit={register} />
      </Dialog>
    </div>
  );
}

export default App;
