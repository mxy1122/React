import { Componentcounter } from "./components/ComponentsCounter/Componentcounter"
import { ComponentUseEffect } from "./components/ComponentUserEffect/ComponentUserEffect"
import { Miprimercomponent } from "./components/Miprimercomponent/Miprimercomponent"
import { FormComponet } from "./components/FormComponet/FormComponet"
import { AppProduct } from "./components/AppProduct/AppProduct"

export const App = () => {

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
    
        {/* <Miprimercomponent  text={"hola"} color={"red"} fontsize={3}/>

        <Componentcounter />
        <ComponentUseEffect /> */}
        {/* <FormComponet /> */}

        <AppProduct/>
    </div>
)
}
