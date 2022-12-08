import React from 'react';

const Extrainterest = (props) => {
    const { interestArray } = props;

    return (
        <ul>
            {interestArray.map((interest) => {
                return (
                    <div className="flexwrap">
                        <div className="wrapperEdu">
                            <div className="desc" contentEditable="true">{interest.desc}</div>
                        </div>
                    </div>
                )
            })}
        </ul>
    );
}

export default Extrainterest