import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import MenuEmoji from "../ui/menu/menu-emoji";
import MenuTitle from "../ui/menu/menu-title";

interface Props {
  className?: string;
}

const NavigationLinks: FC<Props> = ({ className }) => {
  return (
    <nav
      aria-label="Bottom navigation"
      className={cn(
        "mx-auto flex w-full items-center justify-center gap-12",
        className,
      )}
    >
      {menuConfig.map((menu: MenuItemType) => (
        <Link
          key={menu.title}
          href={menu.slug}
          className="group inline-flex items-center gap-2"
          prefetch={true}
        >
          <MenuEmoji currentPath={false} emoji={menu.emoji} />
          <MenuTitle currentPath={false} title={menu.title} />
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;
