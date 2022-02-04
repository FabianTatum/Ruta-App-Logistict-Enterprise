import React, { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [response, setResponse] = useState(null)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.checked)
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
 