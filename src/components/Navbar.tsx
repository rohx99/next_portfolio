"use client";
import React, { useState } from "react";
import { FloatingNav, MenuItem, HoveredLink } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative w-full">
      <FloatingNav setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Projects</HoveredLink>
            <HoveredLink href="/interface-design">Eduction</HoveredLink>
            <HoveredLink href="/seo">Industry Experience</HoveredLink>
            <HoveredLink href="/branding">Tech Stack</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Me"
        ></MenuItem>
      </FloatingNav>
    </div>
  );
}
