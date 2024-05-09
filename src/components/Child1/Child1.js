import SubChild1_1 from "../SubChild1_1/SubChild1_1";
import { AppContext } from "../../App.js";
import { useContext   } from "react";

const Child1 = () => {
    const appContext = useContext(AppContext)
    return (
        <div>
        <SubChild1_1 greeting= {appContext.greeting} answer= {appContext.answer}/>
        </div>
    )
}

export default Child1;