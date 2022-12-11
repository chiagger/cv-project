import React, { useState, useEffect, useRef } from 'react';
import uniqid from "uniqid";
import ExtraSkill from './addComp/extraAdd';


const Extra = () => {
    const [skill, setSkill] = useState({ id: uniqid(), desc: "Team-working" })
    const [skillArray, setSkillArray] = useState([])
    const arrayUpdated = useRef(false);

    useEffect(() => {
        if (arrayUpdated.current) { //to prevent useEffect from running twice
            return;
        }

        const handleNewSkill = (e) => {
            e.preventDefault();
            setSkill({
                id: skill.id,
                desc: "Team-working",
            });
            setSkillArray(skillArray => [...skillArray, skill]);
            arrayUpdated.current = true;
        }

        const newSkillBtn = document.getElementById("addExtraSkill");
        newSkillBtn.addEventListener("click", handleNewSkill);

        return () => {
            document.removeEventListener("click", handleNewSkill)
        };
    }, [skillArray])

    return (
        <div id="extra">
            <div id="skills">
                <div id="headingwrap">
                    <div id="heading">SKILLS</div>
                    <button id="addExtraSkill">+</button>
                </div>
                <ExtraSkill skillArray={skillArray}></ExtraSkill>
            </div>
        </div>
    )
};

export default Extra
