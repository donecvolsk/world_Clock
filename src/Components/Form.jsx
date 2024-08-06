import { useState } from 'react';
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";


export function Form({fn}) {
    const [form, setForm] = useState({
        name: '',
        zone: '',
    });
    
    const handleForm = (event) => {
       let {target} = event;
       setForm((prev) => ({...prev, [target.name]: target.value}))
    }
 
    const handleButton = () => {
        if(!form.name || !form.zone) return;
        fn(form);
        setForm({name: '', zone: ''});
     }

   return (
        <form className="formBox">
        <div className="nameValue">
            <label>Название</label>
            <Input type="text" value={form.name} name="name" fun={handleForm} placeholder="Рейкьявик" />
        </div>
        <div className="zoneValue">
            <label>Временная зона</label>
            <Input type="number" value={form.zone} name="zone" fun={handleForm} placeholder="0" />
        </div>
        <div className="btnBox">
            <Button name="Добавить" type="button" fn={handleButton} />
        </div>       
    </form>
   ) 
}