import React from 'react';

const ExperienceComp = (props) => {
    const { expArray } = props;
    return (
        <ul>
            {expArray.map((exp) => {
                return (
                    <div className="flexwrap">
                        <div className="wrapperEdu">
                            <div className="title" contentEditable="true">{exp.title}</div>
                            <div className="desc" contentEditable="true">{exp.desc}</div>
                        </div>
                        <div className="wrapperEdu">
                            <div className="title time" contentEditable="true">{exp.since}-{exp.to}</div>
                            <div className="desc where" contentEditable="true">{exp.where}</div>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}

export default ExperienceComp