import styles from './styles.module.css';

const Login = () => {
  return (
    <div>
      <form className={styles.container}>
        <label>
          Name
        <input aria-label="email" />
        </label>
        <label>
          Email
        <input aria-label="email" />
        </label>
        <label>
          Password
        <input aria-label="email" />
        </label>
      </form>
    </div>
  )
}

export default Login;