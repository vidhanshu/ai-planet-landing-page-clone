"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";

function Footer() {
  return (
    <Box
      sx={{
        boxShadow: "0px -1px 2px #ccc",
        p: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} spacing={6} justifyContent={"center"}>
          <Image src="/logo.svg" alt="logo" width={100} height={50} />
          <Box>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Learn
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Data Science & AI Courses
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Practice Data Science & AI Challenges
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Discussion forum
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Data Science & AI Live Sessions
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Getting Started
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Data Science
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Machine Learning
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Deep Learning
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Data Visualization 101
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                More
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Host AI & Machine Learning Challenges
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Blog
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Learner Stories
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Organization
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Contact Us
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  Social media
                </Typography>
                <Stack direction="row" spacing={3} mt={3}>
                  <Image
                    src="/social/insta.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/social/fb.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/social/linkedin.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/social/utube.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            width: "fit-content",
            margin: "4rem auto 0",
            color: "gray",
            fontSize: 12,
          }}
        >
          © 2023 AI Planet . Terms . Privacy
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
