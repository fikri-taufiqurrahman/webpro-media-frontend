import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { MENUS } from "@/constants/menus";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">
      <Card className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Web ProMedia</h1>
        <h2 className="text-lg text-[#BEBDBD] font-semibold text-center mb-8">Sign up to see photos and videos <br /> from your friends.</h2>
        <form className="space-y-4">
          
          <Label htmlFor="mobile_number" className="sr-only"/>
          <Input 
            type="number" 
            id="mobile_number" 
            className="w-full p-2 border rounded-md "
            placeholder="Mobile Number"
            required
          />
          
          <Label htmlFor="email" className="sr-only"/>
          <Input 
            type="email" 
            id="email" 
            className="w-full p-2 border rounded-md "
            placeholder="Email"
            required
          />

          <Label htmlFor="name" className="sr-only"/>
          <Input 
            type="text" 
            id="name" 
            className="w-full p-2 border rounded-md "
            placeholder="Full Name"
            required
          />

          <Label htmlFor="username" className="sr-only"/>
          <Input 
            type="text" 
            id="username" 
            className="w-full p-2 border rounded-md "
            placeholder="Username"
            required
          />

          <Label htmlFor="password" className="sr-only"/>
          <Input 
            type="text" 
            id="password" 
            className="w-full p-2 border rounded-md "
            placeholder="Password"
            required
          />
          
          <div className="text-center text-xs font-medium">
            <p>People who use our service may have uploaded <br /> your contact information to Instagram. <span className="underline underline-offset-1"><Link>Learn More</Link></span></p>
          </div>

          <div className="text-center text-xs font-medium">
            <p>By signing up, you agree to our <span className="underline underline-offset-1"><Link>Term, Privacy Policy and Cookies Policy</Link></span></p>
          </div>
          
          <Button type="submit" className="w-full bg-[#EF2B7CCC] text-white p-2 rounded-md">Sign Up</Button>
          
          
        </form>
      </Card>
      <Card className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="text-center  font-semibold">Have an account? <Link to={MENUS.LOGIN}><span className="text-[#EF2B7C]">Log In</span> </Link></div>
        
      </Card>
    </div>
  );
};

export default Register;
