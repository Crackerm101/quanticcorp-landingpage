import React from "react";

import {
    RiFacebookFill,
    RiInstagramLine,
    RiTwitterFill,
    RiLinkedinBoxFill,
} from "react-icons/ri";

export default function Footer() {
    return (
        <div className="w-full bg-card-color py-3">
            <div className="container mx-auto flex h-full justify-between px-5 text-title-color">
                <p>© 2022 www.advanceditlabs.com | All Rights Reserved.</p>
                <span className="flex gap-3 text-2xl">
                    <RiFacebookFill />
                    <RiInstagramLine />
                    <RiTwitterFill />
                    <RiLinkedinBoxFill />
                </span>
            </div>
        </div>
    );
}
