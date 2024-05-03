import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function WhoAmI() {
    return (
      <div className="">
        <p className="text-center font-bold">Isar</p>
        <p className="text-center">Technical consultant - Software engineer</p>
        <p className="text-center"><FontAwesomeIcon icon={faLocationDot}/>&nbsp;Barcelona</p>
        <p className="text-center">
          <a className="mx-2 text-slate-900 hover:text-slate-700" href="#"><FontAwesomeIcon icon={faGithub}/></a>
          <a className="mx-2 text-slate-900 hover:text-slate-700" href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </p>
      </div>
    );
    }

export default WhoAmI;