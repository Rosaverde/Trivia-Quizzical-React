import React from "react";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

export default function App()
{
    const [welcome, setWelcome] = React.useState(true)

    function toggle()
    {
        setWelcome(prevWelcome => !prevWelcome)
    }
    console.log(welcome)
    return(

        welcome ? <Welcome toggle={toggle} /> : <Card />
    )
}