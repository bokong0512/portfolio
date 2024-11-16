import {useState} from "react";
import classNames from "classnames";


export const HoverCard = ({children, title, imgSrc, ...props}) => {
    const [hideText, setHideText] = useState(true);

    const handleHover = (e) => {
        setHideText(!hideText);

    };
    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="relative min-w-96 grow">
            {!hideText && <div
                className="absolute text-left bottom-8 left-8 z-30 text-white">
                <h3 className='text-white text-3xl font-bold'>{title}</h3>
                <h6 className='text-xl'>{children}</h6>
            </div>}
            <img src={imgSrc} alt='' width='100%' height='100%' className={hideText ? '' : classNames('brightness-50')} />
        </div>
    )
}