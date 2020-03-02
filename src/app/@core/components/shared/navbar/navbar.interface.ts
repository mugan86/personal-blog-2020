export interface NavbarMenuItem {
    title: string;
    link: string;
    active?: boolean;
    submenus?: NavbarMenuItem[];
}
