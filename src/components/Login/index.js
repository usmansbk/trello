import Logo from "../common/Logo";

const Login = () => {
  return (
    <div>
      <Logo />
      <section>
        <h1>Log in to Trello</h1>
        <form>
          <input placeholder="Enter email" type="email" />
          <input placeholder="Enter password" type="password" />
          <input type="button" value="Log in" />
        </form>
      </section>
    </div>
  );
};

export default Login;
