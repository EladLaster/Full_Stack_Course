import React from 'react';

export function showCompany (name, revenue){

    return <div id={name} key = {name}> {name} makes {revenue} every year</div> 
    
}

