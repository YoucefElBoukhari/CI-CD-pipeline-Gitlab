export default function Dates ({invoiceNumber, invoiceDate, dueDate}) {
    return (
    <>
<article className=" text-xl font-bold font-normal text-black mt-2 mb-8 flex items-center justify-center">
<ul>
    <li className="p-1"><span className="text-2xl font-bold font-normal text-black ">Nº:</span>{invoiceNumber}</li>
    <li className="bg-gray-100"><span className="text-xl font-bold font-normal text-black">Date de facturation :</span> {invoiceDate} </li>
    <li className="p-1"><span className="text-xl font-bold font-normal text-black">Date d'échéance :</span> {dueDate} </li>
</ul>
</article>
    </>
    );
}