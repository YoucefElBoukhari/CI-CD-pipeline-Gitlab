import React, { useEffect, useState } from 'react'; 
import {v4 as uuidv4} from 'uuid';
import {AiOutlineDelete , AiOutlineEdit} from 'react-icons/ai'


export default function TableForm({description, setDescription, quantity,
    setQuantity,price ,setPrice ,amount ,setAmount,list,setList, somme, setSomme,})
    {
        const [isEditing, setIsEditing] = useState(false)
        const handleSubmit=(e) => {
            e.preventDefault()

            const newItems = {
                id: uuidv4(),
                description,
                quantity,
                price,
                amount,
                vatAmount,
                
                

            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditing(false)
            
            
            console.log(list)
        }
        useEffect(()=>{
            const calculateAmount = (amount) => {
                setAmount(quantity * price)
            }
            calculateAmount(amount)
        }, [amount,price,quantity,setAmount])

        //Somme
        useEffect(()=>{
        let rows = document.querySelectorAll(".amount")
        let sum = 0

        for (let i=0; i < rows.length; i++){
            if(rows[i].className === "text-xl font-bold font-normal text-black amount"){
                sum +=isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setSomme(sum)
            }
        }
      })
        
      const [vatAmount, setVatAmount] = useState("");
            useEffect(() => {
              const vatRate = 10;
              const vat = (vatRate / 100) * somme;
              setVatAmount(vat);
            }, [somme]);
        //Edit function
        const editRow = (id) => {
            const editingRow = list.find((row) => row.id === id)
            setList(list.filter((row) => row.id !== id))
            setIsEditing(true)
            setDescription(editingRow.description)
            setQuantity(editingRow.quantity)
            setPrice(editingRow.price)
        }
        //Delete
        const DeleteRow = (id) => setList(list.filter((row) => row.id !== id))
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-1 gap-10 md:mt-1">
        <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <input type="text"
            name="description"
            id="description"
            placeholder=""
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}/>
        </div> 
        </div>

        <div className="md:grid grid-cols-3 gap-10 md:mt-1">
        <div className="flex flex-col">
        <label htmlFor="Quantity">Quantité</label>
        <input type="text"
            name="Quantity"
            id="Quantity"
            placeholder=""
            value={quantity} 
            onChange={(e)=>setQuantity(e.target.value)}/>
        </div> 

        <div className="flex flex-col">
        <label htmlFor="description">Prix</label>
        <input type="text"
            name="price"
            id="price"
            placeholder=""
            value={price} 
            onChange={(e)=>setPrice(e.target.value)}/>
        </div> 

        <div className="flex flex-col">
        <label htmlFor="amount">Total</label>
        <p>{amount}</p>
        </div> 
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-0.1 px-0.1 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300">
            {isEditing ? "Editing Row Items" : "Ajouter un produit"}
        </button>
        </form>
    
        <table  width="100%" className='mb-10'>
        <thead>
                    <tr className="bg-gray-100">
                        
                        <td className="text-xl font-bold font-normal text-black">Description</td>
                        <td className="text-xl font-bold font-normal text-black">Quantité</td>
                        <td className="text-xl font-bold font-normal text-black">Prix</td>
                        <td className="text-xl font-bold font-normal text-black">Total</td>
                        <td className="text-xl font-bold font-normal text-black">Supprimer</td>
                        <td className="text-xl font-bold font-normal text-black">Modéfier</td>
                    </tr>
                </thead>
                {list.map(({id, description,quantity,price, amount}) => (
                <React.Fragment key={id}>
                <tbody>
                    <tr>
                        
                        <td className="text-xl font-bold font-normal text-black"> {description}</td>
                        <td className="text-xl font-bold font-normal text-black">{quantity}</td>
                        <td className="text-xl font-bold font-normal text-black">{price} Dh </td>
                        <td className="text-xl font-bold font-normal text-black amount">{amount}</td>
                        <td><button onClick={() => DeleteRow(id)}><AiOutlineDelete className='text-red-500 font-bold text-2xl'/></button></td>
                        <td><button onClick={() => editRow(id)}><AiOutlineEdit className='text-green-500 font-bold text-2xl'/></button></td>
                    </tr>
                </tbody>
                </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className="flex items-end justify-end text-4xl font-bold font-normal text-black">Total HT:{somme.toLocaleString()}Dh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>

        </>
    )
}
