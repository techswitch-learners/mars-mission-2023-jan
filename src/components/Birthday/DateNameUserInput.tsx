import React from "react";

export function DateNameUserInput(){
    function handleSubmit(event:any){
        console.log("hello");
    }

    return (
        <form className="date-name-form" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="user-name">
				Name: 
            
                <input type="text" name="user-name" id="user-name" placeholder="e.g. John Smith" required></input>
			</label>
            
			<label htmlFor="user-birthday">
				Birthday:
                <input type="date" name="user-birthday" id="user-birthday" required></input>
			</label>
           

            <button className="btn date-name" type="submit">OK!</button>
        </form>
    )
}