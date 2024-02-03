'use client'


import React from "react"
import Typed from 'typed.js'


export default class Header extends React.Component {
    componentDidMount() {
        const options = {
            strings: [
                "Techknights",
                "Team 334"
            ],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
        };
        this.typed = new Typed(this.el, options)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <>
                <span
                    style={{whiteSpace: "pre"}}
                    ref={(el) => {
                        this.el = el;
                    }}
                />
            </>
        );
    }
}