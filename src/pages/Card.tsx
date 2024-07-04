import dataInfo  from '../hooks/info'
import InfoList from '../components/InfoList'
import oa from '../assets/oaLogo.png'
function Card(){


    return (
        <div className="card">
            <div className="info">

            <h2>OTTO <strong>AJANEL</strong></h2>
            <p>Developer Full-stack</p>
            <ul>
                {dataInfo.map(info=><InfoList info={info}/>)}
            </ul>
            </div>
            <div className="logo">
            <img src={oa} alt="" width="200"/>
            </div>
        </div>

    )
}

export default Card