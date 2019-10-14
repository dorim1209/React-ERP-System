import React from 'react';
import PropTypes from "prop-types";



function admin({dept, number, name, total}) {
    return(
        <div className="admin">
                <tr>
                    <th>{dept}</th>
                    <th>{number}</th>
                    <th>{name}</th>
                    <th>{total}</th>
                </tr>
        </div>
    );
}
admin.ProtoTypes = {
    dept: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
export default admin;