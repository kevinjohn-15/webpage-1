import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import EventCard from '@/components/ui/eventcard';
import DateCard from "@/components/ui/datecard";

export default function HomePage(){
    return(
      
        <><div className="py-8 px-4">
            <h1 className="text-3xl font-semibold text-black-800 mb-4 p-5 md:p-9">Chennai's Most-Loved</h1>
            <div className="flex items-left justify-evenly gap-12">

                <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
                    <Image src="/comedy.jpeg"
                        alt="comedy logo"
                        width={175}
                        height={175}
                        className="object-cover" />
                </div>

                <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
                    <Image src="/buisness.jpeg"
                        alt="buisness logo"
                        width={175}
                        height={175}
                        className="object-cover" /></div>

                <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
                    <Image src="/party.jpeg"
                        alt="party logo"
                        width={175}
                        height={175}
                        className="object-cover" /></div>

                <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
                    <Image src="/festival.jpeg"
                        alt="festival logo"
                        width={175}
                        height={175}
                        className="object-cover" /></div>

                <div className="w-32 h-32 rounded-full overflow-hidden bg-teal-400 flex items-center justify-center">
                    <Image src="/music.jpeg"
                        alt="music logo"
                        width={175}
                        height={175}
                        className="object-cover" />
                </div>

            </div>

        </div><div className="py-8 px-4">
                <h1 className="text-3xl font-semibold text-black-800 mb-4 p-5 md:p-9">Popular Events in Chennai</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
                    <EventCard
                        title="DRUG AWARENESS MARATHON"
                        date="Sat, 19 Apr"
                        price="INR 499"
                        interested={100}
                        imageUrl="/Marathon.jpeg"
                        description="Olcott Memorial Higher Secondary School" />

                    <EventCard
                        title="Summer Exclusive Offers (Buy 3 Get 1 Free) - MGM Dizzee World"
                        date="16 Apr Onwards"
                        price="INR 3.5k"
                        interested={350}
                        imageUrl="/mgm.jpeg"
                        description="MGM Dizzee World (April & May)" />

                    <EventCard
                        title="Hearts Unplugged - A Musical Storytelling Show"
                        date="Sun, 27 Apr"
                        price="INR 199"
                        interested={200}
                        imageUrl="/musical.jpeg"
                        description="Dices and Drama" />
                </div>
            </div><div className="min-h-fit bg-gray-100 flex items-left justify-left p-4 mx-50">
                <div className="max-w-2xl w-full text-left">
                    <h2 className="text-4xl font-semibold text-black-800 mb-4 items-start">Tell us what you love</h2>
                    <p className="text-l text-gray-800 items-start">This will help us curate events specially for you</p>

                    <div className="flex flex-wrap gap-5 justify-left mb-6 mt-10">
                        <Button variant="outline" className="rounded-full">
                            Business
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Music
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Comedy
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Parties
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Dance
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Dating
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Workshop
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Food & Drinks
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Sports
                        </Button>
                        <Button variant="outline" className="rounded-full">
                            Fine Arts
                        </Button>
                        <Button variant="outline" className="rounded-full bg-blue-100 text-white-500">
                            Show More
                        </Button>
                    </div>
                    <Button className="bg-blue-500 text-white hover:bg-blue-900 rounded-lg px-10 py-5">Get Started</Button>
                </div>
                <div className="flex ml-auto p-4">
                    <Image src="/boy.jpeg"
                        alt="boy"
                        width={200}
                        height={200}
                        className="object-cover rounded" />
                </div>
            </div><div className="py-6 px-4">
                <h1 className="text-3xl font-semibold text-black-800 mb-4 p-5 md:p-9">Explore Events By Date</h1>

            </div><div className="flex flex-wrap p-4 content-start space-y-15 space-x-20 mx-20">
                <DateCard label="Today" subLabel="Wed, 16th Apr" color="bg-blue-400" />
                <DateCard label="Tomorrow" subLabel="Thu, 17th Apr" color="bg-blue-400" />
                <DateCard label="This Weekend" subLabel="19th - 20th Apr" color="bg-blue-400" />
                <DateCard label="This Week" subLabel="14th - 20th Apr" color="bg-blue-400" />
                <DateCard label="Next Weekend" subLabel="26th - 27th Apr" color="bg-blue-400" />
                <DateCard label="Next Week" subLabel="21st - 27th Apr" color="bg-blue-400" />
                <DateCard label="This Month" subLabel="1st - 30th Apr" color="bg-blue-400" />
                <DateCard label="Custom Date" subLabel="Pick Range" color="bg-blue-400" />
            </div></>
    
    );
}
  