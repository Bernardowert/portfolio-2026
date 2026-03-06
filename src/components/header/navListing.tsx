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
        <nav className=" items-center gap-10 hidden laptop:flex">
             {
                 links.map(({name,href}, index) => (
                      <Link key={`${index} ${name}`} href={href} className="transition-colors ease-linear [&:hover,&:focus]:text-purple-1000">{name}</Link>
                 ))
             }
        </nav>
    )
}