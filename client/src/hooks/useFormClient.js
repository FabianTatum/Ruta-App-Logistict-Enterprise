import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const api = helpHttp()

export const useFormClient = (initialForm, validateForm) => {
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
            const sendForm = async () => {
                if(!form.id){
                    alert("Enviando Formulario Cliente")
                    setLoading(true)
                    let postData = await api.post("http://localhost:5000/clients", 
                                    {
                                        Accept: "aplication/json",
                                        body: form 
                                    })
                    if(postData){
                        setLoading(false)
                        setResponse(true)
                    }
                }else{
                    alert("Editando Formulario Cliente")
                    setLoading(true)
                    let editData = await api.put(`http://localhost:5000/clients/edit/${form.id}`, 
                                    {
                                        Accept: "aplication/json",
                                        body: form 
                                    })
                    if(editData){
                        setLoading(false)
                        setResponse(true)
                    }
                }
            }
            sendForm()
        }else{
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
 