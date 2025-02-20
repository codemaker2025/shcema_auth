import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import { Form } from "informed";
import useAuth from "../hooks/useAuth";
import authStorage from "../../../utils/tokenService";
export default function Login() {
  const { auth, handleLogin , handleLogout } = useAuth();
  function handleSubmit({ values }) {
    const { username, password } = values;
    handleLogin(username, password);
  }
  return (
    <div>
      {!auth.isAuthenticated ? (
        <Form onSubmit={handleSubmit}>
          <UsernameInput />
          <PasswordInput />
          <button type="submit">submit</button>
        </Form>
      ) : (
        <>
          <h1>welcome</h1>
          <button onClick={() => handleLogout()}>logout</button>
        </>
      )}
    </div>
  );
}
