import { Salad, Heart, User, LogOut, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface UserData {
  email: string;
  name: string;
  isLoggedIn: boolean;
}

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("healMealUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("healMealUser");
    setUser(null);
    window.location.reload();
  };

  const NavLinks = ({
    mobile = false,
    onClose,
  }: {
    mobile?: boolean;
    onClose?: () => void;
  }) => (
    <>
      <a
        href="#recipes"
        onClick={onClose}
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${mobile ? "text-base py-2" : ""}`}
      >
        Recipes
      </a>
      <a
        href="#conditions"
        onClick={onClose}
        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${mobile ? "text-base py-2" : ""}`}
      >
        Conditions
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-primary">
            <Salad className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg sm:text-xl font-semibold text-foreground">
            HealMeal
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />

          {/* Calorie Calculator Link */}
          <button
            onClick={() => navigate("/calorie-calculator")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Calorie Calculator
          </button>

          <div className="flex items-center gap-1 text-sm font-medium text-food-coral">
            <Heart className="h-4 w-4 fill-current" />
            <span>Eat Well</span>
          </div>

          {user?.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-health-green/10">
                    <User className="h-4 w-4 text-health-green" />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-muted-foreground">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="coral" size="sm" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          {user?.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-health-green/10">
                    <User className="h-4 w-4 text-health-green" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-muted-foreground text-xs">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="coral"
              size="sm"
              className="h-8 text-xs px-3"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-1 text-sm font-medium text-food-coral mb-4">
                  <Heart className="h-4 w-4 fill-current" />
                  <span>Eat Well</span>
                </div>
                <SheetClose asChild>
                  <a
                    href="#conditions"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                  >
                    Conditions
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#recipes"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                  >
                    Recipes
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={() => navigate("/calorie-calculator")}
                    className="text-left text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
                  >
                    Calorie Calculator
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
