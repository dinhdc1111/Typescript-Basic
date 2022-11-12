import React from 'react'
import {Outlet} from "react-router-dom";
type Props = {}

const LayoutWebsite = (props: Props) => {
    return (
    <div>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
    </div>
)
}

export default LayoutWebsite