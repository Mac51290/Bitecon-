import React from "react";

export default function BiteconHome() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Avec notre <span className="text-red-500">BITE</span>, on vise la <span className="text-yellow-300">LUNE</span>
      </h1>
      <p className="text-xl md:text-2xl italic text-center max-w-2xl">
        "Quand tu montres la lune à un con, il regarde la BITE."
      </p>

      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Tokenomics</h2>
        <p>Total Supply : 1,000,000,000 BITE</p>
        <p>Symbol : BITE</p>
        <p>Network : BNB Smart Chain (BEP-20)</p>
      </div>

      <a
        href="#"
        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-xl font-bold"
      >
        Ajouter $BITE à Metamask
      </a>

      <div className="bg-white text-black rounded-xl p-6 shadow-xl max-w-xl text-center">
        <h3 className="text-2xl font-bold mb-2">Premiers BITÉs, Premiers Servis</h3>
        <p>
          100 000 BITE offerts aux 100 premiers cons. Pas besoin de cerveau, juste un wallet.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold"
        >
          Participer à l'Airdrop
        </a>
      </div>

      <footer className="mt-20 text-center opacity-50">
        <p>Con pour tous. Tous pour con.</p>
        <p>© 2025 Bitecon. Aucun neurone n'a été blessé durant la création.</p>
      </footer>
    </div>
  );
}
