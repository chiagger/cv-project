import React from 'react';

const ExtraSkill = (props) => {
    const { skillArray } = props;
    return (
        <ul>
            {skillArray.map((skill) => {
                return (
                    <div className="flexwrap">
                        <div className="wrapperEdu">
                            <div className="desc" contentEditable="true">{skill.desc}</div>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}


export default ExtraSkill