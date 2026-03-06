import { ReactNode } from "react";
import { ContainerGRID } from "../containerGRID";



interface SectionMergedProps{
    children:ReactNode;
    className?:string;
}

export function SectionMerged({children, className}:SectionMergedProps){
    return(
        <section>
            <ContainerGRID className={className}>
                  {children}
            </ContainerGRID>
        </section>
    )
}