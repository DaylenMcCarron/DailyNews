import { useFormik } from "formik"
import * as  Yup from 'yup'
import { Alert } from "react-bootstrap"

const Contact = () => {

    const formik = useFormik({
        initialValues:{
            email:'',
            firstname:'',
            lastname:'',
            message:''
        },
        validationSchema:Yup.object({
            email: Yup.string()
             .email('Invalid email')
             .required('Email is required'),
            firstname: Yup.string()
             .required('First name is required'),
            lastname: Yup.string()
             .required('Last name is required'),
            message: Yup.string()
             .required('Message is required')
             .max(500,'Max message 500 characters')
        }),
        onSubmit:(values,{resetForm})=> {
            console.log(values)
        }
    })

    return (
        <>
            <h1>Contact us</h1>
            <form className="mt-3" onSubmit={ formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="email@example.com" {...formik.getFieldProps('email')} />
                    {
                        formik.errors.email && formik.touched.email ?
                        <Alert variant="danger">
                            {formik.errors.email}
                        </Alert>
                        
                        :null
                    }
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="firstname">First name</label>
                    <input type="firstname" className="form-control" name="firstname" placeholder="enter your name" {...formik.getFieldProps('firstname')}/>
                    {
                        formik.errors.firstname && formik.touched.firstname ?
                        <Alert variant="danger">
                            {formik.errors.firstname}
                        </Alert>
                        
                        :null
                    }
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="lastname">Last name</label>
                    <input type="lastname" className="form-control" name="lastname" placeholder="enter your lastname" {...formik.getFieldProps('lastname')}/>
                    {
                        formik.errors.lastname && formik.touched.lastname ?
                        <Alert variant="danger">
                            {formik.errors.lastname}
                        </Alert>
                        
                        :null
                    }
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" rows={3} {...formik.getFieldProps('message')}></textarea>
                    {
                        formik.errors.message && formik.touched.message ?
                        <Alert variant="danger">
                            {formik.errors.message}
                        </Alert>
                        
                        :null
                    }
                </div>

                <button type="submit" className="btn btn-primary mt-2">Send Message</button>

            </form>
        </>
    )
}

export default Contact