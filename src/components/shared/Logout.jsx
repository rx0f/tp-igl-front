import axios from "axios";
import { GoogleLogout } from "react-google-login";
import { baseURL, CLIENT_ID } from "../../utils/environement";

export default function Logout() {
  const logout = () => {
    axios
      .post(`${baseURL}/logout`)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("confirmed");
        window.location.reload(false);
      })
      .catch(() => {});
  };

  return (
    <div>
      <GoogleLogout
        onLogoutSuccess={logout}
        clientId={CLIENT_ID}
        render={(renderProps) => (
          <button
            type="button"
            className="primary-btn-sm flex items-center gap-x-2 mx-auto md:m-0"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Logout
          </button>
        )}
      />
    </div>
  );
}
