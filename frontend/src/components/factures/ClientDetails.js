export default function ClientDetails ({clientName , clientAddress,code}) {
    return (
        <>
            <section className="mt-1">
                <h2 className="text-xl font-bold font-normal text-black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Mr : {clientName}</h2>
                <p className="text-xl font-bold font-normal text-black"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adresse : {clientAddress}</p>
                <p className="text-xl font-bold font-normal text-black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Code client : {code}</p>
            </section>
    </>
    );
}