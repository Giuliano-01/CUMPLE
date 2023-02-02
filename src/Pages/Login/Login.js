import React, { useState } from 'react'
import './login.css'
import codec from '../../codec.png'
//formik
import { Form, Formik } from 'formik'
import { FormSchema } from './schema'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

    const [loggeado, setLoggeado] = useState(false)
    const superado = ()=>{
        setLoggeado(true)
    }
  return (
    <div>

        {
            !loggeado ? 

            <div className='login-container'>

                <Formik
                    initialValues={{user: "", id: ""}}
                    validationSchema={FormSchema}
                >
                    {({ errors, handleChange, handleBlur, touched, setFieldValue, values, isValid, dirty }) => {
                    return (
                        // loading ?
                        

                                <Form className="form">
                                <div className="img" >

                                    <img src={codec} width="100%" alt="codec"/>

                                </div>

                                <div className={'elevationChildren'}>

                                    <h1 className= 'title'>
                                        ¿?
                                    </h1>

                                    <TextField
                                      fullWidth
                                      variant="standard"
                                      id="user"
                                      name="user"
                                      label="User"
                                      value={values.user}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.user && Boolean(errors.user)}
                                      helperText={touched.user && errors.user}
                                    />
                                    <TextField
                                      fullWidth
                                      variant="standard"
                                      id="id"
                                      name="id"
                                      label="Id"
                                      value={values.id}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.id && Boolean(errors.id)}
                                      helperText={touched.id && errors.id}
                                    />
                                    

                                    <div className="inputFormulario buttonFormulario">
                                        <Button
                                            variant="primary"
                                            type="button"
                                            disabled={!(isValid && dirty)}
                                            onClick={() => superado()}
                                            size="large"
                                            options="full"
                                        >
                                            {(isValid && dirty)
                                                ? "¡Perfecto!"
                                                : "Completar"}
                                        </Button>
                                    </div>

                                </div>
                                    
                                </Form>

                    )
                }}
                </Formik>
            </div>

        :

        <div className="login-container"> ¡FELICIDADES! EL CODIGO ES: "SPIDERMAN" </div>


        }
    
    </div>
    
  )
}

export default Login