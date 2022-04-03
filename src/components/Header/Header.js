import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Header.css";

const Header = () => {
    function CustomLink({ children, to, ...props }: LinkProps) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? "orange" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    return (
        <div>
            <h2>Welcome to Watch shop</h2>
            <nav>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>

            </nav>
        </div>
    );
};

export default Header;
