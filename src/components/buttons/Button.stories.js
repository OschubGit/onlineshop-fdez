import React from 'react';
import Button from "./Button";

export default {
    title: "Button",
    component: Button, 
}

const Template = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    label: "Button/ButonPrimary",
    variant: "primary",
    children: "Primary",
    disabled: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "button",
    variant: "secondary",
    children: "Secondary",
    disabled: false,
}

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'large',
    children: "Large",
    disabled: false,
};

export const Small = Template.bind({});
Small.args = {
    label: 'Button',
    size: 'small',
    children: "Small",
    disabled: false,
};