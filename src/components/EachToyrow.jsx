import React from 'react';

const EachToyrow = ({toy}) => {

    const {name, rating, price, category, quantity, dettails , photo } = toy;
    return (
        <tr>
              
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
                {name}
              </td>
              <td>{price}</td>
              <td>{quantity}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
           
    );
};

export default EachToyrow;