import React from 'react';
import { useForm, useFormClient } from '../../hooks/useFormClient';

const initialForm = {
    id: null,
    name: "",
    lastName: "",
    email: "",
    cityOfResidence: "",
    password: ""
}

const validateForm = (form) => {
    let errors = {}

    let regexWords = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /^[0-9].{1,10}$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
    if(!form.name.trim()){
        errors.name = `El campo 'Nombre' es requerido`
    }else if(!regexWords.test(form.name.trim())){
        errors.name = `El campo 'Nombre' solo acepta letras y espacios`
    }

    if(!form.lastName.trim()){
        errors.lastName = `El campo 'Apellidos' es requerido`
    }else if(!regexWords.test(form.lastName.trim())){
        errors.lastName = `El campo 'Apellidos' solo acepta letras y espacios`
    }

    if(!form.email.trim()){
        errors.email = `El campo 'Correo Electrónico' es requerido`
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = `El campo 'Correo Electronico' es incorrecto`
    }

    if(!form.cityOfResidence.trim()){
        errors.cityOfResidence = `El campo 'Ciudad' es requerido`
    }else if(!regexWords.test(form.cityOfResidence.trim())){
        errors.cityOfResidence = `El campo 'Ciudad' solo debe contener letras y espacios`
    }

    if(!form.password.trim()){
        errors.password = `El campo 'Contraseña' es requerido`
    }else if(!regexNumber.test(form.password.trim())){
        errors.password = `El campo 'Contraseña' es incorrecto`
    }

    return errors
}

const ClientForm = () => {
    const {
        form,
        response,
        errors,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormClient(initialForm, validateForm)

    return ( 
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2>Formulario Cliente</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Apellidos"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastName}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Correo Electrónico"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                 <input 
                    type="text" 
                    name="cityOfResidence" 
                    placeholder="Ciudad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.cityOfResidence}
                    required
                />
                <input 
                    type="text" 
                    name="password" 
                    placeholder="Contraseña"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.password}
                    required
                />
               <input type="submit" value="Enviar" />
            </form>
        </div>
     );
}
 
export default ClientForm;