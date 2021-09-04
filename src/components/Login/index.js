import Logo from "../common/Logo";
import TextInput from "../common/TextInput";

const Login = () => {
  return (
    <div>
      <Logo />
      <section>
        <h1>Log in to Trello</h1>
        <form>
          <TextInput placeholder="Enter email" type="email" />
          <TextInput placeholder="Enter password" type="password" />
          <input type="button" value="Log in" />
        </form>
      </section>
    </div>
  );
};

export default Login;
