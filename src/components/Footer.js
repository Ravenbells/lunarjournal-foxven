import React from "react";

const copyright = new Date().getFullYear();

function Footer () {
    return (
        <footer id="footer">
            <p>Copyright-{copyright}</p>
        </footer>
    );
}

export default Footer;