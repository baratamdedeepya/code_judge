import './Landing.css';
import CodeEditor from '../molecules/CodeEditor';
import Button from '../atoms/Button';
import { IoPeopleSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
const Landing=() =>
{
    return(
        <div className="main">
            <div className="left">
                <h1>Code.Compile.</h1>
                <h1>Conquer.</h1>
                <p>code_juge is your all-in-one platform to pratice,</p><p>compete and improve your coding skills</p><p> with a powerful online judge </p>
                <div className="btnn">
                <Button variant="primary">Start Coding now</Button>
                <Button variant="secondary">Explore Contests</Button>
                </div>
                <div className="content">
                    <div className="card">
                        <div className="cleft"><IoPeopleSharp /></div>
                        <div className="cright">
                            <h2>50k+</h2>
                            <h3>Developers</h3>
                        </div>
                    </div>
                     <div className="card">
                        <div className="cleft"><FaCode /></div>
                        <div className="cright">
                            <h2>10k+</h2>
                            <h3>problems</h3>
                        </div>
                    </div>
                     <div className="card">
                        <div className="cleft"><GiTargetPrize /></div>
                        <div className="cright">
                            <h2>100+</h2>
                            <h3>Contests</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <CodeEditor/>
            </div>
        </div>
    )
}
export default Landing;