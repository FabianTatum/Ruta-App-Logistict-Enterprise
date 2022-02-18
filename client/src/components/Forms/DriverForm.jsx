import React from 'react';
import { useFormDriver } from '../../hooks/useFormDriver';
import './DriverForm.css'
import validateFormDriver from '../../helpers/validateFormDriver';

const initialForm = {
    id: null,
    name: "",
    lastName: "",
    identification: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    password: "",
    terms: false
}

const DriverForm = ({ entryForm }) => {

    entryForm = entryForm || initialForm

    const {
        form,
        response,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormDriver(entryForm, validateFormDriver)

    return ( 
        <div className='container'>
            <h2>Formulario Conductor</h2>
            <form onSubmit={handleSubmit}>
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
                    type="text" 
                    name="identification" 
                    placeholder="Cédula de Ciudadania"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.identification}
                    required
                />
                <label htmlFor="dateOfBirth">Fecha de Nacimiento</label>
                <input 
                    type="date" 
                    name="dateOfBirth" 
                    placeholder="Fecha de Nacimiento"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.dateOfBirth}
                    required
                />
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Telefono (+57)"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.phone}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.password}
                    required
                />
               <br />
                <label htmlFor="terms">Terminos y condiciones</label>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="terms" 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.terms}
                />
                <br />
                <input type="submit" value="Enviar" />
            </form> 
        </div>
     );
}
 
export default DriverForm;