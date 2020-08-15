import Split from "split.js";
import { useEffect, useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import Loader from "../common/loader";
import TestCase from "../editor/testcasebox";

const Re = () => {
  const [lang, setLang] = useState("python");
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [code, setCode] = useState("");
  const [loader, setLoader] = useState("");
  const [height1, setHeight1] = useState("250px");
  const [width1, setWidth1] = useState("");
  const [height2, setHeight2] = useState("243px");

  const logger = () => {
    var ed = window.document.getElementById("ed-div");
    var op = window.document.getElementById("op-div");
    var edstyle = window.getComputedStyle(ed);
    var opstyle = window.getComputedStyle(op);
    var h1 = opstyle.height;
    var matches1 = h1.match(/(\d+)/);
    h1 = parseInt(matches1[0]) - 44;
    setHeight2(h1 + "px");
    var h = edstyle.height;
    var matches = h.match(/(\d+)/);
    h = parseInt(matches[0]) - 44;
    var w = edstyle.width;
    setHeight1(h);
    setWidth1(w);
    window.dispatchEvent(new Event("resize"));
  };

  useEffect(() => {
    Split(["#prob-div", "#main-ed-op-div"], {
      gutterSize: 18,
      minSize: [200, 395],
      cursor: "col-resize",
      onDrag: logger,
    });
    Split(["#ed-div", "#op-div"], {
      gutterSize: 18,
      minSize: [50, 50],
      direction: "vertical",
      cursor: "row-resize",
      onDrag: logger,
    });
  }, []);
  return (
    <div className="d-flex main-editpage-div p-3">
      <div className="d-flex flex-row">
        {/* Problem div */}
        <div style={{ width: "40%" }} id="prob-div">
          <div className="prob-container">
            <div className="d-flex flex-row header pl-2">
              <h2 className="mr-auto mb-0 py-2">Problem</h2>
              <button id="pt-btn">10 points</button>
            </div>
            <div className="px-2 inner-prob-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              pariatur cupiditate nisi, quia animi maxime unde laboriosam eaque
              soluta minima ad hic inventore doloribus ratione fugiat assumenda
              ullam est fugit! Deserunt praesentium ratione amet! Voluptatem
              illo, aut doloremque accusantium nesciunt qui error vel esse animi
              sed aspernatur libero cupiditate ullam, maxime ea molestiae
              inventore consequatur quibusdam. Iusto quo non labore. Harum
              voluptatibus ad minima? Odio eligendi perspiciatis animi porro et
              rem similique maiores dolorem! Numquam ea cumque, ipsa, a saepe
              blanditiis recusandae cum consequuntur deleniti doloribus
              temporibus corporis alias labore! Sed molestias ullam voluptatum
              nisi velit, ab esse. Sit soluta, rem rerum debitis sed ratione
              adipisci doloremque consequuntur. Autem porro omnis dolore vero
              aspernatur incidunt voluptates voluptatibus labore dignissimos
              dolorum. Blanditiis recusandae, in facilis, debitis laudantium
              minima minus asperiores dolorum ullam corrupti iure aut dicta sunt
              vero eveniet officiis ex culpa hic harum quidem reprehenderit est
              inventore ratione. Incidunt, minus? Amet, saepe quas. Cupiditate
              necessitatibus, cum tempora numquam aut similique tenetur
              consequuntur ipsam quaerat est error animi eligendi adipisci sit
              fugiat minus corrupti accusantium obcaecati natus dignissimos
              deleniti nemo quo! Officia libero a dicta odio tempora autem ad!
              Autem, aspernatur. Praesentium, sunt maiores explicabo quibusdam
              reiciendis facilis. Modi culpa deleniti ipsam laudantium debitis
              enim iusto et unde, suscipit omnis provident. Quidem, deleniti
              aperiam qui in sed ipsa quo fugit a aut aliquid. Facilis at ad
              eaque optio quae tempora illo dicta dolorum? Repudiandae
              laudantium fugiat sint nesciunt earum expedita voluptate?
              Reprehenderit molestiae corporis, quam atque perspiciatis qui
              assumenda dolorem, sapiente tempora iste, veniam error quasi?
              Pariatur, non? Velit non quos minus excepturi, esse animi
              architecto recusandae obcaecati perspiciatis inventore eum.
              Voluptas quam eos nisi cum rerum. Voluptas exercitationem
              repellendus sequi iste asperiores beatae fugiat, ex libero
              blanditiis nam autem voluptates? Esse recusandae nisi ad delectus
              cum? Consequatur vitae fugit eligendi. Corrupti hic quos facere
              voluptates qui atque placeat vitae debitis ducimus, cupiditate,
              error eius aut quaerat corporis facilis modi illum impedit sed!
              Ad, quod debitis. Dolore quae officiis cum excepturi. At libero, a
              magnam nemo animi optio? Nihil, consequatur ad et delectus illo
              facilis architecto non at nesciunt quidem rem laboriosam quis
              velit fugiat aperiam expedita quam eaque cupiditate dolorem. Nihil
              eum libero consectetur. Nam, eveniet labore. Ad ex sapiente
              assumenda dolores deleniti possimus provident eos nisi maxime
              consectetur, illum dignissimos id minus autem, velit quaerat esse
              quis quas adipisci. Corrupti, ullam! Recusandae tenetur in magnam
              nostrum exercitationem ullam nulla aperiam quo. Itaque, laudantium
              rerum! Vero, temporibus ipsum omnis neque consectetur reiciendis!
              Sit placeat totam, ullam vitae soluta esse aliquam? Libero
              explicabo similique sequi excepturi? Deleniti alias distinctio
              nostrum dolorum ratione eum quibusdam animi dicta, vel sunt ipsa
              aperiam atque autem eaque architecto adipisci, ullam accusantium
              aliquid tempora excepturi pariatur. Magnam repellendus odit
              laborum sed officia nam reiciendis cumque, illum ipsa hic quasi ea
              distinctio dolores quos a placeat ratione eaque provident
              excepturi quod nostrum quis? Veniam eos dicta dolorem? Impedit
              commodi cupiditate sit velit ipsa minima quae totam vel natus enim
              quam, repellat alias. Quis distinctio laudantium, perferendis
              voluptatem labore eveniet cumque! Ut non facilis deleniti vel?
              Earum, tempora! Tenetur optio accusamus ad, quaerat voluptate
              deleniti similique quas nemo iusto, incidunt repudiandae, illum
              qui! Deserunt consectetur voluptatum esse quidem, tempora
              necessitatibus cum a sapiente dolorem consequatur soluta tenetur
              error? Cupiditate voluptate sequi aliquam suscipit dolores nisi
              odio nemo fuga. Necessitatibus quod officiis veniam incidunt
              suscipit aspernatur, impedit, eaque, repudiandae assumenda velit
              dolor cupiditate cumque ratione odio reiciendis! Id, laudantium?
              Ullam dolores hic, pariatur porro voluptas necessitatibus? Nulla
              quidem mollitia quo a sapiente suscipit aliquam omnis! Voluptate,
              laudantium, culpa tempora molestiae adipisci saepe eligendi,
              debitis optio nobis dolores quos asperiores?
            </div>
          </div>
        </div>

        {/* Main div for editor and op */}
        <div className="d-flex flex-column" id="main-ed-op-div">
          {/* Editor div */}
          <div
            style={{ height: "50%" }}
            className="editor-container"
            id="ed-div"
          >
            <div className="d-flex">
              <div className="d-inline-block editor-head pl-2 py-2">
                <h2 className="m-0 header">Editor</h2>
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

                <button
                  id="run-btn"
                  onClick={() => {
                    setLoader(<Loader />);
                  }}
                >
                  Run
                </button>
              </div>
            </div>
            <div>
              <div className="content-editor">
                <ControlledEditor
                  onChange={(e, v) => {
                    setCode(v);
                  }}
                  height={height1}
                  theme={theme}
                  language={lang}
                  loading="Loading..."
                  value={code}
                  width={width1}
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

          {/* Op div */}
          <div
            div
            style={{ height: "50%" }}
            className="op-container"
            id="op-div"
          >
            <div className="d-flex pl-2 header">
              <h2 className="mb-0 py-2 mr-auto">Output</h2>
              <button
                id="sub-btn"
                onClick={() => {
                  setLoader();
                }}
              >
                Submit
              </button>
            </div>
            <div
              className="px-2 inner-op-div"
              style={{
                height: `${height2}`,
                overflowY: "scroll",
              }}
            >
              {loader}
              <div className="row pl-4 py-2" style={{width: "100%"}}>
                <TestCase is_correct={true} />
                <TestCase is_correct={false} />
                <TestCase is_correct={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Re;
