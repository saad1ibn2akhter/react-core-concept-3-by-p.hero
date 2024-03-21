// import React from 'react';

const SimpleForm = () => {
    const handleEvent = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log("btn clicked");
    }
    return (
        <div>
            <form  onSubmit={handleEvent}>
                <input type="text" name="name" id='' />
                <br />
                <input type="email" name="email" id='' />
                <br />
                <input type="number" name="password" id='' />

                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;