import { useState } from "react";
import BaseLayout from "../../../../components/base_layout";
import axios from "axios";
import URL from "../../../../components/url";
import { useRouter } from "next/router";

const ResetPass = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  return (
    <BaseLayout>
        <div className="my-5">
          <div className="col-lg-3 mx-auto">
            <h3 className="mb-4">Reset Password</h3>
            <div className="mb-4">
              <input
                id="pass1"
                type="password"
                className="form-control form-control-md"
                placeholder="New Password > 8 chars"
              />
            </div>
            <div className="mb-4">
              <input
                id="pass2"
                type="password"
                className="form-control form-control-md"
                placeholder="Confirm New Password"
              />
            </div>
            <div>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {message}
              </p>
            </div>
            <div>
              <button
                className="btn btn-md btn-success"
                onClick={() => {
                  var pass1 = document.getElementById("pass1").value;
                  var pass2 = document.getElementById("pass2").value;
                  if (pass1.length >= 8 && pass1 === pass2) {
                    setMessage("Loading...");
                    var url = `${URL}${window.location["pathname"]}`;
                    axios
                      .post(url, {
                        pass: pass1,
                      })
                      .then((response) => {
                        setMessage(response["data"]["res"]);
                        setTimeout(() => {
                          router.push("/");
                        }, 2500);
                      });
                  } else {
                    setMessage("Check password");
                  }
                }}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )
    </BaseLayout>
  );
};

export default ResetPass;
