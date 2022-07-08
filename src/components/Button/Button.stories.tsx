import {ComponentMeta, ComponentStory} from '@storybook/react';
import { GlobalStyle } from "../../styles/global";

import { Button } from './';
import React from "react";

export default {
    title: 'Button',
    component: Button,
    decorators: [
        (Story) => (
            <>
                <GlobalStyle />
                {Story()}
            </>
        ),
    ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
    color: "default",
    children: "Default"
};
