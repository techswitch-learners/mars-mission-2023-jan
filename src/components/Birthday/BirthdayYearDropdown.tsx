import React from "react";
import { ChangeEvent } from "react";
import "./BirthdayYearDropdown.scss";

interface BirthdayYearDropdownProps {
    selectedYear: string;
    setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
} 

export function BirthdayYearDropdown({selectedYear, setSelectedYear}: BirthdayYearDropdownProps) {
    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(20), (val, index) => currentYear - index);

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



