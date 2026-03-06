import { FileText } from "lucide-react";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import Link from "next/link";

export function Header(){
    return(
        <header className="w-full fixed top-0 left-0 z-50 h-20 flex items-center">
            <ContainerGRID className="flex items-center justify-between">
                <strong className="text-xl font-medium">Bernardowert</strong>
                <NavListing/>
                <Link href="#">
                    <span>Curriculo</span>
                    <FileText size={18}/>
                </Link>
            </ContainerGRID>
        </header>
    )
}