import SubChild2_1 from "../SubChild2_1/SubChild2_1";
import { AppContext } from "../../App.js";
import { useContext   } from "react";

const Child2 = () => {
    const appContext = useContext(AppContext)
    return (
     <div>
        <SubChild2_1 greeting= {appContext.greeting} answer= {appContext.answer} />
     </div>
    )
}
  
export default Child2;