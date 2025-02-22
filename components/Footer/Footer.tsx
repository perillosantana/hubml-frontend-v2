import { Link } from "@remix-run/react";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="container">
      <div className="mt-16 flex flex-col lg:flex-wrap items-center justify-center gap-y-4 py-6 md:justify-between">
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-hub-grey-500 lg:mb-0 mb-5">
          © 2024 Hub ML
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <Link
            to={"/changelog"}
            className="block antialiased font-sans text-sm leading-normal font-normal text-hub-grey-500 hover:text-ml-help-700 transition-colors"
          >
            Changelog
          </Link>

          <Link
            to={"/termos"}
            className="block antialiased font-sans text-sm leading-normal font-normal text-hub-grey-500 hover:text-ml-help-700 transition-colors"
          >
            Termos e Condições
          </Link>

          <Button>
            <Link to="/auth/signup">Cadastre-se</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
