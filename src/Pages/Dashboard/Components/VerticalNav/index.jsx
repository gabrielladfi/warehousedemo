import { CircleStackIcon, CurrencyDollarIcon, DocumentCurrencyDollarIcon, ArrowLeftEndOnRectangleIcon, Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import perfil from '../../../../assets/perfil.jpg'
import './verticalnav.scss'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardProfile from '../CardProfile'
import { GlobalState } from '../../../../Context/GlobalState'

function VerticalNav() {

    const [ navIsOpen, setNavIsOpen ] = useState(false)
    const {setControl, setInventario, setVideo } = useContext(GlobalState)

    function openNav() {
        setNavIsOpen(state => !state)
    }

    const navigate = useNavigate()

    function logout() {
        navigate('/login')
    }

    function controlfn() {
        setControl(true)
        setVideo(false)
        setInventario(false)
    }

    function inventariofn() {
        setInventario(true)
        setControl(false)
        setVideo(false)
    }

    function videofn() {
        setVideo(true)
        setControl(false)
        setInventario(false)
    }

    return (
        <>
            <div className={`vertical-nav-div ${navIsOpen ? 'nav-open' : null}`}>
                <div className={`vertical-nav-div__div-menu  `}>
                    <div className={`${navIsOpen ? 'div-button-opne-nav' : null}`}>
                        {navIsOpen && <span className='span-nav-vertical'>CargoGo</span>}
                        <button onClick={openNav} className='vertical-nav-div__div-menu__button-bars'>
                            <Bars2Icon className='vertical-nav-div__div-menu__button-bars__icon' />
                        </button>
                    </div>
                    
                    <div className='vertical-nav-div__div-menu__all-Buttons'>
                        <div onClick={controlfn} className={`${navIsOpen ? 'div-button-opne-nav--crm' : null}`}>
                            <div className={`vertical-nav-div__div-menu__button ${navIsOpen ? 'nav-open-buttons' : null}`}>
                                <CircleStackIcon className='vertical-nav-div__div-menu__button__icon' />
                                {navIsOpen && <div className='div-crm'><span className='div-crm__span'>Control de seguridad</span><ChevronDownIcon  className='div-crm__icon'/></div> }
                            </div>
                        </div>

                        <div onClick={inventariofn} className={`${navIsOpen ? 'div-button-opne-nav--crm' : null}`}>
                            <div className={`vertical-nav-div__div-menu__button ${navIsOpen ? 'nav-open-buttons' : null}`}>
                                <CurrencyDollarIcon className='vertical-nav-div__div-menu__button__icon' />
                                {navIsOpen && <div className='div-crm'><span className='div-crm__span'>Inventario</span><ChevronDownIcon  className='div-crm__icon'/></div> }
                            </div>
                        </div>

                        <div onClick={videofn} className={`${navIsOpen ? 'div-button-opne-nav--crm' : null}`}>
                            <div className={`vertical-nav-div__div-menu__button ${navIsOpen ? 'nav-open-buttons' : null}`}>
                                <DocumentCurrencyDollarIcon className='vertical-nav-div__div-menu__button__icon' />
                                {navIsOpen && <div className='div-crm'><span className='div-crm__span'>Tiempo real</span><ChevronDownIcon  className='div-crm__icon'/></div> }
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
                <div className='div-button-logout'>
                    
                    <div className='vertical-nav-div__div-menu__div-perfil'>
                    <CardProfile state={navIsOpen}/>
                    </div>
                    <div onClick={logout} className={`div-button-logout__div ${navIsOpen ? 'logOut-nav-open' : null}`}>
                        <ArrowLeftEndOnRectangleIcon className='div-button-logout__div__icon'/>
                        {navIsOpen && <span className='logout-color-span'>LogOut</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerticalNav
