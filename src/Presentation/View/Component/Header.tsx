import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import { useState } from "react";
import InputSearch from "./InputSearch";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="primary"
                className="navbar col-12"
                expand="md"
                full
                container="md"
                light>
                <NavbarBrand href="/"><span className="text-white fw-bold">ReactNews ID</span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem >
                            <NavLink href="/"><span className="text-warning fw-bold">Terpopuler</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/iqbaltk/ReactNews" target={"_blank"}>
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <InputSearch />
                </Collapse>
            </Navbar>
        </>
    );
};
export default Header;
