import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/react.svg";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/" className="flex gap-2 text-[#00D8FE]">
          <img src={logo} className="h-6" />
          U-tube
        </a>
      </div>
      <form className="flex gap-4 flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
          <Button>
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  )
}