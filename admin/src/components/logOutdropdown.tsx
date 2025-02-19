import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,  DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

const LogOutdropdown: React.FC = () => {
    const name = localStorage.getItem("name")
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("name")
        localStorage.removeItem("userId");
        navigate("/")
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${name}`
                        }
                        alt="@shadcn"
                    />
                    <AvatarFallback>USER</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white text-black absolute  right-0 border-gray-400">

                <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LogOutdropdown
