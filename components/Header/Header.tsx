import { UserRound } from "lucide-react";
import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  console.log(t("button.getting-started"));

  return (
    <div className="bg-white bg-opacity-70 sticky top-0 z-10">
      <div className="container flex items-center justify-between py-5">
        <Link to="/">
          <p className="block antialiased font-sans text-ml-help-700 text-xl font-bold">
            Hub ML
          </p>
        </Link>

        <div className="items-center gap-3 lg:gap-2 flex">
          <Button className="hidden lg:flex" asChild>
            <Link to="/auth/signup">{t("button.getting-started")}</Link>
          </Button>

          <Button className="lg:hidden" size="icon" variant="ghost">
            <Link to="/admin">
              <UserRound size={26} className="text-ml-help-700" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
