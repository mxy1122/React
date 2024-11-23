import { FC } from "react"

interface IPropsMiPrimerComponent {

    text:string;
    color:string;
    fontsize?:number;


}

export const Miprimercomponent: FC<IPropsMiPrimerComponent> = ({text,color,fontsize}) => {
    
    return <div style={{color: `${color}`, fontSize: `${fontsize}rem`  }}> <p></p>{text} </div>;
    
}