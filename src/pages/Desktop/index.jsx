import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Input, Text, Heading } from "../../components";
import DesktopFooters from "../../components/DesktopFooters";
import DesktopNavbardesktop from "../../components/DesktopNavbardesktop";

export default function DesktopPage() {
  return (
    <>
      <Helmet>
        <title>Sachin's Application8</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-black-900_01 pb-[15px]">
        <div className="flex flex-col items-center">
          <header className="flex items-center justify-center self-stretch bg-gradient p-[11px]">
            <div className="flex gap-2 self-end sm:flex-col">
              <Text as="p" className="self-end !text-black-900_01">
                This page is included in a free SaaS Website Kit.
              </Text>
              <div className="flex items-center gap-1 self-start">
                <Text as="p" className="!text-black-900_01">
                  View the complete Kit
                </Text>
                <Img src="images/img_icons.svg" alt="icons_one" className="h-[16px] w-[16px] self-start" />
              </div>
            </div>
          </header>
          <div className="self-stretch">
            <DesktopNavbardesktop className="flex items-center justify-between gap-5 p-[15px]" />
            <div>
              <div className="relative h-[1505px] self-end">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
                  <div className="h-[730px] bg-gradient1" />
                  <Img
                    src="images/img_ellipse_2.png"
                    alt="image"
                    className="relative mt-[-175px] h-[1014px] w-full object-cover md:h-auto"
                  />
                </div>
                <div className="absolute left-0 right-0 top-[4%] m-auto flex w-full max-w-[947px] items-start md:relative md:flex-col md:p-5">
                  <div className="flex flex-1 items-center md:flex-col md:self-stretch">
                    <div className="relative z-[2] mb-[129px] h-[203px] w-[24%] self-end md:absolute md:w-full">
                      <Img
                        src="images/img_cursor_1.png"
                        alt="cursorone_one"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] w-[200px] object-cover md:bottom-[50px] md:right-[50px] md:opacity-0"
                      />
                      <Img
                        src="images/img_cursor_2.png"
                        alt="cursortwo_one"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] w-[200px] object-cover md:relative md:left-[-350px] md:top-[-px]"
                      />
                    </div>
                    <div className="relative ml-[-58px] flex flex-1 flex-col items-center gap-8 md:ml-0 md:self-stretch">
                      <div className="flex rounded-[10px] border border-solid border-gray-900 px-[13px]">
                        <div className="flex items-center gap-[7px]">
                          <Text size="xs" as="p" className="!font-inter tracking-[-0.33px] !text-white-A700_7f">
                            Version 2.0 is here
                          </Text>
                          <div className="flex gap-[5px] py-[7px]">
                            <a href="#">
                              <Text size="xs" as="p" className="!font-inter tracking-[-0.33px]">
                                Read more
                              </Text>
                            </a>
                            <Img
                              src="images/img_icons_white_a700.svg"
                              alt="icons_three"
                              className="h-[16px] w-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                      <Heading size="md" as="h1" className="text-center leading-[125px] tracking-[-12.38px]">
                        <>
                          One Task
                          <br />
                          at a Time
                        </>
                      </Heading>
                      <Text
                        size="lg"
                        as="p"
                        className="w-[71%] text-center !font-inter leading-[31px] tracking-[-0.79px] md:relative md:top-[50px] md:w-full sm:top-0.5"
                      >
                        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
                        efforts, and celebrate your successes.
                      </Text>
                      <Button
                        size="sm"
                        shape="round"
                        className="relative bottom-5 min-w-[125px] !rounded-tl-[10px] font-inter font-medium tracking-[-0.32px] md:bottom-[-90px] sm:bottom-5"
                      >
                        Get for free
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_message_2.png"
                    alt="messagetwo_one"
                    className="relative z-[1] ml-[-38px] mt-[115px] h-[200px] w-[200px] object-cover opacity-0 md:ml-0 md:w-full sm:relative sm:h-[2px]"
                  />
                </div>
                <Img
                  src="images/img_message_1.png"
                  alt="messageone_one"
                  className="absolute right-[210px] top-[11%] m-auto h-[200px] w-[200px] object-cover md:relative md:left-[390px] md:top-[-750px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center self-stretch p-5">
            <div className="relative bottom-[500px] mb-[23px] flex w-[88%] flex-col items-center gap-9 md:w-full">
              <Text as="p" className="!font-inter !text-gray-600_01 md:relative md:bottom-[200px] sm:bottom-[105px]">
                Trusted by the world’s most innovative teams
              </Text>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Img
                  src="images/img_acme_1.png"
                  alt="acmeone_one"
                  className="h-[32px] w-[14%] object-cover md:relative md:bottom-[150px] md:right-[250px] md:h-[50px] md:w-[300px] sm:left-[5px] sm:top-[550px] sm:w-full"
                />
                <Img
                  src="images/img_quantum_1.png"
                  alt="quantumone_one"
                  className="h-[32px] w-[12%] object-cover md:relative md:bottom-[220px] md:left-[50px] md:h-[50px] md:w-[200px] sm:left-[5px] sm:top-[230px] sm:w-full"
                />
                <Img
                  src="images/img_echo_1.png"
                  alt="echoone_one"
                  className="h-[28px] w-[16%] object-cover md:relative md:bottom-[200px] md:left-[200px] md:h-[50px] md:w-[500px] sm:bottom-40 sm:left-0.5 sm:w-full"
                />
                <Img
                  src="images/img_celestia_1.png"
                  alt="celestiaone_one"
                  className="h-[28px] w-[11%] object-cover md:relative md:bottom-[270px] md:right-[300px] md:h-[50px] md:w-[300px] sm:bottom-[30px] sm:left-[5px] sm:w-full"
                />
                <Img
                  src="images/img_pulse_1.png"
                  alt="pulseone_one"
                  className="h-[22px] w-[10%] object-cover md:relative md:bottom-[430px] md:left-[310px] md:h-[50px] md:w-[300px] sm:left-2.5 sm:top-[150px] sm:w-full"
                />
                <Img
                  src="images/img_apex_1.png"
                  alt="apexone_one"
                  className="h-[27px] w-[8%] object-cover md:relative md:bottom-[300px] md:h-[50px] md:w-[300px] sm:top-[300px] sm:w-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[120px] flex w-full max-w-[1112px] flex-col items-center gap-[66px] md:p-5 sm:gap-[33px]">
            <div className="flex w-[49%] flex-col items-center gap-[11px] md:w-full">
              <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
                Everything you need
              </Heading>
              <Text size="lg" as="p" className="text-center !font-inter leading-[31px] tracking-[-0.79px]">
                Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get
                reminders, and see your progress simply and quickly.
              </Text>
            </div>
            <div className="flex gap-4 self-stretch md:flex-col">
              <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5">
                <Button shape="round" className="mt-[19px] w-[56px]">
                  <Img src="images/img_icons_black_900_01.svg" />
                </Button>
                <div className="mb-[19px] flex flex-col items-center gap-[5px] self-stretch">
                  <Heading as="h3" className="text-center tracking-[-0.56px]">
                    Integration ecosystem
                  </Heading>
                  <Text size="md" as="p" className="text-center !font-inter leading-[23px] tracking-[-0.16px]">
                    Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one
                    place.
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5">
                <Button shape="round" className="mt-[19px] w-[56px]">
                  <Img src="images/img_icons_black_900_01.svg" />
                </Button>
                <div className="mb-[19px] flex flex-col items-center gap-[5px] self-stretch">
                  <Heading as="h4" className="text-center tracking-[-0.56px]">
                    Goal setting and tracking
                  </Heading>
                  <Text size="md" as="p" className="text-center !font-inter leading-[23px] tracking-[-0.16px]">
                    Define and track your goals, breaking down objectives into achievable tasks to keep your targets in
                    sight.
                  </Text>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-solid border-white-A700_33 bg-black-900 p-5">
                <Button shape="round" className="mt-[19px] w-[56px]">
                  <Img src="images/img_icons_black_900_01.svg" />
                </Button>
                <div className="mb-[19px] flex flex-col items-center gap-[5px] self-stretch">
                  <Heading as="h5" className="text-center tracking-[-0.56px]">
                    Secure data encryption
                  </Heading>
                  <Text size="md" as="p" className="text-center !font-inter leading-[23px] tracking-[-0.16px]">
                    With end-to-end encryption, your data is securely stored and protected from unauthorized access.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[120px] flex self-stretch p-[46px] md:p-5">
            <div className="mx-auto mb-[22px] mt-10 flex w-full max-w-[1092px] flex-col items-center gap-[60px] sm:gap-[30px]">
              <div className="flex w-[49%] flex-col items-center gap-[17px] md:w-full">
                <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
                  Intuitive interface
                </Heading>
                <Text size="lg" as="p" className="text-center !font-inter leading-[31px] tracking-[-0.79px]">
                  Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
                  efforts, and celebrate your successes, one task at a time.
                </Text>
              </div>
              <Img
                src="images/img_app_night.png"
                alt="appnight_one"
                className="h-[678px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[37px] self-stretch px-14 py-[76px] md:p-5">
            <Heading size="s" as="h2" className="text-center tracking-[-3.24px]">
              Frequently asked questions
            </Heading>
            <div className="mb-[107px] w-[62%] md:w-full">
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h3" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_one" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h4" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_two" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h5" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_three" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between gap-5 border-b border-solid border-white-A700_33 py-7 sm:py-5">
                <Heading as="h6" className="self-end tracking-[-0.56px]">
                  How does the pricing work for teams
                </Heading>
                <Img src="images/img_frame.svg" alt="image_four" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
          <footer className="self-stretch">
            <div className="pb-[15px]">
              <div className="flex items-start justify-center gap-[18px] p-2.5 md:flex-col">
                <Img
                  src="images/img_emojistar_1.png"
                  alt="image_five"
                  className="h-[263px] w-[263px] object-cover md:relative md:bottom-[50px] md:h-[280px] md:w-[300px] sm:w-full sm:opacity-0"
                />
                <div className="flex flex-1 flex-col items-center gap-10 md:self-stretch">
                  <div className="flex flex-col items-center gap-[15px] self-stretch px-[46px] md:px-5">
                    <Heading size="s" as="h1" className="text-center tracking-[-3.24px]">
                      Get instant access
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="text-center !font-inter leading-[23px] tracking-[-0.16px] !text-gray-400"
                    >
                      Celebrate the joy of accomplishment with an app designed to track your progress and motivate your
                      efforts.
                    </Text>
                  </div>
                  <div className="flex w-[76%] items-center gap-2.5 md:w-full sm:flex-col">
                    <Input shape="round" type="email" name="email" placeholder={`name@email.com`} className="sm:pr-5" />
                    <Button size="xs" shape="round" className="min-w-[113px] font-inter font-medium tracking-[-0.32px]">
                      Get access
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_helix2_1.png"
                  alt="helix2one_one"
                  className="mb-[33px] mt-[150px] h-[268px] w-[268px] object-cover md:relative md:bottom-[100px] md:left-[600px] md:w-[300px] sm:w-full"
                />
              </div>
            </div>
            <DesktopFooters className="flex items-center justify-between gap-5 border-t border-solid border-white-A700_33 p-5 sm:flex-col" />
          </footer>
        </div>
      </div>
    </>
  );
}
