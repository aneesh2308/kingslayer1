import React from 'react';
import {Link} from 'react-router-dom';
const NavList = (props) => {
    const list = props.list;
    return (
        <>
            <ul className="p-0" style={{listStyleType: "none"}}> 
                {list.map((item, index) => {
                    return <Link to={item.link} className="nav-link text-white pl-1" key={index}>{item.name || item.blogTitle}</Link>
                })}
            </ul>
        </>
    )
}

export default NavList;