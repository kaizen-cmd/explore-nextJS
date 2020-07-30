import { ControlledEditor } from "@monaco-editor/react";
import { useState } from "react";

const Editor = () => {
  const [lang, setLang] = useState("python");
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState("");
  
  return (
    <div className="editor p-4">
      <div className="row p-0 m-0">
        <div className="col-lg-6 p-0 pr-4 resp">
          <div className="ps col-lg-12 mb-4 p-0 flex">
            <div className="d-flex">
              <div className="d-inline-block editor-head pl-2 py-2">
                <h2 className="m-0">Problem</h2>
              </div>
              <div className="d-flex justify-content-end w-100 editor-head-editor">
                <button id="pt-btn">10 points</button>
              </div>
            </div>
            <div className="content px-2">
              <h4 className="mt-2">Add two numbers</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              atque ipsa, ex quidem modi cumque fugiat quaerat magni fuga sed
              placeat in sint accusantium odit veniam eum velit tempore ea? Amet
              expedita soluta earum maiores quisquam sunt! Blanditiis, neque
              saepe minima quae veritatis velit a tempora eum consectetur
              numquam cum sequi recusandae porro repellat sunt, dolorem, libero
              temporibus doloremque ipsa? Dolorem aspernatur beatae unde dolore,
              sit enim obcaecati odio voluptatum quo, dicta amet fugit mollitia.
              Amet nesciunt minima eligendi assumenda beatae! Atque esse natus
              nam magnam necessitatibus? Fuga, possimus esse! Labore modi, nobis
              nostrum qui accusantium, voluptas, porro delectus iure unde nisi
              provident aperiam? Minus natus eligendi consectetur ducimus neque
              eum omnis. Similique corrupti ea earum itaque placeat provident
              illum? Qui inventore nisi asperiores assumenda, maiores excepturi!
              Optio eum rerum praesentium ea officiis impedit eveniet voluptas
              nesciunt perferendis aliquam esse molestias, rem sit earum harum
              aspernatur fugiat aperiam quidem quibusdam! Magni, vel laudantium?
              Sint dolor, ipsum, vitae a voluptates nam cum impedit sunt labore
              at error quisquam excepturi reprehenderit deleniti laboriosam.
              Obcaecati in, nulla expedita provident sapiente eius nesciunt
              veritatis. Deleniti assumenda autem dolorem quod quia. Culpa
              cupiditate, consequatur suscipit sapiente magnam iure pariatur
              mollitia porro illum. Officia cum nobis modi porro. Enim id quasi,
              similique beatae nam pariatur fugit? Ab quibusdam facere optio
              neque dolore? Vitae reiciendis, distinctio alias officia
              voluptatem, omnis molestias tempore perspiciatis exercitationem
              iusto, soluta debitis voluptates nulla dolorum repudiandae
              deleniti facilis. Vero consequuntur voluptatibus consectetur. At
              suscipit voluptas architecto ab natus libero corrupti? Vero
              repudiandae reprehenderit amet aliquid maxime provident ea vel
              repellendus. Reprehenderit rem autem architecto corporis sapiente,
              maiores porro repudiandae deleniti. Quam, quia. Soluta in quo qui
              voluptas enim voluptatem ipsum beatae ipsa non tenetur facere
              minus repellendus pariatur ipsam veniam delectus perferendis vitae
              cupiditate assumenda, numquam at! Sequi laudantium recusandae
              deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias ab id, doloribus aperiam quae reprehenderit voluptatibus
              accusantium magnam ipsam saepe veniam. Aliquam unde ratione,
              deleniti in praesentium quibusdam quos quidem. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Tempora minima odit
              officiis earum! Vero alias suscipit ducimus? Similique laborum, at
              saepe odit ducimus distinctio dolores? Voluptatum voluptatibus
              consectetur voluptatem praesentium!
            </div>
          </div>
        </div>

        <div className="col-lg-6 p-0">
          <div className="code-editor col-lg-12 mb-4 p-0">
            <div className="d-flex">
              <div className="d-inline-block editor-head pl-2 py-2">
                <h2 className="m-0">Editor</h2>
              </div>
              <div className="d-flex justify-content-end w-100 editor-head-editor">
                <select
                  id="l-selector"
                  onChange={() => {
                    var e = document.getElementById("l-selector");
                    setLang(e.value);
                    setCode(code);
                  }}
                >
                  <option value="python">Python</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                </select>

                <select
                  id="l-selector-1"
                  onChange={() => {
                    var e = document.getElementById("l-selector-1");
                    setTheme(e.value);
                    setCode(code);
                  }}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>

                <select
                  id="l-selector-2"
                  onChange={() => {
                    var e = document.getElementById("l-selector-2");
                    setFontSize(e.value);
                    setCode(code);
                  }}
                >
                  <option value="14">14px</option>
                  <option value="16">16px</option>
                  <option value="18">18px</option>
                  <option value="20">20px</option>
                </select>

                <button id="run-btn">Run</button>
              </div>
            </div>
            <div>
              <div className="content-editor">
                <ControlledEditor
                  onChange={(e, v) => {
                    setCode(v);
                  }}
                  height="303px"
                  theme={theme}
                  language={lang}
                  loading="Loading..."
                  value={code}
                  options={{
                    fontSize: fontSize,
                    automaticLayout: true,
                    wordWrap: "on",
                    lineNumbersMinChars: 3,
                    glyphMargin: false,
                    minimap: {
                      enabled: false,
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="output col-lg-12 mb-4 p-0">
            <div className="d-flex">
              <div className="d-inline-block editor-head pl-2 py-2">
                <h2 className="m-0">Output</h2>
              </div>
              <div className="d-flex justify-content-end w-100 editor-head-editor">
                <button id="sub-btn"disabled={disabled}>Submit</button>
              </div>
            </div>
            <div className="content-op px-2 pt-1 pb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem odio officia quo, ea facere ex tenetur odit
              molestiae vitae aspernatur quaerat impedit natus nostrum commodi
              nemo explicabo doloremque assumenda et. Ab itaque id qui delectus
              a ullam cupiditate laborum repellat dolorum beatae! Itaque,
              eligendi sunt! Neque hic sint, libero, asperiores aspernatur
              architecto earum nisi ducimus, nostrum veritatis quam ad optio!
              Repellendus dignissimos minus blanditiis reiciendis at, ullam
              inventore consectetur nisi animi molestiae, totam eaque. Vitae,
              veritatis sed corporis suscipit cupiditate quod, nobis ipsa
              excepturi officiis in quae cumque, quo esse. Impedit ex quibusdam
              accusantium velit at possimus libero molestias quis aperiam
              veritatis, itaque repudiandae vel facilis quisquam, consequuntur
              quas doloribus quia atque odit alias iure! Officia saepe
              temporibus eos quaerat! Ad ullam quas natus quaerat aliquid
              dolorem, autem hic itaque, dolorum, aliquam eligendi esse!
              Maiores, sed non. At quisquam laborum totam ad, atque officia
              explicabo, eius tempore commodi beatae repellat. Quo, enim iure
              similique accusantium beatae reiciendis perspiciatis! Rem quasi
              illo dolorem optio necessitatibus voluptatibus reiciendis
              cupiditate, illum obcaecati molestiae porro repellendus excepturi,
              non mollitia facere repudiandae temporibus, pariatur delectus.
              Temporibus, saepe iste! Natus, repudiandae! Iste exercitationem
              porro repudiandae enim amet nulla accusamus reiciendis accusantium
              blanditiis, minima ad quaerat omnis necessitatibus fuga harum
              dolores magnam commodi. Earum reiciendis ab facere? Fugiat
              repudiandae esse aperiam quas mollitia non soluta maxime. Quis
              repellat voluptates laudantium eaque nemo animi eum a voluptatem
              optio cumque, cupiditate commodi odio ea ad. Fuga totam saepe
              voluptas. Quasi impedit autem quas quod quidem! Fuga est corrupti
              alias sed omnis maiores asperiores illo quas error quo! Sint eius
              officia ipsa blanditiis corrupti fuga a, ab nisi autem non?
              Aliquid, enim velit. Tempora quidem autem nostrum eveniet, ea
              vitae eligendi impedit possimus, iusto unde a consequatur
              temporibus. Iure aperiam repudiandae laborum cupiditate totam est
              ratione numquam velit debitis enim?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
