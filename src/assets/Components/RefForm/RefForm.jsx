import React, { useEffect, useRef, useState } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const passRef = useRef(null);
    const emailRef = useRef(null);
    // const [error, setError] = useState([]);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleEvent = e => {
        e.preventDefault();
        if (passRef.current.value.length < 6) {
            // setError("need more characters");
        } else {
            // setError("");
        }
        console.log(nameRef.current.value, emailRef.current.value, passRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleEvent}>
                <input ref={nameRef} type="text" name="name" id='' />
                <br />
                <input ref={emailRef} type="email" defaultValue={'rojoni@sojoni.com'} name="email" id='' />
                <br />
                <input ref={passRef} type="password" name="password" id='' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* {
                error && <p>{error}</p>
            } */}
        </div>
    );
};

export default RefForm;
