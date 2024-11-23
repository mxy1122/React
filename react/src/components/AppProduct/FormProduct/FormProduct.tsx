import { FC } from "react";
import { Form } from "react-bootstrap"
import { useForm } from "../../../Hooks/useFrom";


interface IPropsFormProduct {
  handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct}) => {
  
const {handleChange,value,resetForm} = useForm({

  nombre: "",
  imagen: "",
  precio: 0

});

const handleSubmitForm = () =>{

  handleAddProduct(value);

  resetForm();
  
}




  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="form.Nombre">
            
            <Form.Label> name</Form.Label>

            <Form.Control type="text" 
            name="nombre" 
            placeholder="name"
            value={value.nombre}  
            onChange={handleChange} />

        </Form.Group>

        <Form.Group controlId="form.Imagen">
            
            <Form.Label> Imagen</Form.Label>

            <Form.Control type="text" 
            name="imagen" 
            placeholder="imagen"
            value={value.imagen}  
            onChange={handleChange} />

        </Form.Group>

        <Form.Group controlId="form.Precio">
            
            <Form.Label>Precio</Form.Label>

            <Form.Control type="number" 
            name="Precio" 
            placeholder="precio"
            value={value.precio}  
            onChange={handleChange} />

        </Form.Group>

      <div className="d-flex justify-content-end mt-4">
        <button onClick={handleSubmitForm} variant="primary">Enviar Producto</button>
      </div>

    </Form>
  )
}
