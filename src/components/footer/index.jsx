import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => <footer className='flex justify-between'>
    <p>&copy; {new Date().getFullYear()} <strong>Bo Kong</strong>. All rights reserved.</p>
    <div className='flex gap-2'>
        <a className='w-12 h-12 flex justify-center hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100 text-2xl'>
            <FontAwesomeIcon icon={faInstagram} size='md' className='m-auto'/>
        </a>
        <a className='w-12 h-12 flex justify-center hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100 text-2xl'>
            <FontAwesomeIcon icon={faLinkedin} size='md' className='m-auto'/>
        </a>
        <a className='w-12 h-12 flex justify-center hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100 text-2xl'>
            <FontAwesomeIcon icon={faXTwitter} size='md' className='m-auto'/>
        </a>
    </div>
</footer>