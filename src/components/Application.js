import Display from "./Display";
import Panel from "./Panel";

export default function Application() {
    return (
        <div className="application">
           <div className="container">
               <div className="row pt-5">
                   <div className="col">
                       <Panel />
                   </div>
               </div>
               <div className="row mt-5">
                   <div className="col">
                       <Display />
                   </div>
               </div>
           </div>
        </div>
    );
}