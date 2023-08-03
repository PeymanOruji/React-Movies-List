import React from "react";
import Search from "./Search";

type NavType = {
    search: string,
    onSearch: (value: string) => void;
}
export default function Nav({search, onSearch}: NavType) {
    return <nav>
        <ul>
            <li>
                <Search search={search} onSearch={onSearch}/>
            </li>
        </ul>
    </nav>
}