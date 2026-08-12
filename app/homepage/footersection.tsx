import { FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6'
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
function FooterSection() {
    return(
        <footer className='md:pt-20 md:mt-12 mx-4 lg:mx-16'>
            <div className='md:flex md:gap-4 hidden justify-between'>
                <div className='max-w-[320px]'>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-logo rounded-xs"></div>
                        <h3 className="text-[18px] font-extrabold">VEXOR</h3>
                    </div>
                    <p className='text-[#8F8FA4] text-[14px] my-6'>Premium tech and minimalist lifestyle accessories engineered for tomorrow. Designed for modern performance.</p>
                    <nav className='flex gap-4'>
                        <a href="" className='flex justify-center items-center w-9 h-9 bg-surface border rounded-full '><FaInstagram className='text-[#8F8FA4] w-4 h-4' /></a>
                        <a href="" className='flex justify-center items-center w-9 h-9 bg-surface border rounded-full '><FaXTwitter className='text-[#8F8FA4] w-4 h-4' /></a>
                        <a href="" className='flex justify-center items-center w-9 h-9 bg-surface border rounded-full '><FaYoutube className='text-[#8F8FA4] w-4 h-4' /></a>
                        <a href="" className='flex justify-center items-center w-9 h-9 bg-surface border rounded-full '><FaLinkedin className='text-[#8F8FA4] w-4 h-4' /></a>
                    </nav>
                </div>

                <div className='flex flex-col gap-4'>
                    <h6 className='text-[12px] font-bold'>COLLECTION</h6>
                    <div className='flex flex-col gap-4 text-[#8F8FA4] text-[14px]'>
                        <p>Audio</p>
                        <p>Labtops</p>
                        <p>Wearebles</p>
                        <p>Accessories</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h6 className='text-[12px] font-bold'>SUPPORT</h6>
                    <div className='flex flex-col gap-4 text-[#8F8FA4] text-[14px]'>
                        <p>Help Center</p>
                        <p>Shipping & Return</p>
                        <p>Warranty</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 max-w-[360px]'>
                    <h6 className='text-[12px] font-bold'>NEWSLATTER</h6>
                    <p className='text-[#8F8FA4] text-[14px]'>Subscribe to receive advenced release alerts, excusive deals, and tech logs</p>
                    <form action="" className='flex gap-2'>
                        <Input
                            id="input-demo-disabled"
                            type="email"
                            placeholder="Email"
                            
                            className='h-11'
                        />
                        <Button className='bg-logo p-5'>Join</Button>
                    </form>

                </div>
            </div>

            <div className='md:mt-16 mt-11 border-t '>
                <div className='flex justify-between pt-6 pb-4 mb-10 md:mb-12 text-[12px] text-[#8F8FA4]'>
                    <small>&copy; 2026 VEXOR Technologies. All rights reserved.</small>
                    <div className='flex md:gap-6 gap-4'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection