import user from '../images/account-icon.png'
import { Nav1, Nav2 } from '../composants/Nav';

import { useContext } from "react";
import { TacheContext } from "../utils/context/tacheContext";

function Header() {
    const { onTache } = useContext(TacheContext);
    return (
        <div className='shadow-lg'>
            <header className="navbar bg-light p-1">
                <h4 className='m-2'> To-Do List </h4>
                <button class="card p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#profilUser" aria-controls="offcanvasRight"> <img src={user} alt=''width={35} height={35}/> </button>       
            </header>
            {
                onTache ? <Nav2 /> : <Nav1 />
            }
        </div>
    );
}

export default Header;