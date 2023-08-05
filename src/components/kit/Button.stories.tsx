import React from 'react';
import Button from "./Button";
import Center from "./Center";

export default {
    title: 'Form/Button',
    component: Button
}


export const primaryButton = () => <Center width="300"><Button text="Primary" action={() => null}
                                                               name="primary"/></Center>
export const SecondaryButton = () => <Center width="300"><Button mood="secondary" text="Secondary" action={() => null}
                                                                 name="secondary"/></Center>
export const NeutralButton = () => <Center width="300"><Button mood="neutral" text="Neutral" action={() => null}
                                                               name="neutral"/></Center>
