import "./widgetSm.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <h3 className="widgetLgTitle">New join member</h3>

      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Profile</th>
          <th className="widgetLgTh">ID</th>
          <th className="widgetLgTh">Username</th>
          <th className="widgetLgTh">Email</th>
        </tr>
        {users.map((user) => (
        <tr className="widgetLgTr">
                 <th className="widgetLgTh"><img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            /></th>
          <th className="widgetLgTh">{user._id}</th>
          <th className="widgetLgTh">{user.username}</th>
          <th className="widgetLgTh">{user.email}</th>   
        </tr>
         ))}
      </table>
    </div>
  );
}


