import "./AddDest.css"
import { useState } from "react"
import { Formik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddDest = ({ addDestination }) => {
    const navigate = useNavigate()

    const submitHandler = (values, funcs) => {
        console.log(funcs)
        const { resetForm } = funcs

        axios
            .post(
                `http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`,
                values
            )
            .then(res => {
                console.log(res.data)
                // navigate(`/details/${res.data.id}`)
                // alert('Your destination was added.')
                toast("Your Destination was added!")
                resetForm()
            })
            .catch(err => console.log(err))
    }

    const initialValues = {
        name: "",
        notes: "",
        international: false,
        imageURL: ""
    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <Formik initialValues={initialValues} onSubmit={submitHandler}>
                {({ values, handleChange, handleSubmit }) => {
                    // const { values, handleChange, handleSubmit } = formikParams
                    return (
                        <form id="add-dest-container" onSubmit={handleSubmit}>
                            <input
                                placeholder="name"
                                onChange={handleChange}
                                name="name"
                                value={values.name}
                            />
                            <input
                                placeholder="notes about your destination"
                                onChange={handleChange}
                                name="notes"
                                value={values.notes}
                            />
                            <input
                                placeholder="Image URL"
                                onChange={handleChange}
                                value={values.imageURL}
                                name="imageURL"
                            />
                            <input
                                type="checkbox"
                                checked={values.international}
                                name="international"
                                onChange={handleChange}
                            />
                            <button type="submit">Add Destination</button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddDest
