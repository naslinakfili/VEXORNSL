import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
function FooterSection() {
  return (
    <footer id="about" className="pt-20 mt-12 mx-4 md:border-t">
      <Separator className="md:hidden mb-4" />
      <div className="md:flex md:gap-4   justify-between">
        <div className="md:max-w-[320px] mb-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-logo rounded-xs"></div>
            <h3 className="text-[18px] font-extrabold">VEXOR</h3>
          </div>
          <p className="text-gray text-[14px] my-6">
            Premium tech and minimalist lifestyle accessories engineered for
            tomorrow. Designed for modern performance. this is connect developer
          </p>
          <nav className="flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-9 h-9 bg-surface border rounded-full "
            >
              <FaInstagram className="text-gray w-4 h-4" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-9 h-9 bg-surface border rounded-full "
            >
              <FaXTwitter className="text-gray w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-9 h-9 bg-surface border rounded-full "
            >
              <FaYoutube className="text-gray w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/naslin-akfili-b422703a2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-9 h-9 bg-surface border rounded-full "
            >
              <FaLinkedin className="text-gray w-4 h-4" />
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4  mb-4">
          <h6 className="text-[12px] font-bold">COLLECTION</h6>
          <div className="flex md:flex-col gap-4 text-gray text-[14px]">
            <p>Audio</p>
            <p>Labtops</p>
            <p>Wearebles</p>
            <p>Accessories</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <h6 className="text-[12px] font-bold">SUPPORT</h6>
          <div className="flex md:flex-col gap-4 text-gray text-[14px]">
            <p>Help Center</p>
            <p>Shipping & Return</p>
            <p>Warranty</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[360px]">
          <h6 className="text-[12px] font-bold">NEWSLATTER</h6>
          <p className="text-gray text-[14px]">
            Subscribe to receive advenced release alerts, excusive deals, and
            tech logs
          </p>
          <form action="" className="flex gap-2">
            <Input
              id="input-demo-disabled"
              type="email"
              placeholder="Email"
              className="h-11"
            />
            <Button className="bg-logo p-5">Join</Button>
          </form>
        </div>
      </div>

      <div className="md:mt-16 mt-11 border-t ">
        <div className="flex justify-between pt-6 pb-4 mb-10 md:mb-12 text-[12px] text-gray">
          <small>&copy; 2026 VEXOR Technologies. All rights reserved.</small>
          <div className="flex md:gap-6 gap-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
