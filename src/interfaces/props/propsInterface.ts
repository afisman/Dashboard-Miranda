import React from "react"


export interface NavbarProps {
    sidebarOpen: string
    setSidebarOpen: React.Dispatch<React.SetStateAction<string>>
}