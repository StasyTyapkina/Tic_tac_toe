import React from 'react'
import './buttons.css'

export default function Button(props) {

    return (
        <button className = {props.class} onClick={props.onClick}>
          {props.name}
        </button>
    );
}
