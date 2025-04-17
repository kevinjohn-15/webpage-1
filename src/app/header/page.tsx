import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";

export default function HeaderPage() {
  return(
    <div className="min-h-fit bg-white-100">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-left space-x-2 mx-12">
      <h1 className="text-xl font-semibold justify-items-start"><AlertDialog>
      <AlertDialogTrigger>allevents in Chennai</AlertDialogTrigger>
      <AlertDialogContent>
      <AlertDialogHeader>
      <AlertDialogTitle>Select Your City</AlertDialogTitle>
      <AlertDialogDescription>
      <div className="w-64">
      <Input type="text" placeholder="Select Your City" className="bg-white-800 text-black border-none rounded-full"/>
      </div>
      </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
      </AlertDialogContent>
      </AlertDialog>
      </h1>
      </div>
      <div className="flex items-center space-x-4">
      <Button variant="link" className="text-blue-400 hover:underline p-0 h-auto">Create Event</Button>
      <DropdownMenu>
      <DropdownMenuTrigger><Button variant="link" className="text-blue-400 hover:underline p-1 h-auto">SIGN IN</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuLabel><Button variant="ghost">Email</Button></DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel><Button variant="ghost">Phone Number</Button></DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel><Button variant="ghost">Google</Button></DropdownMenuLabel>
      </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="w-64">
      <Input type="text" placeholder="Search All Events" className="bg-gray-800 text-white border-none rounded-full focus:ring-0 focus:outline-none"/>
      </div>
      </div>
      </header>
       <div className="bg-gray-600 text-black p-2 flex space-x-20 justify-center items-center border-b border-black-500 align-content:space-between">
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>ALL</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Entertainment</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavigationMenuLink>Music</NavigationMenuLink>
          <NavigationMenuLink>Concerts</NavigationMenuLink>
          <NavigationMenuLink>Parties</NavigationMenuLink>
          <NavigationMenuLink>Dance</NavigationMenuLink>
          </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Arts & Theatre</NavigationMenuTrigger>
          <NavigationMenuContent>
          <NavigationMenuLink>Theatre</NavigationMenuLink>
          <NavigationMenuLink>Crafts</NavigationMenuLink>
          <NavigationMenuLink>Photograghy</NavigationMenuLink>
          <NavigationMenuLink>Cooking</NavigationMenuLink>
          </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Adventures</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Buisness</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Festival</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Easter</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
      
          <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
          </div>
          <section>
      <div className="relative height-screen">
      <div className="absolute inset-0 z-0 h-[50vh]">
      <Image src="/chennai.jpeg" alt="Chennai Landmark"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"/>
      </div>
      <div className="relative z-10 flex h-full flex-col items-start justify-center p-6 md:p-12">
      <h1 className="text-4xl text-white font-bold mb-4">Events in Chennai</h1>
      <p className="text-m text-white font-weight: 700 max-w-xl mb-6">
      Events in Chennai
      Earlier known as Madras, the capital city of Tamil Nadu is a wonder in itself! There are a lot of things in store at events in Chennai. The vibrant arts, educational seminars, music events, and historic exhibitions are some of the highlights of events in Chennai. Festivals and events in Chennai include Pongal, The Tamil New Year, and the Natyanjali Dance Festival, to name a few.
      Chennai is the most popular tourist destination on the southern fringes for its ancient temples and natural wonders. Explore the beautiful city’s events with us.
      </p>
      <Button variant="secondary">Hook me with Happenings</Button>
      </div>
    </div>
    </section>
  </div>
  );
}