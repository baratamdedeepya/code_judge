import { FaPlay } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import './CodeEditor.css';
const CodeEditor=()=>
{
    return(
        <div className="codeeditor">
            <div className="codeeditor-head">
                <div className="languages">
                    <button>C++</button>
                    <button>python</button>
                    <button>java</button>
                    <button>Java Script</button>
                </div>
            </div>
            <div className="codeeditor-body">
                    <div className="code-area">
                        <div className="line">
                            <span>1</span>
                            <code>#include &lt;iostream&gt;</code>
                        </div>
                        <div className="line">
                            <span>2</span>
                            <code>using name space std;</code>
                        </div>
                        <div className="line">
                            <span>3</span>
                        </div>
                        <div className="line">
                            <span>4</span>
                            <code>int main() &#123;</code>
                        </div>
                        <div className="line">
                            <span>5</span>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;int n;</code>
                        </div>
                        <div className="line">
                            <span>6</span>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt;</code>
                        </div>
                        <div className="line">
                            <span>7</span>
                            <code>&#125;</code>
                        </div>
                    </div>
                    <div className="io-area">
                     <div className="io-names">
                        <span className="active">Input</span>
                        <span>Output</span>
                     </div>
                    <div className="input">
                         5
                    </div>
                 </div>
            </div>
            <div className="codeeditor-footer">
                 <button className="reset">Reset</button>
                 <button className="run"> <FaPlay /> Run</button>
                 <button className="submit"> <FaPaperPlane />   Submit</button>
            </div>
        </div>
    )
}
export default CodeEditor;