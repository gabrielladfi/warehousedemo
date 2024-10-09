import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import './paginador.scss'

function Paginador() {
    return (
        <>
            <div className='paginator-desktop'>
                <div className='paginator-desktop__rows'>
                    <ChevronLeftIcon className='paginator-desktop__rows__icon'/>
                </div>
                <div className='paginas-container'>
                    <div className='paginator-desktop__rows'><span className='paginator-desktop__rows__span'>1</span></div>
                    <div className='paginator-desktop__rows'><span className='paginator-desktop__rows__span'>2</span></div>
                    <div className='paginator-desktop__rows'><span className='paginator-desktop__rows__span'>3</span></div>
                    <div className='paginator-desktop__rows'><span className='paginator-desktop__rows__span'>4</span></div>
                </div>
                <div className='paginator-desktop__rows'>
                    <ChevronRightIcon className='paginator-desktop__rows__icon'/>
                </div>
                <div>
                    <span>10/page</span>
                </div>
                <div className='go-to-page'>
                    <span>Go to</span>
                    <input className='input-page' type="text" />
                </div>
            </div>
        </>
    )
}

export default Paginador
