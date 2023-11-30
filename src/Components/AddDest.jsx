import "./AddDest.css"
import { useState } from "react"
import { Formik } from "formik"
import axios from "axios"

const AddDest = ({ addDestination }) => {
    // const [destName, setDestName] = useState("")
    // const [notes, setNotes] = useState("")
    // const [imageURL, setImageURL] = useState("")
    // const [international, setInternational] = useState(false)

    const submitHandler = values => {
        console.log(values)
        // e.preventDefault()
        // const bodyObj = {
        //     name: destName,
        //     notes,
        //     imageURL,
        //     international
        // }
    }

    const initialValues = {
        name: "",
        notes: "",
        international: false,
        imageURL: ""
    }

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            {({ values, handleChange, handleSubmit }) => {
                // const { values, handleChange, handleSubmit } = formikParams
                return (
                    <form
                        id="add-dest-container"
                        onSubmit={handleSubmit}
                    >
                        <input
                            placeholder="name"
                            onChange={handleChange}
                            name='name'
                            value={values.name}
                        />
                        <input
                            placeholder="notes about your destination"
                            onChange={handleChange}
                            name='notes'
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
    )
}

export default AddDest
