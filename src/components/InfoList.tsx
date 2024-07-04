import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function InfoList({info}){
    return (
        <>
        <li>
        <FontAwesomeIcon icon={info.icon} size="2x"/>
            <div className="detail">

            <a href="#">{info.info}</a>
            <a href="#">{info.description}</a>
            </div>

        </li>
        </>
    )
}
export default InfoList