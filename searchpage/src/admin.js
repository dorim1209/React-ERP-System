import React from 'react';
import PropTypes from "prop-types";



function admin({dept, number, name, total}) {
    return(
        <div className="admin">
            <table>
                <tr>
                    <td className="tb_width">{dept}</td>
                    <td className="tb_width">{number}</td>
                    <td className="tb_width">{name}</td>
                    <td className="tb_width">{total}</td>
                </tr>
            </table>
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