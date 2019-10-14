import React from 'react';
import PropTypes from "prop-types";



function timelog({number, date, time, type}) {
    return(
        <div className="timelog">
                <tr>
                    <th>{number}</th>
                    <th>{date}</th>
                    <th>{time}</th>
                    <th>{type}</th>
                </tr>
        </div>
    );
}
timelog.ProtoTypes = {
    number: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
export default timelog;