
import { Navigation } from "../interfaces/Navigation";
import { NavigationList } from "../interfaces/NavigationList";

export const navigation: Array<NavigationList<Navigation>> = [
    {
        title: "Dashboard",
        icon: "project",
        hasChildren: false,
        link: "/dashboard",
        children: []

    },
    {
        title: "Profile Settings",
        icon: "setting",
        hasChildren: false,
        link: "/feeds",
        children: []

    }

    ,
    {
        title: "Manage Workspaces",
        icon: "group",
        hasChildren: true,
        children: [
            {
                title: "Workspace Dashboard",
                link: ""
            },
            {
                title: "Delete Workspace",
                link: ""
            }
        ]

    },

    {
        title: "Manage Teams",
        icon: "team",
        hasChildren: true,
        children: [
            {
                title: "Analytics",
                link: ""
            },
            {
                title: "Teams",
                link: ""
            },
        ]

    }
]