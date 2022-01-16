import React, {useEffect, useState} from 'react';
import User from "./User/User";



const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    let getUserId = (id) => {
        console.log(id)
    }

    return (
        <div>
            {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/> )}
        </div>
    );
};

export default Users;

