import { AccountCircleOutlined } from "@mui/icons-material";
import {MenuItem, Popover, Typography } from "@mui/material";
import React, { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Handles opening the popover on click
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes the popover when the user clicks outside
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div className="flex justify-around items-center p-8">
        <h1 className="text-5xl font-black text-white cursor-pointer">
          Zing Bites
        </h1>
        <div
          className="text-lg cursor-pointer"
          onClick={handleClick} // This will toggle the popup on click
        >
          <AccountCircleOutlined sx={{ fontSize: 50, color: "gray" }} />
        </div>
      </div>

      {/* Popover (Dropdown Menu) */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="p-4 w-48">
          <Typography variant="h6" className="mb-2">Profile Options</Typography>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Orders</MenuItem>
          <MenuItem onClick={handleClose}>Cart</MenuItem>
          <MenuItem onClick={handleClose}>Sign In</MenuItem>
          <MenuItem onClick={handleClose}>Log Out</MenuItem>
        </div>
      </Popover>
    </>
  );
};

export default NavBar;
