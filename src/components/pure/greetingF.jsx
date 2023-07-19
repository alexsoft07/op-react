import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {

    //Breve introduccion a useState
    // const [varable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(39);

    const birthday = () => {
        // Actualizar el state
        setage(age + 1);
    }
    return (
        <div>
            <h1>
                ¡Hellow { props.name } desde componente funcional!
            </h1>
            <h2>
                You age is: { age }
            </h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
};

/* Definiendo el tipo de dato */
GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;
