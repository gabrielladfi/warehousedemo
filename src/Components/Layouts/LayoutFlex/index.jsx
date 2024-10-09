/* eslint-disable react/prop-types */
import './layoutflex.scss'

function LayoutFlex({children}) {
    return (
        <>
            <div className='div-layout-flex'>
                {children}
            </div>
        </>
    )
}

export default LayoutFlex
