
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle() + " text-white"}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle() + " text-white"}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/portfolio" className={navigationMenuTriggerStyle() + " text-white"}>
                Portfolio
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle() + " text-white"}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
