import Link from "next/link";



const links = [
     {
          name:"Inicio",
          href:"#"
     },
     {
          name:"Sobre",
          href:"#"
     },
     {
          name:"Ferramentas",
          href:"#"
     },
     {
          name:"Projetos",
          href:"#"
     }
]

export function NavListing(){
    return(
        <nav className="flex items-center gap-10">
             {
                 links.map(({name,href}, index) => (
                      <Link key={`${index} ${name}`} href={href}>{name}</Link>
                 ))
             }
        </nav>
    )
}