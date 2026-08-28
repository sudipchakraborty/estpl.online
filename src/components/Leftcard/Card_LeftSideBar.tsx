import { useState } from "react";
import { menuConfig } from "../../config/menuConfig";
import { downloadFile, navigateTo } from "../../utils/navigation";
import "./Card_LeftSideBar.css";

export default function LeftSideBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <aside className="card" aria-label="Sidebar navigation">
      <p className="sidebar-heading">Navigation</p>
      <button className="sidebar-btn" onClick={() => navigateTo("/")}>
        <span>Home</span>
      </button>

      {menuConfig.map((menu) => menu.items.length ? (
        <div className="sidebar-menu-group" key={menu.title}>
          <button
            className="sidebar-btn"
            onClick={() => setOpenMenu((current) => current === menu.title ? null : menu.title)}
            aria-expanded={openMenu === menu.title}
          >
            <span>{menu.title}</span>
            <b aria-hidden="true">{openMenu === menu.title ? "−" : "+"}</b>
          </button>
          {openMenu === menu.title && (
            <div className="sidebar-submenu">
              {menu.items.map((item) => (
                <button
                  key={item.title}
                  className="sidebar-submenu-btn"
                  onClick={() => item.download
                    ? downloadFile(item.url, item.download)
                    : navigateTo(item.url)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <button
          className="sidebar-btn"
          key={menu.title}
          onClick={() => menu.url && navigateTo(menu.url)}
        >
          <span>{menu.title}</span>
        </button>
      ))}

      <button className="sidebar-btn" onClick={() => navigateTo("/contact")}>
        <span>Contact</span>
      </button>
    </aside>
  );
}
