import { NAME } from "@/constants";
import Container from "@/components/layout/Container";
import Flex from "@/components/layout/Flex";
import Search from "./SearchForm";
import AccountAvatar from "./AccountAvatar";

import { Ubuntu as LogoFont } from "next/font/google";

const logoFont = LogoFont({ weight: ["700"], subsets: ["latin"] });

const Header = () => {
  return (
    <header className="relative py-3 bg-slate-200/40 backdrop-blur-sm">
      <div className="-z-50 absolute blur-3xl opacity-50 top-0 w-full left-0 h-96 bg-gradient-to-br from-pink-400 to-[#0055d1]" />
      <Container>
        <Flex align="items-center" gap={4} justify="justify-between">
          <h1
            className={`font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 w-max ${logoFont.className}`}
          >
            {NAME}
          </h1>

          <Flex w="w-max" align="items-center gap-4">
            <Search />
            <AccountAvatar />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
