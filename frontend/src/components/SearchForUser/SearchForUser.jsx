import React from 'react';

const SearchForUser = ({handleSubmit, input , setInput}) => {
    
    return ( 
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={input} onChange={(event) => setInput(event.target.value)}/>
                <button class="btn btn-outline-primary" type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchForUser;