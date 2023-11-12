import Styles from "../styles/AdminLogin.module.css";

async function Page() {

  return (
    <>
      <main className="bg-main">
      <div className="box">
        <div className="form">
            <h2>Sign In</h2>
            <div className="inputBox">
                <input type="text" required />
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required />
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Forgot Password?</a>
                <a href="#">Signup</a>
            </div>
            <input type="submit" value="Login" />
        </div>
    </div>
      </main>
    </>
  );
}

export default Page;
