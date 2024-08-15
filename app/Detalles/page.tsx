import Header from "../Componentes/header";

export default function Detalles() {
  return (
    <div className="pb-20">
      <Header></Header>

      <div className="fixed top-[70px] w-screen h-[13.38rem] bg-[#005C45] flex justify-center items-center p-5">
        <div className=" absolute  w-screen   top-0 left-24">
          <img src="./shape-1-soft-light.png "></img>
        </div>
        <div className=" relative ">
          <input
            className="  placeholder-[#97A4AF] w-[43.75rem] h-[5.375rem] bg-white flex items-center justify-center rounded-lg p-5"
            type="text"
            placeholder="Search for answers"
          ></input>
          <div className=" rounded-lg absolute top-5 w-[3.375rem] h-[3.375rem]   right-5 bg-[#005C45] flex  items-center justify-center">
            <img src="./Union.svg" className=" w-7 "></img>
          </div>
        </div>
        <div className=" absolute  w-screen  -right-[90rem]">
          <img src="./Vector.svg "></img>
        </div>
      </div>

      <div className="border-b-2 border-[ #00221C1A] bg-white  fixed mt-[284px] px-48 w-screen h-[4.125rem] text-[#223B41] flex items-center z-20">
        <div className="flex flex-row gap-2 ">
          <div className="cursor-pointer  hover:text-[#008060] ">
            Convocatorias
          </div>
          <div> /</div>
          <div className="cursor-pointer hover:text-[#008060] text-[#223B41]">
            Programas Sectoriales
          </div>
          <div>/</div>
          <div className="cursor-pointer hover:text-[#008060] text-[#223B41]"></div>
          Título de la convocatoria al programa ........{" "}
        </div>
      </div>

      <div className="flex items-center  justify-center px-4">
        <div className="flex flex-col gap-4 justify-start px-96">
          <div className=" mt-[27rem] font-roboto text-4xl text-[#00221C] ">
            Título de la convocatoria
          </div>
          <div className="  font-roboto text-[#51596C]">3 monts ago</div>
          <div className=" flex flex-row gap-5">
            <div className=" flex items-center justify-center">
              <img src="./Avatars.png"></img>
            </div>
            <div className="flex flex-col py-4 gap-3">
              <div className="text-[#00221C] font-roboto text-2xl">Andrea</div>
              <div className="text-[#51596C] font-roboto ">
                Secretario del programa
              </div>
              <div className="flex flex-row gap-4">
                <div className=" flex justify-center items-center flex-row gap-1 ">
                  <div className="text-[#51596C] font-roboto">
                    Fecha de inicio: 3/08/24
                  </div>
                </div>

                <div className=" flex justify-center items-center flex-row gap-2 ">
                  <img src="./circle-16-fill.svg"></img>
                  <div className="text-[#51596C] font-roboto">
                    Fecha de recepción : 3/08/24
                  </div>
                </div>
                <div className=" flex justify-center items-center flex-row gap-2 ">
                  <img src="./circle-16-fill.svg"></img>
                  <div className="text-[#51596C] font-roboto">
                    Fecha de notificación de la decisión: 3/08/24
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#51596C] font-roboto  ">
            Space is an incredibly beautiful, fully responsive, and mobile-first
            projects on the web – it is the perfect starting point for any
            creative and professional sites. Get started with Space's components
            and options for laying out your Space project, including SVG
            components, powerful scripts, fully detailed documentation, and yet
            developer friendly code.
          </div>
          <div className="font-roboto text-2xl text-[#00221C]">
            Free updates and support
          </div>
          <div className="text-justify">
            <span className="font-roboto text-[#51596C] ">
              We would like to draw your attention to the fact that after
              purchasing a Space Template copy, you get the right for a lifetime
              entitlement to download updates for FREE! Need help? For any
              questions or concerns, reach us out at
            </span>{" "}
            {""}
            <span className="text-[#008060]">hello@example.com</span> .
          </div>
          <div className="font-roboto text-[#51596C] text-justify">
            - <span className="font-bold">Free updates: </span> Space offers a
            lifetime free updates. This means you will never pay for any
            bug-fixes and compatibility upgrades for your theme, ever. <br></br>
            <span className="font-bold">-Technical support:</span> As always,
            our Customer Support team is available 24/7 to answer any questions
            you might have. We will do our best to get back to you within{" "}
            <span className="font-bold">24-48 hours.</span>
          </div>
          <div className="font-roboto text-[#51596C] text-justify">
            Space Template is built by the team that has customers in the
            background such us Stanford University, The University of Maryland,
            University of Victoria and many more Governments, Corporate
            Agencies. To bring the most modern look of any HTML5 template across
            all Marketplaces – powered by Bootstrap 4, Space sets the new
            standard with breathtaking design, top-notch support, and incredible
            featured packed updates that will save your precious time and gives
            trendy look to all your web projects. On top of that the creators of
            Bootstrap have closely monitored the ongoing process of the Space
            and helped to achieve an enormous result.
          </div>{" "}
          <div className="mt-44 rounded-lg py-16 flex justify-center items-center flex-col gap-8 bg-[#F9FAFC]">
            <div className="  font-roboto  text-3xl ">
              Estás interesado en aplicar a esta convocatoria?
            </div>
            <div className="flex flex-row gap-4 justify-center items-center ">
              <div className=" bg-[#008060] text-white px-5 py-3 rounded-md">
                Si,aplicar
              </div>
              <div className="  bg-[#c1e9de] text-[#008060] flex py-3 px-2 rounded-md ">
                No realmente
              </div>
            </div>
            <div className="text-[#51596C] font-roboto">
              3 personas de 132 que han visto esta convocatoria han aplicado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
