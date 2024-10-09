/* eslint-disable react/prop-types */
import perfil from '../../../../assets/perfil.jpg'
import './cardprofile.scss'

function CardProfile({state}) {


    return (
        <>
            <div className={`card-profile__card ${state ? 'card-ok' : null}`}>
                <div className="card-profile__card__div-img">
                    <img className="card-profile__card__div-img__img" src={perfil} alt="" />
                </div>
                <div style={{display: state ? 'flex' : 'none'}} className="card-profile__card__div-inf">
                    <span className="card-profile__card__div-inf__span">Jhon Doe</span>
                    <p className="card-profile__card__div-inf__p">jhondoe@sendpulse.com</p>
                </div>
                
            </div>
        </>
    )
}

export default CardProfile
