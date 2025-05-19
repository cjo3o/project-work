import React, {useState} from 'react';
import {Button, Drawer} from "antd";
import {Link} from "react-router-dom";

function Menu(props) {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer
                title="메뉴입니다"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <div>
                    <ul>
                        <li><Link to="/" onClick={onClose}>root</Link></li>
                        <li><Link to="/user" onClick={onClose}>user</Link></li>
                    </ul>
                </div>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

export default Menu;