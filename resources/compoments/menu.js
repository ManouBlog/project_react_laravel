import React from "react";
function Menu() {
    return (
        <div>
            <div>
                tous les produits
                <ul className="ul_liens">
                    <li><a href="/">Armoires</a></li>
                    <li><a href="/">Tables</a></li>
                    <li><a href="/">fauteuils</a></li>
                    <li><a href="/">Matelas</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;