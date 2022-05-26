import React from 'react';
import "bootswatch/dist/morph/bootstrap.min.css";

const SearchForUser = ({handleSubmit, input , setInput}) => {
    
    return ( 
        <div className="container">
            <form className="d-flex flex-column align-items-center" onSubmit={(e) => handleSubmit(e)}>
                <label className="my-2">Search patient name or phone number</label>
                <input type='text' value={input} onChange={(event) => setInput(event.target.value)} />
                <br />
                <button className="btn" type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchForUser;