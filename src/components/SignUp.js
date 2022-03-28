import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getUsers, createUser } from './Api'



const SignUp = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput(state => {return { ...state, [name]: value}})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (input.password === input.password_confirmation) {
                await createUser({ ...input });
                await recheckUsers();
            }
        }
        catch (error) {
            alert('oops');
        }
    }

    const checkUsers = useCallback(async () => {
        try {
            await getUsers();
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {checkUsers();}, [checkUsers]);

    const recheckUsers = async () => {await checkUsers();};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create Account</h3>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} value={input.name} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} value={input.email} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} value={input.password} />
                </div>
                <div>
                    <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} value={input.password_confirmation} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <p>Already using Slackr?</p>
            <Link to="/">Click here to login</Link>
        </div>
    )
}

export default SignUp;
