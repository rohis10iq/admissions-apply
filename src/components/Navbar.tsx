import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
const pages = [
  "Home",
  "Undergraduate",
  "Graduate",
  "Short Courses",
  "Hostels",
  "Internships-Jobs",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt={"logo"} className="w-[35px] h-[35px]" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "auto" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={"ul"}
            sx={{ display: { xs: "none", lg: "flex", listStyleType: "disc" } }}
          >
            {pages.map((page) => (
              <Box component={"li"} mx={3}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    position: "relative",
                    left: -16,
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              </Box>
            ))}
          </Box>
          <Box>
            <Button>
              <div className="bg-[#2EC89C] text-white w-[36px] h-[36px] rounded-full flex justify-center items-center">
                <Search />
              </div>
            </Button>
            <IconButton>
              <Typography sx={{ mr: 1 }}>sign in</Typography>

              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.17 18.1051C17.0708 18.0909 16.9433 18.0909 16.83 18.1051C14.3367 18.0201 12.3533 15.9801 12.3533 13.4726C12.3533 10.9084 14.4217 8.82593 17 8.82593C19.5642 8.82593 21.6467 10.9084 21.6467 13.4726C21.6325 15.9801 19.6633 18.0201 17.17 18.1051Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.5483 27.455C24.0267 29.7641 20.6833 31.1666 17 31.1666C13.3167 31.1666 9.97333 29.7641 7.45166 27.455C7.59333 26.1233 8.44333 24.82 9.95916 23.8C13.8408 21.2216 20.1875 21.2216 24.0408 23.8C25.5567 24.82 26.4067 26.1233 26.5483 27.455Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 31.1666C24.824 31.1666 31.1666 24.824 31.1666 16.9999C31.1666 9.17588 24.824 2.83325 17 2.83325C9.17595 2.83325 2.83331 9.17588 2.83331 16.9999C2.83331 24.824 9.17595 31.1666 17 31.1666Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { sm: "block", lg: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <MenuItem key={`${page}-item`} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
