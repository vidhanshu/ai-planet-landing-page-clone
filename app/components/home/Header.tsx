"use client";

import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";

import Image from "next/image";

function Header() {
  return (
    <Box bgcolor={"#012b3b"}>
      <Container sx={{ py: 8 }}>
        <Stack spacing={4}>
          <Box
            sx={{
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 500,
                color: "white",
              }}
            >
              Ecosystem educating and building
            </Typography>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 500,
                color: "#fae9b4",
              }}
            >
              AI for everyone
            </Typography>
          </Box>

          <Stack direction="row" justifyContent={"center"} spacing={3}>
            <Card
              sx={{
                padding: "2rem",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "400px",
              }}
            >
              <Image
                src="/learn-practice-ai.svg"
                alt="ai"
                width={40}
                height={40}
                style={{
                  borderRadius: "100%",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mt: "1rem",
                }}
              >
                Learn and practice AI
              </Typography>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "gray",
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Empowers individuals and companies with AI education through
                community and learning resources from experts.
              </p>

              <Button
                variant="contained"
                sx={{
                  textTransform: "Capitalize",
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                Start Learning Now
              </Button>
            </Card>
            <Card
              sx={{
                padding: "2rem",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "400px",
              }}
            >
              <Image
                src="/ai-market.svg"
                alt="ai"
                width={40}
                height={40}
                style={{
                  borderRadius: "100%",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mt: "1rem",
                }}
              >
                AI Marketplace
              </Typography>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "gray",
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Empowers any software with ready-to-use and customizable AI
                solutions built by the best data scientists worldwide.
              </p>

              <Button
                variant="outlined"
                sx={{
                  textTransform: "Capitalize",
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                Explore Ai Solutions
              </Button>
            </Card>
          </Stack>

          <p
            style={{
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              marginTop: 50,
            }}
          >
            Trusted by 300K+ community members from leading organizations at
          </p>

          <Image
            width={1000}
            height={100}
            alt="trustedby"
            src="/trustedby-desktop.svg"
            style={{
              margin: "2rem auto 0px",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
