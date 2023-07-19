import React, { useRef } from 'react';

const Child = ({ name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in Input: ${text}`)
    }


    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={ () => console.log('On Mouse Over')}>
                hello, {name}
            </p>
            <button onClick={ () => console.log('pressed Button 1')}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón 2
            </button>
            <button onClick={ () => pressButtonParams('Hello')}>
                Botón 3
            </button>
            <input 
                placeholder='Send a text to your father' 
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Inpuit Changed', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref = {messageRef}
            />
            <button onClick={()=> send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name' />
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
