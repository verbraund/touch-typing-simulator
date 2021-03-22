import Display from "./Display";
import Panel from "./Panel";
import Settings from "./Settings";
import Helper from "./Helper";

export default function Application() {
    return (
        <div className="application">
           <div className="container">
               <Panel />
               <Display />
               <Settings />
               <Helper />
           </div>
        </div>
    );
}