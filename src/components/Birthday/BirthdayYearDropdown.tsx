import React from "react";
import { useState, ChangeEvent } from "react";
import "./BirthdayYearDropdown.scss";

export function BirthdayYearDropdown() {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(20), (val, index) => currentYear - index);
    const [selectedYear, setSelectedYear] = useState("");

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };
    return (
        <div>
            <select className="selectYear" value={selectedYear} onChange={handleChange}>
                <option value="">--PLEASE CHOOSE A YEAR--</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>

    )
}



