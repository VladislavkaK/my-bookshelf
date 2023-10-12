import '@reach/dialog/styles.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import React from 'react';
import styled from '@emotion/styled/macro';
import VisuallyHidden from '@reach/visually-hidden';
import { Dialog as ReachDialog } from '@reach/dialog';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Spinner from 'components/Spinner';
import * as colors from 'styles/colors';
import * as mq from 'styles/media-queries';

type FormDataType = { username: string, password: string };

interface Props {
  variant?: "primary" | "secondary";
  buttonText: string;
  onSubmit: ({ username, password }: FormDataType) => void;
}

const AppStyled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
});

const Content = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gridGap: '0.75rem',
});

const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '> div': {
    margin: '10px auto',
    width: '100%',
    maxWidth: '300px',
  },
});

const inputStyles = {
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
};

const Input = styled.input({ borderRadius: '3px' }, inputStyles);

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
});

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]:{
    width: '100%',
    margin: '10vh auto'
  } 
});

const LoginForm = ({ variant, buttonText, onSubmit }: Props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <div>
        <Button variant={variant} type="submit">{buttonText}</Button>
        <Spinner />
      </div>
    </Form>
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
    <AppStyled>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <Content>
        <div>
          <Button onClick={() => setOpenModal('login')}>Login</Button>
        </div>
        <div>
          <Button variant="secondary" onClick={() => setOpenModal('register')}>Register</Button>
        </div>
        <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CircleButton onClick={() => setOpenModal('none')}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span aria-hidden>×</span>
            </CircleButton>
          </div>
          <h3 style={{ textAlign: 'center', fontSize: '2em' }}>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>
        <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CircleButton onClick={() => setOpenModal('none')}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span aria-hidden>×</span>
            </CircleButton>
          </div>
          <h3 style={{ textAlign: 'center', fontSize: '2em' }}>Register</h3>
          <LoginForm variant="secondary" buttonText="Register" onSubmit={register} />
        </Dialog>
      </Content>
    </AppStyled>
  );
}

export default App;
