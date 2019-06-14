import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Navigation: React.FC = () => {
  const [value, setValue] = useState("recents");
  const dispatch = useDispatch();

  const handleChange = (event: any, value: string) => {
    setValue(value);
    dispatch(push("/" + value));
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className="nav">
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<Icon>folder</Icon>}
      />
    </BottomNavigation>
  );
};

export default Navigation;
