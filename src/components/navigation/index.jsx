import React from 'react';
import { NavItem } from "./NavItem.jsx";

export const Navigation = () => {
    return (
        <nav className="sticky z-50 top-6 flex justify-between items-center max-w-2xl bg-white/75 backdrop-blur-md py-4 px-5 rounded-lg shadow">
            <h5 className='text-3xl font-bold text-neutral-900'>Bo Kong</h5>
            <ol className='flex gap-10'>
                <NavItem>Works</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>About</NavItem>
            </ol>
        </nav>
    )
}