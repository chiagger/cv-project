import React, { useEffect, useState, useRef } from 'react';
import uniqid from "uniqid";
import Extrainterest from './addComp/extraaddint.js';


const Extraint = () => {
    const [interest, setInterest] = useState({ id: uniqid(), desc: "Reading" })
    const [interestArray, setInterestArray] = useState([])
    const arrayUpdated = useRef(false);

    useEffect(() => {
        if (arrayUpdated.current) { //to prevent useEffect from running twice
            return;
        }

        const handleNewInterest = (e) => {
            e.preventDefault();
            setInterest({
                id: interest.id,
                desc: "Reading"
            });
            setInterestArray(interestArray => [...interestArray, interest]);
            arrayUpdated.current = true;
        };

        const newIntBtn = document.getElementById("addExtraInterest");
        newIntBtn.addEventListener("click", handleNewInterest);

        return () => {
            document.removeEventListener("click", handleNewInterest)
        };
    }, [interestArray])



    return (
        <div id="extra">
            <div id="skills">
                <div id="headingwrap">
                    <div id="heading">INTERESTS</div>
                    <button id="addExtraInterest">+</button>
                </div>
                <Extrainterest interestArray={interestArray}></Extrainterest>
            </div>
        </div>
    )
}


export default Extraint