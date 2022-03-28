import { useState } from "react"
import { Link } from "react-router-dom";
import { users } from './Api'



const SignIn = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        access: false,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput(state => {return { ...state, [name]: value}})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let ctr = 0;
            const total = Object.keys(users).length;
            for (const key in users) {
                ctr += 1;
                if (users[key].email === input.email && users[key].password === input.password) {
                    setInput(state => {return { ...state, access: true }})
                    console.log('success')
                    console.log(users)
                    break;
                }
                else if (ctr === total) {
                    alert('User not found.');
                    setInput({
                        email: "",
                        password: "",
                        access: false,
                    });
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} value={input.email} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} value={input.password} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <p>No account yet?</p>
            <Link to="/create-account">Click here to create account</Link>
        </div>
    )
}

export default SignIn;
