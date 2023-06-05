"use client";

import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Image from "next/image";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledButton = styled(Button)({
  borderRadius: 10,
  padding: "6px 16px",
  textTransform: "capitalize",
});

function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="nav">
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        alignItems="center"
        sx={{
          bgcolor: "#4984e9",
          padding: 1,
        }}
      >
        <Typography
          color="white"
          sx={{
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Global AI HackFest 2023 is now live. Participate in the AI revolution.
        </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            borderRadius: 2,
            padding: "1px 16px",
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: 16,
            "&:hover": {
              borderColor: "#fff",
              color: "#4984e9",
              bgcolor: "#fff",
            },
          }}
        >
          Join Now
        </Button>
      </Stack>
      <Container>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction="row"
          sx={{
            padding: "0px 0",
            height: 70,
          }}
        >
          <Image src="/logo.svg" alt="logo" width={100} height={100} />

          <Stack direction="row" spacing={1.2}>
            <StyledButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Learn AI
              </Typography>
              {!open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </StyledButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Courses</MenuItem>
              <MenuItem onClick={handleClose}>Challenges</MenuItem>
              <MenuItem onClick={handleClose}>Notebooks</MenuItem>
              <MenuItem onClick={handleClose}>Live Sessions</MenuItem>
              <MenuItem onClick={handleClose}>Bootcamps</MenuItem>
              <MenuItem onClick={handleClose}>Learning Paths</MenuItem>
            </Menu>

            <StyledButton>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Marketplace
              </Typography>
            </StyledButton>
            <StyledButton>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Ai Planet For Teams
              </Typography>
            </StyledButton>
            <StyledButton>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                About us
              </Typography>
            </StyledButton>
            <StyledButton>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Wall Of Love ❤️
              </Typography>
            </StyledButton>
          </Stack>

          <Stack direction="row" spacing={1}>
            <StyledButton variant="outlined" sx={{ fontWeight: 500 }}>
              Login
            </StyledButton>
            <StyledButton variant="contained" sx={{ fontWeight: 500 }}>
              Join For Free
            </StyledButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Nav;
