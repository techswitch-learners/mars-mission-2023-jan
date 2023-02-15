import { useState,FormEvent } from "react";

export function DateNameUserInput(props: {
    setName:React.Dispatch<React.SetStateAction<string>>,
    setBirthday:React.Dispatch<React.SetStateAction<string>>,
	handleSubmit: (event:FormEvent<HTMLFormElement>) => void,
}){
    return (
        <form className="date-name-form" onSubmit={(event) => props.handleSubmit(event)}>
            <label htmlFor="user-name">
				Name: 
                <input 
					type="text" 
					name="user-name" 
					id="user-name" 
					placeholder="e.g. John Smith" 
					onChange={e=>props.setName(e.target.value)} 
					required>
				</input>
			</label>
            
			<label htmlFor="user-birthday">
				Birthday:
                <input 
                    type="date" 
                    name="user-birthday" 
                    id="user-birthday" 
                    onChange= {e=>props.setBirthday(e.target.value)}
                    required>
                </input>
                <button 
					className="btn info-btn" 
					title="We only have photos after the year of 2012. If your birthday year is earlier that, 
					you could review the photos on the same day of any years after 2012. But you will still get your Mars age!">❔
				</button>
			</label>

            <button className="btn date-name" type="submit">OK!</button>
        </form>
    )
}