import React from 'react';
import { Contact } from '../../models/contact.class';
import { STATUS } from '../../models/status.enum';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {


    const defaultContact = new Contact('Alexander', 'Hinestroza', 'alex@alex.com', STATUS.ACTIVO);
    
    /* const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    } */

    return (
        <div>
            <div>
                Contact:
            </div>
            {/** TODO: Aplicar un for / Map para renderizar una lista */}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
