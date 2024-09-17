import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import React from "react";
import { Link } from "react-router-dom";
import { MENUS } from "@/constants/menus";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">
      <Card className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-10">Web ProMedia</h1>
        <form className="space-y-4">
          
          <Label htmlFor="email" className="sr-only"/>
          <Input 
            type="email" 
            id="email" 
            className="w-full p-2 border rounded-md "
            placeholder="Mobile Number, username, or email"
            required
          />
          
          <Label htmlFor="password" className="sr-only"/>
          <Input 
            type="password" 
            id="password" 
            className="w-full p-2 border rounded-md "
            placeholder="Enter your password"
            required
          />
          
          
          <Button type="submit" className="w-full bg-[#EF2B7CCC] text-white p-2 rounded-md">Log in</Button>

          <div className="relative flex items-center ">
            <hr className="w-full border-gray-300 my-2" />
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-3 text-gray-500">
              OR
            </span>
          </div>
          
          <div className="flex items-center justify-center text-xl text-[#E53935] font-bold gap-3 pt-6">
            <IconBrandGoogleFilled color="#E53935"/>
            <Link>Masuk dengan Google</Link>
          </div>
          <div className="flex items-center justify-center text-sm text-[#8B8181]">
            <Link>Forgot password?</Link>
          </div>
          
        </form>
      </Card>
      <Card className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="text-center  font-semibold">Don't have an account? <Link to={MENUS.REGISTER}><span className="text-[#EF2B7C]">Sign Up</span> </Link></div>
        
      </Card>
    </div>
  );
};

export default Login;
