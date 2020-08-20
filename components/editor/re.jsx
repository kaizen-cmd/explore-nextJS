import Split from "split.js";
import { useEffect, useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import Loader from "../common/loader";
import TestCase from "../editor/testcasebox";
import axios from "axios";
import URL, { referer } from "../url";
import { loggedIn } from "../../pages/_app";

const Re = (props) => {
  const [lang, setLang] = useState("python");
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [code, setCode] = useState("");
  const [loader, setLoader] = useState("");
  const [height1, setHeight1] = useState("250px");
  const [width1, setWidth1] = useState("");
  const [height2, setHeight2] = useState("243px");
  const [disabled, setDisabled] = useState("");
  const [tc, setTc] = useState("You can only submit once! Be careful");
  const [renderEditor, setRenderEditor] = useState(<Loader />);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(URL + "/codeportal/ps-detail/" + props.ps.pk + "/", {
          headers: {
            Authorization: localStorage.getItem("token"),
            Referer: referer,
          },
        })
        .then((response) => {
          const ps_obj = response["data"];
          ps_obj.lang === "" ? setLang("python") : setLang(ps_obj.lang);
          setCode(ps_obj.partial_sol);
          if (ps_obj.disable !== "") {
            setDisabled("disabled");
            setTc(
              "Either you've submitted once or this is a practice question"
            );
          }
        });
    }
    setRenderEditor(
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
    );
  }, [loggedIn]);
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
            <div
              className="px-2 inner-prob-container"
              style={{
                wordBreak: "break-word",
              }}
            >
              <h1
                style={{
                  fontSize: "1.7rem",
                  marginTop: "10px",
                  marginBottom: "0px",
                }}
              >
                {props.ps.title}
              </h1>
              {props.ps.statement}
              <div style={{ visibility: "hidden" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                facere praesentium, saepe cumque similique dignissimos officia
                perferendis voluptas quo nobis cupiditate. Sunt expedita ullam
                labore at
              </div>
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
                    var sendcode = {
                      lang: lang,
                      is_partial: true,
                      partial_sol: code,
                      cmd: "Run Code",
                      code: code,
                    };
                    axios
                      .post(
                        URL + "/codeportal/ps-detail/" + props.ps.pk + "/",
                        sendcode,
                        {
                          headers: {
                            Referer: referer,
                          },
                        }
                      )
                      .then((response) => {
                        var res = response["data"];
                        setLoader(<></>);
                        var tc_no = 0;
                        var tcs = res.map((tc) => {
                          tc_no++;
                          return (
                            <TestCase
                              key={tc_no}
                              is_correct={tc[1]}
                              sr_no={tc_no}
                              op={tc[0]}
                              ip={tc[2]}
                              exip={tc[3]}
                            ></TestCase>
                          );
                        });
                        setTc(tcs);
                      });
                  }}
                >
                  Run
                </button>
              </div>
            </div>
            <div>
              <div className="content-editor">{renderEditor}</div>
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
                  if (localStorage.getItem("token")) {
                    setLoader(<Loader />);
                    axios
                      .post(
                        URL + "/codeportal/ps-detail/" + props.ps.pk + "/",
                        {
                          lang: lang,
                          is_partial: false,
                          partial_sol: code,
                          cmd: "Submit Code",
                          code: code,
                        },
                        {
                          headers: {
                            Authorization: localStorage.getItem("token"),
                            Referer: referer,
                          },
                        }
                      )
                      .then((response) => {
                        var res = response["data"];
                        setLoader(<></>);
                        setTc(res.res);
                        setDisabled("disabled");
                      });
                  } else {
                    document.getElementById("login-btn").click();
                  }
                }}
                disabled={disabled}
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
              <div
                className="row pl-4 py-2"
                style={{ width: "100%", wordBreak: "break-word" }}
              >
                {tc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Re;
