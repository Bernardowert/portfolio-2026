interface TitleSectionProps{
    subtitle:string;
    title:string;
    className?:string;
}

export function TitleSection({subtitle,title,className}:TitleSectionProps){
    return(
        <div className={`space-y-1 ${className ? className : ""}`}>
            <span className="text-sm font-bold text-purple-1000 block">{subtitle}</span>
            <h2 className="font-bold text-2xl tablet:text-3xl laptop:text-5xl text-white-900">{title}</h2>
        </div>
    )
}