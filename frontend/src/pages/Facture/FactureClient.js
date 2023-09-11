import { useState, useRef } from "react";
import ClientDetails from "../../components/factures/ClientDetails";
import Dates from "../../components/factures/Dates";
import MainDetails from "../../components/factures/MainDetails";
import Notes from "../../components/factures/Notes";
import Table from "../../components/factures/Table";
import TableForm from "../../components/factures/TableForm";
import { useReactToPrint } from "react-to-print";
import Table1 from "../../components/factures/table1";


function Facture() {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [code,setCode] = useState("")
    const [entreprise,setEntreprise] = useState("")
    const [clientName,setClientName] = useState("")
    const [clientAddress,setClientAddress] = useState("")
    const [invoiceNumber,setInvoiceNumber] = useState("")
    const [invoiceDate,setInvoiceDate] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [notes,setNotes] = useState("")
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [amount,setAmount] = useState("")
    const [list,setList] = useState([])
    const [somme, setSomme] = useState(0)
    const [vat20, setVat20] = useState("")


    const [vatAmount, setVatAmount] = useState(0);
    

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const[isToggled,setIsToggled]=useState(false)



    return(
        <>
        <main className="m-3 p-2 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow row print-container">
        <button className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300" onClick={handlePrint}>   
            Télécharger/Imprimer
        </button>
            { showInvoice ? (
                <>
            <div ref={componentRef}>
            <div>
                 <h2 className="font-bold uppercase tracking-wide text-4xl mb-3 text-center">Facture</h2>
                 <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
            </div>
            <MainDetails  name={name} address={address} entreprise={entreprise} phone={phone}/>
            <ClientDetails clientName={clientName} clientAddress={clientAddress} code={code} />
            <Table description={description} price={price} quantity={quantity} amount={amount} list={list} setList={setList} somme={somme} setSomme={setSomme} vatAmount={vatAmount} setVatAmount={setVatAmount} vat20={vat20} setVat20={setVat20}/>
            <div>
            <button className="text-xl font-bold font-normal text-white" onClick={()=>setIsToggled(!isToggled)}>TVA</button>
            {isToggled && <Table1 somme={somme}/>}
            </div>
            <div>
            <table width="50%" className="mb-3">
        <thead></thead>
      <tbody >
        <tr className="border-r border-b border-black">
          <td className="text-xl font-bold font-normal text-black border-r border-t border-b border-l border-black p-2">Total HT</td>
          <td className="text-xl font-bold font-normal text-black border-r border-b border-t border-l border-black p-2">{somme.toLocaleString()}Dh</td>
        </tr>
      </tbody>
    </table>
            </div>

            <div>
                <h2 className="flex items-end justify-end text-2xl font-bold font-normal text-black">Réglement:espéce&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
            <Notes notes={notes}/>
            </div> 
            <button onClick={()=> setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300">
               Modifier les informations
           </button>
            </>
            ): (
                <>
                <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="address">Entreprise: </label>
                <input type="text"
                       name="text"
                       id="entreprise"
                       placeholder=""
                       autoComplete="off" 
                       value={entreprise}
                       onChange={(e)=>setEntreprise(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="name">Entrer votre nom:</label>
                <input type="text"
                       name="text"
                       id="name"
                       placeholder=""
                       autoComplete="off" 
                       value={name}
                       onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="address">Entrer votre adresse: </label>
                <input type="text"
                       name="text"
                       id="address"
                       placeholder=""
                       autoComplete="off" 
                       value={address}
                       onChange={(e)=>setAddress(e.target.value)}
                />
                </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="email">Entrer adresse mail:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone">Enter le numéro de télephone:</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder=""
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="clientName">Entrez le nom de votre client:</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder=""
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez l'adresse de votre client:
                </label>
                <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder=""
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez le code du client:
                </label>
                <input
                    type="text"
                    name="code"
                    id="code"
                    placeholder=""
                    autoComplete="off"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                </div>
                </article>
               <article className="md:grid grid-cols-3 gap-10 ">
               <div className="flex flex-col" >
               <label htmlFor="invoiceNumber">Numéro de facture</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                />
               </div>
                <div className="flex flex-col">
                <label htmlFor="invoiceDate">Date de facturation</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="dueDate">Date d'échéance</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder=""
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                </div>
      
               </article>


               <article>
                <TableForm description={description} 
                           setDescription={setDescription}
                           
                           quantity={quantity} 
                           setQuantity={setQuantity}
                           
                           price={price} 
                           setPrice={setPrice}
                           
                           amount={amount} 
                           setAmount={setAmount}
                           
                           list={list}
                           setList={setList}

                           somme={somme} 
                           setSomme={setSomme}

                           vat20={vat20}
                           setVat20={setVat20}
                           />

                           
                </article> 

                <label htmlFor="notes">Notes complémentaires</label>
                 <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                ></textarea>

                <button onClick={()=>setShowInvoice(true)} 
                className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300">
                Aperçu de la facture</button>
                </div>
                </>
            )
            }
        </main>
        </>
    );
}
export default Facture;