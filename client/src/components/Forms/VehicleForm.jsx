import React from 'react';
import { useForm } from '../../hooks/useForm';

const initialForm = {
    vehicleType: "",
    licensePlate: "",
    soat: false,
    technomechanics: false 
}

const validateForm = (form) => {
    let errors = {}
    return errors
}

const VehicleForm = () => {
    const {
        form,
        response,
        errors,
        loading,
        handleBlur,
        handleChange,
        handleSubmit
    } = useForm(initialForm, validateForm)

    return( 
        <div className='container'>
            <h2>Formulario de Vehiculo</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="vehicleType">Tipo de Vehiculo</label>
                <select 
                    name="vehicleType"
                    placeholder='Tipo de Vehiculo'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.vehicleType}
                >
                        <option value="simple">Sencillo</option>
                        <option value="truck">Tractomula</option>
                        <option value="doubleTroque">Doble Troque</option>
                        <option value="dumpTruck">Volqueta</option>
                        <option value="turbo">Turbo</option>
                        <option value="turboVan">Turbo Furgon</option>
                        <option value="skate">Patineta</option>
                        <option value="other">Otro</option>
                </select>
                <label htmlFor="licensePlate">Placa</label>
                <input 
                    type="text" 
                    name="licensePlate" 
                    placeholder="Placa Del Vehículo"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.licensePlate}
                    required
                />
               <br />
                <label htmlFor="terms">Cuenta con Seguro Obligatorio de Transito (SOAT)</label>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="soat" 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.soat}
                />
                <br />
                <button value="Adjuntar" >Adjuntar</button>
                <br />
                <label htmlFor="terms">Cuenta con Tecnomecanica</label>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="technomechanics" 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.technomechanics}
                />
                <br />
                <button value="Adjuntar" >Adjuntar</button>
                <br />
                <input type="submit" value="Confirmar"/>
            </form>
        </div>
    );
}
 
export default VehicleForm;