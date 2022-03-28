import { useEffect, useState } from "react"



const User = () => {
    const [users, setUsers] = useState([]);
    const [hasError, setErrors] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const fetchUsers = () => {
        fetch('http://206.189.91.54/api/v1', {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            setUsers(result)
            setLoading(false)})
        .catch(error => {
            setErrors(error)
            setLoading(true)});
    }

    useEffect(() => {
        fetchUsers();
    })

    return (
        <div>
            <h1>Random User</h1>
            {hasError ? <p>{hasError.message}</p> : null}
            {!isLoading ? 
            (
                users.map(user => {
                    const { id, email, uid } = user;
                    return (
                        <div key={id}>
                            <p>Email: {email}</p>
                            <p>UID: {uid}</p>
                        </div>
                    )
                })
            ) 
            : 
            (
                <h3>Loading...</h3>
            )}
        </div>
    )
}

export default User;
