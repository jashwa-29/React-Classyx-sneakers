import React from 'react'
import { Subhead } from '../Components/Subhead'
import Allpageinfo from '../Components/Allpageinfo'
import Footer from '../Components/Footer'

const Account = () => {
  return (
    <>
    <Subhead pname='Account'/>
    <section class="my-[50px]">
    <div class="w-[93%] mx-auto">
        <div class="main-account flex flex-wrap justify-center gap-[70px] lg:gap-[200px]">
            <div class="login flex flex-col items-start gap-[25px]">
                   <h3 class="font-poppins font-bold text-[30px]">Login</h3>
                   <form action="" class="flex flex-col items-start gap-[25px]">
                         <div class="flex flex-col items-start gap-[14px]">
                            <label for="" class="font-poppins font-bold text-[16px]">User Name or Email Address</label>
                            <input type="text" placeholder="User Name or Email Address" class="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"/>
                         </div>
                         <div class="flex flex-col items-start gap-[14px]">
                            <label for="" class="font-poppins font-bold text-[16px]">User Name or Email Address</label>
                            <input type="text" placeholder="User Name or Email Address" class="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"/>
                         </div>
                         <div class="flex items-center gap-[15px]">
                            <input type="checkbox" class="w-4 h-4"/> <p class="font-poppins font-medium text-[13px]">Remember me</p>
                         </div>
                         <div class="flex items-center gap-[15px]">
                            <button class="bg-none rounded-[5px] border border-black text-[15px] font-semibold px-[38px] py-[10px] hover:bg-black hover:text-white">Log In</button>
                            <a href="" class="font-semibold font-poppins text-[15px]">Lost your Password.?</a>
                         </div>
                   </form>
            </div>
            <div class="register  flex flex-col items-start gap-[25px]">
                   <h3 class="font-poppins font-bold text-[30px]">Register</h3>
                   <form action="" class="flex flex-col items-start gap-[25px]">
                    <div class="flex flex-col items-start gap-[14px]">
                        <label for="" class="font-poppins font-bold text-[16px]">User Name or Email Address</label>
                        <input type="text" placeholder="User Name or Email Address" class="border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[350px] lg:w-[390px]"/>
                     </div>
                     <div>
                        <p class="font-poppins font-medium text-[16px] w-[300px] lg:w-[450px]">A link to set a new password will be sent to your email address.</p>
                        <p class="font-poppins font-medium text-[16px] w-[300px] lg:w-[450px]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="" class="font-extrabold">privacy policy.</a></p>
                     </div>
                     <div>
                        <button class="bg-none rounded-[5px] border border-black text-[15px] font-semibold px-[38px] py-[10px] hover:bg-black hover:text-white">Register</button>
                     
                     </div>
                   </form>
            </div>
        </div>
    </div>
</section>
<Allpageinfo/>
<Footer/>
</>
  )
}

export default Account