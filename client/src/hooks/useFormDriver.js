import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useFormDriver = (initialForm, validateForm) => {
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
        if(e.target.type === "checkbox"){
            if(e.target.checked === true){
                setForm({
                    ...form,
                    [name]: true
                })
            }else{
                setForm({
                    ...form,
                    [name]: false
                })
            }
        }
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))
        if(Object.keys(errors)){
            alert("Enviando Formulario Driver")
            setLoading(true)
            if(form.id){
                return
            }else{
            helpHttp()
                .post("http://localhost:3001/drivers", {
                    Accept: "aplication/json",
                    body: form 
                }).then( res => {
                    setLoading(false)
                    setResponse(true)
                })
            }
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
 