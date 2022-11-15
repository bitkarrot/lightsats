import { Tweet } from "react-twitter-widgets";

import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Card,
  Grid,
  Image,
  Loading,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Alert } from "components/Alert";
import { Icon } from "components/Icon";
import { NextLink } from "components/NextLink";
import { NewTipButton } from "components/tipper/NewTipButton";
import { Tips } from "components/tipper/Tips";
import { UserCard } from "components/UserCard";
import { useUser } from "hooks/useUser";
import { Routes } from "lib/Routes";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import ClaimedPage from "pages/journey/claimed";
import CountUp from "react-countup";
const Home: NextPage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const { data: user } = useUser();

  if (sessionStatus === "loading" || (session && !user)) {
    return <Loading color="currentColor" size="sm" />;
  }

  return (
    <>
      <Head>
        <title>Lightsats⚡</title>
      </Head>

      {session && user ? (
        <>
          {user?.userType === "tipper" && (
            <>
              <Alert>⚠️ This project is currently in BETA.</Alert>
            </>
          )}
          <Spacer />
          {user?.userType === "tipper" ? (
            <>
              <UserCard userId={user.id} />
              <Spacer />
              <NewTipButton />
              <Spacer />
              <Tips />
            </>
          ) : (
            <TippeeHomepage />
          )}
        </>
      ) : (
        <>
          <Spacer />
          <Image alt="" src="images/orange-pill.png" width={250} />
          <Spacer />
          <Text
            h1
            css={{
              textGradient: "45deg, #ff9400 -20%, #ffcf00 50%",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Orange pill the world around you.
          </Text>
          <Text h1 size="$4xl">
            One tip at a time.
          </Text>
          <Spacer />
          <NextLink href={Routes.login} passHref>
            <a>
              <Button color="primary" size="lg">
                Create your first tip &raquo;
              </Button>
            </a>
          </NextLink>

          <Spacer y={3} />

          <Text b small transform="uppercase">
            Why lightsats?
          </Text>
          <Spacer />
          <Grid.Container sm={10} justify="center">
            <Card>
              <Card.Body>
                <Grid.Container gap={2}>
                  <Grid
                    sm={12}
                    md={4}
                    css={{
                      fg: 1,
                      jc: "flex-start",
                      ai: "center",
                      flexDirection: "column",
                      ta: "center",
                    }}
                  >
                    <Icon width={64} height={64}>
                      <HeartIcon />
                    </Icon>
                    <Text h3>Gift sats...</Text>
                    <Text>
                      ...without losing them. If your tippee doesn't claim their
                      tip, those precious sats return to you.
                    </Text>
                  </Grid>
                  <Grid
                    sm={12}
                    md={4}
                    css={{
                      jc: "flex-start",
                      ai: "center",
                      flexDirection: "column",
                      ta: "center",
                      fg: 1,
                    }}
                  >
                    <Icon width={64} height={64}>
                      <AcademicCapIcon />
                    </Icon>
                    <Text h3>Progress tracker</Text>
                    <Text>
                      Follow your tippees along their journey into the rabbit
                      hole. Be there for them when they have questions.
                    </Text>
                  </Grid>
                  <Grid
                    sm={12}
                    md={4}
                    css={{
                      jc: "flex-start",
                      ai: "center",
                      flexDirection: "column",
                      ta: "center",
                      fg: 1,
                    }}
                  >
                    <Icon width={64} height={64}>
                      <ArrowTrendingUpIcon />
                    </Icon>
                    <Text h3>Onboarding is on us</Text>
                    <Text>
                      Educational content, email series and guides on how to use
                      bitcoin. So you can focus on stacking.
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid.Container>

          <Spacer></Spacer>

          {/* <Grid sm={12} md={4}>
              <div style={{ textAlign: "center" }}>
                <Icon width={64} height={64}>
                  <ArrowTrendingUpIcon />
                </Icon>
                <Text h3>Bitcoin only</Text>
                <Text>
                  Content that is curated by real bitcoiners. No shitcoins
                  included, ever.
                </Text>
              </div>
            </Grid>
            <Grid sm={12} md={4}>
              <div style={{ textAlign: "center" }}>
                <Icon width={64} height={64}>
                  <ArrowTrendingUpIcon />
                </Icon>
                <Text h3>🔨 PoW included</Text>
                <Text>
                  Your tipees have to go through proper onboarding and install
                  their own wallet to withdraw their tips.
                </Text>
              </div>
              </Grid> 
          </Grid.Container> */}

          <Spacer y={5} />

          <div style={{ textAlign: "center" }}>
            <Text small b transform="uppercase">
              WITH LIGHTSATS
            </Text>
            <Spacer />
            <Text
              size="$8xl"
              b
              css={{
                textGradient: "45deg, #ff9400 -20%, #ffcf00 50%",
                lineHeight: "$xs",
              }}
            >
              <CountUp
                start={0}
                useEasing={true}
                enableScrollSpy
                scrollSpyDelay={1000}
                scrollSpyOnce
                separator=","
                end={123456}
                suffix=" sats"
                duration={2}
              ></CountUp>
            </Text>
            <Spacer />
            <Text small b transform="uppercase">
              have been tipped to date.
            </Text>
            <Text h3></Text>
          </div>

          <Spacer y={5} />

          {/* <div style={{ textAlign: "center" }}>
            <Row justify="center">
              <Text h2>Make tipping fun again 👇</Text>
            </Row>
            <Grid.Container gap={2}>
              <Grid xs={12} sm={6}>
                <Card
                  variant="flat"
                  css={{
                    background: "$gradient",
                    color: "$white",
                    width: "400px",
                    height: "250px",
                    maxWidth: "100%",
                  }}
                >
                  <Card.Body>
                    <Row align="center">
                      <Avatar />
                      &nbsp;&nbsp;
                      <Text b color="$white">
                        Satoshi Nakamoto
                      </Text>
                    </Row>
                    <Text
                      h1
                      size={64}
                      color="$white"
                      style={{
                        display: "flex",
                        alignSelf: "center",
                      }}
                    >
                      $20.00
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={12} sm={6}>
                <Col>
                  <Text h4>💰 Create a new tip and fund it</Text>
                  <Text>test</Text>
                </Col>
              </Grid>
            </Grid.Container>
          </div> */}
          <Spacer y={5} />
          <Text h3>🧡 What others have to say say about Lightsats</Text>
          <Grid.Container gap={2} sm={8}>
            <Grid xs={12} sm={4}>
              <Tweet
                tweetId="1591901975649869824"
                options={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <Tweet
                tweetId="1591901975649869824"
                options={{ width: "100%" }}
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <Tweet
                tweetId="1591901975649869824"
                options={{ width: "100%" }}
              />
            </Grid>
          </Grid.Container>
          <Spacer y={5} />
          <Text
            h1
            size="$8xl"
            css={{
              textGradient: "45deg, #ff9400 -20%, #ffcf00 50%",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Join the tipping battle
          </Text>
          <Spacer />
          <Avatar.Group count={123}>
            <Avatar
              size="xl"
              text="name"
              stacked
              src="https://pbs.twimg.com/profile_images/558632546398134274/LpoJ5y4L_400x400.jpeg"
            />
            <Avatar
              size="xl"
              text="name"
              stacked
              src="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200&default=mm&rating=g"
            />
            <Avatar
              size="xl"
              text="name"
              stacked
              src="https://pbs.twimg.com/profile_images/1476767205689724932/NZUSZUTd_400x400.jpg"
            />
          </Avatar.Group>
          <Spacer y={0.25} />
          <Text>
            Join{" "}
            <a
              href="https://twitter.com/juangb87"
              target="_blank"
              rel="noopener noreferrer"
            >
              Juan
            </a>
            ,{" "}
            <a
              href="https://twitter.com/_reneaaron"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rene
            </a>
            ,{" "}
            <a
              href="https://twitter.com/rolznz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Roland
            </a>{" "}
            and <a>123 others</a> and 🍊💊 the world around you.
          </Text>
          <Spacer y={2} />
          <Button color="primary" size="lg">
            Create your first tip &raquo;
          </Button>
          <Spacer y={5} />
        </>
      )}
    </>
  );
};

export default Home;

function TippeeHomepage() {
  const session = useSession();
  const { data: tips } = useSWR<Tip[]>(
    session ? `/api/tippee/tips` : null,
    defaultFetcher
  );
  const claimedTips = React.useMemo(
    () =>
      tips?.filter((tip) => tip.status === "CLAIMED" && !hasTipExpired(tip)),
    [tips]
  );

  return claimedTips?.length ? (
    <ClaimedPage />
  ) : (
    <>
      <Text>{"It looks like you don't have any tips right now."}</Text>
    </>
  );
}
