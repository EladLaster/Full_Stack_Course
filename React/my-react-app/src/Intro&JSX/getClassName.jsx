import React from 'react';

export function getClassName (temperature){

    if(temperature < 15)
        return "freezing"
      else if ( temperature <= 30)
        return "fair"
      else
        return "hell-scape"
}

