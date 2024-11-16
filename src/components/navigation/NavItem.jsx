import {forwardRef} from "react";

export const NavItem = forwardRef(({children}, ref) => (
    <a ref={ref} className='font-medium px-6 py-2 hover:bg-indigo-50 active:bg-indigo-100 hover:text-indigo-600 hover:cursor-pointer'>{children}</a>
))