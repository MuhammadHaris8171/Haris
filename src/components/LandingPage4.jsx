    import React, { useState } from 'react';
    import { Button } from "./Button";
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
    import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

    function LandingPage4() {
    return (
        <div>


        <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">Hello, I'm Your Name</h1>
            <p className="text-lg mb-4">I'm a junior/intermediate level MERN developer with a passion for building scalable and efficient web applications.</p>
            <Button variant="outline" className="mb-4">Learn More</Button>
            <Button variant="secondary" className="mb-4">Get in Touch</Button>
            </div>
            <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
            <Card className="bg-white rounded-xl shadow-md">
                <CardHeader>
                <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-lg mb-4">I have experience working with MongoDB, Express, React, and Node.js to build full-stack web applications. I'm excited to continue learning and growing as a developer.</p>
                </CardContent>
                <CardFooter>
                <Avatar className="mb-4">
                    <AvatarImage src="https://github.com/nutlope.png" />
                    <AvatarFallback>YN</AvatarFallback>
                </Avatar>
                </CardFooter>
            </Card>
            </div>
        </div>
        </div>
    
        </div>
    )
    }

    export default LandingPage4