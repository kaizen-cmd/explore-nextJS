import { ControlledEditor } from "@monaco-editor/react";
import { useState, useEffect } from "react";
import Loader from "../common/loader";
import TestCase from "../editor/testcasebox";
import axios from "axios";
import URL, { referer } from "../url";
import { loggedIn } from "../../pages/_app";

const Editor = (props) => {
  const [lang, setLang] = useState("python");
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState("");
  const [loader, setLoader] = useState("");
  const [tc, setTc] = useState("You can only submit once! Be careful");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios
        .get(props.psUrl, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          const ps_obj = response["data"];
          ps_obj.lang === "" ? setLang("python") : setLang(ps_obj.lang);
          setCode(ps_obj.partial_sol);
          if (ps_obj.disable !== "") {
            setDisabled("disabled");
            setTc("You have already submitted the solution for this question.");
          }
        });
    }
  }, [loggedIn]);
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
            <div
              className="content px-2"
              style={{
                wordBreak: "break-word",
              }}
            >
              <h4 className="mt-2">{props.ps.title}</h4>
              {props.ps.statement}
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
                        props.psUrl,
                        sendcode,
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
                <button
                  id="sub-btn"
                  disabled={disabled}
                  onClick={() => {
                    if (localStorage.getItem("token")) {
                      setLoader(<Loader />);
                      axios
                        .post(
                          props.psUrl,
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
            </div>
            <div className="content-op px-2 pt-1 pb-0">
              {loader}
              {tc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
