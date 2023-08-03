import React from "react";
import {SearchType} from './Search.types';
import Input from "./kit/Input";

export default function Search({search, onSearch}: SearchType) {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onSearch(e.currentTarget.value)
    }

    return <form>
        <Input placeholder="Type for search..." type="text" value={search} onChange={handleChange}/>
    </form>
}