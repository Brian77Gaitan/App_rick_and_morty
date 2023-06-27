import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styled from "./Nav.module.css";


export default function Nav(props) {
    return (
        <div className={styled.container}>
            <SearchBar onSearch={(characterID) =>
                window.alert(characterID)} />
        </div>
    )
}