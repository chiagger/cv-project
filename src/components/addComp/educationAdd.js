import React from 'react';

const EducationComp = (props) => {
    const { eduArray } = props;
    return (
        <ul>
            {eduArray.map((edu) => {
                return (
                    <div className="flexwrap">
                        <div className="wrapperEdu">
                            <div className="title" contentEditable="true">{edu.title}</div>
                            <div className="desc" contentEditable="true">{edu.desc}</div>
                        </div>
                        <div className="wrapperEdu">
                            <div className="title time" contentEditable="true">{edu.since}-{edu.to}</div>
                            <div className="desc where" contentEditable="true">{edu.where}</div>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}


export default EducationComp