import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
// import { COUNTRIES } from "../Contstants";

function Sidebar({ history }) {
  const [menu, setMenu] = useState([
    {
      name: "Dashboard",
      hasSub: false,
      active: true,
      icon: `images/icon-dashboard.png`,
      sub: [],
      link: "/dashboard",
    },
    {
      name: "Users",
      hasSub: false,
      active: false,
      icon: `images/icon-user.png`,
      sub_open: false,
      link: "/users",
      sub: [],
    },
    {
      name: "Shipments",
      hasSub: false,
      active: false,
      icon: `images/icon-shipments.png`,
      sub: [],
      link: "/shipments",
    },
    // {
    //   name: "Shipment Rates",
    //   hasSub: false,
    //   active: false,
    //   icon: `images/icon-rates.png`,
    //   sub: [],
    //   link: "/shipment-rates",
    // },
    {
      name: "Discount Codes",
      hasSub: false,
      active: false,
      icon: `images/icon-discount.png`,
      sub: [],
      link: "/promocodes",
    },

    // {
    //   name: "CMS (HomePage)",
    //   hasSub: false,
    //   active: false,
    //   icon: `images/icon-cms.png`,
    //   sub: [],
    //   link: "/contact-form-management/logs",
    // },

    {
      name: "NEWSLETTER SUBSCRITPION",
      hasSub: false,
      active: false,
      icon: `images/icon-newsletter.png`,

      link: "/newsletter",
    },
    // {
    //   name: "Queries",
    //   hasSub: false,
    //   active: false,
    //   icon: `images/icon-queries.png`,
    //   link: "/blog-management/logs",
    // },
  ]);

  const handleToggleSubMenu = (index) => {
    const _menu = [...menu];
    _menu[index].sub_open = !_menu[index].sub_open;
    setMenu(_menu);
  };

  const handleActiveMenu = (index) => {
    const _menu = [...menu];
    _menu?.forEach((men, i) => {
      if (i !== index) men.active = false;
      else men.active = true;
    });
    setMenu(_menu);
  };

  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion"
      data-scroll-to-active="true"
    >
      <div
        className="main-menu-content ps-container ps-theme-dark ps-active-y"
        data-ps-id="56a3f474-30b4-6817-7925-ddd8af3645a5"
      >
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          {menu?.map((menu_item, index) => (
            <li
              className={`nav-item ${menu_item?.hasSub ? "has-sub" : ""} ${
                menu_item?.sub_open ? "open" : ""
              } ${menu_item?.active ? "active" : ""}`}
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  if (menu_item.hasSub) handleToggleSubMenu(index);
                  else {
                    handleActiveMenu(index);
                    history.push(menu_item?.link);
                  }
                }}
              >
                <img src={menu_item?.icon} alt="" className="img-fluid mr-1" />
                {/* <i className={menu_item?.icon} /> */}
                <span className="menu-title" data-i18n>
                  {menu_item?.name}
                </span>
              </Link>
              {menu_item?.hasSub && (
                <ul className="menu-content">
                  {menu_item?.sub?.map((sub) => (
                    <li>
                      <Link
                        className="menu-item"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(sub?.link);
                        }}
                      >
                        {sub?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          className="ps-scrollbar-x-rail"
          style={{ left: "0px", bottom: "3px" }}
        >
          <div
            className="ps-scrollbar-x"
            tabIndex={0}
            style={{ left: "0px", width: "0px" }}
          />
        </div>
        <div
          className="ps-scrollbar-y-rail"
          style={{ top: "0px", height: "474px", right: "3px" }}
        >
          <div
            className="ps-scrollbar-y"
            tabIndex={0}
            style={{ top: "0px", height: "420px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Sidebar);
