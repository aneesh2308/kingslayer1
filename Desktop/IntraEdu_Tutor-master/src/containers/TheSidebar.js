import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from "@coreui/react";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      style={
        {
          // backgroundColor: "darkblue",
        }
      }
      onShowChange={(val) =>
        dispatch({ type: "toggleSidebar", sidebarShow: val })
      }
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CImg
          src={"avatars/logo.jpeg"}
          className="c-sidebar-brand-full"
          style={{
            borderRadius: 50,
            padding: 5,
          }}
          height={100}
          alt="company-logo"
        />
        <CImg
          className="c-sidebar-brand-minimized"
          src={"avatars/logo.jpeg"}
          height={35}
          alt="company-logo"
        /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
