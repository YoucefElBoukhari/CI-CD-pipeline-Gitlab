import React from "react"
import { useState, useEffect } from 'react';


export default function Table1({somme}) {

    const [vatAmount20, setVatAmount20] = useState("");
            useEffect(() => {
              const vatRate = 20;
              const vat = (vatRate / 100) * somme;
              setVatAmount20(vat);
            }, [somme]);


    return(
    <>
    
    <table width="50%" className="mb-3">
        <thead></thead>
      <tbody >
        <tr className="border-r border-b border-black">
          <td className="text-xl font-bold font-normal text-black border-r border-t border-b border-l border-black p-2">TVA à 20%</td>
          <td className="text-xl font-bold font-normal text-black border-r border-b border-t border-l border-black p-2">{vatAmount20.toLocaleString()} Dh</td>
        </tr>
        <tr>
          <td className="text-xl font-bold font-normal text-black border-r border-b border-l border-black p-2">Total TVA</td>
          <td className="text-xl font-bold font-normal text-black border-r border-b border-black p-2">{vatAmount20.toLocaleString()} Dh</td>
        </tr>
      </tbody>
    </table>

    </>
)}