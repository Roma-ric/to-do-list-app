import { Outlet } from "react-router-dom";
import SectionOperation from "./SectionOperation";

function Aside({isClicked}) {
    return (
        <aside className="col-lg-10 col-12 overflow-auto" style={{height: "535px"}}>
            {
                isClicked ? null : <SectionOperation />
            } 
            <Outlet />
        </aside>
    );
}

export default Aside;