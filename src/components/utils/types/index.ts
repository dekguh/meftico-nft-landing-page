import { MouseEventHandler } from "react";

export interface INavBrand {
    title: string;
}

export interface INavItem {
    text: string;
    to?: string;
}

export interface IButton {
    text: string;
    onClick?: MouseEventHandler;
}

export interface INavList {
    isActive: boolean;
}

export interface INavButton {
    btnClick?: MouseEventHandler;
}

export interface INavToggle {
    btnClick?: MouseEventHandler;
}

export interface ILabelSection {
    text: string;
}

export interface ICardHomeHero {
    classes?: string;
    icon?: string;
    title?: string;
    description?: string;
}