import {useState} from "react"

function EditForm({ setUser, setCat, user }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setCat(false)
      setIsLoading(true);
      fetch(`/update/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        //   password,
        //   password_confirmation: passwordConfirmation,
          
        }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        } else {
          resp.json().then((data) => setErrors(data.errors));
        }
      });
    }
  
    return (
      <form onSubmit={handleSubmit} >
          <div>
          <label >First Name</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label >Last Name</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div> */}
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
        </div>
        <div>
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        </div>
      </form>
    );
  }
  

export default EditForm