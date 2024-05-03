import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function WhoAmI() {
    return (
      <div className="font-mono py-4">
        <p className="text-center font-bold">Isar</p>
        <p className="text-center">Technical consultant - Software engineer</p>
        <p className="text-center"><FontAwesomeIcon icon={faLocationDot}/>&nbsp;Barcelona</p>
        <p className="text-center">
        </p>
      </div>

    );
    }

export default WhoAmI;