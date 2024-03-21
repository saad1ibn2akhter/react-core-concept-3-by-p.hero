import React from 'react';

const ReusableForm = ({formTitle ,handleEvent,submitBtnText = 'Submit'}) => {

    const handleLocalData =(e)=>{
        e.preventDefault();
        const data ={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }

        handleEvent(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form  onSubmit={handleLocalData}>
                <input type="text" name="name" id='' />
                <br />
                <input type="email" name="email" id='' />
                <br />
                <input type="password" name="password" id='' />

                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;