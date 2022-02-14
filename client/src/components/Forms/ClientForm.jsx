import React from 'react';
import { useFormClient } from '../../hooks/useFormClient';
import validateForm from '../../helpers/validateForm'

const initialForm = {
    id: null,
    name: "",
    lastName: "",
    email: "",
    cityOfResidence: "",
    password: ""
}

const ClientForm = (entryForm = initialForm) => {
    const {
        form,
        response,
        errors,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormClient(entryForm, validateForm)

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