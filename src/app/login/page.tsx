import { loginUser } from '@/app/actions/auth';
import styles from './styles.module.css';
import Form from 'next/form';

const Login = () => {
  return (
    <div>
      <Form className={styles.container} action={loginUser}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;
