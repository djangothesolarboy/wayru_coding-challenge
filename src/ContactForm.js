import React from 'react';
import { Control, Form, Errors, actions } from 'react-redux-form';

const postLogin = (values) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (values.name === '') {
                reject({
                    '': 'Submit failed.',
                    name: 'Name field is required.',
                });
            } else if (!values.email.includes('@')) {
                reject({
                    '': 'Submit failed.',
                    email: 'Email field is required.',
                });
            } else {
                resolve(true);
                alert('Submit successful.');
                console.log(values);
            }
        })
    })
}

export class ContactForm extends React.Component {
    handleSubmit(values) {
        // <input type="hidden" name="_to" value={{`${values.email}`}} />
        console.log(values);
        // this.props.dispatch(actions.submit('user', postLogin(values)));
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