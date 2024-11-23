import { ChangeEvent, useState } from "react";
import { useForm } from "../../Hooks/useFrom";

export const FormComponet = () => {

    const{values,handleChange,resetForm} = useForm({
        email: "",
        nombre: "",
        edad: 0
    });

    const {email,nombre,edad} = values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const HandleResetForm = () => {
        resetForm();
    }
        
  return (

    <div>
        <div>
            <h2>Formulario</h2>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>   

            <input value={email} name="email" onChange={handleChange} type="email" placeholder="email@gmail.com" />
            <input value={nombre} name="name" onChange={handleChange} type="text" placeholder="nombre" />
            <input value={edad} name="edad" onChange={handleChange} type="number" placeholder="edad" />
            
        </div>
        
        <div>

            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={HandleResetForm}>Resetear</button>

        </div>


    </div>
  
);
};
