export default function MainDetails ({name, address,entreprise,phone}) {
    return (
        <>
        <section className="flex flex-col items-end justify-end">
            <h2 className="text-2xl font-bold font-normal text-black">{entreprise}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            <h2 className="text-xl font-bold font-normal text-black">De Mr : {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            <p className="text-xl font-bold font-normal text-black">téléphone:{phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="text-xl font-bold font-normal text-black">Adresse:{address}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </section>
        </>
    )
}


