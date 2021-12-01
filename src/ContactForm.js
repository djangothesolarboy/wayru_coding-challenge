import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';
import axios from 'axios';

export class ContactForm extends React.Component {
    handleSubmit(values) {
        // email form submitter
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(`https://formsubmit.co/ajax/${values.email}`, {
            name: values.name,
            email: values.email,
            message: values.message
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
        // emails me
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(`https://formsubmit.co/ajax/damienjdarko@gmail.com`, {
            name: values.name,
            email: values.email,
            message: values.message
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
        alert('Submit successful.');
        console.log(values);
    }
    render() {
        const isEmail = (email) => email.includes('@');
        const empty = (val) => val !== '' && val.length >= 3 && isNaN(val);
        const emptyText = (val) => val !== '' && val.length > 10;
        return (
            <Form model='user' method='post' onSubmit={values => this.handleSubmit(values)} >
                <div className='fields-container'>
                    {/* name */}
                    <div className='name-field fields'>
                        <label className='label'>Name:</label>
                        <Control.text name='name' model='.name' validators={{ empty }} required />
                        <Errors className='errors' model='.name' messages={{
                            required: 'Please provide a Name.',
                            empty: (val) => `${val} is not a valid Name.`
                        }}/>
                    </div>
                    {/* email */}
                    <div className='email-field fields'>
                        <label className='label'>Email:</label>
                        <Control.text name='email' type='email' model='.email' validators={{ isEmail }} required />
                        <Errors className='errors' model='.email' messages={{
                            required: 'Please provide an email address.',
                            isEmail: (val) => `${val} is not a valid email.`
                        }}/>
                    </div>
                    <div className='message-field fields'>
                        <label className='label'>Message:</label>
                        <Control.text name='message' model='.message' validators={{ emptyText }} required />
                        <Errors className='errors' model='.message' messages={{
                            required: 'Please provide a message.',
                            emptyText: (val) => `Message must be longer than 10 characters.`
                        }} />
                    </div>
                    <div className='buttons'>
                        <button className='submit-btn' type='submit'>Submit</button> 
                        <Control.reset model='user' className='reset-btn'>Clear</Control.reset>
                    </div>
                </div>
            </Form>
        )
    }
}

export default ContactForm;