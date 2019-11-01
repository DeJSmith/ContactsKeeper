import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'gang gang',
				email: 'gang@gang.com',
				phone: '111-111-1111',
				tpye: 'personal'
			},
			{
				id: 2,
				name: 'chur bitch',
				email: 'chur@gang.com',
				phone: '111-111-1111',
				tpye: 'chur'
			},
			{
				id: 3,
				name: 'what skux',
				email: 'skux@gang.com',
				phone: '111-111-1111',
				tpye: 'personal'
			},
			{
				id: 4,
				name: 'young blood',
				email: 'blood@gang.com',
				phone: '111-111-1111',
				tpye: 'affiliated'
			}
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Add Contact

	//Delete Contact

	//Set Current Contact

	//Clear Current Contact

	//Update Contact

	//Filter Contacts

	//Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
