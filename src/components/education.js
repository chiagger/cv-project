import React, { useState, useEffect, useRef } from 'react';
import EducationComp from './addComp/educationAdd';
import uniqid from "uniqid";


const Education = () => {
    const [edu, setEdu] = useState({
        id: uniqid(), title: "University of London", desc: "Bachelors's in Software Engineering",
        since: "2017",
        to: '2020',
        where: 'London, UK'
    })
    const [eduArray, setEduArray] = useState([])
    const arrayUpdated = useRef(false);

    useEffect(() => {
        if (arrayUpdated.current) { //to prevent useEffect from running twice
            return;
        }

        const handleNewEdu = (e) => {
            e.preventDefault();
            setEdu({
                id: edu.id,
                title: 'University of London',
                desc: "Bachelors's in Software Engineering",
                since: "2017",
                to: '2020',
                where: "London, UK"
            });
            setEduArray(eduArray => [...eduArray, edu]);
            arrayUpdated.current = true;
        };
        const newEduBtn = document.getElementById("addEdu");
        newEduBtn.addEventListener("click", handleNewEdu);

        return () => {
            document.removeEventListener("click", handleNewEdu)
        };
    }, [edu, eduArray])


    return (
        <div id="education" >
            <div id="headingwrap">
                <div id="heading">EDUCATION</div>
                <button id="addEdu">+</button>
            </div>
            <EducationComp eduArray={eduArray}></EducationComp>
        </div >
    )
}

export default Education

