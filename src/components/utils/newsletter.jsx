import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToNewsletter } from "../../store/utils/thunks";
import { showToast } from './tools'
import { clearNewsletter } from "../../store/reducers/users";


const Newsletter = () => {
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        dispatch(addToNewsletter({email:value}))
        .unwrap()
        .then( response => {
            if(value){

                if(response.newsletter === 'added') {
                    showToast('SUCCESS','Thankyou!!')
                }
                if(response.newsletter === 'failed') {
                    showToast('ERROR','Sorry, Already on da list')
                }
            } else {
                showToast('ERROR','Please input a value')
                
            }
            textInput.current.value = '';
            dispatch(clearNewsletter());
            })
        .catch (err=>{
            console.log(err)
        })

    }

    return (
        <div className="newsletter_container">
            <h1>Join Our Newsletter</h1>
            <div className="form">
                <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="example@email.com" name="email" ref={textInput} />
                    </Form.Group>
                    <Button className="mt-2" variant="primary" type="submit">
                        Add me to the list
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Newsletter;