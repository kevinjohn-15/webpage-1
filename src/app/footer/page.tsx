import React from 'react'
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-15 px-2">
        <div className="flex items-center justify-start mx-25">
        <div className="text-left ">
        <h1 className="text-2xl font-bold">Best of Chennai Events in Your Inbox</h1>
        <p className="text-left my-2">Don't miss your favorite concert again.
          We deliver best of the city happenings and handpicked content for you every week. 
          Subscribe weekly email newsletter for Chennai.</p>
        </div>
        <div className="flex items-center justify-between ml-auto p-4">
        <Input
            type="Email"
            placeholder="Enter your email here"
            className="w-60% md:w-150 h-10 p-2 rounded-l-lg border-solid border-black text-black-800 bg-white"
          />
          <Button variant="secondary" className="space-x-3">Subscribe</Button>
        </div>
        </div>
        <Separator className="w-full my-5"/>
        <div className="flex flex-col items-start justify-start mx-25 my-5">
          <h1 className=" text-xl text-white font-bold">Trending Searches</h1>
          <p className="my-3"><a href="#" className="text-sm hover:text-blue-400">Events & Things To Do In Chennai This Weekend </a>|<a href="#" className="text-sm hover:text-blue-400">Car Shows in Chennai</a>| <a href="#" className="text-sm hover:text-blue-400">Events In Chennai Today </a>|<a href="#" className="text-sm hover:text-blue-400">Easter Events in Chennai </a>|
          <a href="#" className="text-sm hover:text-blue-400"></a><a href="#" className="text-sm hover:text-blue-400">Comedy Shows Near Chennai </a>|<a href="#" className="text-sm hover:text-blue-400">Live Music Events Near Chennai </a>
          <a href="#" className="text-sm hover:text-blue-400">Events & Things To Do In April 2025 In Chennai </a>| <a href="#" className="text-sm hover:text-blue-400">Chennai Events | Gurgaon Events | Surat Events</a>
          <a href="#" className="text-sm hover:text-blue-400">NOIDA CITY HALF MARATHON 2025 (4TH EDITION)</a>|<a href="#" className="text-sm hover:text-blue-400">Business Excellence 2025 - Business Growth Workshop - Pune</a>| </p>     
        </div>
        <Separator className="w-full my-5"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-25">
          <div>
            <h1 className="text-white text-xl font-semibold">Host Events</h1>
            <div className="space-y-5 p-2"><p className=" text-m">
            <ul className="space-y-3">
              <li>Publish Your Events</li>
              <li>Promote Your Events</li>
              <li>Sell Tickets Online</li>
              <li>Pricing Plans</li>
            </ul>
              </p>
              </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Discover Events</h1>
            <div className="space-y-5 p-2"><p className=" text-m">
            <ul className="space-y-3">
              <li>Events for You</li>
              <li>Virtual Events</li>
              <li>Get Event Updates</li>
              <li>Event Discovery App</li>
              <li>Write for Us</li>
            </ul>
              </p>
              </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Explore</h1>
            <div className="space-y-5 p-2"><p className=" text-m">
            <ul className="space-y-3">
              <li>Event Listing Plugin</li>
              <li>Media Kit</li>
              <li>Affiliate Program</li>
              <li>Support Center</li>
              <li>Blog</li>
            </ul>
              </p>
              </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">#StayHappening</h1>
            <p>Go-to place to discover events for more than 20M people globally.</p>
          </div>
        </div>
        
      </footer>

    </div>
    
  );
}

