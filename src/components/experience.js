import React, { useState, useEffect, useRef } from 'react';
import ExperienceComp from './addComp/experienceAdd';
import uniqid from "uniqid";


const Experience = () => {
    const [exp, setExp] = useState({
        id: uniqid(), title: "Software Engineer",
        desc: "at Google, working with React", since: "2020", to: "2022", where: "London, UK"
    })
    const [expArray, setExpArray] = useState([]);
    const arrayUpdated = useRef(false);


    useEffect(() => {
        if (arrayUpdated.current) { //to prevent useEffect from running twice
            return;
        }

        const handleNewExp = (e) => {
            e.preventDefault();
            setExp(
                {
                    id: exp.id,
                    title: 'Software Engineer',
                    desc: "at Google, working with React",
                    since: "2020",
                    to: '2022',
                    where: 'London, UK'
                },
            );
            setExpArray(expArray => [...expArray, exp]);
            arrayUpdated.current = true;
        };

        const newExpBtn = document.getElementById("addExp");
        newExpBtn.addEventListener("click", handleNewExp);

        return () => {
            document.removeEventListener("click", handleNewExp)
        };
    }, [exp, expArray])

    return (
        <div id="experience" >
            <div id="headingwrap">
                <div id="heading">WORK EXPERIENCE</div>
                <button id="addExp">+</button>
            </div>
            <ExperienceComp expArray={expArray}></ExperienceComp>

        </div >
    )
}

export default Experience


