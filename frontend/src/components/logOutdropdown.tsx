import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
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
                <DropdownMenuLabel className='font-semibold'>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-400" />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="cursor-pointer gap-1 items-center"
                    >
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer gap-1 items-center justify-between"
                        onClick={() => navigate("/orders")}
                    >
                        My Orders
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => navigate('/cart')}
                    >
                        Cart
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-400 h-[0.05rem]" />
                <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LogOutdropdown
