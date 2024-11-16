import React from 'react';
import { NavItem } from "./NavItem.jsx";
import {Button} from "uds-core";

export const Navigation = () => {
    return (
        <nav className="flex justify-between items-center w-full">
            <h5 className='text-3xl font-bold'>Bo Kong</h5>
            <ol className='flex gap-10'>
                <NavItem>item #1</NavItem>
                <NavItem>item #2</NavItem>
                <NavItem>item #3</NavItem>
            </ol>
            <Button>Contact now</Button>
        </nav>
    )
}