import React from "react";

export function DateNameUserInput(){
    function handleSubmit(event:any){
        console.log("hello");
    }

    return (
        <form className="date-name-form" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="user-name">
				Name:
			</label>
            <input type="text" name="user-name" id="user-name" required></input>

			<label htmlFor="user-birthday">
				Birthday:
			</label>
            <input type="date" name="user-birthday" id="user-birthday" required></input>

            <button type="submit">OK!</button>
        </form>
    )
}