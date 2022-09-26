import React,{useState, useEffect} from 'react';
import api from '../../services/api';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export default function User(){
    const [users,setUser] = useState([]);
    useEffect(()=>{
        api.get('users').then(response => {
            setUser(response.data);
        });
    });
    
    return(
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.company}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};