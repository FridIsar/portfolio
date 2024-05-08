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
          <a className="text-2xl mx-2 text-slate-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white" href="#"><FontAwesomeIcon icon={faGithub}/></a>
          <a className="text-2xl mx-2 text-slate-900 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white" href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </p>
      </div>
    );
    }

export default WhoAmI;