import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setUser }) {
    function handleLogoutClick() {
      fetch("/logout", {
        method: "DELETE",
      }).then((resp) => {
        if (resp.ok) {
          setUser(null);
        }
      });
    }

    return (
        <nav>
            <Link to = "/watches" >
              Watchpage
            </Link>
        
            <Link to = "/logout" onClick={handleLogoutClick}>
              Logout
            </Link>
         
        </nav>
      );
    }

    export default NavBar;