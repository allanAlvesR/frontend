import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {TextField, Button, ButtonGroup, Typography, Grid, FormControl} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Backspace, Check, Edit} from '@mui/icons-material';
import './style.css';
import api from '../../services/api';

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
      caretColor: 'white',
      color: 'white',
    },
  });

export default function Profile() {
  const {id} = useParams();  
  const navigate = useNavigate();
  let functionButton;
  const initUser = {
    name: "",
    email: "",
    age: 0,
    company: "",
  }
  const [user, setUser] = useState(initUser);

  useEffect(()=>{
    if(id){
      api.get(`/users/${id}`).then(response=>{
        setUser(...response.data);
      });
    }
  },[]);

  function handleSubmit(event) {
    event.preventDefault();
    const method = id ? 'put' : 'post';
    const route = id ? `/users/${id}` : '/users'
    api[method](route,user).then((response)=>{
      navigate('/');
    });
  };

  function handleChange(event) {
    const {name, value} = event.target;
    setUser({...user, [name]:value});
  };

  
  if(user.id){
    functionButton = <Button margin="dense" onClick={handleSubmit} color="warning" variant="contained"><Edit/></Button>;
  }else{
    functionButton = <Button margin="dense" onClick={handleSubmit} color="success" variant="contained"><Check/></Button>;
  }

  return(
      <Grid container direction="column" alignItems="center" justify="center">
        <FormControl >
            <Typography variant="h5" align='center' >Cadastro</Typography>
            <CustomTextField onChange={handleChange} required margin="dense" size="small" variant="standard" label="Nome" name="name" value={user.name}/>
            <CustomTextField onChange={handleChange} required margin="dense" size="small" variant="standard" label="Email" name="email" value={user.email}/>
            <CustomTextField onChange={handleChange} required margin="dense" size="small" variant="standard" label="Idade" name="age" value={user.age}/>
            <CustomTextField onChange={handleChange} required margin="dense" size="small" variant="standard" label="Empresa" name="company" value={user.company}/>
            <Grid container justifyContent="flex-end">
              <ButtonGroup size='small'  align='right'>
                <Button margin="dense" onClick={()=>{navigate('/')}} color="error" variant="contained"><Backspace/></Button>
                {functionButton}
              </ButtonGroup>
            </Grid>
        </FormControl>
      </Grid>
  );
}