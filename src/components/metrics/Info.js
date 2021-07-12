import React, { Component } from 'react';

function Info(props) {

    var title = props.title
    var description = props.description
  
    return (

        <div class="w-1/2 px-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title:</div>
                <div className="text-gray-700 text-base">{title}</div>
                <div className="font-bold text-xl mb-2">Description:</div>
                <div className="text-gray-700 text-base">{description}</div>

            </div>
        </div>

    )
}
export default Info;