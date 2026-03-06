import { FileText } from "lucide-react";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import Link from "next/link";
import Image from "next/image";


import iconHamburguer from "@/assets/icons/menu-hamburguer.png";

export function Header(){
    return(
        <header className="w-full fixed top-0 left-0 z-50 h-17 tablet:h-20 flex items-center bg-black-900/80 border-b border-grey-1000">
            <ContainerGRID className="flex items-center justify-between">
                <strong className="tablet:text-xl font-medium">Bernardowert</strong>
                <NavListing/>
                <Link href="#" className="hidden items-center laptop:flex gap-4 bg-purple-1000 py-3 px-10 rounded-full transition-colors ease-linear group [&:hover,&:focus]:bg-white-900">
                    <span className="transition-colors ease-linear group-focus:text-black-900 group-hover:text-black-900 font-medium">Curriculo</span>
                    <FileText size={18} className="transition-all ease-linear group-hover:stroke-black-900 group-focus:stroke-black-900"/>
                </Link>

                <button className="laptop:hidden">
                      <Image
                       src={iconHamburguer}
                       alt="Icon Hamburguer"
                       title="Hamburguer Mobile"
                      />
                </button>
            </ContainerGRID>
        </header>
    )
}