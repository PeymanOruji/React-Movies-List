import React from 'react';
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}


export const SearchButton = () => <Input value="" type="text" onChange={()=>null}
                                         placeholder="Type for search..."/>