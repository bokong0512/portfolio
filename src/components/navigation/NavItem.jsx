import {forwardRef} from "react";

export const NavItem = forwardRef(({children}, ref) => (
    <a ref={ref} className='font-medium text-neutral-700 px-4 py-2 hover:underline underline-offset-8 active:decoration-3 hover:text-neutral-900 hover:cursor-pointer'>{children}</a>
))