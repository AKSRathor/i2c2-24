import React from 'react'
import style from "./Page3.module.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"


const Page3 = () => {
  return (
    <div className={`${style.pg3Div}`}>
      <div className={`${style.pg3InnerDiv}`}>

        <Tabs defaultValue="account" className="w-[800px]">
          <TabsList style={{ backgroundColor: 'transparent', justifyContent: 'center', gap: '44px', margin: '2% 0', width: '100%' }}>
            <TabsTrigger style={{ backgroundColor: '#000c1b', color: 'white', padding: '2%', width: '130px', justifyContent: 'center', borderRadius: "10px" }} value="1">About</TabsTrigger>
            <TabsTrigger style={{ backgroundColor: '#000c1b', color: 'white', padding: '2%', width: '130px', justifyContent: 'center', borderRadius: "10px" }} value="2">Why Participate?</TabsTrigger>
            <TabsTrigger style={{ backgroundColor: '#000c1b', color: 'white', padding: '2%', width: '130px', justifyContent: 'center', borderRadius: "10px" }} value="3">Theme</TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <CardHeader style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >About I2C2 Hackathon</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >The online hackathon is divided into 3 phases and will continue for 45 days. There will be sessions and everyone will have access to mentors who are experts in various domains and guide all the participants.

              </CardDescription>
            </CardHeader>

          </TabsContent>
          <TabsContent value="2">
            <CardHeader style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >Why Participate?</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >You’ll get to grip new technologies, learn new technical skills, chance to network, and meet experienced industry-level professionals. You will get a taste of smart management, team dynamics, and innovative new ideas that will be helpful for the society and environment.</CardDescription>
            </CardHeader>
          </TabsContent>
          <TabsContent value="3">
            <CardHeader style={{ backgroundColor: 'white', borderRadius: '10px' }}>
              <CardTitle style={{ fontSize: '3em', padding: '2% 0' }} >Theme of Hackathon</CardTitle>
              <CardDescription style={{ padding: '2% 0', color: 'black' }} >Our themes are based on Website Development. We will be accepting the participation of students either individually or a maximum of 4 members in a team with 4 different roles (UI/UX Designer, Frontend Developer, Backend Developer & Full-Stack Developer).</CardDescription>
            </CardHeader>
          </TabsContent>
        </Tabs>
      </div>
    </div >
  )
}

export default Page3