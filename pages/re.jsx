import BaseLayout from "../components/base_layout";
import Split from "split.js";
import { useEffect } from "react";

const style = {
  height: "200px",
  border: "2px black solid",
  width: "200px",
};

const Re = () => {
  useEffect(() => {
    Split(["#prob-div", "#main-ed-op-div"], {
      gutterSize: 12,
      minSize: [50, 50, 50],
      cursor: "col-resize"
    });
    Split(["#ed-div", "#op-div"], {
      gutterSize: 12,
      minSize: [50, 50, 50],
      direction: "vertical",
      cursor: "row-resize"
    });
  }, []);

  return (
    <BaseLayout>
      <div className="d-flex main-editpage-div">
        <div className="d-flex flex-row">

          {/* Problem div */}
          <div className="bg-primary" style={{height: "600px", width: "40%"}} id="prob-div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam perferendis laborum sit aliquam atque sapiente eum ratione eos eius, ex quis explicabo sunt nobis nemo quasi, reiciendis obcaecati ipsa!
          </div>

          {/* Main div for editor and op */}
          <div className="d-flex flex-column" id="main-ed-op-div">
            {/* Editor div */}
            <div style={{height: "50%"}} className="bg-secondary" id="ed-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, expedita, ea, reprehenderit earum minima itaque voluptatibus iusto eum ducimus corporis tempore? Debitis eaque voluptates molestias. Voluptate accusamus voluptatibus pariatur aliquid.
            </div>

            {/* Op div */}
            <div div style={{height: "50%"}} className="bg-danger" id="op-div">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam tempore, fuga ab atque iusto delectus rerum magni earum recusandae cumque voluptas tenetur consectetur at illum et exercitationem. Modi, blanditiis iusto.</div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Re;
