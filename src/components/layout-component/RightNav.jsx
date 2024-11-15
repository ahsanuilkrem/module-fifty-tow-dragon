import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";
import swimming from '../../assets/image/swimming.png';
import Allclass from '../../assets/image/class.png';
import play from '../../assets/image/playground.png'


const RightNav = () => {
    return (
        <div className="space-y-5 ">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <div className="bg-base-100 p-2">
            <h2 className="font-semibold mb-3">Q-Zone</h2>
            <div className="*:w-full space-y-8 ">
                <img src={swimming} alt="" srcset="" />
                <img src={Allclass} alt="" srcset="" />
                <img src={play} alt="" srcset="" />
            </div>
            </div>
          
        </div>
    );
};

export default RightNav;