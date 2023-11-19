import React from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Горные лыжи', 'sub1', <AppstoreOutlined/>, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('скалолазание', 'sub2', <AppstoreOutlined/>, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),


    getItem('велосипеды', 'sub3', <AppstoreOutlined/>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),

    getItem('лонго/скейто/роллеры', 'sub4', <AppstoreOutlined/>, [
        getItem('Option 13', '13'),
        getItem('Option 14', '14'),
        getItem('Option 15', '15'),
        getItem('Option 16', '16'),
    ]),

    getItem('календарь событий', 'sub5', <AppstoreOutlined/>, [
        getItem('Option 17', '17'),
        getItem('Option 18', '18'),
        getItem('Option 19', '19'),
        getItem('Option 20', '20'),
    ]),

    getItem('карта', 'sub6', <AppstoreOutlined/>, [
        getItem('Option 21', '21'),
        getItem('Option 22', '22'),
        getItem('Option 23', '23'),
        getItem('Option 24', '24'),
    ]),

    {type: 'divider'},


    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const App: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            // style={{ width: 256 }}
            style={{width: 256}}
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default App;