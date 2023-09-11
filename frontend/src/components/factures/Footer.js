export default function Footer ({name, email, address, phone}) {  
    return (
    <>
    <footer className="footer border-t-2 border-gray-300 text-base font-bold font-normal text-black">
                <ul className="flex flex-wrap items-center justify-center">
                    <li><span className="text-xl font-bold font-normal text-black">Nom:</span>{name}</li>
                    <li><span className="text-xl font-bold font-normal text-black">Adresse mail:</span>{email} </li>
                    <li><span className="text-xl font-bold font-normal text-black">Numéro de télephone:</span>{phone}</li>
                    <li><span className="text-xl font-bold font-normal text-black">Adresse:</span>{address}</li>
                </ul>
    </footer>
    </>
  )
};

