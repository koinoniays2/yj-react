import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"; 

export default function Footer() {
  return (
    <div className="w-full h-[300px] bg-[#032541] flex justify-center py-16">
        {/* 1 */}
        <div className="w-[200px] flex flex-col">
            <Link to={"/"}><img className="h-[30px] object-cover" src={Logo} alt="main Logo" />
            </Link>
        </div>
        {/* 2 */}
        <div className="w-[200px] flex flex-col text-white">
            <h3 className="uppercase">the basic</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem,</p>
            <p>Lorem, ipsum.</p>
        </div>
        {/* 3 */}
        <div className="w-[160px] flex flex-col text-white">
            <h3 className="uppercase">get involved</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem,</p>
            <p>Lorem, ipsum.</p>
        </div>
        {/* 4 */}
        <div className="w-[160px] flex flex-col text-white">
            <h3 className="uppercase">community</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem,</p>
            <p>Lorem, ipsum.</p>
        </div>
        {/* 5 */}
        <div className="w-[160px] flex flex-col text-white">
            <h3 className="uppercase">legal</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem,</p>
            <p>Lorem, ipsum.</p>
        </div>
    </div>
  )
}
