import React from 'react';

const CreatePatient = ({ handleSubmit, input, setInput }) => {
    
    
    
    return ( 
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={input} onChange={(event) => setInput(event.target.value)}/>
                <button type='submit'>Create</button>
            </form>
        </div>
     );
}
 
export default CreatePatient;