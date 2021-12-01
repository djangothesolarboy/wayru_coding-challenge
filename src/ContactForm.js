import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';

class ContactForm extends React.Component {
    handleSubmit(user) {
        this.props.dispatch(actions.submit('user'))
    }
    render() {
        // const { handleSubmit } = props;
        return (
            <Form model='user' onSubmit={values => this.handleSubmit(values)}>
                <Errors className='errors' model='user'/>
                <p>Errors</p>

                <div className='field'>
                    <label>Name</label>
                    <Control.text model='.name' validators={{ isRequired }}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <Control.text model='.email' validators={{ isRequired }}/>
                </div>
                <div className='field'>
                    <label>Message</label>
                    <Control.text model='.message'/>
                </div>
                <button className='submit-btn' type='submit'>Submit</button> 
                <Control.reset model='user' className='reset'>Clear</Control.reset>
            </Form>
        )
    }
}

export default ContactForm;