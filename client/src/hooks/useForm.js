import React, { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [response, setResponse] = useState(null)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
        setErrors(validateForm(form))
        if(Object.keys(errors) === 0){
            alert("Enviando")
        }else{
            return
        }
 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Entrada")
        setErrors(validateForm(form))
        if(Object.keys(errors)){
            return 
        } else {
            return
        }
    }

    return {
        form,
        response,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
 